const prod = {
    url: {
        API_URL: 'https://shielded-shore-97043.herokuapp.com',
    }
};
const dev = {
    url: {
        API_URL: 'http://localhost:5080'
    }
};
export const config = process.env.NODE_ENV === 'development' ? dev : prod;