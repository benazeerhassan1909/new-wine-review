export default async function Header() {
    return (
        <header id="masthead" className="md-tnwr-header site-header">
            <div className="container">
                <div className="u-flex-columns u-align-items-flex-end u-justify-content-space-between md-tnwr-header-main">
                    <div className="u-flex-column u-flex-basis-30 u-flex-basis-60@max-767">
                        <nav id="site-navigation" className="main-navigation header-stickey-wrapper">
                            <button className="menu-toggle" aria-label="Menu" aria-controls="primary-menu" aria-expanded="false">
                                <span role="none"></span> <span role="none"></span> <span role="none"></span>
                            </button>
                            <div className="md-tnwr-menu">
                                <div className="md-tnwr-innermenu">
                                    <div className="header-stickey-search">
                                        <form action="https://www.newwinereview.com/" method="get" data-sparkloop-form-id="1">
                                            <div className="md-tnwr-searchicon">
                                                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <title>Search</title>
                                                    {/* <descr>Search</descr> */}
                                                    <path d="M0.534061 4.22773C0.893849 3.39072 1.39418 2.65764 2.03505 2.02478C2.67593 1.39192 3.41612 0.898253 4.25937 0.53821C5.10262 0.178166 6.00209 0 6.96715 0C7.93221 0 8.84292 0.180022 9.6843 0.540066C10.5257 0.900109 11.2677 1.39563 11.9086 2.02664C12.5495 2.65764 13.0498 3.39258 13.4096 4.22959C13.7694 5.06659 13.9493 5.96114 13.9493 6.91692C13.9493 7.67784 13.8312 8.40535 13.5933 9.09574C13.3553 9.78613 13.0198 10.4171 12.587 10.985L16.6777 15.0439C16.7808 15.159 16.8613 15.2852 16.9157 15.4243C16.97 15.5635 16.9981 15.7046 16.9981 15.8493C16.9981 16.0739 16.9494 16.2706 16.852 16.4432C16.7545 16.6158 16.6196 16.7513 16.4491 16.8515C16.2785 16.9517 16.0837 17 15.8644 17C15.7126 17 15.5627 16.974 15.4166 16.9239C15.2704 16.8719 15.143 16.7921 15.0324 16.6845L10.9155 12.5978C10.3533 12.9838 9.74052 13.2864 9.07716 13.5035C8.41193 13.7206 7.71109 13.8301 6.97277 13.8301C6.00959 13.8301 5.10637 13.652 4.26499 13.2956C3.42361 12.9393 2.68155 12.4438 2.04067 11.8091C1.3998 11.1743 0.899471 10.4394 0.539683 9.6024C0.179894 8.76539 0 7.87085 0 6.91507C0 5.95928 0.179894 5.06474 0.539683 4.22773H0.534061ZM2.07066 8.95841C2.34425 9.59498 2.72652 10.1555 3.21373 10.6343C3.70095 11.115 4.26686 11.4898 4.90586 11.7627C5.54486 12.0355 6.23258 12.171 6.96528 12.171C7.69797 12.171 8.38569 12.0355 9.02844 11.7627C9.67119 11.4917 10.2371 11.115 10.7206 10.6343C11.204 10.1536 11.5844 9.59498 11.8599 8.95841C12.1354 8.32183 12.2722 7.64072 12.2722 6.91507C12.2722 6.18941 12.1354 5.5083 11.8599 4.87173C11.5844 4.23515 11.2059 3.67467 10.7206 3.19585C10.2352 2.71703 9.67119 2.34028 9.02844 2.06747C8.38569 1.79651 7.69797 1.65917 6.96528 1.65917C6.23258 1.65917 5.54674 1.79465 4.90586 2.06747C4.26499 2.34028 3.70095 2.71517 3.21373 3.19585C2.72652 3.67653 2.34425 4.23515 2.07066 4.87173C1.79707 5.5083 1.6584 6.18941 1.6584 6.91507C1.6584 7.64072 1.79519 8.32183 2.07066 8.95841Z" fill="#FF2532"></path>
                                                </svg>
                                                <label htmlFor="search-2" className="hide-accessibility">Search</label>
                                                {/* <input id="search-2" type="text" name="s" placeholder="SEARCH" value="" /> */}
                                            </div>
                                        </form>
                                        <button className="menu-toggle" aria-label="Menu" aria-controls="primary-menu" aria-expanded="false">
                                            <span role="none"></span> <span role="none"></span> <span role="none"></span>
                                        </button>
                                    </div>
                                    <div className="menu-primary-menu-container">
                                        <ul id="primary-menu" className="menu">
                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2638"><a href="https://www.newwinereview.com/intel/">Intel</a></li>
                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2629"><a href="https://www.newwinereview.com/travel/">Travel</a></li>
                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2635"><a href="https://www.newwinereview.com/culture/">Culture</a></li>
                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3011"><a href="https://www.newwinereview.com/spirits/">Spirits</a></li>
                                            <li className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-100953 current_page_item menu-item-103289"><a href="https://www.newwinereview.com/recent-articles/" aria-current="page">All Stories</a></li>
                                        </ul>
                                    </div>
                                    <div className="md-tnwr-secondary-header-menu">
                                        <nav id="secondary-navigation" className="secondary-navigation">
                                            <div className="md-tnwr-secondary-menu">
                                                <div className="menu-secondary-menu-container">
                                                    <ul id="secondary-menu" className="menu">
                                                        <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2245"><a href="https://www.newwinereview.com/newsletters">Newsletters</a></li>
                                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-899"><a href="https://www.newwinereview.com/about-us/">About Us</a></li>
                                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5332"><a href="https://www.newwinereview.com/contact-us/">Contact Us</a></li>
                                                        <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-74"><a target="_blank" href="mailto:advertising@newwinereview.com?subject=Advertise%20with%20The%20New%20Wine%20Review">Advertise</a></li>
                                                        <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-76"><a target="_blank" href="https://www.linkedin.com/company/90395726/admin/">Jobs</a></li>
                                                        <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5708"><a href="https://www.newwinereview.com/subscribe/">Subscribe</a></li>
                                                        <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5709"><a href="https://www.newwinereview.com/gift-subscriptions/">Give a Gift Subscription</a></li>
                                                        <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-6134"><a href="https://www.newwinereview.com/subscriber-slack/">Subscriber Slack Access</a></li>
                                                        <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-6135"><a href="https://www.newwinereview.com/subscriber-maps/">Subscriber Maps Access</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </nav>
                                        <ul className="md-tnwr-headersocialicon">
                                            <li><a className="insta-icon" href="https://www.instagram.com/newwinereview/" title="Instagram" target="_blank"><img src="https://149958416.v2.pressablecdn.com/wp-content/themes/md-tnwr/assets/src/images/instagram.png" alt="Instagram" /></a></li>
                                            <li><a className="tiktok-icon" href="https://www.tiktok.com/@newwinereview" title="TikTok" target="_blank"><img src="https://149958416.v2.pressablecdn.com/wp-content/themes/md-tnwr/assets/src/images/tictok.png" alt="Tictok" /></a></li>
                                            <li><a className="twitter-icon" href="https://twitter.com/newwinereview" title="Twitter" target="_blank"><img src="https://149958416.v2.pressablecdn.com/wp-content/themes/md-tnwr/assets/src/images/twitter.png" alt="Twitter" /></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </nav>
                        <div className="site-branding">
                            <a href="https://www.newwinereview.com/" className="custom-logo-link" rel="home">
                                <img src="https://www.newwinereview.com/wp-content/uploads/2023/04/tnwr_logo.svg" className="custom-logo" alt="TNWR Logo" decoding="async" />
                            </a>
                        </div>
                    </div>
                    <div className="u-flex-column u-flex-basis-70 u-flex-basis-40@max-767">
                        <div className="md-tnwr-header-btn">
                            <a href="https://www.newwinereview.com/sign-in" className="u-link-text-color u-bg-transparent">Sign In</a>
                            <a href="https://www.newwinereview.com/sign-up" className="u-white-text-color u-bg-primary">Sign Up</a>
                        </div>
                    </div>
                </div>
            </div>
        </header>

    );
}