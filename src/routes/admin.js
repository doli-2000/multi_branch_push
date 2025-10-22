// src/routes/admin.js
import { getAdminDb } from "../config/adminDb.js";
import AdminDatabase from "../models/SuperAdmin/AdminDatabase.js";
import { defineProductModel } from "../models/Admin/Product.js";

export default async function adminRoutes(fastify) {
  fastify.get("/admin/:adminId/products", async (request, reply) => {
    const { adminId } = request.params;

    // 1️⃣ Get Admin DB config from Super Admin DB
    const dbConfig = await AdminDatabase.findOne({ where: { admin_id: adminId } });
    if (!dbConfig) return reply.status(404).send({ error: "Admin DB not found" });

    // 2️⃣ Connect to Admin DB
    const adminDb = getAdminDb(dbConfig);

    // 3️⃣ Define Product model dynamically
    const Product = defineProductModel(adminDb);

    // 4️⃣ Fetch products
    const products = await Product.findAll();
    reply.send(products);
  });
}
