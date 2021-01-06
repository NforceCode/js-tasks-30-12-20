'use strict';

// Даны числа 4, -2, 5, 19, -130, 0, 10. Найдите минимальное и максимальное число.

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

let arr = [12, 15, 20, 25, 59, 79];

function calcArithmeticMean (array) {
  let total = 0;
  for (let i =0 ; i < array.length; i++) {
    total += array[i];
  }
  return total / array.length;
}

let res = calcArithmeticMean(arr);
console.log(arr);

// =========(Math.random)==========
// Выведите на экран случайное целое число от 1 до 100.


function randomNumber() {
  return Math.ceil(Math.random() * 100);
}

// Заполните массив 10-ю случайными целыми числами. 

function generateRandomNumbers (){
  
  const array = [];
  for (let i = 0; i< 10; i++) {

    let number = randomNumber();
    
    // отрицательные числа приделал
    const operator = Math.random();
    if (operator  > 0.5) {
      number = -number;
    }
    array.push(number);
  }

  return array;
}

// Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе

let arr1 = [1, 2, 3];
let arr2 = [4,5,6];
let arr3 = arr1.concat(arr1);
console.log(arr3);

// Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].

arr1 = [1, 2 ,3];
arr2 = arr1.reverse();
console.log(arr2);

// Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.

arr1 = [1,2,3];
arr1.push(4,5,6);
console.log(arr1);

// Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.

arr1 = [1,2,3];
arr1.unshift(4,5,6);
console.log(arr1);

//Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент и удалите его.

arr1 = ['js', 'css', 'jq'];
console.log(arr1.shift());


//Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент.

arr1 = ['js', 'css', 'jq'];
console.log(arr1.pop());


//Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].

arr1 = [1, 2, 3, 4, 5];
arr2 = arr1.slice(0,3);
console.log(arr2);

// Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].

arr1 = [1, 2, 3, 4, 5];
arr2 = arr1.slice(3);
console.log(arr2);

// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].

arr1 = [1, 2, 3, 4, 5];
arr1.splice(1,2);
console.log(arr1);

// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].

arr1 = [1,2,3,4,5];
arr2 = arr1.splice(1,3);
console.log(arr2);

// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].



// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].

arr1 = [1,2,3,4,5];
arr1.splice(1,0,'a','b');
arr1.splice(5,0,'c');
arr1.splice(7,0,'e');
console.log(arr1);

// необходимо создать функцию hasElem, которая параметрами будет принимать массив и строку, и возвращать true, если строка есть в массиве, и false - если нет

function hasElem(arr, str) {

  for (let i = 0; i < arr.length; i++) {
    
    if(arr[i] === str){
      return true;
    }    
  }
  return false;
}

let testArr = ['test', 1, 2 ,3 , '4'];
let testString = 'test';
let result = hasElem(testArr, testString);
console.log(result);

// Дан массив с числами. Проверьте, что в этом массиве есть указанное число. Если есть - вернуть true, а если нет - вернуть false.

testArr = ['test', 1, 2 ,3 , '4'];
let testNum = 2;
result = hasElem(testArr, testNum);
console.log(result);

// Дан массив с числами. Проверьте, есть ли в нем два одинаковых числа подряд. Если есть -  вернуть true, а если нет - вернуть false.

function hasSameNeighboringNumbers (arr) {

  for(let i = 0; i < arr.length - 1; i++) {
    if(arr[i] === arr[i+1] && typeof arr[i] === 'number') {
      return true;
    }
  }
  return false;
}

testArr = [1,2,3,4,5,8,7,9,'7',7];
result = hasSameNeighboringNumbers(testArr);
console.log(result);