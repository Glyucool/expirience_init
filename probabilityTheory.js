function checkProbabilityTheory(count) {
    if (typeof count !== 'number' || count <= 0) {
        console.log('Invalid input. Please provide a valid count.');
        return;
    }

    let generatedNumbers = [];
    let evenCount = 0;
    let oddCount = 0;

    for (let i = 0; i < count; i++) {
        const randomNumber = Math.floor(Math.random() * (1000 - 100 + 1) + 100);
        generatedNumbers.push(randomNumber);

        if (randomNumber % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }

    const totalNumbers = generatedNumbers.length;
    const evenPercentage = (evenCount / totalNumbers) * 100;
    const oddPercentage = (oddCount / totalNumbers) * 100;

    console.log(`Кількість згенерованих чисел: ${totalNumbers}`);
    console.log(`Парних чисел: ${evenCount}`);
    console.log(`Не парних чисел: ${oddCount}`);
    console.log(`Відсоток парних до не парних: ${evenPercentage.toFixed(2)}% : ${oddPercentage.toFixed(2)}%`);
}

// Пример использования:
checkProbabilityTheory(100);