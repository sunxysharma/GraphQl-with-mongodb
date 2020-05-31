import { Cat } from "./models/Cat";

export const resolvers = {
  Query: {
    hello: () => "hi",
    cats: () => Cat.find()
  },
  Mutation: {
    createCat: async (_: any, { name }: any) => {
      const kitty = new Cat({ name });
      return await kitty.save();
      
    }
  }
};