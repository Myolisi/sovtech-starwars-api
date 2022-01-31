export const resolvers = {
  Query: {
    people: async (source, args, { dataSources }) => {
      const people = await dataSources.api.getPeople();
      return people.results;
    },
    getPeopleByName: async (source, args, { dataSources }) => {
      const people = await dataSources.api.getPeople(args.name);
      return people.results;
    },
  },
};
