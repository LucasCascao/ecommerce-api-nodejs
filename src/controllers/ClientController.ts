import { Request, Response, request } from 'express';
import { ClientService } from '../services/ClientService.service';

class ClientController {
    
    async findAll(request: Request, response: Response) {
        const service =  new ClientService();
        return response.status(200).json(await service.findAll());
    }
    
    async find(request: Request, response: Response) {
        const { client } = request.body;
        const service =  new ClientService();
        return response.status(200).json(await service.getOne(client));
    }

    async findById(request: Request, response: Response) {
        const id = request.params.id as unknown as number;
        const service =  new ClientService();
        response.status(200).json(await service.findById(id));
    }

    async create(request: Request, response: Response) {
        const { client } = request.body;
        const service =  new ClientService();
        return response.status(201).json(await service.create(client));
    }
}

export { ClientController };