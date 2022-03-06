import {expect, test} from 'vitest';

/*
Write a function which will take list of numbers as input and return a list with their multiples of input.
Also write a unit test to validate the working of the function
 */

function multiply(listOfNumbers, multiplier) {
    if(isNaN(multiplier)) {
        return 'multiplier must be a number'
    }
    try {
        if (Array.isArray(listOfNumbers)) {
            return listOfNumbers.map(number => {
                if (!isNaN(number)) {
                    return number * multiplier;
                } else {
                    throw 'Input array must be array of numbers.';
                }
            });
        } else {
            return 'Input must be a list.'
        }

    } catch (error) {
        // do what's need to be done when error occurs.
        return error;
    }
}

test('will multiply item in a list nby provided multiplier.', () => {
    //given
    const listOfNumbers = [5, 7, 8];
    const multiplier = 6;
    //when
    const actual = multiply(listOfNumbers, multiplier);
    //then
    expect(actual).toEqual([30, 42, 48]);

    const emptyList = [];
    const list = multiply(emptyList,multiplier);
    expect(list).toEqual([]);
});

test("will handle erroneous input.", () => {
    // when a single number is provided instead of list. (Must be a list)
    //given
    const inputList = 10;
    const multiplier = 4;
    //when
    const actual = multiply(inputList, multiplier)

    //then

    expect(actual).toBe('Input must be a list.')

    // when a list of string is provided instead of list of numbers (Must be a list of numbers).
    //given
    const stringList = ['gauri', 'pawane','Bhattarai'];
    //when
    const exact = multiply(stringList,4)

    //then

    expect(exact).toBe('Input array must be array of numbers.')


    // the multiplier is not a number (Multiplier must be a number.).
    //given
    const numberList = [5, 7];
    const stringMultipply = 'gauri';
//when
    const actual2= multiply(numberList, stringMultipply);
    //then
    expect(actual2).toBe('multiplier must be a number')
});