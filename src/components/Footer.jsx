import Link from 'next/link'
import { contact } from '../data/contact'

export function Footer() {
    return (
        <footer className="site-footer section-pad">
            <div className="footer-brand">
                <img
                    className="footer-logo"
                    src="/img/logo-mattas-kitchen.png"
                    alt="Matta's Kitchen"
                />
                <p>Beautiful food, thoughtfully made.</p>
            </div>
            <div className="footer-links">
                <Link href="/#menu">Menu</Link>
                <Link href="/#occasions">Occasions</Link>
                <Link href="/#about">About</Link>
                <a href={contact.instagram} target="_blank" rel="noopener">Instagram</a>
                <Link href="/politica-privacidad">Privacy</Link>
            </div>
            <div className="footer-bottom">
                <span>© 2026 Matta's Kitchen</span>
                <span>Made for moments worth sharing.</span>
            </div>
        </footer>
    )
}
