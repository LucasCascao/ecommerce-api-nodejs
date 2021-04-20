import { Request, Response, request } from 'express';
import { CartService } from '../services/CartService.service';
class CartController {
    async findAll(request: Request, response: Response) {
        const carts = await new CartService().findAll();
        response.status(200).json(carts);
    }
}

export {CartController};