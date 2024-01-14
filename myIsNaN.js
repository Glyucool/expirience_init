function myIsNaN(value) {
    // Проверим, является ли value NaN с использованием isNaN
    if (isNaN(value)) {
      return true;
    }
  
    // Дополнительная проверка с использованием Number.isNaN
    return (typeof value === 'number' && Number.isNaN(value));
  }
  
  // Примеры использования
  console.log(myIsNaN(NaN));   // true
  console.log(myIsNaN(""));    // false
  console.log(myIsNaN("abc"));  // true
  console.log(myIsNaN("123"));  // false
  console.log(myIsNaN(123));    // false
  console.log(myIsNaN(true));   // true