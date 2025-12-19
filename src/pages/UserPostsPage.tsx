import PostLengthFilter from "../features/PostLengthFilter/ui/PostLengthFilter.tsx";
import PostList from "../widgets/PostList/PostList.tsx";
import {useCallback, useMemo, useState} from "react";
import {useGetPostsByUserIdQuery} from "../entities/post/api/postsApi.ts";
import {filterByLength} from "../features/PostLengthFilter/lib/filterByLength.ts";
import {useParams} from "react-router-dom";
import Loader from "../shared/ui/Loader/Loader.tsx";

export default function UserPostsPage() {
    const { id: userId } = useParams<{id: string}>()
    const { data: posts = [], isLoading, isError } = useGetPostsByUserIdQuery(Number(userId))
    const [range, setRange] = useState<{min: number; max: number} | null>(null);

    const filteredPosts = useMemo(() => {
        if (!range) return posts;
        return filterByLength(posts, range.min, range.max);
    }, [posts, range]);

    const handleLengthChange = useCallback((min: number, max: number) => {
        setRange({ min, max });
    }, []);

    if (isError) {
        return <>
            <h1>All posts by User ID</h1>
            <p>Something went wrong =(</p>
        </>;
    }

    return (
        <>
            <h1>All posts by User ID</h1>

            {isLoading ?
                <Loader />
                :
                (
                    <>
                        <PostLengthFilter onChange={handleLengthChange} />

                        <PostList posts={filteredPosts} />
                    </>
                )
            }
        </>
    )
}