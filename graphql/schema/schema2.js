const {buildSchema} = require('graphql');

const schema = buildSchema(`
  type Movie {
    id: Int,
    name: String,
    genre: String
  },
  type Query {
    getMovie: Movie
  }
`);

const root = {
    getMovie: () => {
        return {
            id: 2,
            title: "title"
        };
    },
};

module.exports = {
    root, schema
};