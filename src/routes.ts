import { Router } from 'express';
import { CartController } from './controllers/CartController';
import { ClientController } from './controllers/ClientController';

const router = Router();

const clientController = new ClientController();
const cartController = new CartController();

router.get("/clients", clientController.findAll);
router.get("/clients/:id", clientController.findById);

router.get("/carts", cartController.findAll)

export { router };