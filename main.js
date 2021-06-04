const $arenas = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button');

const player1 = {
  player: 1,
  name: 'Scorpion',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
  weapon: ['knife', 'huge', 'pole'],
  attack: function () {
    console.log('Scorpion' + 'Fight...');
  },
};

const player2 = {
  player: 2,
  name: 'Zubzero',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
  weapon: ['knife', 'huge', 'pole'],
  attack: function () {
    console.log('Zubzero' + 'Fight...');
  },
};

function createElement(tag, className) {
  const $tag = document.createElement(tag);
  if (className) {
    $tag.classList.add(className);
  }
  return $tag;
}

function createPlayer(player) {
  const $life = createElement('div', 'life');
  const $name = createElement('div', 'name');
  const $progressbar = createElement('div', 'progressbar');
  const $img = createElement('img');
  const $character = createElement('div', 'character');
  const $player = createElement('div', 'player' + player.player);

  $life.style.width = player.hp + '%';
  $name.innerText = player.name;
  $progressbar.appendChild($life);
  $progressbar.appendChild($name);
  $img.src = player.img;
  $character.appendChild($img);
  $player.appendChild($progressbar);
  $player.appendChild($character);
  return $player;
}

function changeHP(player) {
  const $playerLife = document.querySelector('.player' + player.player + ' .life');
  player.hp -= Math.ceil(Math.random() * 20);
  $playerLife.style.width = player.hp + '%';

  if (player.hp <= 0) {
    player.hp = 0;
    $arenas.appendChild(playerLose(player.name));
    $randomButton.disabled = true;
  }
}

function playerLose(name) {
  const $loseTitle = createElement('div', 'loseTitle');
  $loseTitle.innerText = name + ' lose';
  return $loseTitle;
}

$randomButton.addEventListener('click', () => {
  changeHP(player1);
  changeHP(player2);
  console.log(player1);
  console.log(player2);
});

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));
