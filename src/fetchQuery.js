import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api';
const API_KEY = '27162197-48653db0bb6a52b3f68fe1dbd';
const SEARCH_PARAM = 'image_type=photo&orientation=horizontal&safesearch=true';

export class PicsServiceApi {
  constructor() {
    this.page = 1;
    this.searchQuery = '';
  }

  async fetchQuery() {
    const { data, status } = await axios.get(
      `${BASE_URL}/?key=${API_KEY}&q=${this.searchQuery}&${SEARCH_PARAM}&per_page=40&page=${this.page}`,
    );
    if (status === 200) {
      this.incrementPage();
      return data;
    } else {
      throw new Error(status);
    }
  }
  get query() {
    return this.searchQuery;
  }
  set query(newQuery) {
    this.searchQuery = newQuery;
  }
  incrementPage() {
    this.page += 1;
  }
  resetPage() {
    this.page = 1;
  }
}