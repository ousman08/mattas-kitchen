'use client'

import { useEffect, useState } from 'react'
import { products } from '../data/products'
import { useCart } from '../hooks/useCart'
import { Header } from './Header'
import { MobileNav } from './MobileNav'
import { Hero } from './Hero'
import { Intro } from './Intro'
import { Catalogue } from './Catalogue'
import { CategoryCards } from './CategoryCards'
import { Occasions } from './Occasions'
import { About } from './About'
import { Gallery } from './Gallery'
import { FinalCta } from './FinalCta'
import { Footer } from './Footer'
import { CartDrawer } from './CartDrawer'

export function Home() {
    const [filter, setFilter] = useState('All')
    const [menuOpen, setMenuOpen] = useState(false)
    const [cartOpen, setCartOpen] = useState(false)
    const cart = useCart(products)

    useEffect(() => {
        document.body.style.overflow = menuOpen || cartOpen ? 'hidden' : ''
        return () => {
            document.body.style.overflow = ''
        }
    }, [menuOpen, cartOpen])

    useEffect(() => {
        function onEscape(event) {
            if (event.key === 'Escape') {
                setMenuOpen(false)
                setCartOpen(false)
            }
        }
        window.addEventListener('keydown', onEscape)
        return () => window.removeEventListener('keydown', onEscape)
    }, [])

    return (
        <div className="site-shell">
            <Header
                count={cart.count}
                menuOpen={menuOpen}
                onOpenMenu={() => setMenuOpen(true)}
                onOpenCart={() => setCartOpen(true)}
            />
            <MobileNav open={menuOpen} onClose={() => setMenuOpen(false)} />

            <main id="top">
                <Hero />
                <Intro />
                <Catalogue filter={filter} onFilter={setFilter} onAdd={cart.addToCart} />
                <CategoryCards onSelect={setFilter} />
                <Occasions />
                <About />
                <Gallery />
                <FinalCta />
            </main>

            <Footer />

            <CartDrawer
                open={cartOpen}
                onClose={() => setCartOpen(false)}
                lines={cart.lines}
                count={cart.count}
                total={cart.total}
                changeQuantity={cart.changeQuantity}
                removeLine={cart.removeLine}
                clearCart={cart.clearCart}
            />
        </div>
    )
}
