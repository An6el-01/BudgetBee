import { Request, Response } from 'express';
import { Users } from '../models/Users';

export const createUser = async (req: Request, res: Response) => {
    try{
        const { username, email, password_hash, is_premium } = req.body;
        const user = await Users.create({ username, email, password_hash, is_premium });
        res.status(201).json(user);
    }catch (error){
        res.status(500).json({ error: 'Error creating user' });
    }
};