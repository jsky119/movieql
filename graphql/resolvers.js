const sky = {
  name: "Sky",
  age: 30,
  gender: "male",
};

const resolvers = {
  Query: {
    person: () => sky,
  },
};

export default resolvers;
