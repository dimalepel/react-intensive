import {useCallback, useEffect, useState} from "react";

export function useFetch<T>(url: string) {
    const [data, setData] = useState<T | null>(null);
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