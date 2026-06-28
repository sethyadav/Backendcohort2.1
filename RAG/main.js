

import fs from "fs";
import pdf from "pdf-parse";
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";
import { MistralAIEmbeddings } from "@langchain/mistralai";
import dotenv from "dotenv";
import { Pinecone } from "@pinecone-database/pinecone";

dotenv.config();

const pc = new Pinecone({
  apiKey: process.env.PINECONE_API_KEY,
});

const index = pc.index("cohort-2-rag");

const embeddings = new MistralAIEmbeddings({
  apiKey: process.env.MISTRAL_API_KEY,
  model: "mistral-embed",
});

const queryEmbedding = await embeddings.embedQuery("how was the intership exprience?")
console.log(queryEmbedding)
//console.log("Uploaded", result);

const result = await index.query({
  vector: queryEmbedding,
  topK: 2,
  includeMetadata: true
})

console.log(JSON.stringify(result))