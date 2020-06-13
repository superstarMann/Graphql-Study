const Hun = {
    name: "Seung Hun",
    age: 22,
    gender: "male"
};

const resolvers = {
    Query: {
      person:()=> Hun
      }
    };

export default resolvers;