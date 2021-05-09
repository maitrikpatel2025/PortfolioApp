const production  = 'https://examplePage.com';
const development = 'http://localhost:5080/';
export const BASE_API_URL = (process.env.NODE_ENV ? production : development);