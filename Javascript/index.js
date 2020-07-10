//Array of Objects
const persons = [
  {
    person1: {
      name: "rohith",
      age: 23,
      address: { dist: "karimnagar", village: null, pincode: 505005 },
    },
    person2: {
      name: "sai",
      age: 25,
      address: { dist: "karimnagar", village: null, pincode: 505105 },
    },
    person3: {
      name: "nani",
      age: 28,
      address: { dist: "warangal", village: null, pincode: 505025 },
    },
    person4: {
      name: "raju",
      age: 27,
      address: { dist: "hyderabad", village: null, pincode: 505785 },
    },
  },
];

console.log(persons[0].person2.name);

const jsonStringifyPersons = JSON.stringify(persons);

console.log(jsonStringifyPersons);
console.log(JSON.parse(jsonStringifyPersons));

const persons1 = [
  {
    name: "rohith",
    age: 23,
    address: {
      dist: "Karimnagar",
      village: ["vilone", "villtwo"],
      pincode: 505005,
    },
  },
  {
    name: "sai",
    age: 25,
    address: {
      dist: "karimnagar",
      village: ["vilone", "villtwo"],
      pincode: 505105,
    },
  },
  {
    name: "nani",
    age: 28,
    address: {
      dist: "warangal",
      village: ["vilone", "villtwo"],
      pincode: 505025,
    },
  },
  {
    name: "raju",
    age: 27,
    address: {
      dist: "hyderabad",
      village: ["vilone", "villtwo"],
      pincode: 505785,
    },
  },
];

console.log(persons1[0].name);
const jsonStringifyPersons1 = JSON.stringify(persons1);
console.log(jsonStringifyPersons1);
console.log(JSON.parse(jsonStringifyPersons1));

// Functions

//@Old
function hello(name) {
  console.log(`hello ${name}`);
}

hello("world");

function calculateNumber(num) {
  return num / 100;
}

calculateNumber(15);
console.log(calculateNumber(15));
// this is how we console it

//@Es6
const hello1 = (name) => {
  return `hello ${name}`;
};

hello1("world");
console.log(hello1("world"));

//Short Cut
const hello12 = (name) => `hello ${name}`;
hello12("world");
console.log(hello12("world"));

const calculateNumber1 = (num) => {
  return num / 100;
};

calculateNumber1(15);
console.log(calculateNumber1(15));
// this is how we console it

//Loop

/**
 * @While
 */

let a = 0;

while (a < 10) {
  console.log(a);
  a++;
}

/**
 * @For
 */

for (let a = 0; a < 10; a++) {
  console.log(a);
}

//From above

for (let a = 0; a < persons1.length; a++) {
  persons1[a].key = a;
  console.log(persons1[a]);
  console.log(persons1[a].address.village[1]); // using only brackets
}

let c = 0;
for (let person of persons1) {
  person.key = c;
  console.log(person.address.dist);
  console.log(person.address.village[0]);
  c++;
}

let d = 0;
persons1.forEach(async (person) => {
  person.key = d;
  console.log(await person.address.pincode);
  console.log(await person.address.village[0]);
  d++;
});

let e = 0;
persons1.map(async (person) => {
  person.key = e;
  console.log(await person.address.pincode);
  console.log(await person.address.village[0]);
  e++;
});

//Search or Filter From Array of Objects
const testFilter = persons1.filter((person) =>
  person.address.dist.includes("ar")
); //Searching Letter
console.log(testFilter, "filter");

const testFilter1 = persons1.filter(
  (person) => person.address.dist == "karimnagar"
); // Searching Word
console.log(testFilter1, "filter1");

//Huraa.... :O Added SuccessFully

/**
 *@Conditional Statements
 */

e = 4;

if (e == 4) {
  console.log(true, "EEEEEEEEEE");
} else {
  console.log(false);
}

e === "4" ? console.log(true) : console.log(false); // " === " => with data type.   "==" without datatype.
e !== 4 ? console.log(true) : console.log(false); // " !== " => with data type.   "!=" without datatype.

/**
 * @Nested IF ELSE Statements
 */

if (persons1[0].name == "rohith" && persons1[0].age === "23") {
  console.log("Access");
} else if (persons1[0].name !== "rohith" && persons1[0].age === 23) {
  console.log("Accessed");
} else if (persons1[0].name === "rohith" && persons1[0].age === 23) {
  console.log("thired condition");
} else {
  console.log(null);
}

//Fuction IF

function check() {
  a = 0;
  b = 9;
  return a > b;
}

console.log(check());

function check1() {
  return;
  if (persons1[0].name == "rohith" && persons1[0].age === "23") {
    console.log("Access");
  } else if (persons1[0].name !== "rohith" && persons1[0].age === 23) {
    console.log("Accessed");
  } else if (persons1[0].name === "rohith" && persons1[0].age === 23) {
    console.log("Fuction Condition");
  }
}
check1(); //While using console inside the fuction for return then never use console to log fuction which return undefined

/*
 *@Switch Statement
 */

a = 0;
switch (persons1[a].name) {
  case "rohith":
    console.log("Rohith");
    break;
  case "sai":
    console.log("sai");
    break;
  case "nani":
    console.log("nani");
    break;
  default:
    console.log("Non of Above");
}

a = 10;
switch (a) {
  case 1:
    console.log("one");
    break;
  case 2:
    console.log("two");
    break;
  case 3:
    console.log("three");
    break;
  case 4:
    console.log("four");
    break;
  case 5:
    console.log("five");
    break;
  case 6:
    console.log("six");
    break;
  case 7:
    console.log("seven");
    break;
  case 8:
    console.log("eight");
    break;
  case 9:
    console.log("nine");
    break;
  case 10:
    console.log("ten");
    break;
  default:
    console.log("Error");
    break;
}

/**
 * @DOM Manupilation
 */

const lisT = document.getElementById("list");
console.log(lisT);

const itemSs = document.querySelectorAll(".items");

console.log(itemSs, "item list");

console.log(document.querySelector("#list"));
console.log(document.getElementsByClassName("items"));

a = 0;
itemSs.forEach((item) => {
  item.textContent = a;
  console.log(item);
  a++;
});

a = 0;
itemSs.forEach((item) => {
  item.textContent = a;
  console.log(item);
  a++;
});

console.log((lisT.children[1].textContent = "Rohiths"));
/**
 * document.querySelector('div.entry-content p:nth-child(5) br').previousSibling
 */

/**
 * @Events
 */

const btnEvent = document.getElementById("myBtn");
btnEvent.addEventListener("pointermove", e => {
  console.log(e.timeStamp / 1000)
    document.getElementsByClassName('items').item(1).textContent = Math.round((e.timeStamp / 1000))
})
