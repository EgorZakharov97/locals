import React from 'react';

function BlogPostPreview(props) {
  return (
    <div className="col-lg-4 col-md-6">
        <div className="z-blogs mb-30">
            <div className="z-blogs__thumb mb-30">
            <a href={`/blog/${props.slug}`}><img className='w-100' src={props.featureImage.url} alt={props.featureImage.alt}/></a>
            </div>
            <div className="z-blogs__content">
                <h5 className="mb-25">{props.category.title}</h5>
                <h4 className="sub-title mb-15"><a href={`/blog/${props.slug}`}>{props.body[0].children[0].text.substring(0, 50) + "..."}</a></h4>
                <div className="z-blogs__meta d-sm-flex justify-content-between pt-20">
                    <span>Date : {(new Date(props.createdAt)).toLocaleDateString("en-US")}</span>
                    <span>By {props.author.name}</span>
                </div>
            </div>
        </div>
    </div>
  );
}

export default BlogPostPreview;
