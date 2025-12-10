import styles from './Footer.module.css'
import Button from "../../shared/ui/Button/Button.tsx";
import {createPortal} from "react-dom";
import Modal from "../../shared/ui/Modal/Modal.tsx";
import React, {useState} from "react";

export default function Footer() {
    const [showModal, setShowModal] = useState(false);

    const linksList = [
        {
            label: 'React Documentation',
            url: 'https://react.dev/'
        },
        {
            label: 'Api Documentation',
            url: 'https://jsonplaceholder.typicode.com/guide/'
        },
        {
            label: 'Github Repo',
            url: 'https://github.com/dimalepel/react-intensive'
        }
    ];

    return (
        <>
            <footer className={styles.footer}>
                <div className={`${styles.footer__container} container`}>
                    <p className={styles.footer__text}>&copy; Copyright 2025</p>
                    <div className={styles.footer__links}>
                        {linksList.map((link, index) => (
                            <React.Fragment key={index}>
                                <a className={styles.footer__link} href={ link.url } target={'_blank'}>{ link.label }</a>
                            </React.Fragment>
                        ))}
                    </div>
                    <Button onClick={() => setShowModal(true)}>
                        О проекте
                    </Button>
                </div>
            </footer>

            {showModal && createPortal(
                <Modal>
                    <Modal.Header>
                        О проекте
                        <Modal.CloseButton onClose={() => setShowModal(false)} />
                    </Modal.Header>
                    <Modal.Body>
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
                    </Modal.Body>
                    <Modal.Footer>
                        <h3>Преподаватель курса</h3>
                        <p><strong>Мохирев Александр</strong><br/>React Developer</p>
                    </Modal.Footer>
                </Modal>,
                document.body
            )}
        </>
    )
}