import { RESTDataSource } from 'apollo-datasource-rest';

export class Api extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://swapi.dev/api/';
  }

  async getPeople() {
    const people = await this.get('people/');
    return people;
  }

  async getPeopleByName(name) {
    return this.get(`people/?search=${name}`);
  }
}
