package main

import (
	"os"
	"os/signal"
	"syscall"
	"time"
)

const (
	ESC = 0x1b
	CSI = '['
)

var (
	CLEAR_LINE            = []byte{ESC, CSI, '2', 'K'}
	MOVE_TO_START_OF_LINE = []byte{ESC, CSI, 'G'}
	HIDE_CURSOR           = []byte{ESC, CSI, '?', '2', '5', 'l'}
	SHOW_CURSOR           = []byte{ESC, CSI, '?', '2', '5', 'h'}
	// https://github.com/sindresorhus/cli-spinners/blob/main/spinners.json
	LOADING_FRAMES = [][]byte{
		[]byte(" 🧑⚽️       🧑 "),
		[]byte("🧑  ⚽️      🧑 "),
		[]byte("🧑   ⚽️     🧑 "),
		[]byte("🧑    ⚽️    🧑 "),
		[]byte("🧑     ⚽️   🧑 "),
		[]byte("🧑      ⚽️  🧑 "),
		[]byte("🧑       ⚽️🧑  "),
		[]byte("🧑      ⚽️  🧑 "),
		[]byte("🧑     ⚽️   🧑 "),
		[]byte("🧑    ⚽️    🧑 "),
		[]byte("🧑   ⚽️     🧑 "),
		[]byte("🧑  ⚽️      🧑 "),
	}
)

// https://stackoverflow.com/questions/37884361/concat-multiple-slices-in-golang
func concatCopyPreAllocate(slices [][]byte) []byte {
	var totalLen int
	for _, s := range slices {
		totalLen += len(s)
	}
	tmp := make([]byte, totalLen)
	var i int
	for _, s := range slices {
		i += copy(tmp[i:], s)
	}
	return tmp
}

func main() {
	c := make(chan os.Signal)
	signal.Notify(c, os.Interrupt, syscall.SIGTERM)
	go func() {
		<-c
		os.Stdout.Write(concatCopyPreAllocate([][]byte{CLEAR_LINE, MOVE_TO_START_OF_LINE, SHOW_CURSOR}))
		os.Exit(0)
	}()

	i := 0
	frames_size := len(LOADING_FRAMES)
	os.Stdout.Write(HIDE_CURSOR)
	for {
		os.Stdout.Write(concatCopyPreAllocate([][]byte{CLEAR_LINE, LOADING_FRAMES[i], MOVE_TO_START_OF_LINE}))
		i = (i + 1) % frames_size
		time.Sleep(60 * time.Millisecond)
	}
}
