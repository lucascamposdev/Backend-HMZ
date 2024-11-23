import { NextFunction, Request, Response } from "express";
import { findAllUsers, findUserById, updateUserById, deleteUserById } from "../services/userService";

export const getUsers = async (req: Request, res: Response) => {
  const { page = "1", per_page = "10" } = req.query;

  const pageNumber = Math.max(parseInt(page as string, 10), 1); 
  const perPageNumber = Math.max(parseInt(per_page as string, 10), 1); 

  const { users, total } = await findAllUsers(pageNumber, perPageNumber);
  
  res.json({
    page: pageNumber,
    per_page: perPageNumber,
    total,
    total_pages: Math.ceil(total / perPageNumber),
    data: users,
  });
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
  const user = req.user;
  const { id } = req.params;

  if(Number(id) === user?.id){
    res.status(422).json({ message: "Cannot process the request. Deleting your own account is not permitted." });
    return;
  }

  try{
    await deleteUserById(Number(id));
    res.status(204).send();
    
  }catch(err){
    next(err)
  } 
};


