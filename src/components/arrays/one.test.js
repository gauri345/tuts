import { assert, expect, test } from 'vitest'

const maximumFinder = function(listOfNumbers) {

    if (listOfNumbers.length <= 0) {
        return "List cannot be empty.";
    }

    let largest = 0;
    listOfNumbers.forEach(number => {
       if (largest < number) {
           largest = number;
       }
    });

    return largest;
}

test('will find the largest value in an array', () => {

    // Given
    const listOne = [1, 3, 5, 7, 68, 200, 3, 6, 456];


    // When
    const actual = maximumFinder(listOne);

    // Then
    expect(actual).toBe(456);


    // Given
    const listTwo = [1, 3654, 5, 35, 1000, 456];

    // When
    const actualTwo = maximumFinder(listTwo);

    // Then
    expect(actualTwo).toBe(3654);

    const emptyList = [];
    const maximum  = maximumFinder(emptyList);
    expect(maximum).toBe("List cannot be empty.");

});

