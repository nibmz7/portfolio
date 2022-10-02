package main

import (
	"os"
)

func main() {
	const LF = 0x0a
	messageOne := []byte{0x48, 0x65, 0x6c, 0x6c, 0x6f, 0x20, 0x57, 0x6f, 0x72, 0x6c, 0x64, 0x21, LF}
	messageTwo := []byte{0xF0, 0x9F, 0xA7, 0x91, LF} // utf-8 code units for 🧑
	messageThree := []byte("🧑")
	os.Stdout.Write(messageOne)   // Hello World!\\n
	os.Stdout.Write(messageTwo)   // 🧑\\n
	os.Stdout.Write(messageThree) // 🧑
}
