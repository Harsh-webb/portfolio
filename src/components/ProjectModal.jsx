import React, { useState } from 'react';
import { 
  X, 
  ExternalLink, 
  Search, 
  ShoppingCart, 
  Check, 
  Plus, 
  Trash2, 
  RefreshCw, 
  Calendar, 
  Clock, 
  Filter 
} from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectModal({ project, onClose }) {
  // E-Commerce Demo State
  const [ecomCategory, setEcomCategory] = useState('all');
  const [ecomSearch, setEcomSearch] = useState('');
  const [cart, setCart] = useState([]);
  const [cartNotification, setCartNotification] = useState('');

  const sampleProducts = [
    { id: 1, name: 'Mechanical Keyboard RGB', category: 'accessories', price: 89, rating: '4.8' },
    { id: 2, name: 'Ultra-Wide 4K IPS Monitor', category: 'electronics', price: 349, rating: '4.9' },
    { id: 3, name: 'Ergonomic Developer Chair', category: 'furniture', price: 220, rating: '4.7' },
    { id: 4, name: 'Noise-Cancelling Headphones', category: 'electronics', price: 179, rating: '4.8' },
    { id: 5, name: 'Aluminum Laptop Stand', category: 'accessories', price: 45, rating: '4.6' },
    { id: 6, name: 'Developer Cotton Hoodie', category: 'apparel', price: 55, rating: '4.9' },
  ];

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
    setCartNotification(`Added "${product.name}" to cart!`);
    setTimeout(() => setCartNotification(''), 2500);
  };

  const filteredProducts = sampleProducts.filter(p => {
    const matchesCategory = ecomCategory === 'all' || p.category === ecomCategory;
    const matchesSearch = p.name.toLowerCase().includes(ecomSearch.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // News App Demo State
  const [newsCategory, setNewsCategory] = useState('All');
  const [newsSearch, setNewsSearch] = useState('');
  const [isRefreshing, setIsRefreshing] = useState(false);

  const sampleArticles = [
    {
      id: 1,
      title: 'Next-Gen React Architecture: Server Components and Performance Patterns',
      category: 'Technology',
      source: 'TechPulse Daily',
      time: '15 mins ago',
      snippet: 'Deep dive into concurrent rendering, state isolation, and modern DOM optimization patterns in modern web applications.'
    },
    {
      id: 2,
      title: 'Building Scalable RESTful Backends with Python and Django',
      category: 'Backend',
      source: 'Developer Chronicle',
      time: '45 mins ago',
      snippet: 'How Django REST framework accelerates secure enterprise API development with serializers, authentication, and viewsets.'
    },
    {
      id: 3,
      title: 'MySQL Optimization Strategies for High-Throughput Web Applications',
      category: 'Database',
      source: 'Data Engineering Review',
      time: '2 hours ago',
      snippet: 'Indexing techniques, query caching, and relational schema normalization to handle intensive transactional loads.'
    },
    {
      id: 4,
      title: 'AI in Software Engineering: Augmenting Developer Productivity',
      category: 'AI',
      source: 'Silicon Insight',
      time: '4 hours ago',
      snippet: 'Exploration of AI tooling integration into the software development life cycle, from automated linting to automated testing.'
    }
  ];

  const filteredArticles = sampleArticles.filter(art => {
    const matchesCat = newsCategory === 'All' || art.category === newsCategory;
    const matchesQuery = art.title.toLowerCase().includes(newsSearch.toLowerCase()) || 
                         art.snippet.toLowerCase().includes(newsSearch.toLowerCase());
    return matchesCat && matchesQuery;
  });

  const refreshNews = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 800);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-content" 
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '820px', padding: '0', overflow: 'hidden' }}
      >
        {/* Modal Header */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '18px 24px',
          borderBottom: '1px solid var(--border-light)',
          background: '#0a0e1a'
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span className="tag tag-cyan" style={{ fontSize: '11px' }}>INTERACTIVE SIMULATOR</span>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#ffffff' }}>{project.name}</h3>
            </div>
            <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '2px' }}>
              Live in-browser simulation demonstrating component features & event handling
            </p>
          </div>

          <button 
            onClick={onClose}
            className="social-icon-btn" 
            style={{ width: '34px', height: '34px' }}
            aria-label="Close modal"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Body: Interactive Project UI */}
        <div style={{ padding: '24px', maxHeight: '72vh', overflowY: 'auto' }}>
          {project.id === 'ecommerce' ? (
            /* E-COMMERCE SIMULATOR */
            <div>
              {/* Notification Banner */}
              {cartNotification && (
                <div style={{
                  background: 'rgba(56, 189, 248, 0.15)',
                  border: '1px solid rgba(56, 189, 248, 0.4)',
                  color: '#38bdf8',
                  padding: '8px 14px',
                  borderRadius: '8px',
                  fontSize: '13px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '16px'
                }}>
                  <Check size={16} />
                  <span>{cartNotification}</span>
                </div>
              )}

              {/* Top Controls */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                {/* Search Bar */}
                <div style={{ position: 'relative', flex: '1', minWidth: '220px' }}>
                  <Search size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                  <input 
                    type="text"
                    value={ecomSearch}
                    onChange={(e) => setEcomSearch(e.target.value)}
                    placeholder="Search products (e.g. keyboard, monitor)..."
                    style={{
                      width: '100%',
                      padding: '8px 12px 8px 36px',
                      background: '#131b2e',
                      border: '1px solid var(--border-light)',
                      borderRadius: '8px',
                      color: '#ffffff',
                      fontSize: '13.5px',
                      outline: 'none'
                    }}
                  />
                </div>

                {/* Category Filters */}
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                  {['all', 'electronics', 'accessories', 'furniture', 'apparel'].map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setEcomCategory(cat)}
                      style={{
                        padding: '6px 12px',
                        borderRadius: '6px',
                        fontSize: '12.5px',
                        fontWeight: 500,
                        textTransform: 'capitalize',
                        background: ecomCategory === cat ? 'var(--accent-cyan)' : 'rgba(255,255,255,0.05)',
                        color: ecomCategory === cat ? '#000000' : 'var(--text-secondary)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        cursor: 'pointer'
                      }}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                {/* Cart Badge */}
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '6px 14px',
                  background: 'rgba(56, 189, 248, 0.1)',
                  border: '1px solid rgba(56, 189, 248, 0.3)',
                  borderRadius: '20px',
                  color: 'var(--accent-cyan)',
                  fontSize: '13px',
                  fontWeight: 600
                }}>
                  <ShoppingCart size={15} />
                  <span>Cart: {cart.length} items (${cart.reduce((sum, item) => sum + item.price, 0)})</span>
                  {cart.length > 0 && (
                    <button 
                      onClick={() => setCart([])} 
                      title="Clear cart"
                      style={{ color: '#ef4444', marginLeft: '6px', cursor: 'pointer' }}
                    >
                      <Trash2 size={13} />
                    </button>
                  )}
                </div>
              </div>

              {/* Products Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '16px' }}>
                {filteredProducts.map((prod) => (
                  <div 
                    key={prod.id}
                    style={{
                      background: 'rgba(15, 23, 42, 0.65)',
                      border: '1px solid var(--border-light)',
                      borderRadius: '10px',
                      padding: '16px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between'
                    }}
                  >
                    <div>
                      <div style={{ fontSize: '11px', textTransform: 'uppercase', color: 'var(--accent-cyan)', fontWeight: 600, marginBottom: '4px' }}>
                        {prod.category}
                      </div>
                      <div style={{ fontSize: '14.5px', fontWeight: 600, color: '#ffffff', marginBottom: '8px' }}>
                        {prod.name}
                      </div>
                      <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Rating: ⭐ {prod.rating}</div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '16px', paddingTop: '12px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                      <span style={{ fontSize: '16px', fontWeight: 700, color: '#ffffff' }}>${prod.price}</span>
                      <button 
                        onClick={() => addToCart(prod)}
                        className="btn btn-outline btn-sm"
                        style={{ padding: '5px 10px', fontSize: '12px' }}
                      >
                        <Plus size={13} />
                        <span>Add</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            /* NEWS APP SIMULATOR */
            <div>
              {/* Controls */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                {/* Search */}
                <div style={{ position: 'relative', flex: '1', minWidth: '220px' }}>
                  <Search size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                  <input 
                    type="text"
                    value={newsSearch}
                    onChange={(e) => setNewsSearch(e.target.value)}
                    placeholder="Search headline articles..."
                    style={{
                      width: '100%',
                      padding: '8px 12px 8px 36px',
                      background: '#131b2e',
                      border: '1px solid var(--border-light)',
                      borderRadius: '8px',
                      color: '#ffffff',
                      fontSize: '13.5px',
                      outline: 'none'
                    }}
                  />
                </div>

                {/* Category Filters */}
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                  {['All', 'Technology', 'Backend', 'Database', 'AI'].map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setNewsCategory(cat)}
                      style={{
                        padding: '6px 12px',
                        borderRadius: '6px',
                        fontSize: '12.5px',
                        fontWeight: 500,
                        background: newsCategory === cat ? 'var(--accent-purple)' : 'rgba(255,255,255,0.05)',
                        color: newsCategory === cat ? '#ffffff' : 'var(--text-secondary)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        cursor: 'pointer'
                      }}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                {/* Refresh simulated API */}
                <button
                  onClick={refreshNews}
                  className="btn btn-secondary btn-sm"
                  title="Simulate News API re-fetch"
                >
                  <RefreshCw size={14} className={isRefreshing ? 'animate-spin' : ''} />
                  <span>Fetch News</span>
                </button>
              </div>

              {/* Articles Grid */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {filteredArticles.map((art) => (
                  <div
                    key={art.id}
                    style={{
                      background: 'rgba(15, 23, 42, 0.65)',
                      border: '1px solid var(--border-light)',
                      borderRadius: '10px',
                      padding: '18px',
                      transition: 'all 0.2s'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <span className="tag tag-purple" style={{ fontSize: '11.5px' }}>
                        {art.category}
                      </span>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '12px', color: 'var(--text-muted)' }}>
                        <span>{art.source}</span>
                        <span>•</span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                          <Clock size={12} />
                          {art.time}
                        </span>
                      </div>
                    </div>

                    <h4 style={{ fontSize: '16px', fontWeight: 600, color: '#ffffff', marginBottom: '8px' }}>
                      {art.title}
                    </h4>

                    <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                      {art.snippet}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer with Repository Links */}
        <div style={{
          padding: '16px 24px',
          background: '#0a0e1a',
          borderTop: '1px solid var(--border-light)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px'
        }}>
          <div style={{ fontSize: '12.5px', color: 'var(--text-muted)' }}>
            Links: Editable placeholders configured for your custom repository URLs.
          </div>

          <div style={{ display: 'flex', gap: '10px' }}>
            <a 
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-sm"
            >
              <GithubIcon size={14} />
              <span>GitHub Repo</span>
            </a>
            <button 
              onClick={onClose} 
              className="btn btn-primary btn-sm"
            >
              Done Testing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
