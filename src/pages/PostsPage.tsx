import PostLengthFilter from "../features/PostLengthFilter/ui/PostLengthFilter.tsx";
import PostList from "../widgets/PostList/PostList.tsx";
import {useCallback, useMemo, useState} from "react";
import {useGetAllPostsQuery} from "../entities/post/api/postsApi.ts";
import {filterByLength} from "../features/PostLengthFilter/lib/filterByLength.ts";
import Loader from "../shared/ui/Loader/Loader.tsx";

export default function PostsPage() {
    const { data: posts = [], isLoading, isError } = useGetAllPostsQuery(8);
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
            <h1>All posts</h1>
            <p>Something went wrong =(</p>
        </>;
    }

    return(
        <>
            <h1>All posts</h1>

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