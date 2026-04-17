import styles from "./articles.module.css";
import { localizeArticle } from "../../utils/localizeArticle";
import { MultilingualArticle } from "../../types";
import {ComponentType} from "react";

type ContentProps = {
    text: string,
}

export function ArticleText({articleData, lang, Content,}: {
    articleData: MultilingualArticle,
    lang: string,
    Content: ComponentType<ContentProps>
}) {
    const { title, text, date } = localizeArticle(articleData, lang);

    return (
        <div className={styles.textContent}>
            <h2 className={styles.articleTitle}>{title}</h2>

            <b className={styles.date}>{date}</b>

            <div className={styles.articleText}>
                <Content text={text} />
            </div>
        </div>
    );
}