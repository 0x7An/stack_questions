import axios from 'axios';

const URL = 'https://api.stackexchange.com/2.2/questions?';



const resolvers = {
    Query: {
        questions: async (root, {tagged, limit, sort, score}) => {
           var result;
           return console.log(result);
        }
    }
};

export default resolvers;