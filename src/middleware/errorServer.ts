import { Request, Response, NextFunction } from 'express'
import HttpException from "../common/http-exception";

export function errorServer(error: HttpException, req: Request, res: Response, next: NextFunction) {
    res.status(error.statusCode || 500)
    res.json({
        error: error.message
    })
}