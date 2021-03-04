const presidents = [
  { name: "Donald Trump", terms: 1, party: "R" },
  { name: "Barack Obama", terms: 2, party: "D" },
  { name: "George W. Bush", terms: 2, party: "R" },
  { name: "Bill Clinton", terms: 2, party: "D" },
  { name: "George H.W. Bush", terms: 1, party: "R" },
  { name: "Ronald Reagan", terms: 2, party: "R" },
  { name: "Jimmy Carter", terms: 1, party: "D" },
  { name: "Gerlad Ford", terms: 1, party: "R" },
  { name: "Richard Nixon", terms: 2, party: "R" },
  { name: "John F. Kennedy", terms: 1, party: "D" },
  { name: "Lyndon Johnson", terms: 2, party: "D" },
  { name: "Dwight Eisenhower", terms: 2, party: "R" },
];

//Challenge Questions
//1) Filter all presidents, leaving only the Democratic ones
const democratic = presidents.filter((president) => president.party === "D");
console.table(democratic);

//2)Filter all presidents to leave only one term Republican presidents HINT use If statement
const oneRepublican = presidents.filter(function (president) {
  if (president.terms === 1 && president.party === "R") {
    return true;
  }
});
console.table(oneRepublican);

//3) return only the last three presidents
const last3 = presidents.slice(-3);
console.table(last3);

//4) log all dems who served 2 terms. HINT use chain filter, filter and slice
const twoDemo = presidents.filter(function (president) {
  if (president.terms === 2 && president.party === "D") {
    return true;
  }
});
console.table(twoDemo);

//BONUS write a script to check if LBJ was a 2 term president. IF he was then alert("LBJ served two terms") else alert "LBJ was one and done"

/* const LBJ = presidents
  .filter((president) => president.name === "Lyndon Johnson")
  .filter(function (president) {
    if (president.terms === 2) {
      return `LBJ served two terms`;
    } else {
      return `LBJ was one and done`;
    }
  });
console.log(LBJ); */

/* const LBJ = presidents.filter(function (president) {
  if (president.name === "Lyndon Johnson" && president.terms === 2) {
    alert = "LBJ served two terms";
    return alert;
  } else {
    alert = "LBJ was one and done";
  }
});
console.log(LBJ); */

//whatever man i wont even get a cupcake even if i got it :(
