import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  blogCategories,
  blogPosts,
  type BlogPost,
} from "../data/blog";
import "./Blog.css";

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

const BlogCard = ({ post }: { post: BlogPost }) => (
  <Link
    className="blog-card"
    to={`/blog/${post.slug}`}
    aria-label={`Read ${post.title}`}
    data-cursor="disable"
  >
    <div className="blog-card-image">
      <img
        src={post.cover}
        alt={`Cover for ${post.title}`}
        loading="lazy"
        decoding="async"
      />
    </div>
    <div className="blog-card-body">
      <div className="blog-card-meta">
        <span>{post.category}</span>
        <span aria-hidden="true">·</span>
        <time dateTime={post.date}>{formatDate(post.date)}</time>
        <span aria-hidden="true">·</span>
        <span>{post.readMinutes} min read</span>
      </div>
      <h2>{post.title}</h2>
      <p>{post.excerpt}</p>
      <span className="blog-card-cta">Read article →</span>
    </div>
  </Link>
);

const Blog = () => {
  const [category, setCategory] = useState("All");

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
  }, []);

  const posts = useMemo(() => {
    const sorted = [...blogPosts].sort(
      (a, b) => +new Date(b.date) - +new Date(a.date),
    );
    if (category === "All") return sorted;
    return sorted.filter((post) => post.category === category);
  }, [category]);

  const featured = posts[0];
  const rest = posts.slice(1);

  return (
    <div className="blog-page">
      <div className="blog-header">
        <Link to="/" className="back-button" data-cursor="disable">
          ← Back to Home
        </Link>
        <h1>
          Notes & <span>Blog</span>
        </h1>
        <p>
          One article per public GitHub repo  notes from MCP servers, POS,
          smart city, portfolio, and earlier experiments.
        </p>

        <div className="blog-filters" role="tablist" aria-label="Filter posts">
          {blogCategories.map((value) => (
            <button
              key={value}
              type="button"
              role="tab"
              aria-selected={category === value}
              className={`blog-filter${category === value ? " is-active" : ""}`}
              onClick={() => setCategory(value)}
              data-cursor="disable"
            >
              {value}
            </button>
          ))}
        </div>
      </div>

      {featured && (
        <section className="blog-featured">
          <Link
            className="blog-featured-card"
            to={`/blog/${featured.slug}`}
            data-cursor="disable"
          >
            <div className="blog-featured-image">
              <img
                src={featured.cover}
                alt={`Cover for ${featured.title}`}
              />
            </div>
            <div className="blog-featured-body">
              <div className="blog-card-meta">
                <span>{featured.category}</span>
                <span aria-hidden="true">·</span>
                <time dateTime={featured.date}>{formatDate(featured.date)}</time>
                <span aria-hidden="true">·</span>
                <span>{featured.readMinutes} min read</span>
              </div>
              <h2>{featured.title}</h2>
              <p>{featured.excerpt}</p>
              <span className="blog-card-cta">Read article →</span>
            </div>
          </Link>
        </section>
      )}

      {rest.length > 0 && (
        <section className="blog-grid">
          {rest.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </section>
      )}

      {posts.length === 0 && (
        <p className="blog-empty">No posts in this category yet.</p>
      )}
    </div>
  );
};

export default Blog;
