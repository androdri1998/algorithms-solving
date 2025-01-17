package main

import "fmt"

func breakingRecords(scores []int32) []int32 {
	var max, min, amountMin, amountMax int32

	for index, score := range scores {
		if index == 0 {
			min = score
			max = score
			continue
		}

		if score < min {
			min = score
			amountMin++
		}

		if score > max {
			max = score
			amountMax++
		}
	}

	results := []int32{amountMax, amountMin}
	return results
}

func main() {
	result := breakingRecords([]int32{10, 5, 20, 20, 4, 5, 2, 25, 1})
	fmt.Println(result)
}
