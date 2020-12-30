'use strict';

// Даны числа 4, -2, 5, 19, -130, 0, 10. Найдите минимальное и максимальное число.
// Дан массив arr. Найдите среднее арифметическое его элементов. Проверьте задачу на массиве с элементами 12, 15, 20, 25, 59, 79.

function findMinMax() {
  return [getMin(arguments), getMax(arguments)];
}

function getMin(array) {
  let min = array[0];
    for (let i = 0; i < array.length; i++) {
    if(array[i] < min) {
      min = array[i];
    }
  }
  return min;
}

function getMax(array) {
  let max = array[0];
    for (let i = 0; i < array.length; i++) {
    if(array[i] > max) {
      max = array[i];
    }
  }
  return max;
}
// Дан массив arr. Найдите среднее арифметическое его элементов. Проверьте задачу на массиве с элементами 12, 15, 20, 25, 59, 79.

const arr2 = [12, 15, 20, 25, 59, 79];

function calcArithmeticMean (array) {
  let total = 0;
  for (let i =0 ; i < array.length; i++) {
    total += array[i];
  }
  return total / array.length;
}

// =========(Math.random)==========
// Выведите на экран случайное целое число от 1 до 100.


function randomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

// Заполните массив 10-ю случайными целыми числами. 

function generateRandomNumbers (){
  
  const array = [];
  for (let i = 0; i< 10; i++) {

    let number = randomNumber();
    
    // отрицательные числа приделал
    const operator = Math.round(Math.random() * 2);
    if (operator === 2) {
      number = -number;
    }
    array.push(number);
  }

  return array;
}