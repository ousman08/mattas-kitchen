import { Link } from 'react-router-dom'
import { contact } from '../data/contact'

// Política de privacidad (UK GDPR) — 1 página básica.
// ⚠️ Reemplazar los marcadores [TO ADD] con los datos reales del negocio
// antes de publicar: nombre real del titular y dirección postal en UK.

export function PrivacyPolicy() {
    return (
        <div className="site-shell">
            <main className="legal-page section-pad">
                <Link className="legal-back" to="/">← Back to the shop</Link>
                <h1 className="legal-title">Privacy policy</h1>
                <p className="legal-updated">Last updated: October 2026</p>

                <section>
                    <h2>Who we are</h2>
                    <p>
                        Matta's Kitchen is a small food business based in the UK.
                        The data controller is: <strong>[TO ADD: your full legal name]</strong>,
                        trading as Matta's Kitchen, located at <strong>[TO ADD: UK postal address]</strong>.
                        You can contact us at <a href={`mailto:${contact.email}`}>{contact.email}</a> or on{' '}
                        <a href={`tel:${contact.phone}`}>{contact.phone}</a>.
                    </p>
                </section>

                <section>
                    <h2>What data we collect</h2>
                    <p>When you place an order through this website, we collect only what you type into the order form:</p>
                    <ul>
                        <li>Your name</li>
                        <li>Your phone number</li>
                        <li>The event date (optional)</li>
                        <li>Any notes you add (optional)</li>
                    </ul>
                    <p>We do not collect any data automatically — this website has no analytics, no advertising cookies and no user accounts.</p>
                </section>

                <section>
                    <h2>How we use your data</h2>
                    <p>
                        We use your details for one purpose only: to prepare your order, send it to us via WhatsApp
                        and call you to confirm the booking. Our lawful basis under the UK GDPR is the performance
                        of a contract (or steps taken at your request before entering into one).
                    </p>
                    <p>We do not use your data for marketing, we do not sell it, and we do not share it for anyone else's purposes.</p>
                </section>

                <section>
                    <h2>Who we share it with</h2>
                    <ul>
                        <li>
                            <strong>WhatsApp (Meta)</strong> — when you tap “Send by WhatsApp”, your order summary
                            (including your name and phone) is shared with WhatsApp so we can receive it.
                            See <a href="https://www.whatsapp.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">WhatsApp's privacy policy</a>.
                        </li>
                        <li>
                            <strong>Vercel</strong> — our website hosting provider. Vercel processes technical data
                            (like your IP address) on our behalf to deliver the site. See{' '}
                            <a href="https://vercel.com/legal/privacy-notice" target="_blank" rel="noopener noreferrer">Vercel's privacy notice</a>.
                        </li>
                    </ul>
                </section>

                <section>
                    <h2>How long we keep it</h2>
                    <p>
                        We keep your order details only for as long as needed to handle your booking and
                        meet our legal record-keeping duties. We then delete them.
                    </p>
                </section>

                <section>
                    <h2>Your rights</h2>
                    <p>Under the UK GDPR you can ask us to:</p>
                    <ul>
                        <li>access the personal data we hold about you</li>
                        <li>correct anything inaccurate</li>
                        <li>delete your data</li>
                        <li>stop or restrict how we use it</li>
                    </ul>
                    <p>
                        To do so, contact us using the details above. You also have the right to complain to the
                        UK Information Commissioner's Office (ICO){' '}
                        <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer">ico.org.uk</a>.
                    </p>
                </section>

                <section>
                    <h2>Cookies and local storage</h2>
                    <p>
                        This website does not use tracking or analytics cookies. The only thing stored on your
                        device is the contents of your shopping bag (in your browser's local storage), which is
                        strictly necessary for the site to work and is cleared when you send your order.
                    </p>
                </section>

                <section>
                    <h2>Changes to this policy</h2>
                    <p>We may update this page if how we handle orders changes. The date at the top shows when it was last updated.</p>
                </section>
            </main>
        </div>
    )
}
