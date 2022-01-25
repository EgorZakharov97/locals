import React from 'react';

function Header() {
  return (
    <header>
      <div id="theme-menu-two" className="main-header-area main-head-three pl-100 pr-100 pt-20 pb-15">
          <div className="container-fluid">
              <div className="row align-items-center">
                  <div className="col-xl-2 col-lg-2 col-5">
                      <div className="logo"><a href="index.html"><img src="assets/img/logo/header_logo_one.svg" alt=""/></a></div>
                  </div>
                  <div className="col-xl-7 col-lg-8 d-none d-lg-block">
                      <nav className="main-menu navbar navbar-expand-lg justify-content-center">
                          <div className="nav-container">
                              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                  <ul className="navbar-nav">
                                      <li className="nav-item dropdown mega-menu">
                                          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                          All Categories 
                                          </a>
                                          <ul className="dropdown-menu submenu mega-menu__sub-menu-box" aria-labelledby="navbarDropdown">
                                              <li><a href="index.html"><span><img src="assets/img/icon/icon7.svg" alt=""/></span> Business</a></li>
                                              <li><a href="index-2.html"><span><img src="assets/img/icon/icon8.svg" alt=""/></span> Technology</a></li>
                                              <li><a href="index.html"><span><img src="assets/img/icon/icon9.svg" alt=""/></span> Development</a></li>
                                              <li><a href="index-2.html"><span><img src="assets/img/icon/icon10.svg" alt=""/></span> Photography</a></li>
                                              <li><a href="index.html"><span><img src="assets/img/icon/icon11.svg" alt=""/></span> Digital Marketing</a></li>
                                              <li><a href="index-2.html"><span><img src="assets/img/icon/icon12.svg" alt=""/></span> Programming</a></li>
                                              <li><a href="index.html"><span><img src="assets/img/icon/icon14.svg" alt=""/></span> Videograpgy</a></li>
                                              <li><a href="index-2.html"><span><img src="assets/img/icon/icon13.svg" alt=""/></span> Illustration</a></li>
                                          </ul>
                                      </li>
                                      <li className="nav-item dropdown">
                                          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown2" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                              Home
                                          </a>
                                          <ul className="dropdown-menu" aria-labelledby="navbarDropdown2">
                                              <li><a className="dropdown-item" href="index.html">Home Style 1</a></li>
                                              <li><a className="dropdown-item" href="index-2.html">Home Style 2</a></li>
                                              <li><a className="dropdown-item" href="index-3.html">Home Style 3</a></li>
                                          </ul>
                                      </li>
                                      <li className="nav-item dropdown">
                                          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown3" role="button" data-bs-toggle="dropdown" aria-expanded="false">Pages</a>
                                          <ul className="dropdown-menu" aria-labelledby="navbarDropdown3">
                                              <li><a className="dropdown-item" href="about.html">About Us</a></li>
                                              <li><a className="dropdown-item" href="courses.html">Course One</a></li>
                                              <li><a className="dropdown-item" href="courses-2.html">Course Two</a></li>
                                              <li><a className="dropdown-item" href="course-details.html">Courses Details</a></li>
                                              <li><a className="dropdown-item" href="price.html">Price</a></li>
                                              <li><a className="dropdown-item" href="instructor.html">Instructor</a></li>
                                              <li><a className="dropdown-item" href="instructor-profile.html">Instructor Profile</a></li>
                                              <li><a className="dropdown-item" href="faq.html">FAQ</a></li>
                                          </ul>
                                      </li>
                                      <li className="nav-item dropdown active">
                                          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown4" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                              Blog
                                          </a>
                                          <ul className="dropdown-menu" aria-labelledby="navbarDropdown4">
                                              <li><a className="dropdown-item" href="blog.html">Blog Grid</a></li>
                                              <li><a className="dropdown-item" href="blog-details.html">Blog Details</a></li>
                                          </ul>
                                      </li>
                                      <li className="nav-item">
                                          <a className="nav-link" href="contact.html" id="navbarDropdown5" role="button"  aria-expanded="false">Contact</a></li>
                                  </ul>
                              </div>
                          </div>
                      </nav>
                  </div>
                  <div className="col-xl-3 col-lg-2 col-7">
                      <div className="right-nav d-flex align-items-center justify-content-end">
                          <div className="right-btn mr-25 mr-xs-15">
                              <ul className="d-flex align-items-center">
                                  <li><a href="contact.html" className="theme_btn free_btn">Try Free Now</a></li>
                                  <li><a className="sign-in ml-20" href="login.html"><img src="assets/img/icon/user.svg" alt=""/></a></li>
                              </ul>
                          </div>
                          <div className="hamburger-menu d-md-inline-block d-lg-none text-right">
                              <a href="javascript:void(0);">
                                  <i className="far fa-bars"></i>
                              </a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div> 
    </header>
  )
}

export default Header;
