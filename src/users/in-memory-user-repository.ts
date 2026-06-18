// Usa o tipo UserRespository para implementar de fato o findByEmail
// e o save na memória

import type { UserRepository } from "./user-repository.js";
import type { User } from "./user.entity.js";

export const inMemoryUserRepository = (initialUsers: User[] = []): UserRepository => {
    const users: User[] = [...initialUsers];

    return {
        findByEmail: async (email: string) => {
            const user = users.find(user => user.email === email) || null
            return user;
        },
        save: async (user: User) => {
            users.push(user);
        }
    }
}