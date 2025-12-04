import { useState, useCallback } from "react";
import type { Comment } from '../../../entities/comment/model/Comment.ts';
import styles from './CommentList.module.css'
import Button from "../../../shared/ui/Button/Button.tsx";
import CommentCard from "../../../entities/comment/ui/CommentCard.tsx";

interface CommentListProps {
    comments: Comment[];
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
                <div className={styles.comments}>
                    {comments.map((comment) => (
                        <CommentCard comment={comment} key={comment.id}/>
                    ))}
                </div>
            )}
        </div>
    );
}