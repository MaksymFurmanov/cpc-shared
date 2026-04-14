"use client";

import styles from './header.module.css';
import NavBar from "./NavBar";
import SidebarButton from "./SidebarButton";
import LanguageSwitcher from "./LanguageSwitcher";
import Socials from "./Socials";
import clsx from "clsx";

export function Header({
                                   sidebarToggle,
                                   toggleSidebar,
                                   handleToHomepage,
                                   appNavigate,
                                   isHomepage,
                                   scrolled,
                                   t,
                                   lang,
                                   onLangChange
                               }: {
    sidebarToggle: boolean,
    toggleSidebar: (toggle: boolean) => void,
    handleToHomepage: () => void,
    appNavigate: (link: string) => void,
    isHomepage: boolean,
    scrolled: boolean,
    t: (key: string) => string,
    lang: string,
    onLangChange: (lang: string) => void
}) {
    return (
        <header style={{backgroundColor: isHomepage ? "transparent" : undefined}}
                className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}
        >
            <div className={clsx(styles.logo, "not-selectable")}
                 onClick={handleToHomepage}>
                <img src={"/logo.png"}
                     alt={""}
                     className={styles.cpcLogo}
                />
                <img src={"/logo-white.svg"}
                     alt={"Logo"}
                     className={styles.kosiceLogo}
                />
            </div>
            <NavBar t={t} appNavigate={appNavigate}/>
            <div className={styles.buttonsRight}>
                <LanguageSwitcher lang={lang}
                                  onLangChange={onLangChange}
                />
                <Socials/>
                <SidebarButton sidebarToggle={sidebarToggle}
                               toggleSidebar={toggleSidebar}
                />
            </div>
        </header>
    );
}