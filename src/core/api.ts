import { RESTDataSource } from 'apollo-datasource-rest';

export class Api extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://swapi.dev/api/';
  }

  async getPeople(next) {
    if (!next || next === 0) {
      // Else fetch the first page
      return await this.get('people/');
    }
    // We want to make sure that we have a next page to fetch/or previous page
    return await this.get(`people/?page=${next}`);
  }

  async getPeopleByName(name) {
    return await this.get(`people/?search=${name}`);
  }

  async getHomeworld(id) {
    return await this.get(`planets/${id}`);
  }
}
