import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';

import Schema from './schema';

const PORT = 3000;

const graphqlserver = express();

graphqlserver.use('/graphql',
        bodyParser.json(), 
        graphqlExpress({ 
          schema: Schema,
          cacheControl: true,
          tracing: true
        }));

graphqlserver.get('/graphiql', 
        graphiqlExpress({ endpointURL: '/graphql' })); 

graphqlserver.listen(PORT, () => {console.log(`server running on port ${PORT}, :ok_hand:`)});
