// components/BlogPreview.tsx

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remark from 'remark';
import html from 'remark-html';

interface BlogPost {
    id: string;
    title: string;
    // date: string;
    // preview: string;
}

const BlogPreview = () => {
    // Read posts from the _posts/blog directory
    const postsDirectory = path.join(process.cwd(), '_posts', 'blog');
    const fileNames = fs.readdirSync(postsDirectory);

    // Map file names to blog post data
    const posts: BlogPost[] = fileNames.map(fileName => {
        const id = fileName.replace(/\.md$/, '');
        const fullPath = path.join(postsDirectory, fileName);
        const fileContent = fs.readFileSync(fullPath, 'utf-8');
        const { data, content } = matter(fileContent);

        // Extract only the first paragraph for the preview
        // const preview = remark().use(html).processSync(content.split('\n\n')[0]).toString();

        return {
            id,
            title: data.name,
            // date: data.date,
            // preview
        };
    });

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            {posts.map(post => (
                <div key={post.id} className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                    {/* <p className="text-gray-700">{post.preview}</p> */}
                    {/* <p className="text-gray-500 mt-2">{post.date}</p> */}
                </div>
            ))}
        </div>
    );
};

export default BlogPreview;
