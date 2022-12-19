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
