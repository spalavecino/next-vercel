import { ActiveLink } from "./ActiveLink";
import styles from './NavBar.module.css'

const menuItems = [
    { text: "Home", href: "/" },
    { text: "About", href: "/about" },
    { text: "Contact", href: "/contact" },
    { text: "Pricing", href: "/pricing" },
  ]

export const NavBar = () => (
    <nav className={styles.menu}>
        {
            menuItems.map((({ text, href }) => (
                <ActiveLink text={text} href={href} key={href} />
            )))
        }
    </nav>
)