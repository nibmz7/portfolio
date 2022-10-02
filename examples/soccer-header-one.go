package main

import (
	"os"
	"time"
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
	const ESC = 0x1b
	const CSI = '['
	CLEAR_LINE := []byte{ESC, CSI, '2', 'K'}
	MOVE_TO_START_OF_LINE := []byte{ESC, CSI, 'G'}
	// https://github.com/sindresorhus/cli-spinners/blob/main/spinners.json
	LOADING_FRAMES := [][]byte{
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
	i := 0
	frames_size := len(LOADING_FRAMES)
	for {
		os.Stdout.Write(concatCopyPreAllocate([][]byte{CLEAR_LINE, LOADING_FRAMES[i], MOVE_TO_START_OF_LINE}))
		i = (i + 1) % frames_size
		time.Sleep(60 * time.Millisecond)
	}
}
