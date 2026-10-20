'use client'

const categoryCards = [
    {
        title: 'Boxes',
        eyebrow: 'Made for sharing',
        image: '/img/TEMP-category-boxes.jpeg',
    },
    {
        title: 'Desserts',
        eyebrow: 'Sweet little moments',
        image: '/img/TEMP-category-desserts.jpeg',
    },
    {
        title: 'Juices',
        eyebrow: 'Fresh & vibrant',
        image: '/img/TEMP-category-juices.jpeg',
    },
]

export function CategoryCards({ onSelect }) {
    return (
        <section className="categories section-pad" id="catalogue">
            <div className="centered-heading">
                <p className="eyebrow">Explore the menu</p>
                <h2>Something for every table.</h2>
            </div>
            <div className="category-grid">
                {categoryCards.map((card) => (
                    <a
                        key={card.title}
                        className="category-card"
                        href="#menu"
                        onClick={() => onSelect(card.title)}
                    >
                        <img src={card.image} alt={card.title} loading="lazy" />
                        <span className="category-eyebrow">{card.eyebrow}</span>
                        <h3>{card.title}</h3>
                        <span className="category-arrow">↗</span>
                    </a>
                ))}
            </div>
        </section>
    )
}
