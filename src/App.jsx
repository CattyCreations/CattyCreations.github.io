import { useEffect, useMemo, useState } from 'react'

const mugPhoto = 'https://i.etsystatic.com/9936032/r/il/a4f002/1663338967/il_570xN.1663338967_fhmr.jpg'
const photoMugPhoto = 'https://static-assets-prod.fnp.com/images/pr/l/v20250523104322/personalised-warm-nostalgia-mug_3.jpg'
const coffeeMugPhoto = 'https://live.staticflickr.com/65535/33766651878_638c5c9699_b.jpg'
const totePhoto = 'https://live.staticflickr.com/7363/13240078724_7d5a4b49ae_b.jpg'
const cameraTotePhoto = 'https://live.staticflickr.com/915/28554102647_aa4da54657_b.jpg'
const hamperPhoto = 'https://live.staticflickr.com/65535/51616744162_979e6b8be9_b.jpg'
const giftBoxPhoto = 'https://live.staticflickr.com/5300/5473213508_350de4664c.jpg'
const teaHamperPhoto = 'https://images.rawpixel.com/editor_1024/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcHg4ODg0MTktaW1hZ2Uta3d5bzk5Z3guanBn.jpg'
const bookPhoto = 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=1200&q=85'
const bookCoffeePhoto = 'https://live.staticflickr.com/8543/29183443693_b793d66aa8_b.jpg'
const bookTeaPhoto = 'https://live.staticflickr.com/1727/41528789245_0b1030f12a_b.jpg'

const categories = [
  { name: 'Mugs', count: '320 designs', image: mugPhoto },
  { name: 'Tote Bags', count: '180 designs', image: totePhoto },
  { name: 'Gift Hampers', count: '42 bundles', image: hamperPhoto },
  { name: 'Pre-loved Books', count: '140 titles', image: bookPhoto },
]

const products = [
  {
    id: 1,
    name: 'Morning Brew Mug',
    price: '€19.00',
    tag: 'Best seller',
    tone: 'Stoneware',
    category: 'Mugs',
    image: mugPhoto,
  },
  {
    id: 2,
    name: 'Floral Print Tote',
    price: '€24.00',
    tag: 'Limited drop',
    tone: 'Cotton canvas',
    category: 'Tote Bags',
    image: totePhoto,
    personalization: 'Mia',
    personalizationPlacement: 'low',
    personalizationTone: 'light',
  },
  {
    id: 3,
    name: 'Artisan Food Hamper',
    price: '€48.00',
    tag: 'Gift ready',
    tone: 'Curated',
    category: 'Gift Hampers',
    image: hamperPhoto,
  },
  {
    id: 4,
    name: 'Milk & Honey Poetry Book',
    price: '€12.50',
    tag: 'Pre-loved',
    tone: 'Paperback',
    category: 'Pre-loved Books',
    image: bookPhoto,
  },
  {
    id: 5,
    name: 'Botanical Gift Box',
    price: '€29.00',
    tag: 'New',
    tone: 'Gift set',
    category: 'Gift Hampers',
    image: giftBoxPhoto,
  },
  {
    id: 6,
    name: 'City Escape Mug',
    price: '€21.00',
    tag: 'Personalised',
    tone: 'Ceramic',
    category: 'Mugs',
    image: photoMugPhoto,
  },
  {
    id: 7,
    name: 'Camera Print Tote',
    price: '€22.00',
    tag: 'Reader favourite',
    tone: 'Canvas',
    category: 'Tote Bags',
    image: cameraTotePhoto,
    personalization: 'Lena',
    personalizationPlacement: 'high',
    personalizationTone: 'dark',
  },
  {
    id: 8,
    name: 'Vintage Poetry Pack',
    price: '€18.50',
    tag: 'Curated',
    tone: 'Book bundle',
    category: 'Pre-loved Books',
    image: bookCoffeePhoto,
  },
  {
    id: 9,
    name: 'Coffee & Cookie Mug',
    price: '€18.00',
    tag: 'Everyday favourite',
    tone: 'Ceramic',
    category: 'Mugs',
    image: coffeeMugPhoto,
    personalization: 'Mia',
    personalizationPlacement: 'center',
    personalizationTone: 'dark',
  },
  {
    id: 10,
    name: 'Personalised Botanical Mug',
    price: '€19.50',
    tag: 'New',
    tone: 'Ceramic',
    category: 'Mugs',
    image: mugPhoto,
  },
  {
    id: 11,
    name: 'A Quiet Evening Read',
    price: '€14.00',
    tag: 'Pre-loved',
    tone: 'Paperback',
    category: 'Pre-loved Books',
    image: bookTeaPhoto,
  },
  {
    id: 12,
    name: 'Tea & Treat Hamper',
    price: '€42.00',
    tag: 'Gift ready',
    tone: 'Curated basket',
    category: 'Gift Hampers',
    image: teaHamperPhoto,
  },
]

const reasons = [
  'Premium personalisation for meaningful gifting',
  'Small-batch production with European quality standards',
  'Thoughtful packaging for gifting occasions all year round',
  'Curated finds and sustainable pre-loved book selections',
]

const sellers = [
  { title: 'EU market access', text: 'Unlock a fast path into Germany and the wider EU through a compliant, Germany-based fulfilment partner.' },
  { title: 'Full design control', text: 'Keep ownership of your artwork, print setup and product variations while we handle production and packaging.' },
  { title: 'Pre-shipment quality checks', text: 'Every item can be checked before dispatch to confirm print quality, pack accuracy and order completeness.' },
]

const sellerBenefits = [
  'Launch into the EU market with Germany-based fulfilment support',
  'Retain full creative control over design, artwork, and product variations',
  'Build custom print-on-demand collections without handling local logistics',
  'Review quality and pack accuracy before each order ships',
  'Offer premium gift bundles, personalisation and branded packaging',
  'Scale with a marketplace model that can later include non-EU sellers and local EU partners',
]

const tabs = ['Shop', 'For sellers']
const productFilters = ['All', 'Mugs', 'Tote Bags', 'Gift Hampers', 'Pre-loved Books']
const getPriceValue = (price) => Number(price.replace(/[^\d.]/g, ''))
const formatEuro = (amount) => new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(amount)

function App() {
  const [activeTab, setActiveTab] = useState('Shop')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [cartItems, setCartItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [checkoutComplete, setCheckoutComplete] = useState(false)

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0)
  const cartTotal = cartItems.reduce((total, item) => total + getPriceValue(item.price) * item.quantity, 0)

  useEffect(() => {
    if (!isCartOpen) return undefined

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setIsCartOpen(false)
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isCartOpen])

  const markets = useMemo(
    () => ({
      Shop: 'The best in personalised gifts, thoughtful bundles and heritage book finds.',
      'For sellers': 'Built for non-EU businesses that want fulfilment, packaging and EU market readiness in Germany.',
    }),
    []
  )

  const filteredProducts =
    selectedCategory === 'All'
      ? products
      : products.filter((product) => product.category === selectedCategory)

  const scrollToCatalog = () => {
    document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const addToCart = (product) => {
    setCheckoutComplete(false)
    setCartItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.id === product.id)
      if (existingItem) {
        return currentItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      }
      return [...currentItems, { ...product, quantity: 1 }]
    })
  }

  const updateCartQuantity = (productId, change) => {
    setCartItems((currentItems) => currentItems.flatMap((item) => {
      if (item.id !== productId) return [item]
      const quantity = item.quantity + change
      return quantity > 0 ? [{ ...item, quantity }] : []
    }))
  }

  const completeCheckout = () => {
    setCartItems([])
    setCheckoutComplete(true)
  }

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
          <button
            className="primary-button"
            type="button"
            aria-expanded={isCartOpen}
            aria-controls="cart-dialog"
            onClick={() => {
              setCheckoutComplete(false)
              setIsCartOpen(true)
            }}
          >
            Cart ({cartCount})
          </button>
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
              <button className="primary-button large" type="button" onClick={scrollToCatalog}>
                Shop the collection
              </button>
              <button className="secondary-button large" type="button">
                Meet our sellers
              </button>
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
              <img src={hamperPhoto} alt="Gift hamper" />
            </div>
            <div className="mini-stack">
              <div className="product-card small-card">
                <img src={mugPhoto} alt="Personalised mug" />
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
            <button
              key={item.name}
              type="button"
              className="category-card category-button"
              onClick={() => {
                setActiveTab('Shop')
                setSelectedCategory(item.name)
                scrollToCatalog()
              }}
            >
              <img src={item.image} alt={item.name} />
              <div className="category-copy">
                <h3>{item.name}</h3>
                <p>{item.count}</p>
              </div>
            </button>
          ))}
        </section>

        <section id="catalog" className="catalog-section">
          <div className="section-header">
            <div>
              <p className="eyebrow accent">Shop by category</p>
              <h3>Browse our bestsellers</h3>
            </div>
            <button className="secondary-button" type="button">
              View all
            </button>
          </div>

          <div className="filter-row" aria-label="Product filters">
            {productFilters.map((filter) => (
              <button
                key={filter}
                type="button"
                className={selectedCategory === filter ? 'filter-chip active' : 'filter-chip'}
                onClick={() => setSelectedCategory(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="product-grid">
            {filteredProducts.map((product) => (
              <article key={product.id} className="product-item">
                <div className="product-image-wrap">
                  <img src={product.image} alt={product.name} />
                  {product.personalization && (
                    <span className={`personalization-preview ${product.personalizationPlacement} ${product.personalizationTone}`}>
                      {product.personalization}
                    </span>
                  )}
                  <span className="product-tag">{product.tag}</span>
                </div>
                <div className="product-meta">
                  <div>
                    <p>{product.tone}</p>
                    <h4>{product.name}</h4>
                  </div>
                  <strong>{product.price}</strong>
                </div>
                <div className="product-actions">
                  <button className="add-to-cart" type="button" onClick={() => addToCart(product)}>
                    Add to cart
                  </button>
                </div>
              </article>
            ))}
          </div>
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
            <p className="eyebrow accent">For sellers</p>
            <h3>Sell into Germany and the EU with confidence</h3>
            <p>
              We are building a unified marketplace for premium print-on-demand products, pre-loved book finds, and curated seller brands — with Germany as the home base for EU-ready fulfilment, customer confidence and operational support.
            </p>
            <ul className="seller-benefits">
              {sellerBenefits.map((benefit) => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ul>
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
          <span>For sellers</span>
          <a href="https://www.flickr.com/photos/147592390@N06/33766651878" target="_blank" rel="noreferrer">
            Mug photo: John Beans, CC BY 2.0
          </a>
          <a href="https://www.flickr.com/photos/147592390@N06/33722983548" target="_blank" rel="noreferrer">
            Botanical mug photo: John Beans, CC BY 2.0
          </a>
          <a href="https://www.flickr.com/photos/194291384@N08/51616744162" target="_blank" rel="noreferrer">
            Food hamper photo: britishhamper, CC BY 2.0
          </a>
          <a href="https://www.flickr.com/photos/57985295@N07/5473213508" target="_blank" rel="noreferrer">
            Gift box photo: PrityaBooks, CC BY 2.0
          </a>
          <a href="https://www.flickr.com/photos/75625814@N04/13240078724" target="_blank" rel="noreferrer">
            Floral tote photo: Olga Kuba, CC BY 2.0
          </a>
          <a href="https://www.flickr.com/photos/7940758@N07/28554102647" target="_blank" rel="noreferrer">
            Camera tote photo: MIKI Yoshihito, CC BY 2.0
          </a>
        </div>
      </footer>

      {isCartOpen && (
        <div
          className="cart-overlay"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setIsCartOpen(false)
          }}
        >
          <section className="cart-dialog" id="cart-dialog" role="dialog" aria-modal="true" aria-labelledby="cart-title">
            <header className="cart-header">
              <div>
                <p className="eyebrow accent">Your selection</p>
                <h2 id="cart-title">{checkoutComplete ? 'Order confirmed' : 'Shopping cart'}</h2>
              </div>
              <button className="cart-close" type="button" aria-label="Close cart" onClick={() => setIsCartOpen(false)}>
                ×
              </button>
            </header>

            {checkoutComplete ? (
              <div className="checkout-success" role="status">
                <span className="success-mark">✓</span>
                <h3>Thank you for your order.</h3>
                <p>This is a demo checkout. No payment was taken.</p>
                <button
                  className="primary-button"
                  type="button"
                  onClick={() => {
                    setCheckoutComplete(false)
                    setIsCartOpen(false)
                  }}
                >
                  Continue shopping
                </button>
              </div>
            ) : cartItems.length === 0 ? (
              <div className="cart-empty">
                <p>Your cart is empty.</p>
                <button className="secondary-button" type="button" onClick={() => setIsCartOpen(false)}>
                  Keep browsing
                </button>
              </div>
            ) : (
              <>
                <div className="cart-items">
                  {cartItems.map((item) => (
                    <article className="cart-item" key={item.id}>
                      <img src={item.image} alt="" />
                      <div className="cart-item-info">
                        <h3>{item.name}</h3>
                        <p>{item.price}</p>
                        <div className="quantity-control" aria-label={`${item.name} quantity`}>
                          <button type="button" aria-label={`Remove one ${item.name}`} onClick={() => updateCartQuantity(item.id, -1)}>
                            −
                          </button>
                          <span>{item.quantity}</span>
                          <button type="button" aria-label={`Add one ${item.name}`} onClick={() => updateCartQuantity(item.id, 1)}>
                            +
                          </button>
                        </div>
                      </div>
                      <strong>{formatEuro(getPriceValue(item.price) * item.quantity)}</strong>
                    </article>
                  ))}
                </div>
                <div className="cart-summary">
                  <span>Subtotal</span>
                  <strong>{formatEuro(cartTotal)}</strong>
                </div>
                <p className="checkout-note">Shipping is calculated at checkout.</p>
                <button className="primary-button checkout-button" type="button" onClick={completeCheckout}>
                  Complete demo checkout
                </button>
              </>
            )}
          </section>
        </div>
      )}
    </div>
  )
}

export default App
