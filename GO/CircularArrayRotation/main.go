package main

import "fmt"

func circularArrayRotation(a []int32, k int32, queries []int32) []int32 {
	var answers []int32
	for index := 0; index < len(queries); index++ {
		queryIndex := queries[index]
		lenA := int32(len(a))
		mod := k % lenA
		futureValueIndex := (queryIndex - mod) + lenA
		if futureValueIndex >= lenA {
			futureValueIndex = futureValueIndex - lenA
		}

		answers = append(answers, a[futureValueIndex])
	}

	return answers
}

func main() {
	var mainArray []int32 = []int32{1, 2, 3}
	var queries []int32 = []int32{0, 1, 2}
	rotation := 2

	answers := circularArrayRotation(mainArray, int32(rotation), queries)
	fmt.Println(answers)
}
