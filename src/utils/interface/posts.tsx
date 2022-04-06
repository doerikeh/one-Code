import { Comments } from "./comments";
import { User } from "./users";

export interface Posts{
    userId: number;
    id: number;
    title: string;
    body: string;
    comments: Comments[];
}

export interface PostUser{
    post:Posts[];
    user:User;
}