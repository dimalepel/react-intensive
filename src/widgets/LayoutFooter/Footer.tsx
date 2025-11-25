import styles from './Footer.module.css'
import Button from "../../shared/ui/Button/Button.tsx";
import {createPortal} from "react-dom";
import Modal from "../../shared/ui/Modal/Modal.tsx";
import {useState} from "react";

export default function Footer() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <footer className={styles.footer}>
                <div className={'container'}>
                    <p className={styles.footer__text}>&copy; Copyright 2025</p>
                    <a className={styles.footer__link} href="https://github.com/dimalepel/react-intensive" target={'_blank'}>Github Repo</a>
                    <Button onClick={() => setShowModal(true)}>
                        О проекте
                    </Button>
                </div>
            </footer>

            {showModal && createPortal(
                <Modal onClose={() => setShowModal(false)}>
                    <p>
                        <strong>Добро пожаловать на наш интенсив по React!<br/></strong>Это вторая ступень при подготовке к поступлению в лабораторию Астон.</p>
                    <p>
                        <strong>За время обучения вы рассмотрите такие темы как:</strong>
                    </p>
                    <ol>
                        <li>Введение в React и настройка окружения</li>
                        <li>Продвинутый React</li>
                        <li>Паттерны в React</li>
                        <li>Хранилища</li>
                        <li>Типизация</li>
                        <li>Общая теория</li>
                    </ol>
                    <p>Видеолекции подготовлены с сохранением наиболее релевантных комментариев и часто задаваемых вопросов других студентов, чтобы вы могли сразу найти ответы.</p>
                    <p>Между теоретическими лекциями предусмотрено выполнение домашних заданий и практические онлайн-сессии с преподавателями, на которых вы сможете задать все вопросы, разобрать наиболее сложные аспекты и выполнить дополнительные задания для формирования навыков программирования на React.</p>
                    <p>Не стесняйтесь задавать вопросы и делиться своими мыслями — мы здесь, чтобы поддержать вас на каждом этапе обучения. Давайте вместе сделаем ваш образовательный путь интересным и продуктивным!</p>
                    <h3>Преподаватель курса</h3>
                    <p><strong>Мохирев Александр</strong><br/>React Developer</p>
                </Modal>,
                document.body
            )}
        </>
    )
}