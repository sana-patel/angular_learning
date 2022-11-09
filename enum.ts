enum Gender {
    Male,
    Female
}
console.log(Gender.Female);
console.log(Gender.Male);
console.log(Gender[0]);
console.log(Gender[1]);

enum WeekEnds {
    Saturday = 6,
    Sunday = 7
}

console.log(WeekEnds[6]);
console.log(WeekEnds[7]);

enum CardinalDirections {
    North = 'North',
    East = "East",
    South = "South",
    West = "West"
  };
  // logs "North"
  console.log(CardinalDirections.North);
  // logs "West"
  console.log(CardinalDirections.West);


