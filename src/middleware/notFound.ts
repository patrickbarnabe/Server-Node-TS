import { Request, Response, NextFunction } from 'express'

export function notFound(req: Request, res: Response, next: NextFunction) {
    const error = new Error('Não encontrado')
    next(error)
}