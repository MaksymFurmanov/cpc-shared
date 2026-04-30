"use client";

import styles from "./articles.module.css";
import {ReactNode} from "react";

export function ArticleText({title, date, children,}: {
    title: string,
    date: string,
    children: ReactNode
}) {
    return (
        <div className={styles.textContent}>
            <h2 className={styles.articleTitle}>{title}</h2>

            <b className={styles.date}>{date}</b>

            <div className={styles.articleText}>
                {children}
            </div>
        </div>
    );
}