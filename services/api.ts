import { GRAPHQL_ENDPOINT } from "@/config";

export async function fetchGraphQL(query: string) {
  try {
    const response = await fetch(GRAPHQL_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    });

    // check for status response if data not returned
    if (!response.ok) {
      throw new Error(`HTTP error - Status: ${response.status}`);
    }

    const { errors, data } = await response.json();

    if (errors) {
      console.log("GraphQL query error", errors);
      throw new Error("GraphQL query error");
    }
    return data;
  } catch (error) {
    console.error("GraphQL request error", error);
    throw error;
  }
}
