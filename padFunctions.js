function pad(str, char, count, isStart) {
    if (typeof str !== 'string' || typeof char !== 'string' || typeof count !== 'number' || typeof isStart !== 'boolean') {
        return 'Invalid input. Please provide valid arguments.';
    }

    const length = str.length;

    if (count <= length) {
        return str;
    }

    const padCount = count - length;
    const padString = char.repeat(padCount);

    return isStart ? padString + str : str + padString;
}

// Пример использования:
const result = pad('qwerty', '+', 10, true);
console.log(result);