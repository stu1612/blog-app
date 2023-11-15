import * as dotenv from "dotenv";

dotenv.config();

export const HYGRAPH_ENDPOINT: string = process.env.HYGRAPH_ENDPOINT! || "";
