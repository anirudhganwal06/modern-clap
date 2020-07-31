const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const { graphqlHTTP } = require('express-graphql');
const mongoose = require('mongoose');

const isAuth = require('./middleware/is-auth');

const graphqlSchema = require('./graphql/schema/root');
const graphqlResolver = require('./graphql/resolvers/root');

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: process.env.FRONTEND_URLS.split(' '),
    methods: ['POST', 'GET', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Cookie'],
    credentials: true
  })
);
app.use(cookieParser());
app.use(isAuth);

app.use('/graphql', (req, res) =>
  graphqlHTTP({
    schema: graphqlSchema,
    rootValue: graphqlResolver,
    graphiql: true,
    context: { req, res }
  })(req, res)
);

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    app.listen(process.env.PORT);
    console.log('Listening on port:', process.env.PORT);
  })
  .catch(err => console.log(err));
