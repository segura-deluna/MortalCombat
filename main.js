const $arenas = document.querySelector('.arenas');

const player1 = {
  player: 1,
  name: 'Scorpion',
  hp: 50,
  img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
  weapon: ['knife', 'huge', 'pole'],
  attack: function () {
    console.log('Scorpion' + 'Fight...');
  },
};

const player2 = {
  player: 2,
  name: 'Zubzero',
  hp: 80,
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

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));
