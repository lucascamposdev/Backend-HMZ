import { NextFunction, Request, Response } from "express";
import { findAllUsers, findUserById, updateUserById, deleteUserById } from "../services/userService";

export const getUsers = async (req: Request, res: Response) => {
  const users = await findAllUsers();
  res.json(users);
};

export const getUserById = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;

  try{
    const user = await findUserById(Number(id));
    res.json(user);

  }catch(err: any){
    next(err)
  }
};

export const updateUser = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  const { email, firstName, lastName, password } = req.body;
  
  try {
    const user = await updateUserById(Number(id), { email, firstName, lastName, password });
    res.json(user);
    
  } catch (error: any) {
    next(error)
  }
};

export const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;

  try{
    await deleteUserById(Number(id));
    res.status(204).send();
    
  }catch(err){
    next(err)
  } 
};


