// import fs from "fs";
// import pdf from "pdf-parse";
// //import { PDFParse } from 'pdf-parse'; 
// import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";
// import { MistralAIEmbeddings } from "@langchain/mistralai";
// import dotenv from 'dotenv';
// dotenv.config();


// let dataBuffer = fs.readFileSync('./story.pdf');

// const parser = new PDFParse({
//     data:dataBuffer
// })

// const data = await parser.getText();

// const embeddings = new MistralAIEmbeddings({
//     apiKey: process.env.MISTRAL_API_KEY,
//     model: "mistral-embed"
// })


// const splitter = new RecursiveCharacterTextSplitter({
//     chunkSize:500,
//     chunkOverlap: 0,
// })

// const chunks = await splitter.splitText(data.text)

// const docs = await embeddings.embedDocuments(chunks)

// console.log(docs)



// import fs from "fs";
// import pdf from "pdf-parse";
// import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";
// import { MistralAIEmbeddings } from "@langchain/mistralai";
// import dotenv from "dotenv";
// import { Pinecone } from '@pinecone-database/pinecone'
// dotenv.config();


// const pc = new Pinecone({ 
//   apiKey:'process.env.PINECONE_API_KEY'

//  });
// const index = pc.index("cohort-2-rag")
// // ✅ PDF read
// const dataBuffer = fs.readFileSync("./story.pdf");

// // ✅ Correct pdf parse
// const data = await pdf(dataBuffer);
// //console.log("PDF loaded");


// // ✅ Embedding model
// const embeddings = new MistralAIEmbeddings({
//   apiKey: process.env.MISTRAL_API_KEY,
//   model: "mistral-embed",
// });


// // ✅ Split text
// const splitter = new RecursiveCharacterTextSplitter({
//   chunkSize: 500,
//   chunkOverlap: 0,
// });


// const chunks = await splitter.splitText(data.text);

// //console.log("Chunks:", chunks.length);
// // ✅ Embeddings
// const docs = await Promise.all(chunks.map(async (chunk) => {
//   const embedding = await embeddings.embedQuery(chunk)
//   return {
//     text: chunk,
//     embedding
//   }

// }))


// const result = await index.upsert({
//   records: docs.map((doc,i) => ({
//     id: `doc-${i}`,
//     values: doc.embedding,
//     metadata: {
//       text: doc.text
//     }
//   }))
// })

// console.log(result)


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

// PDF read
// const dataBuffer = fs.readFileSync("./story.pdf");

// const data = await pdf(dataBuffer);

// Embedding
const embeddings = new MistralAIEmbeddings({
  apiKey: process.env.MISTRAL_API_KEY,
  model: "mistral-embed",
});

// Split
// const splitter = new RecursiveCharacterTextSplitter({
//   chunkSize: 500,
//   chunkOverlap: 0,
// });

// const chunks = await splitter.splitText(data.text);

// console.log("Chunks:", chunks.length);

// // Embedding create
// const docs = await Promise.all(
//   chunks.map(async (chunk) => {
//     const embedding = await embeddings.embedQuery(chunk);

//     return {
//       text: chunk,
//       embedding,
//     };
//   })
// );

// Upload to pinecone
// const result = await index.upsert({
//   records: docs.map((doc, i) => ({
//     id: `doc-${i}`,
//     values: doc.embedding,
//     metadata: {
//       text: doc.text,
//     },
//   })),
// });

const queryEmbedding = await embeddings.embedQuery("how was the intership exprience?")
console.log(queryEmbedding)
//console.log("Uploaded", result);

const result = await index.query({
  vector: queryEmbedding,
  topK: 2,
  includeMetadata: true
})

console.log(JSON.stringify(result))