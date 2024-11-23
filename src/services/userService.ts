import prisma from "../prisma/client";
import { HttpError } from "../utils/HttpError";

// Fake DTO para selecionar campos dos usuários
export const userResponseDTO = {
  id: true,
  email: true,
  firstName: true,
  lastName: true,
  role: true,
};

export const findAllUsers = async () => {
  return prisma.user.findMany({
    select: userResponseDTO,
  });
};

export const findUserById = async (id: number) => {
  const user = await prisma.user.findUnique({ where: { id }, select: userResponseDTO });
  if (!user) {
    throw new HttpError(404, "User not found");
  }
  return user;
};

export const updateUserById = async (
  id: number,
  data: { email?: string; firstName?: string; lastName?: string; password?: string; }
) => {
  try {
    await findUserById(Number(id));

    const updatedUser = await prisma.user.update({
      where: { id },
      data,
    });

    if (!data.password) {
      const { password, ...userWithoutPassword } = updatedUser;
      return userWithoutPassword; 
    }

    return updatedUser;
    
  } catch (err: any) {
    if (err.code === "P2002") {
      throw new HttpError(400, "Email already in use")
    }
    throw err; 
  }
};

export const deleteUserById = async (id: number) => {
  await findUserById(Number(id))

  return prisma.user.delete({
    where: { id },
  });
};
