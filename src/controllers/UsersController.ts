import {NextFunction, Request, Response} from "express"
import db from "../database/connection";

export default class UsersController {

    async index(request: Request, response: Response){
        const result = await db('users')
        return response.json(result)
    }

    async store(request: Request, response: Response, next: NextFunction){
        try{
            const { first_name, last_name } = request.body
            const result = await db('users').insert({ first_name, last_name })

            return response.status(201).json(result)
        } catch (error) {
            next(error)
        }
    }

}