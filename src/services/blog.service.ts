import "../models/blog";

class BlogService {
    private apiUrl: string;
    constructor() {
      this.apiUrl = `https://localhost:7113/Blog`;
    }

    public async getBlogPosts(): Promise<BlogPost[]> {
        try {
          const response = await fetch(this.apiUrl, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin':'*',
              'Access-Control-Allow-Methods':'POST,PATCH,OPTIONS'
            },
          });
          if (!response.ok) {
            throw new Error('Failed to fetch blog posts from HubSpot');
          }
          const data = await response.json();
          const blogPosts: BlogPost[] = data.map((post: any) => ({
            authorName: post.authorName,
            htmlTitle: post.htmlTitle,
            metaDescription: post.metaDescription,
            name: post.name,
            postBody: post.postBody,
            publishDate: post.publishDate,
            url: post.url,
        }));

        return blogPosts;
        } catch (error) {
          console.error('Error fetching blog posts:', error);
          throw error;
        }
      }
}

export default BlogService;