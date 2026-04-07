import styles from "./header.module.css";
import navLinks from "./nav-links";

export default function NavBar({t, appNavigate}: {
    t: (key: string) => string,
    appNavigate: (link: string) => void
}) {
    return (
        <nav className={styles.links}>
            {navLinks.map((link, index) => {
                return (
                    <p key={index}
                       onClick={() =>
                           appNavigate(link.url)
                       }
                    className={"not-selectable"}>
                        {t(link.label)}
                    </p>
                )
            })}
        </nav>
    );
}