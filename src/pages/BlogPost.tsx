import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { blogPosts, getBlogPostBySlug } from "../data/blog";
import NotFound from "../components/NotFound";
import "./BlogPost.css";

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

const BlogPost = () => {
  const { slug = "" } = useParams();
  const post = getBlogPostBySlug(slug);

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    const prevHtmlOverflow = html.style.overflow;
    const prevBodyOverflow = body.style.overflow;
    html.classList.add("page-scrollable");
    body.classList.add("page-scrollable");
    html.style.overflow = "auto";
    body.style.overflow = "auto";
    window.scrollTo(0, 0);

    return () => {
      html.classList.remove("page-scrollable");
      body.classList.remove("page-scrollable");
      html.style.overflow = prevHtmlOverflow;
      body.style.overflow = prevBodyOverflow;
    };
  }, [slug]);

  if (!post) {
    return <NotFound />;
  }

  const related = blogPosts
    .filter(
      (item) =>
        item.slug !== post.slug &&
        (item.category === post.category ||
          item.tags.some((tag) => post.tags.includes(tag))),
    )
    .slice(0, 2);

  return (
    <article className="blog-post-page">
      <div className="blog-post-header">
        <Link to="/blog" className="back-button" data-cursor="disable">
          ← All posts
        </Link>
        <p className="blog-post-category">{post.category}</p>
        <h1>{post.title}</h1>
        <div className="blog-post-meta">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span aria-hidden="true">·</span>
          <span>{post.readMinutes} min read</span>
        </div>
        <p className="blog-post-excerpt">{post.excerpt}</p>
      </div>

      <div className="blog-post-hero">
        <img src={post.cover} alt="" />
      </div>

      <div className="blog-post-layout">
        <div className="blog-post-content">
          {post.sections.map((section, index) => (
            <section key={section.heading ?? `section-${index}`}>
              {section.heading && <h2>{section.heading}</h2>}
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 48)}>{paragraph}</p>
              ))}
            </section>
          ))}
        </div>

        <aside className="blog-post-aside">
          <div className="blog-post-tags">
            <h3>Tags</h3>
            <ul>
              {post.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </div>

          {post.repoUrl && (
            <a
              href={post.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="blog-post-github"
              data-cursor="disable"
            >
              View on GitHub →
            </a>
          )}

          <Link to="/blog" className="blog-post-back" data-cursor="disable">
            Browse all posts
          </Link>
        </aside>
      </div>

      {related.length > 0 && (
        <section className="blog-post-related">
          <h2>Keep reading</h2>
          <div className="blog-post-related-grid">
            {related.map((item) => (
              <Link
                key={item.id}
                to={`/blog/${item.slug}`}
                className="blog-post-related-card"
                data-cursor="disable"
              >
                <img src={item.cover} alt="" loading="lazy" />
                <div>
                  <span>{item.category}</span>
                  <h3>{item.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </article>
  );
};

export default BlogPost;
