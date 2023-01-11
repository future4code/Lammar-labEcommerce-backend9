import { Request, Response } from "express";
import connection from "../connection";
 
export default async function createCharacter(
   req: Request,
   res: Response
): Promise<void> {
   
try {

   const {name, gender, description} = req.body

   if(!name || !gender || !description){
      res.statusCode = 422;
      throw new Error("Verificar dados passado!");
      
   }

   await connection("character")
      .insert({name, gender, description})

   res.status(201).end("Criado novo personagem")
   
   } catch (error:any) {
      res.status(500).end(error.message)
   
   }
}