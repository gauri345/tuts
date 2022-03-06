import { assert, expect, test } from 'vitest'

const minimumFinder = function(listOfNumbers) {
    if(listOfNumbers.length<=0){
        return'List cannot be empty.';
    }

    let smallest = listOfNumbers[0];
    listOfNumbers.forEach(number => {
        if (smallest>number) {
            smallest = number;
        }
    });

    return smallest;
}

test('will find the smallest value in an array', () => {
    // Given
    const listOne = [1, 3, 5, 7, 68, 200, 3, 6, 456];


    // When
    const actual = minimumFinder(listOne);

    // Then
    expect(actual).toBe(1);


    // Given
    const listTwo = [3654, 5, 35, 1000, 456];

    // When
    const actualTwo = minimumFinder(listTwo);

    // Then
    expect(actualTwo).toBe(5);

    const emptyList =[];
    const minimum= minimumFinder(emptyList);
    expect(minimum).toBe("List cannot be empty.");


});

