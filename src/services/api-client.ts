import axios, { CanceledError } from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api/',
  params: {
    key: '31f179ab72e84097854820b9ee00d3f1',
  },
});

export { CanceledError };