import React, { useState } from 'react';
import styles from './Products.module.css';
import { FaStar } from 'react-icons/fa';
import { FiShoppingCart } from "react-icons/fi";
import { GoArrowSwitch } from "react-icons/go";
import { MdZoomIn } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { BiRefresh } from "react-icons/bi";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { FaYoutube } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { BiLogoGooglePlusCircle } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

function ShopwiseProducts({ productfet, setCart, Loading }) {
  const [sortBy, setSortBy] = useState('default');
  const [showCount, setShowCount] = useState('showing');
  const [currentPage, setCurrentPage] = useState(1);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [priceRange, setPriceRange] = useState(300);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [isGridView, setIsGridView] = useState(true);

  const handleAddToCart = (el) => {
    setCart(prev => {
      if (prev.find(item => item.id === el.id)) return prev;
      return [...prev, el];
    });
  };

  const handleBrandChange = (brand) => {
    setSelectedBrands(prev => 
      prev.includes(brand) 
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    );
  };

  if (!productfet || productfet.length === 0) return <Loading />;

  return (
    <div className={styles.shopwiseContainer}>
      <aside className={styles.sidebar}>
        {/* Categories */}
        <div className={styles.sidebarSection}>
          <h4 className={styles.sidebarTitle}>Categories</h4>
          <ul className={styles.categoryList}>
            <li><span>Woman</span> <span className={styles.count}>(8)</span></li>
            <li><span>Top</span> <span className={styles.count}>(5)</span></li>
            <li><span>T-shirts</span> <span className={styles.count}>(4)</span></li>
            <li><span>Man</span> <span className={styles.count}>(4)</span></li>
            <li><span>Shoes</span> <span className={styles.count}>(2)</span></li>
          </ul>
        </div>

        {/* Filter */}
        <div className={styles.sidebarSection}>
          <h4 className={styles.sidebarTitle}>Filter</h4>
          <div className={styles.priceFilter}>
            <div className={styles.priceLabel}>
              Price: <span>${50} - ${priceRange}</span>
            </div>
            <input 
              type="range" 
              min="50" 
              max="300" 
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className={styles.priceSlider} 
            />
          </div>
        </div>

        {/* Brand */}
        <div className={styles.sidebarSection}>
          <h4 className={styles.sidebarTitle}>Brand</h4>
          <ul className={styles.brandList}>
            {['New Arrivals', 'Lighting', 'Tables', 'Chairs', 'Accessories'].map(brand => (
              <li key={brand} className={styles.checkboxItem}>
                <input 
                  type="checkbox" 
                  id={brand}
                  checked={selectedBrands.includes(brand)}
                  onChange={() => handleBrandChange(brand)}
                />
                <label htmlFor={brand}>{brand}</label>
              </li>
            ))}
          </ul>
        </div>

        {/* Size */}
        <div className={styles.sidebarSection}>
          <h4 className={styles.sidebarTitle}>Size</h4>
          <div className={styles.sizeOptions}>
            {['XS', 'S', 'M', 'L', 'XL'].map(size => (
              <button
                key={size}
                className={`${styles.sizeButton} ${selectedSizes.includes(size) ? styles.active : ''}`}
                onClick={() => setSelectedSizes(prev => 
                  prev.includes(size) 
                    ? prev.filter(s => s !== size)
                    : [...prev, size]
                )}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Color */}
        <div className={styles.sidebarSection}>
          <h4 className={styles.sidebarTitle}>Color</h4>
          <div className={styles.colorOptions}>
            {[
              '#8B4513', '#000000', '#DC143C', '#1E90FF', 
              '#FFD700', '#FFFFFF', '#808080', '#32CD32'
            ].map((color, idx) => (
              <button
                key={color}
                className={`${styles.colorCircle} ${selectedColors.includes(color) ? styles.activeColor : ''}`}
                style={{ 
                  backgroundColor: color,
                  border: color === '#FFFFFF' ? '1px solid #ddd' : 'none'
                }}
                onClick={() => setSelectedColors(prev => 
                  prev.includes(color) 
                    ? prev.filter(c => c !== color)
                    : [...prev, color]
                )}
              />
            ))}
          </div>
        </div>

        {/* Banner */}
        <div className={styles.sidebarBanner}>
          <div className={styles.bannerContent}>
            <span className={styles.bannerText1}>NEW COLLECTION</span>
            <span className={styles.bannerText2}>SALE 30% OFF</span>
            <button className={styles.shopNowBtn}>SHOP NOW</button>
          </div>
        </div>
      </aside>

      <main className={styles.productsArea}>
        <div className={styles.headerControls}>
          <div className={styles.sortControl}>
            <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
              <option value="default">Default sorting</option>
              <option value="price-low-high">Sort by price: low to high</option>
              <option value="price-high-low">Sort by price: high to low</option>
              <option value="popularity">Sort by popularity</option>
            </select>
          </div>
          <div className={styles.headerRight}>
            <button
              className={`${styles.viewBtn} ${isGridView ? styles.active : ''}`}
              onClick={() => setIsGridView(true)}
              aria-label="Grid View"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <rect x="2" y="2" width="6" height="6" fill="currentColor"/>
                <rect x="12" y="2" width="6" height="6" fill="currentColor"/>
                <rect x="2" y="12" width="6" height="6" fill="currentColor"/>
                <rect x="12" y="12" width="6" height="6" fill="currentColor"/>
              </svg>
            </button>
            <button
              className={`${styles.viewBtn} ${!isGridView ? styles.active : ''}`}
              onClick={() => setIsGridView(false)}
              aria-label="List View"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <rect x="4" y="5" width="12" height="2" fill="currentColor"/>
                <rect x="4" y="9" width="12" height="2" fill="currentColor"/>
                <rect x="4" y="13" width="12" height="2" fill="currentColor"/>
              </svg>
            </button>
            <div className={styles.showingSelect}>
              <select value={showCount} onChange={e => setShowCount(e.target.value)}>
                <option value="showing">Showing</option>
                <option value="12">12</option>
                <option value="24">24</option>
                <option value="48">48</option>
              </select>
            </div>
          </div>
        </div>

        <div className={isGridView ? styles.productsGrid : styles.productsList}>
          {productfet.slice(0, showCount === 'showing' ? 12 : parseInt(showCount)).map(el => (
            isGridView ? (
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
            ) : (
              <div
                key={el.id}
                className={styles.productListItem}
                onMouseEnter={() => setHoveredCard(el.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className={styles.listImageBox}>
                  <span className={styles.saleBadge}>Sale</span>
                  <img src={el.image} alt={el.title} />
                </div>
                <div className={styles.listContent}>
                  <h3 className={styles.productTitle} >{el.title}</h3>
                  <div className={styles.priceContainer}>
                    <span className={styles.currentPrice}>${el.price}</span>
                    <span className={styles.discount}>35% Off</span>
                  </div>
                
                  <p className={styles.listDesc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor.</p>
                  <div className={styles.listActions}>
                    <button className={styles.listActionBtn} onClick={() => handleAddToCart(el)} title="Add to Cart">
                      <FiShoppingCart size={18} />
                    </button>
                    <button className={styles.listActionBtn} title="Compare"><GoArrowSwitch size={18} /></button>
                    <button className={styles.listActionBtn} onClick={() => setQuickViewProduct(el)} title="Quick View">
                      <MdZoomIn size={18} />
                    </button>
                    <button className={styles.listActionBtn} title="Wishlist"><CiHeart size={18} /></button>
                  </div>
                </div>
              </div>
            )
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
        {/* يسار: صورة المنتج وصور مصغرة */}
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
        {/* يمين: تفاصيل المنتج */}
        <div className={styles.quickViewRight}>
          <h2 className={styles.productTitle}>{quickViewProduct.title}</h2>
          <div style={{display: 'flex', alignItems: 'center', gap: 10, margin: '6px 0 15px'}}>
            <span className={styles.currentPrice}>${quickViewProduct.price}</span>
            <span className={styles.originalPrice}>${(quickViewProduct.price * 1.227).toFixed(2)}</span>
            <span className={styles.discount}>35% Off</span>
            <span className={styles.rating} style={{marginLeft: 'auto'}}>
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
            <li><VscWorkspaceTrusted size={18}/> 1 Year AL Jazeera Brand Warranty</li>
            <li><BiRefresh size={18}/> 30 Day Return Policy</li>
            <li><HiOutlineCurrencyDollar size={18}/> Cash on Delivery available</li>
          </ul>
          <div style={{display: 'flex', alignItems: 'center', gap: 28, margin: '18px 0'}}>
            <div className={styles.colorsRow}>
              <span>Color</span>
              {[{value:'#7a5547'}, {value:'#222'}, {value:'#c23'}].map((color, idx) => (
                <button
                  key={color.value}
                  className={`${styles.colorCircle} ${quickViewProduct.selectedColor === color.value || (!quickViewProduct.selectedColor && idx === 0) ? styles.activeColor : ''}`}
                  style={{ background: color.value }}
                  onClick={() => setQuickViewProduct(prev => ({ ...prev, selectedColor: color.value }))}
                />
              ))}
            </div>
            <div className={styles.sizesRow}>
              <span>Size</span>
              {['XS','S','M','L','XL'].map(size => (
                <button
                  key={size}
                  className={`${styles.sizeBtn} ${quickViewProduct.selectedSize === size ? styles.activeSize : ''}`}
                  onClick={() => setQuickViewProduct(prev => ({ ...prev, selectedSize: size }))}
                >{size}</button>
              ))}
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
              <FiShoppingCart size={18} style={{ marginRight: 6 }} /> Add To Cart
            </button>
            <CiHeart size={23} cursor={'pointer'} />
          </div>
          <div className={styles.DataProduct}>
            <span><span>SKU:</span> BE45VGRT</span>
            <span><span>Category:</span> Clothing</span>
            <span><span>Tags:</span> Cloth, printed</span>
          </div>
          <div className={styles.SocialMedia}>
            <span>Share:</span>
            <span><FaFacebook /></span>
            <span><FaInstagram /></span>
            <span><BiLogoGooglePlusCircle /></span>
            <span><CiTwitter /></span>
            <span><FaYoutube /></span>
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
