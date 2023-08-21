import React from 'react';
import blogImg1 from '../images/blog-img1.jpg';
import blogImg2 from '../images/blog-img2.jpg';
import blogImg3 from '../images/blog-img3.jpg';


const Blog = () => {
    return (
        <div className="container-fluid">
            <h4 className="text-center">Examples</h4>
            <h2 className='text-center text-warning'> We Create a Space For Creativity</h2>
            <div className="row mt-5">
                <div className="col-md-4">
                    <img src={blogImg1} alt="Blog Post 1" className="img-fluid" />
                </div>
                <div className="col-md-4">
                    <img src={blogImg2} alt="Blog Post 2" className="img-fluid" />
                </div>
                <div className="col-md-4">
                    <img src={blogImg3} alt="Blog Post 3" className="img-fluid" />
                </div>
            </div>
            <h2 className='text-center mt-5 text-success'> A Place Where Everyone would Love To Work </h2>
        </div>
    );
};

export default Blog;
