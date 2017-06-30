"use strict";

let heroList = require('../data/heroes1.json');

class Heroes {
  constructor( ){
    this.heroes = [];
  }

  addHero(hero){
    this.heroes.push({ name: hero.name , pub: hero.publisher });
  }

  listAll(){
    let i = 0;
    console.log('\nHeroes\n-----------------');
    for(let hero of this.heroes){
      console.log(i++ +'. ' + hero.name);
    }
    if(i === 0){
      console.log('sorry, there are no heroes');
    }
  }
}

class Hero {

  constructor( name ){
    this.name = name;
  }

  addPublisher( publisher ) {
    this.publisher = publisher;
  }

  stringIt(){
    return 'name: ' + this.name + ' - publisher: ' + this.publisher;
  }

  getInfo () {
    return this.stringIt();
  }
}

let allHeroes = new Heroes();

let heroes = [];

for( let hero of heroList ) {
  let h = new Hero(hero.hero);
  h.addPublisher(hero.pub);
  console.log('adding ', h.getInfo());
  allHeroes.addHero(h);
}

allHeroes.listAll();
