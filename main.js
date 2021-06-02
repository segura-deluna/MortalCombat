const player1 = {
  name: 'Scorpion',
  class: 'player1',
  hp: 50,
  img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
  weapon: ['knife', 'huge', 'pole'],
  attack: function () {
    console.log('Scorpion' + 'Fight...');
  },
};

const player2 = {
  name: 'Zubzero',
  class: 'player2',
  hp: 80,
  img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
  weapon: ['knife', 'huge', 'pole'],
  attack: function () {
    console.log('Zubzero' + 'Fight...');
  },
};

function createPlayer(player, name, life) {
  const $life = document.createElement('div');
  $life.classList.add('life');
  $life.style.width = player.hp;

  const $name = document.createElement('div');
  $name.classList.add('name');
  $name.innerText = player.name;

  const $progressbar = document.createElement('div');
  $progressbar.classList.add('progressbar');

  $progressbar.appendChild($life);
  $progressbar.appendChild($name);

  const $img = document.createElement('img');
  $img.classList.add('img');
  $img.src = player.img;

  const $character = document.createElement('div');
  $character.classList.add('character');
  $character.appendChild($img);

  const $player = document.createElement('div');
  $player.classList.add(player.class);

  $player.appendChild($progressbar);
  $player.appendChild($character);

  const $arenas = document.querySelector('.arenas');
  $arenas.appendChild($player);
}
createPlayer(player1, player1.name, player1.hp);
createPlayer(player2, player2.name, player2.hp);
