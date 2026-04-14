"use client";

import styles from "./articles.module.css";
import {Gallery} from "./Gallery";
import {useMemo} from "react";
import ReactMarkdown from "react-markdown";
import {localizeArticle} from "../../utils";
import {ArticleType, MultilingualArticle} from "../../types";

export function Article({
                            articleData,
                            lang,
                            t,
                            onBack,
                        }: {
    articleData: MultilingualArticle,
    lang: string,
    t: (key: string) => string,
    onBack: (type: ArticleType) => void,
}) {
    const {title, text, date} = useMemo(
        () => localizeArticle(articleData, lang),
        [articleData, lang]
    );

    const backHandler = () => {
        onBack(articleData.type);
    }

    return (
        <article className={styles.article}>
            <button className={styles.backBtn} onClick={backHandler}>
                ← &nbsp;{t("articles:backBtn")}
            </button>

            <div>
                <Gallery images={articleData.images} />
            </div>

            <div className={styles.textContent}>
                <h2 className={styles.articleTitle}>{title}</h2>

                <b className={styles.date}>{date}</b>

                <p className={styles.articleText}>
                    <ReactMarkdown>
                        {text}
                    </ReactMarkdown>
                </p>
            </div>
        </article>
    );
}