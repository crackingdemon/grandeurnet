import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Blog() {
  const blogPosts = [
    { id: 1, slug: 'sample-blog-post-1', title: 'Sample Blog Post 1' },
    { id: 2, slug: 'sample-blog-post-2', title: 'Sample Blog Post 2' },
    { id: 3, slug: 'sample-blog-post-3', title: 'Sample Blog Post 3' },
  ];

  return (
    <div>
      <Head>
        <title>Blog</title>
      </Head>

      <header className="bg-gray-800 text-white py-4">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold">Blog</h1>
        </div>
      </header>

      <main className="container mx-auto my-4">
        <ul className="space-y-4">
          {blogPosts.map((post) => (
            <li key={post.id}>
              <Link href={`/blog/${post.slug}`}>
                <a className="text-blue-500">{post.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </main>

      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto">
          <p className="text-center">© 2023 My Blog. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
