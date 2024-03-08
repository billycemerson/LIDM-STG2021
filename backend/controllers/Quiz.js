import Quiz from "../models/QuizModel.js";
import User from "../models/UserModel.js";
import { Op } from "sequelize";

export const getQuiz = async (req, res) => {
    try {
        let response;
        if(req.role === "admin"){
            response = await Quiz.findAll({
                attributes: ['id', 'uuid', 'name', 'link', 'kode'],
                include: [{
                    model: User,
                    attributes: ['name', 'email']
                }]
            });
        }else{
            response = await Quiz.findAll({
                attributes: ['id', 'uuid', 'name', 'link', 'kode'],
                where: {
                    userId: req.userId
                },
                include: [{
                    model: User,
                    attributes: ['name', 'email']
                }]
            });
        }
        res.status(200).json(response);          
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
}

export const getQuizById = async (req, res) => {
    try {
        const quiz = await Quiz.findOne({
            where:{ 
                uuid: req.params.id
            }
        });
        if(!quiz) return res.status(404).json({msg: "Data Tidak Ditemukan"});
        let response;
        if(req.role === "admin"){
            response = await Quiz.findOne({
                attributes: ['id', 'uuid', 'name', 'link', 'kode'],
                where:{ 
                    id: quiz.id
                },
                include: [{
                    model: User,
                    attributes: ['name', 'email']
                }]
            });
        }else{
            response = await Quiz.findOne({
                attributes: ['id', 'uuid', 'name', 'link', 'kode'],
                where: {
                    [Op.and]: [{id: quiz.id}, {userId: req.userId}]
                },
                include: [{
                    model: User,
                    attributes: ['name', 'email']
                }]
            });
        }
        res.status(200).json(response);          
    } catch (error) {
        res.status(500).json({msg:error.message})
    }

}

export const createQuiz = async (req, res) => {
    const {name, link, kode} = req.body;
    try {
        await Quiz.create({
            name: name,
            link: link,
            kode: kode,
            userId: req.userId
        });
        res.status(201).json({msg: "Quiz Berhasil Dibuat"});
    } catch (error) {
        res.status(500).json({msg:error.message});
    }

}

export const updateQuiz = async (req, res) => {
    try {
        const quiz = await Quiz.findOne({
            where:{ 
                uuid: req.params.id
            }
        });
        if(!quiz) return res.status(404).json({msg: "Data Tidak Ditemukan"});
        const {name, link, kode} = req.body;
        if(req.role === "admin"){
            await Quiz.update({name, link, kode}, {
                where: {
                    id:  quiz.id
                }
            });
        }else{
            if(req.userId !== quiz.userId) return res.status(403).json({msg: "Akses Terlarang"});
            await Quiz.update({name, link, kode}, {
                where: {
                    [Op.and]: [{id: quiz.id}, {userId: req.userId}]
                }
            });

        }
        res.status(200).json({msg: "Quiz Berhasil Terupdate"});          
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
}

export const deleteQuiz = async (req, res) => {
    try {
        const quiz = await Quiz.findOne({
            where:{ 
                uuid: req.params.id
            }
        });
        if(!quiz) return res.status(404).json({msg: "Data Tidak Ditemukan"});
        const {name, link, kode} = req.body;
        if(req.role === "admin"){
            await Quiz.destroy({
                where: {
                    id:  quiz.id
                }
            });
        }else{
            if(req.userId !== quiz.userId) return res.status(403).json({msg: "Akses Terlarang"});
            await Quiz.destroy({
                where: {
                    [Op.and]: [{id: quiz.id}, {userId: req.userId}]
                }
            });

        }
        res.status(200).json({msg: "Quiz Berhasil Terhapus"});          
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
}

