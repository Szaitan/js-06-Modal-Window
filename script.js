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

// how it suppose to be done with affecting the style.

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

// for (let i = 0; i < btnsOpenModal.length; i++) {
//   btnsOpenModal[i].addEventListener('click', function () {
//     modal.style.display = 'block';
//     overlay.style.display = 'block';
//   });
// }

// btnCloseModal.addEventListener('click', function () {
//   modal.style.display = '';
//   overlay.style.display = '';
// });

// How it should be done with affecting the classes of element aka using classlist

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
}

function addHiddenfun() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

btnCloseModal.addEventListener('click', addHiddenfun);
overlay.addEventListener('click', addHiddenfun);

// AddEvent for specific button
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    console.log(e.key);
    addHiddenfun();
  }
});
