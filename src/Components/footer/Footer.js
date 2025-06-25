import React from 'react';
import footerStyle from './Footer.module.css';
import { FaFacebookF, FaInstagram, FaYoutube, FaGooglePlusG, FaTwitter } from 'react-icons/fa6';

function Footer() {
    return (
        <section className={footerStyle.containerFooter}>
            <footer className={footerStyle.footer}>
                <div className={footerStyle.section}>
                    <h2 className={footerStyle.logo}>Shopwise</h2>
                    <p>If you are going to use of Lorem Ipsum need to be sure there isn't hidden of text</p>
                    <div className={footerStyle.socialicons}>
                        <a href="#"><FaTwitter /></a>
                        <a href="#"><FaFacebookF /></a>
                        <a href="#"><FaGooglePlusG /></a>
                        <a href="#"><FaYoutube /></a>
                        <a href="#"><FaInstagram /></a>
                    </div>
                </div>

                <div className={footerStyle.section}>
                    <h3>Useful Links</h3>
                    <a href="/about">About Us</a>
                    <a href="/faq">FAQ</a>
                    <a href="/location">Location</a>
                    <a href="/affiliates">Affiliates</a>
                    <a href="/contact">Contact</a>
                </div>

                <div className={footerStyle.section}>
                    <h3>Category</h3>
                    <a href="/category/men">Men</a>
                    <a href="/category/women">Woman</a>
                    <a href="/category/kids">Kids</a>
                    <a href="/category/best">Best Seller</a>
                    <a href="/category/new">New Arrivals</a>
                </div>

                <div className={footerStyle.section}>
                    <h3>My Account</h3>
                    <a href="/account">My Account</a>
                    <a href="/discount">Discount</a>
                    <a href="/returns">Returns</a>
                    <a href="/orders">Orders History</a>
                    <a href="/tracking">Order Tracking</a>
                </div>

                <div className={footerStyle.section}>
                    <h3>Contact Info</h3>
                    <p>123 Street, Old Trafford, New<br />South London, UK</p>
                    <p>Email: info@sitename.com</p>
                    <p>Phone: +457 789 789 65</p>
                </div>
            </footer>

            <div className={footerStyle.footerBottom}>
                <p>© 2025 All Rights Reserved by alhwary</p>
                <div className={footerStyle.paymentMethods}>
                    <img src="/images/payments/visa.png" alt="Visa" className={footerStyle.paymentIcon} />
                    <img src="/images/payments/discover.png" alt="Discover" className={footerStyle.paymentIcon} />
                    <img src="/images/payments/mastercard.png" alt="MasterCard" className={footerStyle.paymentIcon} />
                    <img src="/images/payments/paypal.png" alt="PayPal" className={footerStyle.paymentIcon} />
                    <img src="/images/payments/amex.png" alt="American Express" className={footerStyle.paymentIcon} />
                </div>
            </div>
        </section>
    );
}

export default Footer;
