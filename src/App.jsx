import './App.css'

const products = [
  { name: 'Regular Box', price: '£25' },
  { name: 'Large Box', price: '£35' },
  { name: "Matta's Premium Box", price: '£40' },
]

const categories = [
  { title: 'Boxes', eyebrow: 'Made for sharing' },
  { title: 'Desserts', eyebrow: 'Sweet little moments' },
  { title: 'Juices', eyebrow: 'Fresh & vibrant' },
]

function App() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top"><span className="brand-script">Matta's</span><span className="brand-kitchen">KITCHEN</span></a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#menu">Menu</a><a href="#occasions">Occasions</a><a href="#about">About</a><a href="#gallery">Gallery</a>
        </nav>
        <div className="header-actions">
          <a className="order-link" href="#menu">Order now</a>
          <button className="cart-button" type="button">Bag <span>0</span></button>
          <button className="menu-button" type="button" aria-label="Open menu">☰</button>
        </div>
      </header>

      <main id="top">
        <section className="hero section-pad">
          <div className="hero-copy">
            <p className="eyebrow">Catering · Desserts · Drinks</p>
            <h1>Beautiful food,<br /><em>thoughtfully made.</em></h1>
            <p className="hero-text">Delicious catering for birthdays, weddings, gatherings and every little celebration in between.</p>
            <a className="primary-button" href="#menu">Order now <span>↗</span></a>
          </div>
          <div className="hero-visual">
            <div className="hero-image image-placeholder"><span>Food photography</span></div>
            <div className="hero-note">Made with care<br />for your table.</div>
          </div>
        </section>

        <section className="intro section-pad">
          <p className="eyebrow">Welcome to Matta's</p>
          <h2>Catering that makes<br /><em>the table memorable.</em></h2>
          <p>From beautifully arranged boxes to little dessert shots and refreshing drinks, every order is prepared to feel special.</p>
        </section>

        <section className="favourites section-pad" id="menu">
          <div className="section-heading"><div><p className="eyebrow">Our favourites</p><h2>Made to share.</h2></div><a className="text-link" href="#catalogue">View full menu ↗</a></div>
          <div className="product-grid">
            {products.map((product, index) => (
              <article className={index === 1 ? 'product-card product-card-offset' : 'product-card'} key={product.name}>
                <div className="product-image image-placeholder"><span>{product.name}</span></div>
                <div className="product-meta"><div><h3>{product.name}</h3><p>Thoughtfully prepared for sharing.</p></div><strong>{product.price}</strong></div>
                <button className="add-button" type="button">Add to bag <span>+</span></button>
              </article>
            ))}
          </div>
        </section>

        <section className="categories section-pad" id="catalogue">
          <div className="centered-heading"><p className="eyebrow">Explore the menu</p><h2>Something for every table.</h2></div>
          <div className="category-grid">
            {categories.map((category) => <a className="category-card image-placeholder" href="#menu" key={category.title}><span className="category-eyebrow">{category.eyebrow}</span><h3>{category.title}</h3><span className="category-arrow">↗</span></a>)}
          </div>
        </section>

        <section className="occasions section-pad" id="occasions">
          <div className="occasion-copy"><p className="eyebrow">Perfect for every occasion</p><h2>Good food belongs<br /><em>at every celebration.</em></h2><p>Whether you're planning something intimate or bringing everyone together, we'll help make the table feel unforgettable.</p><a className="text-link" href="#menu">Plan your order ↗</a></div>
          <div className="occasion-panel"><div><span>01</span><strong>Birthdays</strong></div><div><span>02</span><strong>Weddings</strong></div><div><span>03</span><strong>Events & gatherings</strong></div></div>
        </section>

        <section className="about section-pad" id="about">
          <div className="about-image image-placeholder"><span>Brand photography</span></div>
          <div className="about-copy"><p className="eyebrow">About Matta's Kitchen</p><h2>From our kitchen<br /><em>to your table.</em></h2><p>Matta's Kitchen is about thoughtful food, beautiful presentation and the feeling of bringing people together. Every box, dessert and drink is made to add something memorable to your occasion.</p><span className="handwritten">Made with love, always.</span></div>
        </section>

        <section className="gallery section-pad" id="gallery">
          <div className="section-heading"><div><p className="eyebrow">Follow the table</p><h2>@mattaskitchen</h2></div><a className="text-link" href="#top">Instagram ↗</a></div>
          <div className="gallery-grid"><div className="gallery-item image-placeholder"><span>01</span></div><div className="gallery-item image-placeholder"><span>02</span></div><div className="gallery-item image-placeholder"><span>03</span></div><div className="gallery-item image-placeholder"><span>04</span></div></div>
        </section>

        <section className="final-cta section-pad"><p className="eyebrow">Let's make it special</p><h2>Planning something<br /><em>beautiful?</em></h2><a className="primary-button" href="#menu">Start your order <span>↗</span></a></section>
      </main>

      <footer className="site-footer section-pad">
        <div className="footer-brand"><span className="brand-script">Matta's</span><span className="brand-kitchen">KITCHEN</span><p>Beautiful food, thoughtfully made.</p></div>
        <div className="footer-links"><a href="#menu">Menu</a><a href="#occasions">Occasions</a><a href="#about">About</a><a href="#gallery">Instagram</a></div>
        <div className="footer-bottom"><span>© 2026 Matta's Kitchen</span><span>Made for moments worth sharing.</span></div>
      </footer>
    </div>
  )
}

export default App
