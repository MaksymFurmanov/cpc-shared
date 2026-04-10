import styles from "./articles.module.css";
import {Gallery} from "./Gallery";
import {useMemo} from "react";
import ReactMarkdown from "react-markdown";
import {localizeArticle} from "../../utils";
import {ArticleType, MultilingualArticle} from "../../types";

export function Article({
                            articleData,
                            type,
                            lang,
                            t,
                            onBack,
                            page = 1,
                        }: {
    articleData: MultilingualArticle,
    type: ArticleType,
    lang: string,
    t: (key: string) => string,
    onBack?: (type: ArticleType, page: number) => void,
    page?: number
}) {
    const {title, text, date} = useMemo(
        () => localizeArticle(articleData, lang),
        [articleData, lang]
    );

    const backHandler = () => {
        onBack?.(type, page);
    };

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
                    <ReactMarkdown>{text}</ReactMarkdown>
                </p>
            </div>
        </article>
    );
}