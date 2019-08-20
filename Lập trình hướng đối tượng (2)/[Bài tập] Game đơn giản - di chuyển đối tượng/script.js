/**
 * Created by nhatnk on 4/26/17.
 */

function Hero(image, top, left, size) {
  this.image = image;
  this.top = top;
  this.left = left;
  this.size = size;

  this.getHeroElement = function () {
    return '<img width="' + this.size + '"' +
      ' height="' + this.size + '"' +
      ' src="' + this.image + '"' +
      ' style="top: ' + this.top + 'px; left:' + this.left + 'px;position:absolute;" />';
  }

  this.moveRight = function () {
    this.left += 50;
    console.log('ok: ' + this.left);
  }

  this.moveUp = function () {
    this.top += 50;
    console.log('ok: ' + this.top);
  }

}

var hero = new Hero('nobita.jpg', 20, 30, 200);

function right() {
  if (hero.left < window.innerWidth - hero.size) {
    hero.moveRight();
  }
  document.getElementById('game').innerHTML = hero.getHeroElement();
  setTimeout(right, 500)
}

right();

function up() {
  if (hero.top < window.innerWidth - hero.size) {
    hero.moveUp();
  }
  document.getElementById('game').innerHTML = hero.getHeroElement();
  setTimeout(up, 500)
}

up();