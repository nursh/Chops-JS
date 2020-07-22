interface Args {
  name: string;
  age: string;

}

type Sex = 'MALE' | 'FEMALE'| 'NONBINARY' ;
const sex: Sex = 'NONBINARY'

export const nameResolvers = {
  Query: {

    name: (_: undefined) => {
      return 'Maryam';
    },

    chef: (_:undefined) => {
      return {name: 'mafuzzy', age: 30, city: 'Toronto', sex}
    }

  }, 

  Mutation: {
    setName: (_: undefined, args: Args) => {
      return `Hello ${args.name} i am ${args.age}`
    }
  }
}