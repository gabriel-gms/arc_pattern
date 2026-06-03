import { v4 } from 'uuid';
import { hashSync } from 'bcrypt';

type CreateUserType = {
    name: string;
    email: string;
    password: string;
}

export const createUser = ( {name, email, password}: CreateUserType ) => {
    const id = v4()
    const passwordHash = hashSync(password, 10);
    const createdAt = new Date();

    return Object.freeze({
        id, name, email, passwordHash, createdAt
    })
}