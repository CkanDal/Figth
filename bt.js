const capitalize = (text) => {
  const firstChar = text[0].toUpperCase();
  const restSubstring = text.slice(1);
  return `${firstChar}${restSubstring}`;
};

if (capitalize('hexlet') !== 'Hexlet') { // Если результат функции не равен ожидаемому значению
  // Выбрасываем исключение и завершаем выполнение теста
  throw new Error('Функция работает неверно!');
}







