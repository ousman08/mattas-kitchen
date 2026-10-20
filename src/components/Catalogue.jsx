'use client'

import { useState } from 'react'
import { categories, products } from '../data/products'
import { ProductCard } from './ProductCard'

export function Catalogue({ filter, onFilter, onAdd }) {
    const visible = filter === 'All'
        ? products
        : products.filter((product) => product.category === filter)

    return (
        <section className="favourites section-pad" id="menu">
            <div className="section-heading">
                <div>
                    <p className="eyebrow">Our favourites</p>
                    <h2>Made to share.</h2>
                </div>
            </div>
            <div className="filter-bar" role="group" aria-label="Filter products by category">
                {categories.map((category) => (
                    <button
                        key={category}
                        type="button"
                        className={filter === category ? 'filter-button active' : 'filter-button'}
                        aria-pressed={filter === category}
                        onClick={() => onFilter(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>
            <div className="product-grid">
                {visible.map((product, index) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        offset={index % 2 === 1}
                        onAdd={onAdd}
                    />
                ))}
            </div>
        </section>
    )
}
