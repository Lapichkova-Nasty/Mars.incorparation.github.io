async function fetchCurrencyRates() {
    const apiUrl =
    "https://belarusbank.by/api/kursExchange?city=Минск";
    try {
    // Отправляем запрос на сервер
    const response = await fetch(apiUrl);
    // Проверяем, успешно ли выполнен запрос
    if (!response.ok) {
    throw new Error(`Ошибка: ${response.status}`);
    }
    // Парсим JSON-ответ
const data = await response.json();
// Выводим данные в консоль
console.log("Курсы валют в Миснке:");
data.forEach((rate) => {
console.log(`Покупка: ${rate.USD_in}`);
console.log(`Продажа: ${rate.USD_out}`);
console.log(`Отделение: ${rate.filials_text}`);
console.log("---");
});
} catch (error) {
// Обработка ошибок
console.error("Ошибка загрузки данных:", error);
}
}
fetchCurrencyRates();