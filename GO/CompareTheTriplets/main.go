package main

import "fmt"

func main() {
	firstSlice := []int32{1, 2, 3}
	secondSlice := []int32{4, 2, 2}

	result := solution(firstSlice, secondSlice)

	fmt.Println(result)
}

func solution(a []int32, b []int32) []int32 {
	firstSlice := 0
	secondSlice := 0

	for index, value := range a {
		if value == b[index] {
			continue
		}

		if value > b[index] {
			firstSlice++
			continue
		}

		secondSlice++
		continue
	}

	result := []int32{int32(firstSlice), int32(secondSlice)}

	return result
}
