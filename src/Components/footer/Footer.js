import React from 'react'
import footerStyle from './Footer.module.css'
function Footer() {
    return (

        <section className={footerStyle.containerFooter}>


            <footer className={footerStyle.footer}>
                <div className={footerStyle.section}>
                    <h3>تواصل معانا</h3>
                    <a href="fayzm5575@gmail.com">support@yourstore.com</a>
                    <a href="tel:+201117636138">+20 1117636138</a>
                </div>

                <div className={footerStyle.section}>
                    <h3>روابط مفيدة</h3>
                    <a href="/products">تسوق الآن</a>
                    <a href="/about">عن المتجر</a>
                    <a href="/contact">اتصل بنا</a>
                </div>

                <div className={footerStyle.section}>
                    <h3>تابعنا</h3>
                    <div className={footerStyle.socialicons}>
                        <a href="https://facebook.com" target="_blank">FB</a>
                        <a href="https://instagram.com" target="_blank">IG</a>
                        <a href="https://twitter.com" target="_blank">TW</a>
                    </div>
                </div>

                <div className={footerStyle.copyright}>
                    © 2025 [alhwary] - كل الحقوق محفوظة
                </div>
            </footer>
        </section>
    )
}

export default Footer