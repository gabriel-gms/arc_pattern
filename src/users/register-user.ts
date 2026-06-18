import type { UserRepository } from "./user-repository.js";
import { createUser } from "./user.entity.js";

type RegisterUserInput = {
    name: string;
    email: string;
    password: string;
}

export const registerUser = async (
    input: RegisterUserInput,
    repository: UserRepository
) => {
    const exists = await repository.findByEmail(input.email);

    if(exists){
        throw new Error('User already exists');
    }
    
    const user = createUser(input)
    await repository.save(user);
}