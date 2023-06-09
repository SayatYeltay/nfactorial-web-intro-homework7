//Встроенная функция `setTimeout` использует колбэк-функции. Создайте альтернативу, использующую промисы.
//Функция `delay(ms)` должна возвращать промис, который перейдёт в состояние «выполнен» через `ms` миллисекунд, так чтобы мы могли добавить к нему `.then`:
function delay(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    });
  }
  
  delay(3000).then(() => alert('выполнилось через 3 секунды'));

// Что выведет код ниже?
// let promise = new Promise(function(resolve, reject) {
//     resolve(1);
  
//     setTimeout(() => resolve(2), 1000);
//   });
  
//   promise.then(alert);
Вывод будет: 1. Все последующие вызовы – игнорируются, т.к. вызов идет через одну then.

// Являются ли фрагменты кода ниже эквивалентными? Другими словами, ведут ли они себя одинаково во всех обстоятельствах, для всех переданных им обработчиков?
// promise.then(f1).catch(f2);
// Против:
// promise.then(f1, f2);

Разница в блоке catch. В случае выявлении ошибки во втором кейсе - ошибка не будет обработана, т.к. отсутствует атрибут catch.