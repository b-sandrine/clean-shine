function Navbar() {
    return (
        <nav className="nav">
            <div className="nav-logo">
                <img src="./assets/logo.webp" alt="the logo image"></img>
                <h1>CLEAN & SHINE </h1>
            </div>
            <div className="nav-links">
                <ul className="nav-link-container">
                    <li className="nav-link-item">
                        <a href="#" className="nav-link-item-url">Home</a>
                    </li>
                    <li className="nav-link-item">
                        <a href="#" className="nav-link-item-url">About</a>
                    </li>
                    <li className="nav-link-item">
                        <a href="#" className="nav-link-item-url active">Services</a>
                    </li>
                </ul>
            </div>
            <div className="nav-button">
                <button className="btn" name="submit">Book Now!</button>
            </div>
        </nav>
    )
}


const MainContent = () => {
    return (
        <section className="content">
            <div className="front-view">
                <div className="front-view-details">
                    <h1>CLEAN & SHINE</h1>
                    <div className="nav-button">
                        <button className="btn" name="submit">Book Now!</button>
                    </div>
                </div>
                <div className="front-view-image">
                    <img src="./assets/Apersonsprayingwithbg-removebg-preview.png" alt="front image without a bg"></img>
                </div>
            </div>

            <div className="aboutContentQuote">
                <h1 className="heading">
                    Clean Home. Professional Service. Fair Price. Expert house cleaning service you can trust.
                </h1>
                <h2>
                    <span className="author"> ~ CLEAN & SHINE</span>
                </h2>
            </div>

            <div className="workingPrinciple">
                <h1 className="heading">Clean & Shine works in 4 simple steps</h1>
                <div className="workingPrinciple-steps">
                    <div className="workingPrinciple-step">
                        <h1 className="number"> 1 </h1>
                        <div className="description">
                            <h1>BOOK</h1>
                            <p>Tell us when and where.</p>
                        </div>
                    </div>
                    <div className="workingPrinciple-step">
                        <h1 className="number"> 2 </h1>
                        <div className="description">
                            <h1>GET A QUOTE</h1>
                            <p>All you need to know.</p>
                        </div>
                    </div>
                    <div className="workingPrinciple-step">
                        <h1 className="number"> 3 </h1>
                        <div className="description">
                            <h1>CLEAN</h1>
                            <p>Expert cleaning by our Clean & Shine Partners.</p>
                        </div>
                    </div>
                    <div className="workingPrinciple-step">
                        <h1 className="number"> 4 </h1>
                        <div className="description">
                            <h1>ENJOY</h1>
                            <p>Relax and have fun.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="services">
                <div className="twin-headings">
                    <h1>Services</h1>
                    <h2>Every project is different. Every client is special</h2>
                </div>
                <div className="services-description">
                    <div className="services-description-large">
                        <div className="services-description-items-large">
                            <img src="" alt="service image"></img>
                            <span class="services-description-item-text">

                            </span>
                        </div>

                        <div className="services-description-items-large">
                            <img src="" alt="service image"></img>
                            <span class="services-description-item-text">
                            
                            </span>
                        </div>
                    </div>

                    <div className="services-description-small">
                        <div className="services-description-item">
                            <img src="" alt="service image"></img>
                            <span class="services-description-item-text">
                            
                            </span>
                        </div>

                        <div className="services-description-item">
                            <img src="" alt="service image"></img>
                            <span class="services-description-item-text">
                            
                            </span>
                        </div>

                        <div className="services-description-item">
                            <img src="" alt="service image"></img>
                            <span class="services-description-item-text">
                            
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="subscribe">
                <div className="subscribe-left">
                    <div className="twin-headings">
                        <h1>Subscribe</h1>
                        <h2>We'll get in touch with you soon.</h2>
                    </div>
                    <div className="subscribe-left-form">
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email" />
                        <input type="btn" value="Submit" />
                    </div>
                </div>
                <div className="subscribe-right">
                    <img src="./assets/logo.webp" alt="the logo image"></img>
                </div>
            </div>

            <div className="about-us">
                <div className="twin-headings">
                    <h1>Why choose Clean & Shine?</h1>
                    <h2>Experience the difference.</h2>
                </div>
                <div className="about-us-items">
                    <div className="about-us-item">
                        <div className="about-us-outer">
                            <div className="about-us-inner">
                                <i></i>
                            </div>
                        </div>
                        <span class="about-us-description">
                        
                        </span>
                    </div>

                    <div className="about-us-item">
                        <div className="about-us-outer">
                            <div className="about-us-inner">
                                <i></i>
                            </div>
                        </div>
                        <span class="about-us-description">
                        
                        </span>
                    </div>

                    <div className="about-us-item">
                        <div className="about-us-outer">
                            <div className="about-us-inner">
                                <i></i>
                            </div>
                        </div>
                        <span class="about-us-description">
                        
                        </span>
                    </div>

                    <div className="about-us-item">
                        <div className="about-us-outer">
                            <div className="about-us-inner">
                                <i></i>
                            </div>
                        </div>
                        <span class="about-us-description">
                        
                        </span>
                    </div>
                </div>
                
            </div>

            <div className="book-us">
                <div className="twin-headings">
                    <h1>Book Now!</h1>
                    <h2>One call cleans it all.</h2>
                </div>
                <div className="book-us-content">
                    <div className="book-us-form">
                        <div className="book-us-form-item">
                            <input type="text" placeholder="Name" />
                        </div>
                        <div className="book-us-form-item">
                            <input type="email" placeholder="Email" />
                        </div>
                        <div className="book-us-form-item">
                            <textarea  />
                        </div>
                        <div className="book-us-form-item">
                            <input type="submit" value="Submit"/>
                        </div>
                    </div>
                

                <div className ="book-us-place">
                    <img src="" alt="Image showing the place we work in"></img>
                </div>

                <div className="book-us-details">
                    <div className="book-us-details-item">
                        <div className="icon"></div>
                        <div className="description"></div>
                    </div>
                    <div className="book-us-details-item">
                        <div className="icon"></div>
                        <div className="description"></div>
                    </div>
                    <div className="book-us-details-item">
                        <div className="icon"></div>
                        <div className="description"></div>
                    </div>
                    <div className="book-us-details-item">
                        <div className="icon"></div>
                        <div className="description"></div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
}

function Footer () {
    return (
        <div className="footer">
            <div className="icons">

            </div>
            <div className="copyright">
                2019
            </div>
        </div>
    )
}

ReactDOM.render(
    <div className="container">
        <Navbar />
        <MainContent />
        <Footer />
    </div>
, document.getElementById("root"))