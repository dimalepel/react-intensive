import CommentList from "../../../widgets/CommentList/ui/CommentList.tsx";
import type {PostDTO} from "../model/types.ts";
import {useGetCommentsByPostIdQuery} from "../../comment/api/commentsApi.ts";

interface PostDetailProps {
    post: PostDTO | null
}

export default function PostDetail({ post }: PostDetailProps) {
    const { data: comments = [] } = useGetCommentsByPostIdQuery(String(post?.id))

    return (
        <>
            <h1>{post?.title}</h1>
            <p>{post?.body}</p>

            <CommentList comments={comments} />
        </>
    )
}