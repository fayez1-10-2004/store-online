import React from 'react';
import footerStyle from './Footer.module.css';
import { FaFacebookF, FaInstagram, FaYoutube, FaGooglePlusG, FaTwitter } from 'react-icons/fa6';
import visa from '../../images/visa.png'
import paypol from '../../images/paypal.png'
import mastercard from '../../images/master_card.png'
import amarican from '../../images/amarican_express.png'
import discover from '../../images/discover.png'
function Footer() {
    return (
        <section className={footerStyle.containerFooter}>
            <footer className={footerStyle.footer}>
                <div className={footerStyle.section}>
                    <h2 className={footerStyle.logo}>Shopwise</h2>
                    <p>If you are going to use of Lorem Ipsum need to be sure there isn't hidden of text</p>
                    <div className={footerStyle.socialicons}>
                        <a href="#g"><FaTwitter /></a>
                        <a href="#g"><FaFacebookF /></a>
                        <a href="#g"><FaGooglePlusG /></a>
                        <a href="#g"><FaYoutube /></a>
                        <a href="#g"><FaInstagram /></a>
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
                    <p>qina</p>
                    <p>Email:fayz5575@gmail.com</p>
                    <p>Phone:01117636138</p>
                </div>
            </footer>

            <div className={footerStyle.footerBottom}>
                <p>Dircted by Eng/fayez mohammed</p>
                <div className={footerStyle.paymentMethods}>
                    <img src={visa} alt="Visa" className={footerStyle.paymentIcon} />
                    <img src={amarican} alt="Discover" className={footerStyle.paymentIcon} />
                    <img src={mastercard} alt="MasterCard" className={footerStyle.paymentIcon} />
                    <img src={paypol} alt="PayPal" className={footerStyle.paymentIcon} />
                    <img src={discover} alt="American Express" className={footerStyle.paymentIcon} />
                    
                </div>
            </div>
        </section>
    );
}

export default Footer;
