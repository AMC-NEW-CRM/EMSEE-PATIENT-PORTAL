import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../common/ui/redux/action";
import BlogService from '../../services/blog.service';

const Blogs = () => {
  const dispatch = useDispatch();
  const blogService = new BlogService();
  const blogs = useSelector((state) => state.blogs);

  useEffect(() => {
    const fetchData = async () => {
      const blogPosts = await blogService.getBlogPosts();
      dispatch(fetchBlogs(blogPosts));
    };

    fetchData();
  }, [dispatch]);

  return (
    <div className="row" style={{marginTop: "20px"}}>
      {blogs.map((blog) => (
        <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12" key={blog.id}>
          <div className="custom-card card">
            <div className="card-body">
              <h6 className="card-title fw-medium">{blog.htmlTitle}</h6>
              <p className="card-text text-muted">{blog.PostBody}</p>
            </div>
            <div className="card-footer">
              <span>
                <span className="card-text">
                  Last updated {blog.publishDate} by {blog.authorName}
                </span>
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blogs;
