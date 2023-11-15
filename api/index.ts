import { HYGRAPH_ENDPOINT } from "@/config";

export async function fetchGraphQL(query: string) {
  try {
    const response = await fetch(HYGRAPH_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error - Status: ${response.status}`);
    }
    const { data } = await response.json();
    return data;
  } catch (error) {
    console.error("GraphQL request error", error);
    throw error;
  }
}
