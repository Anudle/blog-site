import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/posts-utils";
import Head from "next/head";
function AllPostsPage(props) {
	return (
		<>
			<Head>
				<title>All Post</title>
				<meta
					name="description"
					content="A list of all programming-related tutorials and post"></meta>
			</Head>
			<AllPosts posts={props.posts}></AllPosts>;
		</>
	);
}

export function getStaticProps() {
	const allPosts = getAllPosts();
	return {
		props: {
			posts: allPosts,
		},
	};
}

export default AllPostsPage;
