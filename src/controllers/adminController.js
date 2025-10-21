// controllers/adminController.js
import AdminDatabase from "../models/SuperAdmin/AdminDatabase.js";
import { getAdminDb } from "../config/adminDb.js";
import { defineProductModel } from "../models/Admin/Product.js";

export const getAdminProducts = async (req, res) => {
  try {
    const { adminId } = req.params;
    console.log('skdf muti branch push code ')
    // 1️⃣ Super Admin DB থেকে Admin DB info fetch
    const dbConfig = await AdminDatabase.findOne({ where: { admin_id: adminId } });
    if (!dbConfig) return res.status(404).json({ error: "Admin DB not found" });

    // 2️⃣ Admin DB connection তৈরি
    const adminDb = getAdminDb(dbConfig);

    // 3️⃣ Product Model define
    const Product = defineProductModel(adminDb);

    // 4️⃣ Fetch all products
    const products = await Product.findAll();

    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong" });
  }
};
