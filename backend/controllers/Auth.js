import User from "../models/UserModel.js";
import argon2 from "argon2";

export const Login = async (req, res) => {
    try {
        const user = await User.findOne({
            where: {
                email: req.body.email
            }
        });
        if (!user) return res.status(404).json({ msg: "User Tidak Ditemukan" });

        const match = await argon2.verify(user.password, req.body.password);
        if (!match) return res.status(400).json({ msg: "Password Salah!" });

        req.session.userId = user.uuid;

        const { uuid, name, email, role } = user;
        res.status(200).json({ uuid, name, email, role });
    } catch (error) {
        console.error("Error saat login:", error);
        res.status(500).json({ msg: "Terjadi kesalahan saat login" });
    }
};

export const Me = async (req, res) => {
    try {
        if (!req.session.userId) {
            return res.status(400).json({ msg: "Mohon Login Ke Akun Anda!" });
        }

        const user = await User.findOne({
            attributes: ['uuid', 'name', 'email', 'role'],
            where: {
                uuid: req.session.userId
            }
        });
        if (!user) return res.status(404).json({ msg: "User Tidak Ditemukan" });

        res.status(200).json(user);
    } catch (error) {
        console.error("Error saat mendapatkan informasi pengguna:", error);
        res.status(500).json({ msg: "Terjadi kesalahan saat mendapatkan informasi pengguna" });
    }
};

export const Logout = (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.error("Error saat logout:", err);
            return res.status(400).json({ msg: "Tidak Dapat Logout" });
        }
        res.status(200).json({ msg: "Anda Telah Logout" });
    });
};
