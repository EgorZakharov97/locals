import React from 'react';
import Head from 'next/head'
import Footer from '../../components/Footer';
import Subscribe from '../../components/Subscribe';
import Header from '../../components/Header';
import { useRouter } from 'next/router';
import { getAllBlogs, getBlogBySlug } from '../../lib/api';
import Serialize from '../../components/Serialize';

function BlogPost({ post }) {
    return (
        <div>
        <Head>
            <meta charset="utf-8"/>
            <meta http-equiv="x-ua-compatible" content="ie=edge"/>
            <title>Zoomy - {post.title}</title>
            <meta name="keywords" content="online education, e-learning, coaching, education, teaching, learning"/>
            <meta name="description" content="Zoomy is a e-learnibg HTML template for all kinds of education, coaching, online education website"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>

            <link rel="manifest" href="site.webmanifest"/>
            <link rel="shortcut icon" type="image/x-icon" href="/assets/img/favicon.png"/>
            {/* <!-- Place favicon.ico in the root directory --> */}

            {/* <!-- CSS here --> */}
            <link rel="stylesheet" href="/assets/css/bootstrap.min.css"/>
            <link rel="stylesheet" href="/assets/css/owl.carousel.min.css"/>
            <link rel="stylesheet" href="/assets/css/animate.css"/>
            <link rel="stylesheet" href="/assets/css/magnific-popup.css"/>
            <link rel="stylesheet" href="/assets/css/all.min.css"/>
            <link rel="stylesheet" href="/assets/css/flaticon.css"/>
            <link rel="stylesheet" href="/assets/css/font.css"/>
            <link rel="stylesheet" href="/assets/css/metisMenu.css"/>
            <link rel="stylesheet" href="/assets/css/nice-select.css"/>
            <link rel="stylesheet" href="/assets/css/slick.css"/>
            <link rel="stylesheet" href="/assets/css/spacing.css"/>
            <link rel="stylesheet" href="/assets/css/main.css"/>
        </Head>

        <body>
            
            <Header />

            {/* <!-- slide-bar start --> */}
            <aside className="slide-bar">
                <div className="close-mobile-menu">
                    <a href="javascript:void(0);"><i className="fas fa-times"></i></a>
                </div>

                {/* <!-- offset-sidebar start --> */}
                <div className="offset-sidebar">
                    <div className="offset-widget offset-logo mb-30">
                        <a href="index.html">
                            <img src="/assets/img/logo/header_logo_one.svg" alt="logo"/>
                        </a>
                    </div>
                    <div className="offset-widget mb-40">
                        <div className="info-widget">
                            <h4 className="offset-title mb-20">About Us</h4>
                            <p className="mb-30">
                                But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain
                                was born and will give you a complete account of the system and expound the actual teachings of
                                the great explore
                            </p>
                            <a className="theme_btn theme_btn_bg" href="contact.html">Contact Us</a>
                        </div>
                    </div>
                    <div className="offset-widget mb-30 pr-10">
                        <div className="info-widget info-widget2">
                            <h4 className="offset-title mb-20">Contact Info</h4>
                            <p> <i className="fal fa-address-book"></i> 23/A, Miranda City Likaoli Prikano, Dope</p>
                            <p> <i className="fal fa-phone"></i> +0989 7876 9865 9 </p>
                            <p> <i className="fal fa-envelope-open"></i> info@example.com </p>
                        </div>
                    </div>
                </div>
                {/* <!-- offset-sidebar end --> */}

                {/* <!-- side-mobile-menu start --> */}
                <nav className="side-mobile-menu">
                    <ul id="mobile-menu-active">
                        <li className="has-dropdown">
                            <a href="index.html">Home</a>
                            <ul className="sub-menu">
                                <li><a href="index.html">Home Style 1</a></li>
                                <li><a href="index-2.html">Home Style 2</a></li>
                                <li><a href="index-3.html">Home Style 3</a></li>
                            </ul>
                        </li>
                        <li><a href="about.html">About</a></li>
                        <li className="has-dropdown">
                            <a href="#">Pages</a>
                            <ul className="sub-menu">
                                <li><a href="courses.html">Course One</a></li>
                                <li><a href="courses-2.html">Course Two</a></li>
                                <li><a href="course-details.html">Courses Details</a></li>
                                <li><a href="price.html">Price</a></li>
                                <li><a href="instructor.html">Instructor</a></li>
                                <li><a href="instructor-profile.html">Instructor Profile</a></li>
                                <li><a href="faq.html">FAQ</a></li>
                                <li><a href="login.html">login</a></li>
                            </ul>
                        </li>
                        <li className="has-dropdown"><a href="#">Blogs</a>
                            <ul className="sub-menu">
                                <li><a href="blog.html">Blog Grid</a></li>
                                <li><a href="blog-details.html">Blog Details</a></li>
                            </ul>
                        </li>
                        <li><a href="contact.html">Contacts Us</a></li>
                    </ul>
                </nav>
                {/* <!-- side-mobile-menu end --> */}
            </aside>
            <div className="body-overlay"></div>
            {/* <!-- slide-bar end --> */}
            

            <main>
            {/* <!--page-title-area start--> */}
            <section className="page-title-area d-flex align-items-end" style={{ backgroundImage: "url(/assets/img/page-title-bg/01.jpg)" }}>
                <div className="container">
                    <div className="row align-items-end">
                        <div className="col-lg-12">
                            <div className="page-title-wrapper mb-50">
                                <h1 className="page-title mb-25">Blog Details</h1>
                                <div className="breadcrumb-list">
                                    <ul className="breadcrumb">
                                        <li><a href="index.html">Home - Pages -</a></li>
                                        <li><a href="#">Blog Details</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--page-title-area end-->
            <!-- blog-details-area start --> */}
                <section className="blog-details-area pt-150 pb-105 pt-md-100 pb-md-55 pt-xs-100 pb-xs-55">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="blog-details-box mb-45">
                                    <h2>{post.title}</h2>
                                    <ul className="blogs__meta mb-30">
                                    <li><span className="blog-author">By {post.author.name}</span></li>
                                    <li><span><img src="/assets/img/icon/material-date-range.svg" alt="mate-date"/> {(new Date(post.createdAt)).toLocaleDateString("en-US")}</span></li>
                                    <li><span><img src="/assets/img/icon/material-access-time.svg" alt="mate-date"/> 03</span></li>
                                    <li> <span><img src="/assets/img/icon/material-comment.svg" alt="mate-date"/> 5</span></li>
                                    <li>
                                        <div className="social-media blog-details-social">
                                                <a href="#"><i className="fab fa-facebook-f"></i></a>
                                                <a href="#"><i className="fab fa-instagram"></i></a>
                                                <a href="#"><i className="fab fa-youtube"></i></a>
                                                <a href="#"><i className="fab fa-twitter"></i></a>
                                            </div>
                                        </li>
                                    </ul>
                                    <img className="img-fluid blog-details-img mb-35 w-100" src={post.featureImage.url} alt="blog-details-img"/>
                                    

                                    <Serialize children={post.body} />


                                <div className="blog-details-author row gx-2 align-items-center mb-45">
                                    <div className="col-lg-6">
                                        <div className="author__box mb-30">
                                            <img className="author-img" src="/assets/img/blog/23.jpg" alt=""/>
                                            <div className="author__box-text">
                                                <h4 className="sub-tilte">Jason Momoa</h4>
                                                <p>Admin</p>
                                            </div>
                                        </div>
                                    </div>
                                <div className="col-lg-6">
                                        <div className="social-media blog-details-social mb-30">
                                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                                            <a href="#"><i className="fas fa-basketball-ball"></i></a>
                                            <a href="#"><i className="fab fa-youtube"></i></a>
                                            <a href="#"><i className="fab fa-pinterest-p"></i></a>
                                        </div>
                                </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12 text-center mb-40">
                                        <button className="theme_btn comment_btn">View Comments (05)</button>
                                    </div>
                                </div>
                                <div className="comments-area">
                                    <ul className="latest-commmnet">
                                        <li>
                                            <div className="single-comments mb-30">
                                                <div className="comments__author">
                                                    <img src="/assets/img/blog/comment/01.jpg" alt=""/>
                                                </div>
                                                <div className="comments__text">
                                                    <h4 className="sub-title mb-10">Kavin Petersen <span className="float-end date-text">21 July , 2021</span></h4>
                                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to.</p>
                                                    <a href="#" className="reply mt-10">Reply</a>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="comments-form-area mb-45">
                                    <h2>Leave a comment</h2>
                                    <form action="#" className="row comments-form">
                                        <div className="col-lg-6 mb-20">
                                            <input type="text" placeholder="Full Name"/>
                                        </div>
                                        <div className="col-lg-6 mb-20">
                                            <input type="text" placeholder="Email Name"/>
                                        </div>
                                        <div className="col-lg-12 mb-20">
                                            <textarea name="commnent" id="commnent" cols="30" rows="10" placeholder="Write Your Comments"></textarea>
                                        </div>
                                    </form>
                                    <button className="theme_btn comment_btn">Submit Comment</button>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="blog-widget-area">
                                    <div className="widget mb-50">
                                        <div className="blog-search-widget">
                                            <form action="#" className="comments-form mb-20">
                                                <input type="text" placeholder="Type To Search"/>
                                            </form>
                                            <button className="theme_btn comment_btn">Search Now</button>
                                        </div>
                                    </div>
                                    <div className="widget mb-50">
                                        <div className="blog-categories-widget">
                                            <h4 className="sub-title pb-20 mb-25 pt-25">Categories</h4>
                                            <div className="courses-tag-btn cat-btn">
                                                <a href="#">Online School</a>
                                                <a href="#">Technology(36)</a>
                                                <a href="#">Product Design(36)</a>
                                                <a href="#">Business(16)</a>
                                                <a href="#">Programming(21)</a>
                                                <a href="#">Web Development(17)</a>
                                                <a href="#">Digital Marketing(07)</a>
                                                <a href="#">Content Writer(06)</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="widget mb-50">
                                        <div className="blog-categories-widget">
                                            <h4 className="sub-title pb-20 mb-25 pt-25">Recent Post</h4>
                                            <ul className="blog-recent-post">
                                            <li>
                                                    <div className="posts mb-20">
                                                        <img src="/assets/img/blog/24.jpg" alt="" className="posts__thumb mb-15"/>
                                                        <p>1st July , 2021</p>
                                                        <h6><a href="blog-details.html">Lorem Ipsum is simply dummy text</a></h6>
                                                    </div>
                                            </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="widget mb-50">
                                        <h4 className="sub-title pb-20 mb-25 pt-25">Social Media</h4>
                                        <div className="blog-social-widget">
                                            <div className="social-media mb-30">
                                                <a href="#"><i className="fab fa-facebook-f"></i></a>
                                                <a href="#"><i className="fas fa-basketball-ball"></i></a>
                                                <a href="#"><i className="fab fa-youtube"></i></a>
                                                <a href="#"><i className="fab fa-pinterest-p"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="widget mb-50">
                                        <div className="blog-categories-widget">
                                            <h4 className="sub-title pb-20 mb-25 pt-25">Popular Post</h4>
                                            <ul className="blog-recent-post">
                                            <li>
                                                    <div className="posts mb-20">
                                                        <img src="/assets/img/blog/30.jpg" alt="" className="posts__thumb mb-15"/>
                                                        <p>1st July , 2021</p>
                                                        <h6><a href="blog-details.html">Lorem Ipsum is simply dummy text</a></h6>
                                                    </div>
                                            </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="widget mb-50">
                                        <div className="blog-categories-widget">
                                            <h4 className="sub-title pb-20 mb-25 pt-25">Tags</h4>
                                            <div className="courses-tag-btn cat-btn tag-btn">
                                                <a href="#">Online className</a>
                                                <a href="#">Skill Share</a>
                                                <a href="#">Web Learn</a>
                                                <a href="#">Development</a>
                                                <a href="#">Direction</a>
                                                <a href="#">Certificate</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div></div>
                </section>
    
            <Subscribe />

            {/* <!-- subscribe-area end --> */}
            </main>
        <Footer />
    </body>
  </div>
  )
}

export default BlogPost;

export async function getStaticProps({ params }) {
    const post = await getBlogBySlug(params.slug)
    //   console.log(post)
    return {
        props: {
            post,
        },
        // Next.js will attempt to re-generate the page:
        // - When a request comes in
        // - At most once every 10 seconds
        revalidate: 10, // In seconds
    }
}

export async function getStaticPaths() {
  const allPosts = await getAllBlogs();

  return {
    paths: allPosts?.map((post) => `/blog/${post.slug}`) || [],
    fallback: true,
  }
}
