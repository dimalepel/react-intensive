import type { PostDTO } from "../../../entities/post/model/Post.ts";

export function filterByLength(posts: PostDTO[], min: number, max: number) {
    return posts.filter(post => {
        const len = post.title.length;
        return len >= min && len <= max;
    });
}