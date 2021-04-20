import { getCustomRepository } from 'typeorm';
import { CartRepository } from '../repositories/CarrinhoRepository';
import { Cart } from '../models/Cart';

class CartService {
    public async findAll(): Promise<Cart[]> {
        const repository: CartRepository = getCustomRepository(CartRepository);
        return await repository.find();
    }
}

export {CartService};