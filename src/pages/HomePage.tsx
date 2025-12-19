import {useUser} from "../shared/lib/user/useUser.ts";
import {useDispatch, useSelector} from "react-redux";
import type {AppDispatch, RootState} from "../app/providers/store/store.ts";
import {useEffect} from "react";
import {fetchUserById, selectUserById} from "../entities/user/model/slice/userSlice.ts";
import Loader from "../shared/ui/Loader/Loader.tsx";

export default function HomePage() {
    const { userId } = useUser();
    const dispatch = useDispatch<AppDispatch>()
    const { isLoading, isError } = useSelector((state: RootState) => state.user)

    useEffect(() => {
        dispatch(fetchUserById(Number(userId)))
    }, [dispatch, userId])

    const user = useSelector((state: RootState) =>
        selectUserById(state, Number(userId))
    )

    if (isError) {
        return <>
            <p>Something went wrong =(</p>
        </>;
    }

    if (isLoading || !user) {
        return <Loader />;
    }

    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexGrow: 1,
            flexDirection: "column"
        }}>
            <h1 style={{
                marginTop: 0
            }}>Welcome my website {user.website}!</h1>
            <p>Hi. My name is <strong>{user.name}</strong>. I live in <strong>{user.address.city}</strong> and work for <strong>{user.company.name}</strong>.</p>
            <p>You can write to me at <a href={`mailto:${user.email}`}>{user.email}</a> or call me at <a href={`tel:${user.phone}`}>{user.phone}</a>.</p>
        </div>
    )
}