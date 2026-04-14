"use client";

import styles from "./footer.module.css";
import {FaFacebookF, FaViber, FaTelegramPlane} from "react-icons/fa";

export default function FirstOfficeBlock({t}: {
    t: (key: string) => string
}) {
    return (
        <div className={styles.block}>
            <h3 className={styles.title}>
                {t("footer:leftSide.name")}
            </h3>
            <address className={styles.address}>
                Hlavná 68, Košice, B 214, 2. posch.
                <br/>
                040 01, Staré Mesto
            </address>
            <p className={styles.line}>
                {t("footer:phone")}:{" "}
                <a href="tel:+421908365995" className={styles.link}>
                    +421 908 365 995
                </a>
            </p>
            <p className={styles.line}>
                Email:{" "}
                <a href="mailto:centrumH68@kosice.sk" className={styles.link}>
                    centrumH68@kosice.sk
                </a>
            </p>
            <div className={styles.icons}>
              <a className={styles.iconBtn} href="https://www.facebook.com/CentrumPodporyCudzincovKosice" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a className={styles.iconBtn} href="https://t.me/+LjEG_D7cxxA0OTg8" aria-label="Telegram">
                <FaTelegramPlane />
              </a>
              <a className={styles.iconBtn} href="tel:+421908365995" aria-label="Viber">
                <FaViber />
              </a>
            </div>
        </div>
    );
}