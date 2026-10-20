'use client'

export function Header({ count, menuOpen, onOpenMenu, onOpenCart }) {
    return (
        <header className="site-header">
            <a className="brand" href="#top" aria-label="Matta's Kitchen — back to top">
                <span className="brand-script">Matta's</span>
                <span className="brand-kitchen">KITCHEN</span>
            </a>
            <nav className="desktop-nav" aria-label="Main navigation">
                <a href="#menu">Menu</a>
                <a href="#occasions">Occasions</a>
                <a href="#about">About</a>
                <a href="#gallery">Gallery</a>
            </nav>
            <div className="header-actions">
                <a className="order-link" href="#menu">Order now</a>
                <button className="cart-button" type="button" onClick={onOpenCart}>
                    Bag <span className="cart-count" aria-live="polite">{count}</span>
                </button>
                <button
                    className="menu-button"
                    type="button"
                    aria-label="Open menu"
                    aria-expanded={menuOpen}
                    aria-controls="mobile-nav"
                    onClick={onOpenMenu}
                >
                    ☰
                </button>
            </div>
        </header>
    )
}
