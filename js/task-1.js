//* З використанням властивостей і методів DOM-елементів, напиши скрипт, який:

//* Порахує й виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного елемента li.item у списку ul#categories знайде й виведе в консоль текст заголовка елемента (тегу <h2>) і кількість елементів у категорії (усіх <li>, вкладених у нього).

const listOfCategories = document.querySelector('#categories');
const category = listOfCategories.querySelectorAll('.item');
const nameCategory = category.firstElementChild;
console.log(category.length);
console.log(nameCategory);
