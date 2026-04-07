import styles from "./footer.module.css";

export default function WorkHours({t}: {
    t: (key: string) => string
}) {
    return (
        <div className={styles.block}>
            <h3 className={styles.title}>{t("footer:openingHours")}</h3>
            <ul className={styles.hours}>
                <li>
                    <span>{t("footer:week.monday")}</span><span>8:00 – 15:00 {t("common:hoursShort")}</span>
                </li>
                <li>
                    <span>{t("footer:week.tuesday")}</span><span>8:00 – 15:00 {t("common:hoursShort")}</span>
                </li>
                <li>
                    <span>{t("footer:week.wednesday")}</span><span>8:00 – 16:00 {t("common:hoursShort")}</span>
                </li>
                <li>
                    <span>{t("footer:week.thursday")}</span><span>8:00 – 15:00 {t("common:hoursShort")}</span>
                </li>
                <li>
                    <span>{t("footer:week.friday")}</span><span>8:00 – 14:00 {t("common:hoursShort")}</span>
                </li>
            </ul>
            <p className={styles.note}>{t("footer:lunchBreak")}{/*Obedňajšia prestávka*/}: 12:00 – 12:30 h.</p>
        </div>
    );
}