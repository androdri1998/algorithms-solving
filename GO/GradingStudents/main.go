package main

import "fmt"

func solution(grades []int32) []int32 {
	var multipleResult int32 = 0
	multiples := make(map[int32]int32)
	for index := 0; index <= 100; index++ {
		indexConverted := int32(index)
		multiples[indexConverted] = multipleResult

		if indexConverted == multipleResult {
			multipleResult += 5
		}
	}

	for index, value := range grades {
		if value < 38 {
			continue
		}

		diff := multiples[value] - value
		if diff < 3 {
			grades[index] = multiples[value]
			continue
		}
	}

	return grades
}

func main() {
	fmt.Println(solution([]int32{20, 39, 52, 64}))
	// output: [20 40 52 65]
}
