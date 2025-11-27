import db from "../config/db.js";
import bcrypt from "bcryptjs";

export const registerUser = async (req, res) => {
  try {
    const { name, email, phone, password, role } = req.body;
    if (!name || !email || !phone || !password || !role) {
      return res
        .status(400)
        .json({ success: false, message: "Missing fields" });
    }
    const exists = await db.execute("SELECT * from users WHERE email=?", [
      email,
    ]);
    if (exists[0].length) {
      return res.json({ success: false, message: "Email already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await db.execute(
      "INSERT INTO users (email,phone,password_hash,name,role) VALUES(?,?,?,?,?)",
      [email, phone, hashedPassword, name, role]
    );
    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      user: { name, email },
    });
  } catch (err) {
    console.error("Registration error:", err);
    return res
      .status(500)
      .json({ success: false, message: "Server error during registration."});
  }
};
