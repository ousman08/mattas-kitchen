export function Hero() {
    return (
        <section className="hero section-pad">
            <div className="hero-copy">
                <p className="eyebrow">Catering · Desserts · Drinks</p>
                <h1>Beautiful food,<br /><em>thoughtfully made.</em></h1>
                <p className="hero-text">Delicious catering for birthdays, weddings, gatherings and every little celebration in between.</p>
                <a className="primary-button" href="#menu">Order now <span>↗</span></a>
            </div>
            <div className="hero-visual">
                <div className="hero-image">
                    <img
                        src="/img/hero-catering.jpeg"
                        alt="Catering de Matta's Kitchen — comida para compartir"
                    />
                </div>
                <div className="hero-note">Made with care<br />for your table.</div>
            </div>
        </section>
    )
}
