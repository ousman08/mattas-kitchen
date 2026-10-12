import { useEffect, useRef } from 'react'
import { contact } from '../data/contact'

export function MobileNav({ open, onClose }) {
    const closeRef = useRef(null)

    useEffect(() => {
        if (open) closeRef.current?.focus()
    }, [open])

    if (!open) return null

    return (
        <div className="mobile-nav" role="dialog" aria-modal="true" aria-label="Menu">
            <div className="mobile-nav-overlay" onClick={onClose} />
            <nav className="mobile-nav-panel" id="mobile-nav" aria-label="Mobile navigation">
                <button
                    className="mobile-nav-close"
                    type="button"
                    aria-label="Close menu"
                    onClick={onClose}
                    ref={closeRef}
                >
                    ✕
                </button>
                <a href="#menu" onClick={onClose}>Menu</a>
                <a href="#occasions" onClick={onClose}>Occasions</a>
                <a href="#about" onClick={onClose}>About</a>
                <a href="#gallery" onClick={onClose}>Gallery</a>
                <a className="primary-button" href="#menu" onClick={onClose}>Order now</a>
                <a
                    className="mobile-nav-instagram"
                    href={contact.instagram}
                    target="_blank"
                    rel="noopener"
                    onClick={onClose}
                >
                    Instagram ↗
                </a>
            </nav>
        </div>
    )
}
