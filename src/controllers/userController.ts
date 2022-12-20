import { Request, Response } from "express";
import { where } from "sequelize";
import { User, UserInstance } from "../models/User";

export const pong = (req: Request, res: Response) => {
    res.json({pong:true});
}

export const createUser = async (req: Request, res: Response) => {
    const {name, born_date, email} = req.body;
    const user = await User.create({name, born_date, email});
    res.json({Usuario: user});
}

export const listAllUsers = async (req: Request, res: Response) => {
    const users: UserInstance[] = await User.findAll();
    res.json({Usuarios: users});
}

export const getUserById = async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id);
    const user: UserInstance | null = await User.findByPk(id);
    if(user){
        res.json({Usuario: user});
    }
    else{
        res.json({Erro: "usuário não encontrado"});
    }
}

export const deleteUserById = async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id);
    const user: UserInstance | null = await User.findByPk(id);
    if(user){
        await User.destroy({where: {id: id}});
        res.json({Aviso: "Usuário de id: " + id + " removido com sucesso!"});
    }
    else{
        res.json({Erro: "usuário não encontrado"});
    }
}

export const UpdateUserById = async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id);
    const body = req.body;
    const user: UserInstance | null = await User.findByPk(id);

    if(user){
        if(body.name){
            user.name = body.name;
        }
        if(body.born_date){
            user.born_date = body.born_date;
        }
        if(body.email){
            user.email = body.email;
        }
        await user.save();
        res.json({Sucesso: "usuário atualizado!"});
    }
    else{
        res.json({Erro: "usuário não encontrado"});
    }
}

