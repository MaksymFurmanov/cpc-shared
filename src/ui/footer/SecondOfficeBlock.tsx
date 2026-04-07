import styles from "./footer.module.css";

export default function SecondOfficeBlock({t}: {
    t: (key: string) => string
}) {
    return (
        <div className={styles.bottomGrid}>
            <div className={styles.block}>
                <h3 className={styles.title}>{t("footer:rightSide.name")}</h3>
                <address className={styles.address}>
                    Tr. SNP 48/A,
                    <br/>
                    04011, Košice-Západ
                </address>
                <p className={styles.line}>
                    {t("footer:phone")}:{" "}
                    <a href="tel:+421556419190" className={styles.link}>
                        +421 55 64 19 190
                    </a>
                </p>
            </div>
        </div>
    );
}