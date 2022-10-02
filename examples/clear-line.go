package main

import (
	"os"
)

func main() {
	const ESC = 0x1b
	const CSI = '['
	CLEAR_LINE := []byte{ESC, CSI, '2', 'K'}
	MOVE_TO_START_OF_LINE := []byte{ESC, CSI, 'G'}
	os.Stdout.WriteString("Hello world!")  // Hello World!
	os.Stdout.Write(CLEAR_LINE)            // Clear line
	os.Stdout.Write(MOVE_TO_START_OF_LINE) // Move cursor to start of line
	os.Stdout.WriteString("🧑")             // 🧑
	// You should only see the emoji 🧑 printed out
}
