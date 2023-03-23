import PostContent from "../../components/posts/post-details/post-content";
import { getPostData, getPostsFiles } from "../../lib/posts-utils";
import Head from "next/head";
function postDetailPage(props) {
	return (
		<>
			<Head>
				<title>{props.post.title}</title>
				<meta name="description" content={props.post.excerpt}></meta>
			</Head>
			<PostContent post={props.post} />;
		</>
	);
}

export function getStaticProps(context) {
	const { params } = context;
	const { slug } = params;
	const postData = getPostData(slug);

	return {
		props: {
			post: postData,
		},
		revalidate: 600,
	};
}

export function getStaticPaths() {
	const postFilesnames = getPostsFiles();
	const slugs = postFilesnames.map((filename) => filename.replace(/\.md$/, ""));
	return {
		paths: slugs.map((slug) => ({ params: { slug: slug } })),
		fallback: "blocking",
	};
}

export default postDetailPage;
