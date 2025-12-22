import {useCallback, useEffect, useState} from "react";

export function usePosts<PostDTO>(url: string) {
    const [data, setData] = useState<PostDTO | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);

    const fetchData = useCallback(async () => {
        setIsLoading(true);
        setError(false);

        try {
            const res = await fetch(url);
            const json = await res.json();

            if (!res.ok) {
                setError(true);
                return;
            }

            setData(json);
        } catch(err) {
            setError(true);
            console.error("Fetch error:", err);
        } finally {
            setIsLoading(false);
        }
    }, [url])

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return { data, isLoading, error };
}