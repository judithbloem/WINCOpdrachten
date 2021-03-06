console.log("W2D3-5");

const superheroes = [
  {
    name: "Batman",
    publisher: "DC Comics",
    alter_ego: "Bruce Wayne",
    first_appearance: "Detective Comics #27",
    weight: "210"
  },
  {
    name: "Superman",
    publisher: "DC Comics",
    alter_ego: "Kal-El",
    first_appearance: "Action Comics #1",
    weight: "220"
  },
  {
    name: "Flash",
    publisher: "DC Comics",
    alter_ego: "Jay Garrick",
    first_appearance: "Flash Comics #1",
    weight: "195"
  },
  {
    name: "Green Lantern",
    publisher: "DC Comics",
    alter_ego: "Alan Scott",
    first_appearance: "All-American Comics #16",
    weight: "186"
  },
  {
    name: "Green Arrow",
    publisher: "DC Comics",
    alter_ego: "Oliver Queen",
    first_appearance: "All-American Comics #16",
    weight: "195"
  },
  {
    name: "Wonder Woman",
    publisher: "DC Comics",
    alter_ego: "Princess Diana",
    first_appearance: "The Incredible Hulk #180",
    weight: "165"
  },
  {
    name: "Blue Beetle",
    publisher: "DC Comics",
    alter_ego: "Dan Garret",
    first_appearance: "Mystery Men Comics #1",
    weight: "145"
  },
  {
    name: "Spider Man",
    publisher: "Marvel Comics",
    alter_ego: "Peter Parker",
    first_appearance: "Amazing Fantasy #15",
    weight: "167"
  },
  {
    name: "Captain America",
    publisher: "Marvel Comics",
    alter_ego: "Steve Rogers",
    first_appearance: "Captain America Comics #1",
    weight: "220"
  },
  {
    name: "Iron Man",
    publisher: "Marvel Comics",
    alter_ego: "Tony Stark",
    first_appearance: "Tales of Suspense #39",
    weight: "250"
  },
  {
    name: "Thor",
    publisher: "Marvel Comics",
    alter_ego: "Thor Odinson",
    first_appearance: "Journey into Myster #83",
    weight: "200"
  },
  {
    name: "Hulk",
    publisher: "Marvel Comics",
    alter_ego: "Bruce Banner",
    first_appearance: "The Incredible Hulk #1",
    weight: "1400"
  },
  {
    name: "Wolverine",
    publisher: "Marvel Comics",
    alter_ego: "James Howlett",
    first_appearance: "The Incredible Hulk #180",
    weight: "200"
  },
  {
    name: "Daredevil",
    publisher: "Marvel Comics",
    alter_ego: "Matthew Michael Murdock",
    first_appearance: "Daredevil #1",
    weight: "200"
  },
  {
    name: "Silver Surfer",
    publisher: "Marvel Comics",
    alter_ego: "Norrin Radd",
    first_appearance: "The Fantastic Four #48",
    weight: "unknown"
  }
];

//Deel 1: array vanalle superhelden namen
// console.log("Dit zijn alle namen:", superheroes.name);

// const superheroesNames = superheroes.map(hero => hero.name);
// console.log(superheroesNames)

//Deel 2: array van alle 'lichte' superhelden (<190 pounds)

// const superheroesLightWeight = superheroes.filter(hero => (hero.weight < 190));
// //hoe krijg ik nu alleen de namen terug?  ...   return superheroes.name
// console.log(superheroesLightWeight);

//oplossing Ruben
//const lightSuperHero = superheroes.filter((name) => name.weight < 190)
//console.log(lightSuperHero);

//Deel 3;
// const superheroes200 = superheroes.filter(hero => (hero.weight == 200));
// //hoe krijg ik nu alleen de namen terug?  ...
// const superheroes200Names = superheroes200.map(hero => hero.name);
// console.log(superheroes200Names);

// //oplossing WINC
// const heavySuperHeroNames = superheroes
//   .filter(hero => hero.weight == 200)
//   .map(hero => hero.name);
// console.log(heavySuperHeroNames);

//Deel 4:
// const firstAppSuperHero = superheroes.map(hero => hero.first_appearance)

// console.log("First appearance", firstAppSuperHero);

//Deel 5:
const DCComics = superheroes.filter(hero => hero.publisher === "DC Comics");
const marvelComics = superheroes.filter(
  hero => hero.publisher === "Marvel Comics"
);
//console.log("DC Comics:", DCComics, "Marvel Comics:", marvelComics);

//Deel 6:
const addedWeightDC = DCComics.map(hero => {
  return hero.weight !== "unknown" ? parseInt(hero.weight, 10) : 0;
}).reduce((weight1, weight2) => weight1 + weight2);
console.log("Total weight of DC Comics: ", addedWeightDC);

//Deel 7:
const addedWeightMC = marvelComics
  .map(hero => {
    return hero.weight !== "unknown" ? parseInt(hero.weight, 10) : 0;
  })
  .reduce((weight1, weight2) => weight1 + weight2);
console.log("Total weight of Marvel Comics: ", addedWeightMC);

//Deel 8:

// const allHeroes = superheroes.map(hero => {
//   const weight = hero.weight !== "unknown" ? parseInt(hero.weight) : 0;
//   hero.weight = weight;
//   return hero;
// });
// const heaviestHero = allHeroes.reduce((currentHeaviestHero, currentHero) => {
//   if (currentHeaviestHero.weight > currentHero.weight) {
//     return currentHeaviestHero;
//   } else {
//     return currentHero;
//   }
// }, allHeroes[0]);

// //console.log(allHeroes);
// console.log("heaviest hero: ", heaviestHero);
