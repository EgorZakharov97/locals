import React from 'react';

const styles = {
    img: {
        width: '300px',
        height: '300px',
        objectFit: 'cover',
    }
}

function BlogPostPreview(props) {
    console.log(props)
  return (
    <div className="row mb-30 align-items-center">
        <div className="col-lg-3">
            <div className="mb-30">
                <img style={styles.img} src="assets/img/faq/01.png" alt=""/>
            </div>
        </div>
        <div className="col-lg-6">
            <div className="faq-que-list pl-75">
                <div className="section-title section-title-2 mb-45">
                    <h5 className="bottom-line left-line mb-25 pl-40">{props.author.name}</h5>
                    <h2 className="mb-25">{props.title}</h2>
                    <p>props.richText[0].children[0].text</p>
                </div>
            </div>
            <div className="faq-btn pl-75">
                <a href={`/blog/${props.title}`} className="theme_btn">Read More</a>
            </div>
        </div>
    </div>
  );
}

export default BlogPostPreview;
