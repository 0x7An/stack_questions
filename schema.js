import { makeExecutableSchema, addMockFunctionToSchema } from "graphql-tools";
import resolvers from './resolvers';

const typeDefs = `
    scalar Date
    type Owner {
        user_id: ID!
        reputation: Int
        user_type: String
        accept_rate: Int
        profile_image: String
        display_name: String
		link: String
	}

	type Question {
        question_id: ID!
        tags: [String]
        owner: Owner
        is_answered: Boolean
        view_count: Int
        answer_count: Int
        score: Int
        last_activity_date: Date
        creation_date: Date
        link: String
        title: String
    }

    type Query {
        questions(tags: String!, limit: Int, sort: String, score: Int): [Question]
    }
`;

const Schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

export default Schema;
