import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import authRouter from "./routes/auth.routes.js"

const app = express();

// Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Routes
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to Snitch Backend API' });
});

app.use("/api/auth", authRouter);

export default app;
// export { connectDB };