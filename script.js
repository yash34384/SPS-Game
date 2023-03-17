// common name 
const option = document.querySelectorAll('#icon');
const insert_section = document.querySelector('.section-3');
const mine_score = document.querySelector('.score-1');
const comp_score = document.querySelector('.score-2');
const palyer_1 = document.querySelector('.player-name');
const winner = document.querySelector('.win-person');
const one_win = document.querySelector('.win-window');
const two_win = document.querySelector('.name-win');
const cancel = document.querySelector('#cross');
// end of common name

// taking name of player
const First_name = prompt('Enter your name');
if (First_name == '') {
  alert('Have to provide name');
  window.close();
}
else {
  palyer_1.textContent = First_name;
}
// end of taking name of player 

// updating score
let i = 0;
let j = 0;
const update = function (i, j) {
  mine_score.textContent = i;
  comp_score.textContent = j;
  if (i == 5) {
    winner.textContent = `${First_name} WIN`;
    one_win.classList.remove('hidden');
    two_win.classList.remove('hidden');
    console.log('trigger');
  }
  if (j == 5) {
    winner.textContent = `COMPUTER WIN`;
    one_win.classList.remove('hidden');
    two_win.classList.remove('hidden');
    console.log('trigger');
  }
}
update(i, j);
// end of updating score 

// adding to html 
const show = function (mine, comp) {
  let para = `<div class="game">
  <i class="${mine}" id="game-icon"></i>
  <i class="${comp}" id="game-icon"></i>
  </div>`;
  insert_section.insertAdjacentHTML('afterbegin', para);
}
// end of adding to html 

// selecting of option by player and comp 
option.forEach(el => {
  el.addEventListener('click', function () {
    const random = Math.trunc(Math.random() * 3);
    show(el.className, option[random].className);
    win(el.className, option[random].className);
  });
});
// end of selecting of option by player and comp


// cases of win or loss
const win = function (choose1, choose2) {
  if (choose1 == 'fas fa-hand-rock') {
    if (choose2 == 'fas fa-hand-rock') {
      console.log('tie');
      update(i, j);
    }
    if (choose2 == 'fas fa-hand-paper') {
      console.log('computer win');
      update(i, ++j);
    }
    if (choose2 == 'fas fa-hand-scissors') {
      console.log('person win');
      update(++i, j);
    }
  }
  if (choose1 == 'fas fa-hand-paper') {
    if (choose2 == 'fas fa-hand-rock') {
      console.log('person win');
      update(++i, j);
    }
    if (choose2 == 'fas fa-hand-paper') {
      console.log('tie');
      update(i, j);
    }
    if (choose2 == 'fas fa-hand-scissors') {
      console.log('computer win');
      update(i, ++j);
    }
  }
  if (choose1 == 'fas fa-hand-scissors') {
    if (choose2 == 'fas fa-hand-rock') {
      console.log('computer win');
      update(i, ++j);
    }
    if (choose2 == 'fas fa-hand-paper') {
      console.log('person win');
      update(++i, j);
    }
    if (choose2 == 'fas fa-hand-scissors') {
      console.log('tie');
      update(i, j);
    }
  }
}
// end of cases of win or loss

// reloading page
cancel.addEventListener('click', function () {
  window.location.reload(true);
});
// end of reloading page