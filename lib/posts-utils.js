import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

export function getPostsFiles() {
	return fs.readdirSync(postsDirectory);
}

export function getPostData(postIdentifier) {
	const postSlug = postIdentifier.replace(/\.md$/, ''); // removes the file extension
	const filePath = path.join(postsDirectory, `${postSlug}.md`);
	const fileContent = fs.readFileSync(filePath, 'utf-8');
	const { data, content } = matter(fileContent);
  
	const postData = {
	  slug: postSlug,
	  ...data,
	  content,
	};
  
	return postData;
  }

export function getAllPosts() {
	const postFiles = getPostsFiles();

	const allPost = postFiles.map((postFiles) => {
		return getPostData(postFiles);
	});

	const sortedPosts = allPost.sort((a, b) => (a.day > b.day ? -1 : 1));
	return sortedPosts;
}

export function getFeaturedPost() {
	const allPost = getAllPosts();
	const featuredPosts = allPost.filter((p) => p.isFeatured);
	return featuredPosts;
}
