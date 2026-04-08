import styles from "./footer.module.css";
import FirstOfficeBlock from "./FirstOfficeBlock";
import WorkHours from "./WorkHours";
import SecondOfficeBlock from "./SecondOfficeBlock";

export function Footer({isHomePage = false, t}: {
    isHomePage?: boolean,
    t: (key: string) => string
}) {
    const year = new Date().getFullYear();

    return (
        <footer className={styles.container}>
            <div className={styles.content}>

                <div className={styles.topGrid}>
                    <FirstOfficeBlock t={t}/>

                    {isHomePage ? (
                        <WorkHours t={t}/>
                    ) : (
                        <SecondOfficeBlock t={t}/>
                    )}
                </div>

                {isHomePage && (
                    <>
                        <hr className={styles.divider}/>
                        <SecondOfficeBlock t={t}/>
                    </>
                )}

                {/* копірайт */}
                <div className={styles.copyRow}>
                    <span> © {year} Magistrát mesta Košice. Všetky práva vyhradené</span>
                </div>

            </div>
        </footer>
    );
}