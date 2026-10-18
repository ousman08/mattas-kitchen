'use client'

import { useState } from 'react'

export function OrderForm({ lines, total, onBack, onConfirmed }) {
    const [form, setForm] = useState({ name: '', contact: '', date: '', notes: '' })
    const [errors, setErrors] = useState({})

    function update(field) {
        return (event) => {
            setForm((prev) => ({ ...prev, [field]: event.target.value }))
            setErrors((prev) => ({ ...prev, [field]: undefined }))
        }
    }

    function handleSubmit(event) {
        event.preventDefault()
        const next = {}
        if (!form.name.trim()) next.name = 'Required'
        if (!form.contact.trim()) next.contact = 'Required'
        setErrors(next)
        if (Object.keys(next).length === 0) onConfirmed(form)
    }

    return (
        <form className="order-form" onSubmit={handleSubmit} noValidate>
            <button className="order-back" type="button" onClick={onBack}>
                ← Back to bag
            </button>
            <div className="field">
                <label htmlFor="order-name">Name *</label>
                <input
                    id="order-name"
                    type="text"
                    value={form.name}
                    onChange={update('name')}
                    autoComplete="name"
                />
                {errors.name && <p className="field-error">{errors.name}</p>}
            </div>
            <div className="field">
                <label htmlFor="order-contact">Phone *</label>
                <input
                    id="order-contact"
                    type="tel"
                    value={form.contact}
                    onChange={update('contact')}
                    autoComplete="tel"
                />
                {errors.contact && <p className="field-error">{errors.contact}</p>}
            </div>
            <div className="field">
                <label htmlFor="order-date">Event date</label>
                <input
                    id="order-date"
                    type="date"
                    value={form.date}
                    onChange={update('date')}
                />
            </div>
            <div className="field">
                <label htmlFor="order-notes">Notes</label>
                <textarea
                    id="order-notes"
                    rows="3"
                    value={form.notes}
                    onChange={update('notes')}
                />
            </div>
            <p className="order-privacy-note">
                We only use your details to process your order.{' '}
                <a href="/politica-privacidad" target="_blank" rel="noopener">Privacy policy</a>
            </p>
            <div className="order-summary-lines">
                {lines.map(({ product, quantity }) => (
                    <div key={product.id}>
                        <span>{quantity}× {product.name}{product.size ? ` ${product.size}` : ''}</span>
                        <span> — £{(product.price * quantity).toFixed(2)}</span>
                    </div>
                ))}
                <div className="order-summary-total">
                    <span>Total</span>
                    <span>£{total.toFixed(2)}</span>
                </div>
            </div>
            <button className="primary-button" type="submit">
                Review order <span>↗</span>
            </button>
        </form>
    )
}
