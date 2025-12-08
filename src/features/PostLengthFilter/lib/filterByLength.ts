import type { Post } from "../../../entities/post/model/Post.ts";

export function filterByLength(posts: Post[], min: number, max: number) {
    return posts.filter(post => {
        const len = post.title.length;
        return len >= min && len <= max;
    });
}