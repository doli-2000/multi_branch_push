// src/app.js
import Fastify from "fastify";
import adminRoutes from "./src/routes/admin.js";
import dotenv from "dotenv";
dotenv.config();

const fastify = Fastify({ logger: true });

fastify.register(adminRoutes);

const start = async () => {
  try {
    await fastify.listen({ port: process.env.PORT || 3000 });
    console.log(`Server running on port ${process.env.PORT || 3000}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
}// app.js
import express from "express";
import dotenv from "dotenv";
import adminRoutes from "./routes/adminRoutes.js";
dotenv.config();

const app = express();
app.use(express.json());

// Routes
app.use("/admin", adminRoutes);

app.listen(process.env.PORT, () => {
  console.log(`✅ Server running on port ${process.env.PORT}`);
});
;
start();
