import { useEffect, useState } from 'react'
import { products } from './data/products'
import { useCart } from './hooks/useCart'
import { Header } from './components/Header'
import { MobileNav } from './components/MobileNav'
import { Hero } from './components/Hero'
import { Intro } from './components/Intro'
import { Catalogue } from './components/Catalogue'
import { CategoryCards } from './components/CategoryCards'
import { Occasions } from './components/Occasions'
import { About } from './components/About'
import { Gallery } from './components/Gallery'
import { FinalCta } from './components/FinalCta'
import { Footer } from './components/Footer'
import { CartDrawer } from './components/CartDrawer'
import './App.css'

export default function App() {
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
