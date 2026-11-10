import { useMemo, useState } from 'react'

const categories = [
  { name: 'Mugs', count: '320 designs', image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=900&q=80' },
  { name: 'Tote Bags', count: '180 designs', image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80' },
  { name: 'Gift Hampers', count: '42 bundles', image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80' },
  { name: 'Pre-loved Books', count: '140 titles', image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=900&q=80' },
]

const products = [
  {
    id: 1,
    name: 'Morning Brew Mug',
    price: '£19.00',
    tag: 'Best seller',
    tone: 'Stoneware',
    image: 'https://images.unsplash.com/photo-1523362628745-0c100150b504?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 2,
    name: 'Mothers Day Tote',
    price: '£24.00',
    tag: 'Limited drop',
    tone: 'Canvas',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 3,
    name: 'Bookish Gift Hamper',
    price: '£48.00',
    tag: 'Gift ready',
    tone: 'Curated',
    image: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 4,
    name: 'Classic Jane Austen',
    price: '£12.50',
    tag: 'Pre-loved',
    tone: 'Hardback',
    image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 5,
    name: 'Botanical Wrap Set',
    price: '£29.00',
    tag: 'New',
    tone: 'Gift set',
    image: 'https://images.unsplash.com/photo-1528747045269-390fe33c19f2?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 6,
    name: 'City Escape Mug',
    price: '£21.00',
    tag: 'Personalised',
    tone: 'Ceramic',
    image: 'https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?auto=format&fit=crop&w=900&q=80',
  },
]

const reasons = [
  'Premium personalisation for meaningful gifting',
  'Small-batch production with European quality standards',
  'Thoughtful packaging for gifting occasions all year round',
  'Curated finds and sustainable pre-loved book selections',
]

const sellers = [
  { title: 'Brand partners', text: 'Launch custom gifting collections without managing production logistics.' },
  { title: 'Design studios', text: 'Sell limited-edition drops and personalised products through a shared marketplace.' },
  { title: 'Non-EU makers', text: 'Use our German-based fulfilment and compliance support to enter the EU market.' },
]

const tabs = ['Shop', 'Marketplace', 'For sellers']

function App() {
  const [activeTab, setActiveTab] = useState('Shop')

  const markets = useMemo(
    () => ({
      Shop: 'The best in personalised gifts, thoughtful bundles and heritage book finds.',
      Marketplace: 'A unified marketplace bringing independent makers, artisan sellers and POD brands together.',
      'For sellers': 'Built for non-EU businesses that want fulfilment, packaging and EU market readiness in Germany.',
    }),
    []
  )

  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="brand-wrap">
          <div className="brand-mark">C</div>
          <div>
            <p className="eyebrow">Gifted finds</p>
            <h1>Catty Creations</h1>
          </div>
        </div>

        <nav className="main-nav" aria-label="Main navigation">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={activeTab === tab ? 'nav-item active' : 'nav-item'}
              onClick={() => setActiveTab(tab)}
              type="button"
            >
              {tab}
            </button>
          ))}
        </nav>

        <div className="nav-actions">
          <button className="link-button" type="button">Search</button>
          <button className="primary-button" type="button">Cart (2)</button>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow accent">Thoughtful gifts, beautifully made</p>
            <h2>{markets[activeTab]}</h2>
            <p className="subtext">
              Personalised mugs, custom tote bags, curated hampers and literary treasures — all built to feel premium, intentional and gift-worthy.
            </p>
            <div className="cta-row">
              <button className="primary-button large" type="button">Shop the collection</button>
              <button className="secondary-button large" type="button">Explore marketplace</button>
            </div>

            <div className="stats-row">
              <div>
                <strong>12k+</strong>
                <span>happy gift shoppers</span>
              </div>
              <div>
                <strong>4.9/5</strong>
                <span>average rating</span>
              </div>
              <div>
                <strong>48h</strong>
                <span>dispatch window</span>
              </div>
            </div>
          </div>

          <div className="hero-visual" aria-label="Featured products collage">
            <div className="product-card large-card">
              <img
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80"
                alt="Gift hamper"
              />
            </div>
            <div className="mini-stack">
              <div className="product-card small-card">
                <img
                  src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80"
                  alt="Tote bag"
                />
              </div>
              <div className="pill-card">
                <span>Gift ready</span>
                <strong>Curated bundles</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="categories">
          {categories.map((item) => (
            <article key={item.name} className="category-card">
              <img src={item.image} alt={item.name} />
              <div className="category-copy">
                <h3>{item.name}</h3>
                <p>{item.count}</p>
              </div>
            </article>
          ))}
        </section>

        <section className="section-header">
          <div>
            <p className="eyebrow accent">Featured favourites</p>
            <h3>Made to give, made to keep</h3>
          </div>
          <button className="secondary-button" type="button">View all</button>
        </section>

        <section className="product-grid">
          {products.map((product) => (
            <article key={product.id} className="product-item">
              <div className="product-image-wrap">
                <img src={product.image} alt={product.name} />
                <span className="product-tag">{product.tag}</span>
              </div>
              <div className="product-meta">
                <div>
                  <p>{product.tone}</p>
                  <h4>{product.name}</h4>
                </div>
                <strong>{product.price}</strong>
              </div>
            </article>
          ))}
        </section>

        <section className="feature-band">
          <div className="feature-copy">
            <p className="eyebrow accent">Why customers choose us</p>
            <h3>Beautiful design meets thoughtful fulfilment</h3>
          </div>
          <div className="feature-list">
            {reasons.map((reason) => (
              <div key={reason} className="feature-item">
                <span className="checkmark">✓</span>
                <p>{reason}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="seller-panel">
          <div className="seller-copy">
            <p className="eyebrow accent">Marketplace vision</p>
            <h3>One place for custom gifts and independent makers</h3>
            <p>
              We are building a unified marketplace for premium print-on-demand products, pre-loved book finds, and curated seller brands — with Germany as the home base for EU-ready fulfilment and compliance.
            </p>
          </div>

          <div className="seller-cards">
            {sellers.map((seller) => (
              <article key={seller.title} className="seller-card">
                <h4>{seller.title}</h4>
                <p>{seller.text}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <div>
          <p className="eyebrow">Catty Creations</p>
          <p>Made for thoughtful gifting across Europe.</p>
        </div>
        <div className="footer-links">
          <span>Shipping</span>
          <span>Marketplace</span>
          <span>For sellers</span>
        </div>
      </footer>
    </div>
  )
}

export default App
