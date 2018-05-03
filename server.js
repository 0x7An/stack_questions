import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';

const Schema = './source/schema';
const PORT = 3000;

const app = express();

app.use('/graphql', 
        bodyParser.json(), 
        graphqlExpress({ 
          schema: Schema,
          cacheControl: true,
          tracing: true
        }));

app.get('/graphiql', 
        graphiqlExpress({ endpointURL: '/graphql' })); 

app.listen(PORT, () => {console.log(`server running on port ${PORT}, :ok_hand:`)});