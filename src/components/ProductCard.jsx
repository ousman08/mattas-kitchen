import { useEffect, useRef, useState } from 'react'

export function ProductCard({ product, offset, onAdd }) {
    const [added, setAdded] = useState(false)
    const timer = useRef(null)

    useEffect(() => () => window.clearTimeout(timer.current), [])

    function handleAdd() {
        onAdd(product.id)
        setAdded(true)
        window.clearTimeout(timer.current)
        timer.current = window.setTimeout(() => setAdded(false), 1200)
    }

    return (
        <article className={offset ? 'product-card product-card-offset' : 'product-card'}>
            <div className="product-image">
                <img src={product.image} alt={product.name} loading="lazy" />
            </div>
            <div className="product-meta">
                <div>
                    <h3>{product.name}{product.size ? ` · ${product.size}` : ''}</h3>
                    <p>{product.description}</p>
                    {product.minimumOrder ? (
                        <p className="product-minimum">{product.minimumOrder}</p>
                    ) : null}
                </div>
                <strong>{product.priceLabel}</strong>
            </div>
            <button className={added ? 'add-button added' : 'add-button'} type="button" onClick={handleAdd}>
                {added ? 'Added ✓' : <>Add to bag <span>+</span></>}
            </button>
        </article>
    )
}
