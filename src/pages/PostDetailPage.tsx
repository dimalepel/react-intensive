import {useParams} from "react-router-dom";
import PostDetail from "../entities/post/ui/PostDetail.tsx";
import Loader from "../shared/ui/Loader/Loader.tsx";
import {useEffect} from "react";
import {fetchPostById, selectPostById} from "../entities/post/model/slice/postSlice.ts";
import {useDispatch, useSelector} from "react-redux";
import type {AppDispatch, RootState} from "../app/providers/store/store.ts";

export default function PostDetailPage() {
    const { id: postId } = useParams<{id: string}>()
    const dispatch = useDispatch<AppDispatch>()
    const { isLoading, isError } = useSelector((state: RootState) => state.post)

    useEffect(() => {
        dispatch(fetchPostById(Number(postId)))
    }, [dispatch, postId])

    const post = useSelector((state: RootState) =>
        selectPostById(state, Number(postId))
    )

    if (isError) {
        return <>
            <p>Something went wrong =(</p>
        </>;
    }

    if (isLoading || !post) {
        return <Loader />;
    }

    return <PostDetail post={post} />
}