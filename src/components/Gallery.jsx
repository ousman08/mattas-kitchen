import { contact } from '../data/contact'

const galleryItems = [
    { src: '/img/Captura desde 2026-08-25 17-49-24.png', alt: "Matta's Premium Box" },
    { src: '/img/Captura desde 2026-08-25 17-49-39.png', alt: 'Fruit Platter' },
    { src: '/img/Captura desde 2026-08-25 17-49-49.png', alt: 'Chakiri' },
    { src: '/img/IMG_8334.jpeg', alt: 'Bissap 1L' },
]

export function Gallery() {
    return (
        <section className="gallery section-pad" id="gallery">
            <div className="section-heading">
                <div>
                    <p className="eyebrow">Follow the table</p>
                    <h2>@mattaskitchen</h2>
                </div>
                <a
                    className="text-link"
                    href={contact.instagram}
                    target="_blank"
                    rel="noopener"
                >
                    Instagram ↗
                </a>
            </div>
            <div className="gallery-grid">
                {galleryItems.map((item) => (
                    <div className="gallery-item" key={item.src}>
                        <img src={item.src} alt={item.alt} loading="lazy" />
                    </div>
                ))}
            </div>
        </section>
    )
}
