'use strict';

// document.querySelectorAll('.show-modal').forEach(button => {
//   button.addEventListener('click', function () {
//     document.querySelector('.modal').style.display = 'block';
//     document.querySelector('.overlay').style.display = 'block';
//   });
// });

// document.querySelector('.close-modal').addEventListener('click', function () {
//   document.querySelector('.hidden').style.display = 'none';
//   document.querySelector('.overlay').style.display = 'none';
// });

// how it suppose to be done

const modal = document.querySelector('.show-modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
