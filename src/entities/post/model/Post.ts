import type { Comment } from '../../comment/model/Comment.ts';

export interface PostDTO {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export interface Post extends PostDTO {
    comments: Comment[]
}