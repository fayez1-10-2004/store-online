import React, { useState } from 'react';
import styles from './Products.module.css';
import { FaStar } from 'react-icons/fa';
import { FiShoppingCart } from "react-icons/fi";
import { GoArrowSwitch } from "react-icons/go";
import { MdZoomIn } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { TbTruckReturn } from "react-icons/tb";
import { TbTruckDelivery } from "react-icons/tb";


function ShopwiseProducts({ productfet, setCart, Loading }) {
  const [sortBy, setSortBy] = useState('price-low-high');
  const [showCount, setShowCount] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [quickViewProduct, setQuickViewProduct] = useState(null);

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
        {/* ... sidebar content stays the same ... */}
      </aside>

      <main className={styles.productsArea}>
        <div className={styles.headerControls}>
          <div className={styles.sortControl}>
            <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
              <option value="price-low-high">Price: low ➞ high</option>
              <option value="price-high-low">Price: high ➞ low</option>
              <option value="popularity">Popularity</option>
            </select>
          </div>
          <div className={styles.viewControls}>
            <button className={`${styles.viewBtn} ${styles.active}`}>⊞</button>
            <button className={styles.viewBtn}>☰</button>
            <select value={showCount} onChange={e => setShowCount(Number(e.target.value))}>
              {[12, 24, 48].map(n => <option key={n} value={n}>Showing {n}</option>)}
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
                      <FiShoppingCart size={22} />
                    </button>
                    <button className={styles.iconBtn} title="Compare"><GoArrowSwitch size={22} /></button>
                    <button className={styles.iconBtn} onClick={() => setQuickViewProduct(el)} title="Quick View">
                      <MdZoomIn size={22} />
                    </button>
                    <button className={styles.iconBtn} title="Wishlist"><CiHeart size={23} /></button>
                  </div>
                </div>
              </div>

              <div className={styles.productInfo}>
                <h3 className={styles.productTitle}>{el.title.split(' ').slice(0, 4).join(' ')}</h3>
                <div className={styles.priceContainer}>
                  <span className={styles.currentPrice}>${el.price}</span>
                  <span className={styles.originalPrice}>${(el.price * 1.2).toFixed(2)}</span>
                  <span className={styles.discount}>35% Off</span>
                </div>
                <div className={styles.rating}>
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className={i < 4 ? styles.starFilled : styles.starEmpty} />
                  ))}
                  <span className={styles.ratingCount}>(24)</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.pagination}>
          {[1, 2, 3, 4].map(p => (
            <button
              key={p}
              className={`${styles.pageBtn} ${p === currentPage ? styles.active : ''}`}
              onClick={() => setCurrentPage(p)}
            >
              {p}
            </button>
          ))}
        </div>
      </main>

      {quickViewProduct && (
        <div className={styles.quickViewOverlay}>
          <div className={styles.quickViewContent}>
            <button className={styles.closeBtn} onClick={() => setQuickViewProduct(null)}>×</button>
            <div className={styles.quickViewModal}>
              <div className={styles.quickViewLeft}>
                <img
                  src={quickViewProduct.selectedImage || quickViewProduct.image}
                  alt={quickViewProduct.title}
                  className={styles.quickViewMainImage}
                />
                <div className={styles.quickViewThumbnails}>
                  {[quickViewProduct.image, ...(quickViewProduct.images || [])].map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt="thumb"
                      className={`${styles.quickViewThumb} ${quickViewProduct.selectedImage === img || (!quickViewProduct.selectedImage && idx === 0) ? styles.activeThumb : ''}`}
                      onClick={() => setQuickViewProduct(prev => ({ ...prev, selectedImage: img }))}
                    />
                  ))}
                </div>
              </div>
              <div className={styles.quickViewRight}>
                <h2 className={styles.productTitle}>{quickViewProduct.title}</h2>
                <div className={styles.priceRatingRow}>
                  <span className={styles.currentPrice}>${quickViewProduct.price}</span>
                  <span className={styles.originalPrice}>${(quickViewProduct.price * 1.227).toFixed(2)}</span>
                  <span className={styles.discount}>35% Off</span>
                  <span className={styles.rating}>
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className={i < 4 ? styles.starFilled : styles.starEmpty} />
                    ))}
                    <span className={styles.ratingCount}>(21)</span>
                  </span>
                </div>
                <p className={styles.productDesc}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.
                </p>
                <ul className={styles.productFeatures}>
                  <li>   <TbTruckReturn size={45} color='#8f96a7'/>
                    1 Year AL Jazeera Brand Warranty</li>
                  <li> 30 Day Return Policy</li>
                  <li>   <TbTruckDelivery size={45} color='#8f96a7'/>
                  Cash on Delivery available</li>
                </ul>
                <div className={styles.optionsRow}>
                  <div className={styles.colorsRow}>
                    <div>
                    <span>Color</span>
                    {[{ name: 'Brown', value: '#7a5547' }, { name: 'Black', value: '#222' }, { name: 'Red', value: '#c23' }].map((color, idx) => (
                      <button
                        key={color.value}
                        className={`${styles.colorCircle} ${quickViewProduct.selectedColor === color.value || (!quickViewProduct.selectedColor && idx === 0) ? styles.activeColor : ''}`}
                        style={{ background: color.value }}
                        onClick={() => setQuickViewProduct(prev => ({ ...prev, selectedColor: color.value }))}
                      />
                    ))}
                  
                    </div>
                    <div>
                    <span>Size</span>
                    {['XS', 'S', 'M', 'L', 'XL'].map(size => (
                      <button
                      key={size}
                      className={`${styles.sizeBtn} ${quickViewProduct.selectedSize === size ? styles.activeSize : ''}`}
                      onClick={() => setQuickViewProduct(prev => ({ ...prev, selectedSize: size }))}
                      >{size}</button>
                    ))}
                  </div>
                    </div>
                </div>
                <div className={styles.addToCartRow}>
                  <button className={styles.qtyBtn} onClick={() => setQuickViewProduct(prev => ({ ...prev, quantity: Math.max(1, (prev.quantity || 1) - 1) }))}>-</button>
                  <input
                    type="text"
                    className={styles.qtyInput}
                    value={quickViewProduct.quantity || 1}
                    readOnly
                  />
                  <button className={styles.qtyBtn} onClick={() => setQuickViewProduct(prev => ({ ...prev, quantity: (prev.quantity || 1) + 1 }))}>+</button>
                  <button className={styles.addToCartBtn} onClick={() => handleAddToCart(quickViewProduct)}>
                    <FiShoppingCart size={18} style={{ marginRight: 6 }} /> Add to Cart
                  </button>
<CiHeart size={23} cursor={'pointer'} />  

                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ShopwiseProducts;
