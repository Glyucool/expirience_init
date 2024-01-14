// Функция для рисования прямоугольного треугольника
function drawTriangle(height, symbol) {
    for (let i = 1; i <= height; i++) {
        let row = '';
        for (let j = 0; j < i; j++) {
            row += symbol;
        }
        console.log(row);
    }
}

// Первый способ: Треугольник из звездочек
drawTriangle(5, '*');

// Разделитель между двумя способами
console.log('\n----------------\n');

// Второй способ: Треугольник из плюсиков
drawTriangle(5, '+');