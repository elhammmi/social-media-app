import { db } from "../connect.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
export const getUser = (req, res) => {

    const userId = req.params.userId;
    const token = req.cookies.accessToken;
    if (!token) return res.status(401).json("Not logged in!");

    const q = `SELECT * FROM users WHERE id=? `;

    jwt.verify(token, "secretKey", (err,) => {
        if (err) return res.status(403).json("Token is not valid!");
        db.query(q, [userId], (err, data) => {
            if (err) return res.status(500).json(err);
            const { password, ...info } = data[0];
            return res.status(200).json(info);
        })
    })

};
