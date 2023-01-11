import { Request, Response } from "express";
import connection from "../connection";

export default async function  deleteCharacter(
   req:Request,
   res: Response
):Promise<void> {
   try {
      
      const {id} = req.params

   await connection("character")
      .delete()
      .where({id})
   res.status(200).end("Personagem excluido!")
      
   } catch (error) {
      res.status(500).end("Unexpected server error")

   }
}