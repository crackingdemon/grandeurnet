import Link from 'next/link';

export default function Blog() {
  const posts = [
    { id: 1, title: 'First Blog Post' },
    { id: 2, title: 'Second Blog Post' },
    { id: 3, title: 'Third Blog Post' },
  ];

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold my-4">Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id} className="my-2">
            <Link  href={`/blog/${post.id}`} legacyBehavior>
              <a className="text-blue-500" style={{ textDecoration: 'underline' }}>
                {post.title}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
