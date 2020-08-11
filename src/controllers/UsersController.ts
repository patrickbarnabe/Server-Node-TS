import { Request, Response } from "express"

import db from "../database/connection";

export default class UsersController {
    async index(request: Request, response: Response){
        return response.json({
            teste: 'oii2'
        })
    }
}