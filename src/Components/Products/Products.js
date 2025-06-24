import React, { useState } from 'react';
import styles from './Products.module.css';
import { FaHeart, FaSearch, FaRandom, FaStar, FaShoppingCart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function ShopwiseProducts({ productfet, setCart, Loading }) {
  const navigate = useNavigate();
  const [sortBy, setSortBy] = useState('price-low-high');
  const [showCount, setShowCount] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleAddToCart = (el) => {
    setCart(prev => {
      if (prev.find(item => item.id === el.id)) return prev;
      return [...prev, el];
    });
  };

  if (!productfet || productfet.length === 0) return <Loading />;

  return (
    <div className={styles.shopwiseContainer}>
      <aside className={styles.sidebar}>
        <div className={styles.categories}>
          <h3>Categories</h3>
          <ul>
            <li><a href="#">Women <span>(4)</span></a></li>
            <li><a href="#">Top <span>(3)</span></a></li>
            <li><a href="#">T‑Shirts <span>(4)</span></a></li>
            <li><a href="#">Men <span>(2)</span></a></li>
            <li><a href="#">Shoes <span>(5)</span></a></li>
          </ul>
        </div>
        <div className={styles.filterSection}>
          <h3>Filter</h3>
          <div className={styles.priceFilter}>
            <label>Price: $50 - $200</label>
            <input type="range" min="50" max="200" defaultValue="125" />
          </div>
         <div className={styles.brandFilter}>
  <h4>Brand</h4>
  <div className={styles.checkboxGroup}>
    {['New Arrivals','Lightning','Hoodies','Chairs','Accessories'].map((b) => (
      <label key={b}><input type="checkbox" /> {b}</label>
    ))}
  </div>
</div>
          <div className={styles.sizeFilter}>
            <h4>Size</h4>
            <div className={styles.sizeOptions}>
              {['XS','S','M','L','XL','XXL'].map(s => (
                <button key={s} className={styles.sizeBtn}>{s}</button>
              ))}
            </div>
          </div>
          <div className={styles.colorFilter}>
            <h4>Color</h4>
            <div className={styles.colorOptions}>
              {['#000','#f00','#0f0','#00f','#ff0','#f0f','#0ff','#888'].map(c => (
                <div key={c} className={styles.colorCircle} style={{background: c}}></div>
              ))}
            </div>
          </div>
        </div>
      </aside>

      <main className={styles.productsArea}>
        <div className={styles.headerControls}>
          <div className={styles.sortControl}>
            <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
              <option value="price-low-high">Price: low ➝ high</option>
              <option value="price-high-low">Price: high ➝ low</option>
              <option value="popularity">Popularity</option>
            </select>
          </div>
          <div className={styles.viewControls}>
            <button className={`${styles.viewBtn} ${styles.active}`}>⊞</button>
            <button className={styles.viewBtn}>☰</button>
            <select value={showCount} onChange={e => setShowCount(Number(e.target.value))}>
              {[12,24,48].map(n => <option key={n} value={n}>Showing {n}</option>)}
            </select>
          </div>
        </div>

        <div className={styles.productsGrid}>
          {productfet.slice(0, showCount).map(el => (
            <div
              key={el.id}
              className={styles.productCard}
              onMouseEnter={() => setHoveredCard(el.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={styles.productImageContainer}>
                <span className={styles.saleBadge}>Sale</span>
                <img src={el.image} alt={el.title} className={styles.productImage} />
                <div className={`${styles.overlay} ${hoveredCard === el.id ? styles.overlayVisible : ''}`}>
                  <div className={styles.iconButtons}>
                    <button className={styles.iconBtn} onClick={() => handleAddToCart(el)} title="Add to Cart">
                      <FaShoppingCart />
                    </button>
                    <button className={styles.iconBtn} title="Compare"><FaRandom /></button>
                    <button className={styles.iconBtn} onClick={() => navigate(`/${el.id}`)} title="Quick View">
                      <FaSearch />
                    </button>
                    <button className={styles.iconBtn} title="Wishlist"><FaHeart /></button>
                  </div>
                </div>
              </div>

              <div className={styles.productInfo}>
                <h3 className={styles.productTitle}>{el.title.split(' ').slice(0,4).join(' ')}</h3>
                <div className={styles.priceContainer}>
                  <span className={styles.currentPrice}>${el.price}</span>
                  <span className={styles.originalPrice}>${(el.price*1.2).toFixed(2)}</span>
                  <span className={styles.discount}>35% Off</span>
                </div>
                <div className={styles.rating}>
                  {[...Array(5)].map((_,i) => (
                    <FaStar key={i} className={i<4 ? styles.starFilled : styles.starEmpty}/>
                  ))}
                  <span className={styles.ratingCount}>(24)</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.pagination}>
          {[1,2,3,4].map(p => (
            <button
              key={p}
              className={`${styles.pageBtn} ${p===currentPage ? styles.active : ''}`}
              onClick={() => setCurrentPage(p)}
            >
              {p}
            </button>
          ))}
        </div>
      </main>
    </div>
  );
}

export default ShopwiseProducts;
