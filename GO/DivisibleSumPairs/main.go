package main

import "fmt"

func divisibleSumPairs(_ int32, k int32, ar []int32) int32 {
	amountPairs := 0

	for i := 0; i < len(ar); i++ {
		for j := 0; j < len(ar); j++ {
			currvalue := ar[i] + ar[j]
			mod := currvalue % k

			if mod == 0 && i < j {
				amountPairs++
			}
		}
	}

	return int32(amountPairs)
}

func main() {
	fmt.Println(divisibleSumPairs(6, 3, []int32{1, 3, 2, 6, 1, 2}))
}
