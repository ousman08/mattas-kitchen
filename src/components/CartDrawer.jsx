'use client'

import { useEffect, useRef, useState } from 'react'
import { contact } from '../data/contact'
import { OrderForm } from './OrderForm'

function buildSummary(lines, total, form) {
    const items = lines.map(({ product, quantity }) =>
        `${quantity}x ${product.name}${product.size ? ` ${product.size}` : ''} — £${(product.price * quantity).toFixed(2)}`
    )
    return [
        "Order — Matta's Kitchen",
        '----------------------------',
        ...items,
        '----------------------------',
        `Total: £${total.toFixed(2)}`,
        '',
        `Name: ${form.name.trim()}`,
        `Contact: ${form.contact.trim()}`,
        form.date ? `Event date: ${form.date}` : null,
        form.notes.trim() ? `Notes: ${form.notes.trim()}` : null,
    ].filter(Boolean).join('\n')
}

export function CartDrawer({ open, onClose, lines, count, total, changeQuantity, removeLine, clearCart }) {
    const [step, setStep] = useState('cart')
    const [summary, setSummary] = useState('')
    const closeRef = useRef(null)

    useEffect(() => {
        if (open) {
            setStep('cart')
            closeRef.current?.focus()
        }
    }, [open])

    if (!open) return null

    function handleConfirmed(form) {
        setSummary(buildSummary(lines, total, form))
        clearCart()
        setStep('done')
    }

    return (
        <div className="cart-overlay" onClick={onClose}>
            <div
                className="cart-drawer"
                role="dialog"
                aria-modal="true"
                aria-label="Shopping bag"
                onClick={(event) => event.stopPropagation()}
            >
                <div className="cart-header">
                    <h2>{step === 'cart' ? `Bag (${count})` : step === 'form' ? 'Your order' : 'Order ready'}</h2>
                    <button
                        className="cart-close"
                        type="button"
                        aria-label="Close bag"
                        onClick={onClose}
                        ref={closeRef}
                    >
                        ✕
                    </button>
                </div>

                {step === 'cart' && (
                    lines.length === 0 ? (
                        <div className="cart-empty">
                            <p>Your bag is empty.<br />Add something delicious from the menu.</p>
                        </div>
                    ) : (
                        <>
                            <div className="cart-lines">
                                {lines.map(({ product, quantity }) => (
                                    <div className="cart-line" key={product.id}>
                                        <img className="cart-line-thumb" src={product.image} alt="" />
                                        <div className="cart-line-info">
                                            <h3>{product.name}{product.size ? ` · ${product.size}` : ''}</h3>
                                            <p>{product.priceLabel} each</p>
                                        </div>
                                        <div className="cart-line-side">
                                            <strong className="cart-line-subtotal">
                                                £{(product.price * quantity).toFixed(2)}
                                            </strong>
                                            <div className="qty-controls">
                                                <button
                                                    className="qty-button"
                                                    type="button"
                                                    aria-label={`Decrease ${product.name} quantity`}
                                                    onClick={() => changeQuantity(product.id, -1)}
                                                >
                                                    −
                                                </button>
                                                <span className="qty-value">{quantity}</span>
                                                <button
                                                    className="qty-button"
                                                    type="button"
                                                    aria-label={`Increase ${product.name} quantity`}
                                                    onClick={() => changeQuantity(product.id, 1)}
                                                >
                                                    +
                                                </button>
                                            </div>
                                            <button
                                                className="cart-line-remove"
                                                type="button"
                                                onClick={() => removeLine(product.id)}
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="cart-footer">
                                <div className="cart-total">
                                    <span>Total</span>
                                    <strong>£{total.toFixed(2)}</strong>
                                </div>
                                <button className="primary-button" type="button" onClick={() => setStep('form')}>
                                    Continue <span>↗</span>
                                </button>
                            </div>
                        </>
                    )
                )}

                {step === 'form' && (
                    <OrderForm
                        lines={lines}
                        total={total}
                        onBack={() => setStep('cart')}
                        onConfirmed={handleConfirmed}
                    />
                )}

                {step === 'done' && (
                    <div className="order-done">
                        <h3>Thank you!</h3>
                        <p className="order-done-note">
                            Your order is almost there. Follow these two steps to confirm it:
                        </p>
                        <ol className="order-steps">
                            <li>
                                <strong>Send your order via WhatsApp</strong> — it arrives written down, ready for us to review.
                            </li>
                            <li>
                                <strong>Call us to confirm</strong> — we'll check availability and dates with you. Your booking is only confirmed after the call.
                            </li>
                        </ol>
                        <div className="order-done-summary">{summary}</div>
                        <div className="order-done-actions">
                            <a
                                className="primary-button"
                                href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(summary)}`}
                                target="_blank"
                                rel="noopener"
                            >
                                1. Send by WhatsApp <span>↗</span>
                            </a>
                            <a
                                className="text-link-button"
                                href={`tel:${contact.phone}`}
                            >
                                2. Call to confirm <span>↗</span>
                            </a>
                        </div>
                        <p className="order-done-note">
                            Contact details are test data — replace them with the real business details.
                        </p>
                    </div>
                )}
            </div>
        </div>
    )
}
