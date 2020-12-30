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

const arr = [12, 15, 20, 25, 59, 79];

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

// Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе

const arr1_1 = [1, 2, 3];
const arr1_2 = [4,5,6];

const arr1_3 = arr1_1.concat(arr1_2);

// Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].

const arr2_1 = [1, 2 ,3];

const arr2_2 = arr2_1.reverse();

// Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.

const arr3_1 = [1,2,3];

arr3_1.push(4,5,6);

// Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.

const arr4 = [1,2,3];

arr4.unshift(4,5,6);

//Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент и удалите его.

const arr5 = ['js', 'css', 'jq'];

console.log(arr5.shift());


//Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент.

const arr6 = ['js', 'css', 'jq'];

console.log(arr6.pop());


//Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].

const arr7 = [1, 2, 3, 4, 5];

const arr7_1 = arr7.slice(0,3);
console.log(arr7_1);

// Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].

const arr8 = [1, 2, 3, 4, 5];
const arr8_1 = arr8.slice(3);
console.log(arr8_1);

// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].

let arr9 = [1, 2, 3, 4, 5];

arr9.splice(1,2);

// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].
// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].
// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
