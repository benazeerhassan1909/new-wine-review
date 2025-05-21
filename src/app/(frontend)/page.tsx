import { sanityFetch } from "@/sanity/lib/live";
import { POSTS_QUERY } from "@/sanity/lib/queries";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

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
                                                            console.log(article.author),
                                                            <li className="md-twrn-rec-art-item" key={index}>
                                                                <div className="md-twrn-rec-art-contwrap">
                                                                    {article.mainImage && (
                                                                        <div className="md-twrn-rec-art-thumb">
                                                                            <Image
                                                                                width={519}
                                                                                height={519}
                                                                                src={article.mainImage ? urlFor(article.mainImage).url() : ''}
                                                                                alt={article?.title ?? ""}
                                                                                title={article.title ?? undefined}
                                                                            />
                                                                        </div>
                                                                    )}
                                                                    <div className="md-twrn-rec-art-cont">
                                                                        <div className="md-twrn-rec-artcat-main-wrap">
                                                                            <div className="md-twrn-rec-artcat-list">
                                                                                {article.categories?.map(category => (
                                                                                    <div key={category._id} className="md-twrn-rec-artcat-list-item">
                                                                                        <a href={typeof category.slug === "string" ? category.slug : (category.slug?.current ?? undefined)} title={category.title ?? undefined}>{category.title}</a>
                                                                                    </div>
                                                                                ))}
                                                                            </div>
                                                                                <div className="md-twrn-rec-artcat-date">
                                                                                    {
                                                                                        article.publishedAt && article.publishedAt !== null &&
                                                                                        <span>
                                                                                            {new Date(article.publishedAt).toLocaleString('en-US', {
                                                                                                month: 'long',
                                                                                                day: 'numeric',
                                                                                                year: 'numeric',
                                                                                            }).toUpperCase()}
                                                                                        </span>
                                                                                    }                                                                           </div>
                                                                        </div>
                                                                        <h3 className="md-twrn-rec-art-title">
                                                                            <a href={article.slug?.current}>{article.title}</a>
                                                                        </h3>
                                                                        {article.author && article.author?.name && (
                                                                            <a
                                                                                href={typeof article.author?.slug === "string"
                                                                                    ? article.author.slug
                                                                                    : article.author?.slug?.current ?? undefined}
                                                                                title={article.author?.name}
                                                                            >
                                                                                <span className="md-twrn-rec-art-auther">By {article.author?.name}</span>
                                                                            </a>
                                                                        )}
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