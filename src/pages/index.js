import FeaturedPosts from "@/components/home-page/featured-posts";
import Hero from "@/components/home-page/hero";

const DUMMY_POSTS = [
  {
    title: 'dummy title',
    excerpt: 'dummy excerpt',
    slug: 'dummy-slugs',
    image: 'dummy-image.png',
    date: '2023-03-14'
  },
  {
    title: 'dummy title',
    excerpt: 'dummy excerpt',
    slug: 'dummy-slugs',
    image: 'dummy-image.png',
    date: '2023-03-14'
  }
]
export default function Home() {
  return (
    <>
      <Hero></Hero>
      <FeaturedPosts posts={DUMMY_POSTS}/>
    </>
  );
}
