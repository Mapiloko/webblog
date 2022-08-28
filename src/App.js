import './App.css';
// import {FontAwesomeIcon } from "@fortawesome/react-fontawesome"



function App() {

 const collapseHangle =() =>{
    var elems = document.querySelectorAll(".collapsed-color")

    var index = 0, length = elems.length;
    for ( ; index < length; index++) {
        elems[index].style.color = "#34c6d3";
    }
 }   

  return (
    <>
      <header>
        <nav className="navbar navbar-fixed-top">
            <div className="container-fluid">
                <div className="vesco-nav-wrapper">
                    <div className="navbar-header">
                        <button type="button" onClick={collapseHangle} className="navbar-toggle collapsed" data-toggle="collapse"
                            data-target="#vesco-menu">
                            <span className="sr-only">Toggle Navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                          <h1 className='navbar-brand'>Gundo</h1>
                    </div>
                    <div id="vesco-menu" className="collapse navbar-collapse">
                        <ul className="nav navbar-nav">
                            <li><a className="smooth-scroll collapsed-color" href="#home">Home</a></li>
                            <li><a className="smooth-scroll collapsed-color" href="#about">About</a></li>
                            <li><a className="smooth-scroll collapsed-color" href="#services">Blogs</a></li>
                            <li><a className="smooth-scroll collapsed-color" href="#pricing">Pricing</a></li>
                            <li><a className="smooth-scroll collapsed-color" href="#contact">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    </header>

    <section id="home">
       <div className='home'>
        <div id="home-cover" className="bg-parallax animated fadeIn">
            <div id="home-content-box">
                <div id="home-content-box-inner">
                <div className="home-text" data-aos="fade-up" data-aos-duration="1000" >
                <h1>Netshisaulu Gundo</h1>
                <p style={{color:"white"}}>
                Are you honest enough with yourself?
                </p>
                <a href="#about" className="btn btn-default">About Gundo</a>
                </div>
                </div>
            </div>
        </div>
       </div>
    </section>
     {/* About */}
    <section id="about">
         {/* About right side  */}
        <div id="about-bg-diagonal" className="bg-parallax"></div>
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div id="about-content-box">
                        <div id="about-content-box-outer">
                            <div id="about-content-box-inner">
                                <div className="content-title animated fadeInDown wow " data-wow-duration="1s"
                                    data-wow-delay=".5s">
                                    <h3>About Gundo</h3>
                                    <div className="content-title-underline"></div>
                                </div>
                                <div id="about-desc" className="animated fadeInDown wow " data-wow-duration="1s"
                                    data-wow-delay=".5s">
                                    <p>
                                    Am SetMeOnFire, that has been my name since, now. I am glad that you have come 
                                    and joined me in my mystry. Just hope you will be able to break out. I would like 
                                    you to ask yourself some few questions. 
                                    
                                    <br></br>
                                    <br></br>

                                    Number 1, are you alive? Q 2 How do you know that
                                    you are alive Q 3 What if you not alive? This are some of the questions that got me this in 
                                    this mystery and people wanting to set me of fire.
                                    <br></br>
                                    <br></br>

                                    To be alive means to have a dream and you know that you are alive because you are
                                    following your dream. So, if you are not...
                                    </p>
                                </div>
                                <div id="about-btn" className="animated fadeInUp wow " data-wow-duration="1s"
                                    data-wow-delay=".5s">
                                    <a href="#work" className="btn btn-default smooth-scroll" role="button" title="View Work">Read more...</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Blogs */}

    <section id="services">
        <div className="content-box">
            <div className="row">
              <div className="col-12 section-title">
                <div className="title">
                  <p>My Stories</p>
                </div>
                <div className="content-title animated fadeInDown wow " data-wow-duration="1s"
                    data-wow-delay=".5s">
                    <h3>My Blog</h3>
                    <div className="content-title-underline"></div>
                </div>
              </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <div className="service-item animated fadeInUp wow " data-wow-duration="1s" data-wow-delay=".5s">
                            <div className='row'>
                              <div className="col-md-1 hidden-xs service-item-icon ">
                                    <i className="fa fa-paint-brush fa-2x"></i>
                              </div>
                              <div className='col-md-11 col-xs-12 service-item-title'>
                                <h3>What am I supposed to do?</h3>
                              </div>
                            <div className="col-md-12 service-item-desc">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Iusto quos nisi ad voluptatibus ab earum atque enim
                                    corporis!
                                </p>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className="service-item animated fadeInUp wow " data-wow-duration="1s" data-wow-delay=".5s">
                            <div className='row'>
                              <div className="col-md-1 hidden-xs service-item-icon">
                                      <i className="fa fa-paint-brush fa-2x"></i>
                              </div>
                              <div className='col-md-11 service-item-title'>
                                    <h3>OG (Bonus)</h3>
                              </div>
                            <div className="col-md-12 service-item-desc">
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Iusto quos nisi ad voluptatibus ab earum atque enim
                                        corporis!
                                    </p>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className="service-item animated fadeInUp wow " data-wow-duration="1s" data-wow-delay=".5s">
                          <div className='row'>
                                <div className="col-md-1 hidden-xs service-item-icon">
                                    
                                        <i className="fa fa-paint-brush fa-2x"></i>
                                    
                                </div>
                                <div className='col-md-11 service-item-title'>
                                  
                                      <h3>Infected (Bonus)</h3>
                                  
                                </div>
                              <div className="col-md-12 service-item-desc">
                                      <p>
                                          Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                          Iusto quos nisi ad voluptatibus ab earum atque enim
                                          corporis!
                                      </p>
                              </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className="service-item animated fadeInUp wow " data-wow-duration="1s" data-wow-delay=".5s">
                        <div className='row'>
                              <div className="col-md-1 hidden-xs service-item-icon">
                                  
                                      <i className="fa fa-paint-brush fa-2x"></i>
                              </div>
                              <div className='col-md-11 service-item-title'>
                                
                                    <h3>Constantine ft SetMeOnFire</h3>
                              </div>
                            <div className="col-md-12 service-item-desc">
                                
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Iusto quos nisi ad voluptatibus ab earum atque enim
                                        corporis!
                                    </p>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className="service-item animated fadeInUp wow " data-wow-duration="1s" data-wow-delay=".5s">
                          <div className='row'>
                                <div className="col-md-1 hidden-xs service-item-icon">
                                        <i className="fa fa-paint-brush fa-2x"></i>
                                </div>
                                <div className='col-md-11 service-item-title'>
                                      <h3>Trapped</h3>
                                  </div>
                              <div className="col-md-12 service-item-desc">
                                      <p>
                                          Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                          Iusto quos nisi ad voluptatibus ab earum atque enim
                                          corporis!
                                      </p>
                              </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className="service-item animated fadeInUp wow " data-wow-duration="1s" data-wow-delay=".5s">
                        <div className='row'>
                              <div className="col-md-1 hidden-xs service-item-icon">
                                    <i className="fa fa-paint-brush fa-2x"></i>
                              </div>
                              <div className='col-md-11 service-item-title'>
                                    <h3>Depression and pornography</h3>
                              </div>
                            <div className="col-md-12 service-item-desc">
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Iusto quos nisi ad voluptatibus ab earum atque enim
                                        corporis!
                                    </p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='View-More'>
                  <a href="#our-menu" className="btn btn-default">View More..</a>
                </div>
            </div>
        </div>
    </section>

    <footer>
    <div id="contact">
            <div className="container">
                <div className="row">
              <div className="col-12 section-title">
                <div className="title">
                  <p>Get in touch</p>
                </div>
                <div className="content-title animated fadeInDown wow " data-wow-duration="1s"
                    data-wow-delay=".5s">
                    <h3 style={{color:"white"}}>Contacts</h3>
                    <div className="content-title-underline"></div>
                </div>
              </div>
            </div>
                <div className="row">
                    <div className="col-md-6">
                        <div id="contact-left">
                            <h3>Gundo</h3>
                            <p>"Develop success from failures. Discouragement and failure are two of
                                 the surest stepping stones to success" — <strong>Dale Carnegie</strong> </p>
                            <div id="contact-info">
                                <address>
                                    <strong>Address:</strong><br></br>
                                    <p>211 Jockey Hollow, Suite 600 <br></br>
                                        Smithtown, NY 11787</p>
                                </address>
                                <div id="phone-fax-email">
                                    <p>
                                        <strong>Phone:</strong><span>(91) 8974 56984</span><br></br>
                                        <strong>Fax:</strong><span>(91) 66 8754 8978</span><br></br>
                                        <strong>Email:</strong><span>info@websites.com</span><br></br>
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div id="contact-right">
                            <form action="submit">
                                <input type="text" name="fullname" placeholder="Full Name" className="form-control"></input>
                                <input type="text" name="email" placeholder="Email Address" className="form-control"></input>
                                <textarea name="message" rows="5" className="form-control"></textarea>
                                <div id="sent-btn">
                                    <button className="btn btn-default" >SEND</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="footer-bottom">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div id="footer-copyrights">
                            <p>Copyrights &copy; 2020 All Rights Reserved by Vesco Inc</p>
                        </div>
                    </div>
                    <div className="col-md-6 hidden-sm hidden-xs">
                        <div id="footer-menu">
                            <ul>
                              <li><a className="smooth-scroll" href="#home">Home</a>/</li>
                              <li><a className="smooth-scroll" href="#about">About</a>/</li>
                              <li><a className="smooth-scroll" href="#services">Blogs</a>/</li>
                              <li><a className="smooth-scroll" href="#pricing">Pricing</a>/</li>
                              <li><a className="smooth-scroll" href="#contact">Contact</a>/</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <a href="#home" id="back-to-top" className="back-to-top-btn smooth-scroll hidden-sm hidden-xs" title="home" role="button" >
            <i className="fa fa-angle-up"></i>
        </a>
    </footer>
    </>
  );
}

export default App;
