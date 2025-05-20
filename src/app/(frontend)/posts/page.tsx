import { sanityFetch } from "@/sanity/lib/live";
import { POSTS_QUERY } from "@/sanity/lib/queries";

export default async function Page() {
    const { data: posts } = await sanityFetch({ query: POSTS_QUERY });
    return (
        <main id="primary" className="site-main md-tnwr-main">
            <div className="container">
                <div className="">
                    <div className="">
                        <article id="post-100953" className="post-100953 page type-page status-publish hentry">
                            <div className="md-tnwr-post-article">
                                <div className="entry-content">
                                    <h2 className="wp-block-heading" id="h-recent-articles">RECENT ARTICLES</h2>

                                    <div className="wp-block-columns are-vertically-aligned-top is-layout-flex wp-container-core-columns-is-layout-9d6595d7 wp-block-columns-is-layout-flex">
                                        <div className="wp-block-column is-vertically-aligned-top is-layout-flow wp-block-column-is-layout-flow" style={{ flexBasis: '100%' }}>
                                            <div className="wp-block-group is-nowrap is-layout-flex wp-container-core-group-is-layout-ad2f72ca wp-block-group-is-layout-flex">
                                                <div className="md-block-1 md-twrn-recommend-article-main" id="blog-list-blog-list-49cc400e-8e49-4c62-a73c-699a2281e5d3">
                                                    <ul className="md-twrn-rec-art-list">
                                                        {posts.map((article, index) => (
                                                            <li className="md-twrn-rec-art-item" key={index}>
                                                                <div className="md-twrn-rec-art-contwrap">
                                                                    {article.image && (
                                                                        <div className="md-twrn-rec-art-thumb">
                                                                            <img decoding="async" src={article.image} alt={article.title} title={article.title} />
                                                                        </div>
                                                                    )}
                                                                    <div className="md-twrn-rec-art-cont">
                                                                        <div className="md-twrn-rec-artcat-main-wrap">
                                                                            <div className="md-twrn-rec-artcat-list">
                                                                                {article.categories?.map(category => (
                                                                                    <div key={category.value} className="md-twrn-rec-artcat-list-item">
                                                                                        <a href={category.url} title={category.label}>{category.label}</a>
                                                                                    </div>
                                                                                ))}
                                                                            </div>
                                                                            <div className="md-twrn-rec-artcat-date">
                                                                                <span>{article.date}</span>
                                                                            </div>
                                                                        </div>
                                                                        <h3 className="md-twrn-rec-art-title">
                                                                            <a href={article.url}>{article.title}</a>
                                                                        </h3>
                                                                        <a href={article.author?.url} title={article.author?.name}>
                                                                            <span className="md-twrn-rec-art-auther">By {article.author?.name}</span>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                    <div className="btn-wrap" style={{ display: 'block' }}>
                                                        <a href="javascript:void(0);" className="md-tnwr-btn btn-main blog-load-more-btn" data-page="1" data-max-page="25">View More</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div style={{ height: '100px' }} aria-hidden="true" className="wp-block-spacer"></div>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </main>

    );
}