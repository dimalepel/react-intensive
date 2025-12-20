import { useState, useCallback } from "react";
import type { CommentDTO } from '../../../entities/comment/model/types.ts';
import styles from './CommentList.module.css'
import Button from "../../../shared/ui/Button/Button.tsx";
import CommentCard from "../../../entities/comment/ui/CommentCard.tsx";
import ItemList from "../../../shared/ui/ItemList/ItemList.tsx";

interface CommentListProps {
    comments: CommentDTO[];
}

export default function CommentList({ comments }: CommentListProps) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = useCallback(() => {
        setIsOpen(prev => !prev);
    }, []);

    return (
        <div>
            <Button onClick={toggle}>
                {isOpen ? "Скрыть комментарии" : "Показать комментарии"}
            </Button>

            {isOpen && (
                <ItemList
                    items={comments}
                    getKey={comment => comment.id}
                    className={styles.comments}
                    renderItem={comment => (
                        <CommentCard comment={comment} />
                    )}
                />
            )}
        </div>
    );
}