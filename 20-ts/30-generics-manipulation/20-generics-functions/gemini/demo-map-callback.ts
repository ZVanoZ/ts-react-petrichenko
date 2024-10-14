// https://g.co/gemini/share/22c7153435d4
function map<T, U>(
    array: T[],
    callback: (item: T) => U
): U[] {
    return array.map(callback);
}

// Примеры использования:
const numbers = [1, 2, 3];
const doubledNumbers = map(numbers, (num) => num * 2); // [2, 4, 6]

const strings = ['hello', 'world'];
const lengths = map(strings, (str) => str.length); // [5, 5]


console.log('lengths', lengths);