import * as dotenv from "dotenv";

dotenv.config();

export const GRAPHQL_ENDPOINT: string = process.env.GRAPHQL_ENDPOINT! || "";

// safe guard
if (!GRAPHQL_ENDPOINT) {
  console.error("GraphQL endpoint is not defined in environment varibales");
}
