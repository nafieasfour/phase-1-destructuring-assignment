const farmAnimals = 'cow horse sheep pig chicken';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

// Strings

// 1. Use destructuring to assign appropriate variables based on the sounds animals make.

// 2. Bolt the horse wandered off, so just give us four animals, and let's name them bessie, dolly, babe, and little.

// 3. Little the chicken had to go back to the coop, so now we're left with three. Let's use color variables of blackAndWhite, black, and pink.

// Arrays

// 4. Use destructuring to assign appropriate variables using the color names.

// 5. Some people have a really hard time picking out indigo, so let's leave that one out, using the first letter of each color as the variable names.

// 6. But wait! Indigo is now feeling *super* left out. Let's only assign indigo using indg. 

// Objects

// 7. Use destructuring to assign all variables using the keys as the variable names

// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner


const animalList = farmAnimals.split(' ');

console.log(animalList);
const [moo, neigh, baa, oink, cluck] = animalList;
console.log(moo, neigh, baa, oink, cluck);

const [bessie, , dolly, babe, little] = animalList;
console.log(bessie, dolly, babe, little);

const [blackAndWhite, , black, pink] = animalList;
console.log(blackAndWhite, black, pink)

// Task 4: Destructure the rainbow colors from the colors array
const [red, orange, yellow, green, blue, indigo, violet] = colors;

console.log(red, orange, yellow, green, blue, indigo, violet);

// Task 5: Destructure the rainbow colors from the colors array using initials
const [r, o, y, g, b, i, v] = colors;

console.log(r, o, y, g, b, i, v);

// Task 6: Destructure Indigo from the colors array using indg
const [, , , , , indg] = colors;

console.log(indg);

// Task 7: Destructure the properties from the muppet object
const { muppetName, color, song, job, partner } = muppet;

console.log(muppetName, color, song, job, partner);

// Task 8: Destructure specific properties from the nestedMuppet object
const {
  album: {
    theMuppetMovie: { song2, song4 }
  },
  nestedJob,
  nestedPartner
} = nestedMuppet;

console.log(song2, song4, nestedJob, nestedPartner);
