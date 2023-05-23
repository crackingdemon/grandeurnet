import { useRouter } from 'next/router';

export default function BlogPost() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold my-4">Blog Post {id}</h1>
      {/* Add your blog post content here */}
    </div>
  );
}
