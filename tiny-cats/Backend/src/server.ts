import dotenv from "dotenv";
dotenv.config();
import app from "./app.ts";
import { connectDb } from "./config/db.ts";


connectDb();

let port = process.env.PORT;

app.listen(port || 3000, () => {
    console.log(`server is running on port ${port}`);
});
