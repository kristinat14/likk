const randomNumber = Math.floor(Math.random() * 100) + 1; 
console.log(randomNumber)
// Случайное число
const resultDiv = document.getElementById('result');

document.getElementById('submit').onclick = function() {
  const userGuess = Number(document.getElementById('guess').value);
// Получаем число от пользователя

  if (userGuess === randomNumber) {
    resultDiv.textContent = "Поздравляем! Вы угадали число!";}
  else if (userGuess < randomNumber) {
    resultDiv.textContent = "Слишком маленькое число. Попробуйте снова.";}
  else {
    resultDiv.textContent = "Слишком большое число. Попробуйте снова.";}
}

