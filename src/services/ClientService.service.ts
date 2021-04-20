import { ClientRepository } from "../repositories/ClientRepository";
import { getCustomRepository } from "typeorm";
import { Client } from "../models/Client";

class ClientService {
    
    create(client: Client) {
        const repository = getCustomRepository(ClientRepository);
        repository.create(client);
        return repository.save(client);
    }
    
    async findAll(): Promise<Client[]> {
        const repository: ClientRepository = getCustomRepository(ClientRepository);
        return await repository.find();
        // this.response.status(200).json(client);
    }

    async findById(id: number): Promise<Client> {
        const clientRepository: ClientRepository = getCustomRepository(ClientRepository);
        return await clientRepository.findOne({
            id: id
        });
        // return this.response.status(200).json(client);
    }

    async getOne (client: Client): Promise<Client> {
        return await getCustomRepository(ClientRepository).findOne(client);
    }

}

export { ClientService };