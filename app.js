const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const cors = require('cors');
const {readFileSync} = require('fs');
const {buildSchema} = require('graphql');

const schemaString = readFileSync('./graphql/schema/schema.graphql', {encoding: 'utf8'});
const schema = buildSchema(schemaString);

const allMovies = [
    {
        id: '1',
        title: 'title'
    },
    {
        id: '2',
        title: 'title 2'
    }
];

const root = {
    getAllMovies: () => {
        return allMovies;
    },
    getMovie: params => {
        return allMovies.find(item => params.id === item.id);
    }
};

const app = express();
const PORT = 3001;

app.use(cors());

app.use('/graphql',
    graphqlHTTP({
        schema,
        rootValue: root,
        graphiql: true
    })
);

app.listen(PORT, err => {
    err ? console.log(err) : console.log('Server started!')
});