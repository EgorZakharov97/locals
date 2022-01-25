import React from 'react';

function Footer() {
  return (
    <footer className="footer-area pt-70 pb-40">
          <div className="container">
              <div className="row mb-15">
                  <div className="col-xl-3 col-lg-4 col-md-6  wow fadeInUp2 animated" data-wow-delay='.1s'>
                      <div className="footer__widget mb-30">
                          <div className="footer-log mb-20">
                              <a href="index.html" className="logo">
                                  <img src="assets/img/logo/header_logo_one.svg" alt=""/>
                              </a>
                          </div>
                          <p>Lorem ipsum dolor sit amet, consetetur sadip scing elitr, sed di nonumy eirmod temporinvi dunt ut labore lorem ipsum.</p>
                          <div className="social-media footer__social mt-30">
                              <a href="#"><i className="fab fa-facebook-f"></i></a>
                              <a href="#"><i className="fab fa-twitter"></i></a>
                              <a href="#"><i className="fab fa-linkedin-in"></i></a>
                              <a href="#"><i className="fab fa-google-plus-g"></i></a>
                          </div>
                      </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp2 animated" data-wow-delay='.3s'>
                      <div className="footer__widget mb-30 pl-40 pl-md-0 pl-xs-0">
                          <h6 className="widget-title mb-35">Contact us</h6>
                          <ul className="fot-list">
                              <li><a href="#">info@example.com</a></li>
                              <li><a href="#">+00 235 695 58</a></li>
                              <li><a href="#">Terms and Conditions</a></li>
                              <li><a href="#">Privacy Policy</a></li>
                              <li><a href="contact.html">Contacts</a></li>
                              <li><a href="#">Our Careers</a></li>
                          </ul>
                      </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6  wow fadeInUp2 animated" data-wow-delay='.5s'>
                      <div className="footer__widget mb-25 pl-90 pl-md-0 pl-xs-0">
                          <h6 className="widget-title mb-35">Quick Links</h6>
                          <ul className="fot-list">
                              <li><a href="about.html">About US</a></li>
                              <li><a href="#">Explore Pages</a></li>
                              <li><a href="#">Our Services</a></li>
                              <li><a href="#">Destinations</a></li>
                          </ul>
                      </div>
                  </div>
                  <div className="col-xl-3 col-lg-6 col-md-6  wow fadeInUp2 animated" data-wow-delay='.7s'>
                      <div className="footer__widget mb-30 pl-150 pl-lg-0 pl-md-0 pl-xs-0">
                          <h6 className="widget-title mb-35">Features</h6>
                          <ul className="fot-list mb-30">
                              <li><a href="index.html">Home Page</a> </li>
                              <li><a href="#">Testimonials</a></li>
                              <li><a href="blog.html">Latest News</a></li>
                              <li><a href="#">Help Center</a></li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
          <div className="copy-right-area border-bot pt-40">
              <div className="container">
                  <div className="row align-items-center">
                      <div className="col-lg-12">
                          <div className="copyright text-center">
                              <h5>Copyright@ 2021 <a href="#">Zoomy</a>. All Rights Reserved</h5>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </footer>
  )
}

export default Footer;
