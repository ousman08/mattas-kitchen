import { useEffect, useState } from 'react'

const STORAGE_KEY = 'mattas-kitchen-cart'

export function useCart(products) {
    const [cart, setCart] = useState(() => {
        try {
            const saved = JSON.parse(localStorage.getItem(STORAGE_KEY))
            return saved && typeof saved === 'object' && !Array.isArray(saved) ? saved : {}
        } catch {
            return {}
        }
    })

    useEffect(() => {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(cart))
        } catch {
            // localStorage no disponible: el carrito funciona en memoria
        }
    }, [cart])

    const addToCart = (id) =>
        setCart((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }))

    const changeQuantity = (id, delta) =>
        setCart((prev) => {
            const next = (prev[id] || 0) + delta
            if (next > 0) return { ...prev, [id]: next }
            const { [id]: removed, ...rest } = prev
            return rest
        })

    const removeLine = (id) =>
        setCart((prev) => {
            const { [id]: removed, ...rest } = prev
            return rest
        })

    const clearCart = () => setCart({})

    const lines = Object.entries(cart)
        .map(([id, quantity]) => {
            const product = products.find((p) => p.id === id)
            return product ? { product, quantity } : null
        })
        .filter(Boolean)

    const count = lines.reduce((total, line) => total + line.quantity, 0)
    const total = lines.reduce((sum, line) => sum + line.product.price * line.quantity, 0)

    return { lines, count, total, addToCart, changeQuantity, removeLine, clearCart }
}
