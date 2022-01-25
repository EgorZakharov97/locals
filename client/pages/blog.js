import React, { useState } from 'react';
import Head from 'next/head'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Preload from '../components/Preload';
import qs from 'qs';
import BlogPostPreview from '../components/BlogPostPreview';

async function getPosts(page=1) {
  const query = qs.stringify({ page })
  const res = await fetch(`http://localhost:3000/api/posts?${query}`)
  const posts = await res.json()
  return posts;
}

export async function getStaticProps() {
  const posts = await getPosts();

  return {
    props: {
      posts,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10, // In seconds
  }
}

function Blog(props) {

  const [posts, setPosts] = useState(props.posts);

  async function loadMore() {
    setPosts(await getPosts(posts.page+1));
  }
  
  return <div className="no-js" lang="en">
  
  <Head>
      <meta charset="utf-8"/>
      <meta http-equiv="x-ua-compatible" content="ie=edge"/>
      <title>Zoomy - E-learning HTML5 Template</title>
      <meta name="keywords" content="online education, e-learning, coaching, education, teaching, learing"/>
      <meta name="description" content="Zoomy is a e-learnibg HTML template for all kinds of education, coaching, online education website"/>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
  
      <link rel="manifest" href="site.webmanifest"/>
      <link rel="shortcut icon" type="image/x-icon" href="assets/img/favicon.png"/>

      <link rel="stylesheet" href="assets/css/bootstrap.min.css"/>
      <link rel="stylesheet" href="assets/css/owl.carousel.min.css"/>
      <link rel="stylesheet" href="assets/css/animate.css"/>
      <link rel="stylesheet" href="assets/css/magnific-popup.css"/>
      <link rel="stylesheet" href="assets/css/all.min.css"/>
      <link rel="stylesheet" href="assets/css/flaticon.css"/>
      <link rel="stylesheet" href="assets/css/font.css"/>
      <link rel="stylesheet" href="assets/css/metisMenu.css"/>
      <link rel="stylesheet" href="assets/css/nice-select.css"/>
      <link rel="stylesheet" href="assets/css/slick.css"/>
      <link rel="stylesheet" href="assets/css/spacing.css"/>
      <link rel="stylesheet" href="assets/css/main.css"/>
  </Head>
  
  <div>
  
      <Preload />
  
      <Header />
      
      <main>
       {/* <!--page-title-area start--> */}
        <section className="page-title-area d-flex align-items-end" style={{ backgroundImage: "url(assets/img/page-title-bg/01.jpg)" }}>
            <div className="container">
                <div className="row align-items-end">
                    <div className="col-lg-12">
                        <div className="page-title-wrapper mb-50">
                           <h1 className="page-title mb-25">Blog</h1>
                           <div className="breadcrumb-list">
                              <ul className="breadcrumb">
                                  <li><a href="index.html">Home - Pages -</a></li>
                                  <li><a href="#">Blog</a></li>
                              </ul>
                           </div>
                      </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!--page-title-area end--> */}
        {/* <!-- blog-area start --> */}
          <section className="blog-area">
              <div className="blog-bg pt-150 pb-120 pt-md-100 pb-md-70 pt-xs-100 pb-xs-70">
                  <div className="container">
                      <div className="row justify-content-center">
                          <div className="col-lg-8">
                              <div className="section-title text-center mb-60">
                                  <h2 className="mb-25">Lots of new Blogs and News</h2>
                              </div>
                          </div>
                      </div>
                      <div className="row">

                          {/* Render posts */}
                          { posts.docs.map((post, i) => {
                            return (<BlogPostPreview key={i} {...post} />)
                          }) }
                          
                      <div className="row">
                          <div className="col-lg-12 text-center mt-20 mb-30">
                              <a href="blog-details.html" className="theme_btn">Load More</a>
                          </div>
                      </div>
                  </div>
                </div>
              </div>
          </section>
          {/* <!-- blog-area end --> */}
         {/* <!-- subscribe-area start --> */}
         <section className="subscribe-area footer-bg border-bot pt-145 pb-50 pt-md-90 pt-xs-90">
              <div className="container">
                  <div className="row justify-content-center">
                      <div className="col-xl-8">
                          <div className="subscribe-wrapper text-center mb-30">
                              <h2>Subscribe our Newsletter and Get every updates.</h2>
                             <div className="subscribe-form-box pos-rel">
                                  <form className="subscribe-form">
                                      <input type="text" placeholder="Write Your E-mail"/>
                                  </form>
                                  <button className="sub_btn">Subscribe Now</button>
                             </div>
                          </div>
                      </div>
                  </div>
              </div>
         </section>
         {/* <!-- subscribe-area end --> */}
      </main>
      {/* <!--footer-area start--> */}
      
      <Footer />

      {/* <!--footer-area end--> */}
  
  
  
  
      {/* <!-- JS here --> */}
  
      <script src="assets/js/vendor/modernizr-3.5.0.min.js"></script>
      <script src="assets/js/vendor/jquery-2.2.4.min.js"></script>
      <script src="assets/js/popper.min.js"></script>
      <script src="assets/js/bootstrap.min.js"></script>
      <script src="assets/js/owl.carousel.min.js"></script>
      <script src="assets/js/isotope.pkgd.min.js"></script>
      <script src="assets/js/slick.min.js"></script>
      <script src="assets/js/metisMenu.min.js"></script>
      <script src="assets/js/jquery.nice-select.js"></script>
      <script src="assets/js/ajax-form.js"></script>
      <script src="assets/js/wow.min.js"></script>
      <script src="assets/js/jquery.counterup.min.js"></script>
      <script src="assets/js/waypoints.min.js"></script>
      <script src="assets/js/jquery.scrollUp.min.js"></script>
      <script src="assets/js/imagesloaded.pkgd.min.js"></script>
      <script src="assets/js/jquery.magnific-popup.min.js"></script>
      <script src="assets/js/jquery.easypiechart.js"></script>
      <script src="assets/js/plugins.js"></script>
      <script src="assets/js/main.js"></script>
  </div>
  
  </div>
}

export default Blog;
