import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";
import { getFeaturedPost } from "../lib/posts-utils";

export default function Home(props) {
	return (
		<>
			<Hero></Hero>
			<FeaturedPosts posts={props.posts} />
		</>
	);
}

export function getStaticProps() {
	const featuredPosts = getFeaturedPost();
	return {
		props: {
			posts: featuredPosts,
		},
	};
}
