"use client";

import styles from "./articles.module.css";
import {ReactNode} from "react";

export function ArticleContainer({children}: { children: ReactNode}) {
    return (
        <article className={styles.ArticleContainer}>
            {children}
        </article>
    )
}