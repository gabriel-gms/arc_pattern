import type { User } from "../users/user.entity.js";

export type UserRepository = {
    findByEmail: (email: string) => Promise<User | null>;
    save: (user: User) => Promise<void>;
}