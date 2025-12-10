import CommentList from "../../../widgets/CommentList/ui/CommentList.tsx";
import type {Post} from "../model/Post.ts";

interface PostDetailProps {
    post: Post | null
}

export default function PostDetail({ post }: PostDetailProps) {
    return (
        <>
            <h1>{post?.title}</h1>
            <p>{post?.body}</p>

            <CommentList comments={post?.comments ?? []} />
        </>
    )
}