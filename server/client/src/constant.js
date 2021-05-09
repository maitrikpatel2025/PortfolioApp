const production  = 'http://localhost:5080/';
const development = "https://shielded-shore-97043.herokuapp.com/"
export const BASE_API_URL = (process.env.NODE_ENV ? production : development);