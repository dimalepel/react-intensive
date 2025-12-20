import React, {Fragment, useMemo} from "react";

type ItemListProps<T> = {
    items: T[];
    renderItem: (item: T) => React.ReactNode;
    getKey: (item: T) => string | number;
    className?: string;
}

export default function ItemList<T>(props: ItemListProps<T>) {
    const { items, renderItem, getKey, className } = props;

    const renderedItems = useMemo(() => {
        return items.map(item => (
            <Fragment key={getKey(item)}>
                {renderItem(item)}
            </Fragment>
        ));
    }, [items, renderItem, getKey]);

    return (
        <ul className={`${className ?? ""}`}>
            {renderedItems}
        </ul>
    );
}