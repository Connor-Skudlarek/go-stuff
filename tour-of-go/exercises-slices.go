
package main

import (
	"golang.org/x/tour/pic"
)

func Pic(dx, dy int) [][]uint8 {
	z := make([][]uint8, dy)
	for i := range dy {
		z[i] = make([]uint8, dx)
		for j := range dx {
			z[i][j] = uint8(i^(j^i-i^j) + j^(i^j-j^i) + i^(i^j - j^i) + j^(j^i - i^j))
		}
	}
	return z
}

func main() {
	pic.Show(Pic)
}
