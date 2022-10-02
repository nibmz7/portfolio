// go:build darwin || linux

// https://gist.github.com/EddieIvan01/4449b64fc1eb597ffc2f317cfa7cc70c
// An article describing what is being done - https://viewsourcecode.org/snaptoken/kilo/02.enteringRawMode.html
// Nodejs equivalent - https://nodejs.org/api/tty.html#readstreamsetrawmodemode

package main

import (
	"os"
	"syscall"
	"unsafe"
)

func GetTermios(fd uintptr) *syscall.Termios {
	var t syscall.Termios
	_, _, err := syscall.Syscall6(
		syscall.SYS_IOCTL,
		os.Stdin.Fd(),
		syscall.TIOCGETA,
		uintptr(unsafe.Pointer(&t)),
		0, 0, 0)

	if err != 0 {
		panic("err")
	}

	return &t
}

func SetTermios(fd uintptr, term *syscall.Termios) {
	_, _, err := syscall.Syscall6(
		syscall.SYS_IOCTL,
		os.Stdin.Fd(),
		syscall.TIOCSETA,
		uintptr(unsafe.Pointer(term)),
		0, 0, 0)
	if err != 0 {
		panic("err")
	}
}

func SetRaw(term *syscall.Termios) {
	// This attempts to replicate the behaviour documented for cfmakeraw in
	// the termios(3) manpage.
	term.Iflag &^= syscall.IGNBRK | syscall.BRKINT | syscall.PARMRK | syscall.ISTRIP | syscall.INLCR | syscall.IGNCR | syscall.ICRNL | syscall.IXON
	// newState.Oflag &^= syscall.OPOST
	term.Lflag &^= syscall.ECHO | syscall.ECHONL | syscall.ICANON | syscall.ISIG | syscall.IEXTEN
	term.Cflag &^= syscall.CSIZE | syscall.PARENB
	term.Cflag |= syscall.CS8

	term.Cc[syscall.VMIN] = 1
	term.Cc[syscall.VTIME] = 0
}

// Example usage
func main() {
	t := GetTermios(os.Stdin.Fd())

	// Was confused when I saw this at first but found out assignment creates a new copy of the struct
	// https://stackoverflow.com/questions/38443348/does-dereferencing-a-struct-return-a-new-copy-of-struct
	origin := *t
	defer func() {
		SetTermios(os.Stdin.Fd(), &origin)
	}()

	SetRaw(t)
	SetTermios(os.Stdin.Fd(), t)

	for i := 0; i < 3; i++ {
		buf := make([]byte, 1)
		syscall.Read(0, buf)
		println(buf[0])
	}
}
