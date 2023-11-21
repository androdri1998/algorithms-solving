package main

import "fmt"

func solution(ar []int32) int32 {
	var sum int32 = 0
	for _, value := range ar {
		sum += value
	}

	return sum
}

func main() {
	result := solution([]int32{1, 2, 3, 4, 5})

	fmt.Println(result)
	// output: 15
}
