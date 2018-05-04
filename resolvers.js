import axios from 'axios';
import { url } from 'inspector';

const URL = 'https://api.stackexchange.com/2.2/questions?site=stackoverflow';

const resolvers = {
    Query: {
        questions: async (root, {tags, score, sort, limit}) => {
            var promise;
            await getQuestionsFromStack(tags, score, sort, limit).then(function (data) {
                promise = data.items;
            });
            return promise;
         }
    }
};

function getQuestionsFromStack({tags, score = 1000, sort='activity', limit=10}) {
    
    let url_filter = `${URL}&score=${score}&sort=${sort}&limit=${limit}&tags=${tags}`;

    let resp = axios.get(url_filter)
                    .then( response => { let res = response.data; return res; })
                    .catch( error => { console.log(error) });
    return resp;
}

export default resolvers;
