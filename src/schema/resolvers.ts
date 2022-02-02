export const resolvers = {
  Query: {
    people: async (source, args, { dataSources }) => {
      const people = await dataSources.api.getPeople();
      const next = people.next;

      // Prepare for the pagination
      const data = people.results.map((person) => ({
        name: person.name,
        height: person.height,
        mass: person.mass,
        gender: person.gender,
        homeworld: person.homeworld,
        next: next,
      }));
      return data;
    },
    getPeopleByName: async (source, args, { dataSources }) => {
      const people = await dataSources.api.getPeopleByName(args.name);
      return people.results.map((person) => ({
        name: person.name,
        height: person.height,
        mass: person.mass,
        gender: person.gender,
        homeworld: person.homeworld,
        next: '',
      }));
    },
  },
};
