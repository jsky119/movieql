export const people = [
  {
    id: "0",
    name: "Sky",
    age: 30,
    gender: "male",
  },
  {
    id: "1",
    name: "Lee",
    age: 31,
    gender: "male",
  },
  {
    id: "2",
    name: "Park",
    age: 29,
    gender: "female",
  },
];

export const getById = (id) => {
  const filteredPeople = people.filter((person) => person.id === String(id));
  return filteredPeople[0];
};
