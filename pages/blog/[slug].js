import React from 'react';
import Head from 'next/head';
import { NextSeo } from 'next-seo';

export default function BlogPost() {
  return (
    <div>
      <NextSeo
        title="Sample Blog Post"
        description="This is a sample blog post"
        canonical="https://www.example.com/blog/sample-blog-post"
        openGraph={{
          url: 'https://www.example.com/blog/sample-blog-post',
          title: 'Sample Blog Post',
          description: 'This is a sample blog post',
          images: [
            {
              url: 'https://www.example.com/images/sample-blog-post.jpg',
              alt: 'Sample Blog Post Image',
            },
          ],
        }}
      />

      <Head>
        <title>Sample Blog Post</title>
      </Head>

      {/* Rest of the blog post component */}
    </div>
  );
}
