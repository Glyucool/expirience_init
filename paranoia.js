var arr = [
    {
        userName: "Test",
        lastName: "Test",
        email: "test.test@gmail.com"
    },
    {
        userName: "Dmitro",
        lastName: "Porohov",
        email: "dmitro.porohov@yahoo.com"
    },
    {
        userName: "Andrii",
        lastName: "",
        email: "andrii@mail.ru" // Нам такі не підходять
    },
];

// Регулярний вираз для перевірки email адреси
var emailRegex = /^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*@(gmail\.com|yahoo\.com)$/;

// Фільтруємо адреси за вказаним регулярним виразом
var trustedEmails = arr
    .filter(function (item) {
        return emailRegex.test(item.email);
    })
    .map(function (item) {
        return item.email;
    });

console.log(trustedEmails);