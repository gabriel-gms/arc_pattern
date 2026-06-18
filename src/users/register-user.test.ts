import { inMemoryUserRepository } from "./in-memory-user-repository.js";
import { registerUser } from "../users/register-user.js";
import type { User } from "../users/user.entity.js";

describe('Register User - Use Case', () => {

    it('should register a user successfully', async () => {
        const repository = inMemoryUserRepository();

        await registerUser({
            name: "João",
            email: "joao@email.com",
            password: "123456"
        },
        repository)

        const savedUser = await repository.findByEmail("joao@email.com");
        expect(savedUser).toBeDefined();
    })

    it('should throw an error if user already exists', async () => {
        const users: User[] = [
            {
                id: "1",
                name: "João",
                email: "joao@email.com",
                passwordHash: "hash",
                createdAt: new Date()
            }
        ]
        const repository = inMemoryUserRepository(users);

        await expect(registerUser({
            name: users[0]!.name,
            email: users[0]!.email,
            password: users[0]!.passwordHash
        }, repository)).rejects.toThrow("User already exists");
    })

})
