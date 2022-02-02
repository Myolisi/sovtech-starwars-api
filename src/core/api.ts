import { RESTDataSource } from 'apollo-datasource-rest';

export class Api extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://swapi.dev/api/';
  }

  async getPeople(next) {
    if (!next || next === '') {
      // Else fetch the first page
      return await this.get('people/');
    }
    // We want to make sure that we have a next page to fetch/or previous page
    return this.get(`people/?page=${Number(next)}`);
  }

  async getPeopleByName(name) {
    console.log(name);
    return this.get(`people/?search=${name}`);
  }
}
