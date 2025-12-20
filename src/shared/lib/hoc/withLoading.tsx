import type {ComponentType} from "react";
import Loader from "../../ui/Loader/Loader.tsx";

type WithLoadingProps = {
    isLoading: boolean;
}

export default function withLoading<P extends object>(
    WrappedComponent: ComponentType<P>
) {
    return ({isLoading, ...props}: P & WithLoadingProps) => {
        if (isLoading) {
            return <Loader/>;
        }

        return <WrappedComponent {...(props as P)} />;
    };
}