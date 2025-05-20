

export default async function Footer() {


    return (
        <footer id="colophon" className="site-footer">
            <div className="container">
                <div className="md-tnwr-footer-top u-flex u-align-items-flex-end u-justify-content-space-between">
                    <div className="md-tnwr-footerlogo">
                        <a href="https://www.newwinereview.com/" title="The New Wine Review">
                            <img src="https://www.newwinereview.com/wp-content/uploads/2023/04/tnwr-footer-logo.svg" title="The New Wine Review" alt="The New Wine Review" />
                        </a>
                    </div>
                    <div className="md-tnwr-footermenu">
                        <nav id="site-navigation" className="footer-navigation">
                            <div className="md-tnwr-mainmenu">
                                <div className="menu-footer-menu-container">
                                    <ul id="footer-menu" className="menu">
                                        <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2241"><a href="https://www.newwinereview.com/newsletter">Newsletters</a></li>
                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-900"><a href="https://www.newwinereview.com/about-us/">About Us</a></li>
                                        <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-16"><a href="mailto:advertising@newwinereview.com?subject=Advertise%20with%20The%20New%20Wine%20Review">Advertise</a></li>
                                        <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-18"><a href="https://www.linkedin.com/company/90395726/admin/">Jobs</a></li>
                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5335"><a href="https://www.newwinereview.com/contact-us/">Contact Us</a></li>
                                        <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5707"><a href="https://www.newwinereview.com/subscribe/">Subscribe</a></li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                        <ul className="md-tnwr-footersocialicon">
                            <li><a className="insta-icon" href="https://www.instagram.com/newwinereview/" title="Instagram" target="_blank"><img src="https://149958416.v2.pressablecdn.com/wp-content/themes/md-tnwr/assets/src/images/instagram.png" alt="Instagram" /></a></li>
                            <li><a className="tiktok-icon" href="https://www.tiktok.com/@newwinereview" title="TikTok" target="_blank"><img src="https://149958416.v2.pressablecdn.com/wp-content/themes/md-tnwr/assets/src/images/tictok.png" alt="Tictok" /></a></li>
                            <li><a className="twitter-icon" href="https://twitter.com/newwinereview" title="Twitter" target="_blank"><img src="https://149958416.v2.pressablecdn.com/wp-content/themes/md-tnwr/assets/src/images/twitter.png" alt="Twitter" /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="container md-tnwr-copyright">
                © 2023 New Wine Review. All rights reserved. Use of this site constitutes acceptance of our User Agreement and <a href="https://www.newwinereview.com/privacy-policy/">Privacy Policy</a> and Cookie Statement and Your California Privacy Rights. NWR may earn a portion of sales from products that are purchased through our site as part of our Affiliate Partnerships with retailers. The material on this site may not be reproduced, distributed, transmitted, cached or otherwise used, except with the prior written permission of the New Wine Review
            </div>
        </footer>
    );
}