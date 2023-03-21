import PostContent from "../../components/posts/post-details/post-content";
import { getPostData, getPostsFiles } from "../../lib/posts-utils";
function postDetailPage(props) {
	return <PostContent post={props.post} />;
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
