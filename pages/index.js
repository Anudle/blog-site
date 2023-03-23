import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";
import { getFeaturedPost } from "../lib/posts-utils";
import Head from "next/head";

export default function Home(props) {
	return (
		<>
			<Head>
				<title>Anu's Blog</title>
				<meta name="description" content="I post about front end stuff"></meta>
			</Head>
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
