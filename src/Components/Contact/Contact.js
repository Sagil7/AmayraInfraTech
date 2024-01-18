import React from 'react'
import './Contact.css'
function Contact() {
    return (
        <div>
            <section class="section-bg" style={{backgroundImage: `url(https://i.ibb.co/9p3Cnk9/slider-2.jpg)`}} data-scroll-index="7">
                <div class="overlay pt-100 pb-100 ">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6 d-flex align-items-center">
                                <div class="contact-info">

                                    <h2 class="contact-title">Have Any Questions?</h2>
                                    <p>Lorem ipsum is a dummy text used to replace text in some areas just for the purpose of an example. It can be used in publishing and graphic design. The lorem ipsum text is usually a section of a Latin text by Cicero with words altered, added and removed to make it nonsensical.</p>
                                    <ul class="contact-info">
                                        <li>
                                            <div class="info-left">
                                                <i class="fas fa-mobile-alt"></i>
                                            </div>
                                            <div class="info-right">
                                                <h4>+91 8882957128</h4>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="info-left">
                                                <i class="fas fa-at"></i>
                                            </div>
                                            <div class="info-right">
                                                <h4>amayrainfratech@gmail.com</h4>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="info-left">
                                                <i class="fas fa-map-marker-alt"></i>
                                            </div>
                                            <div class="info-right">
                                                <h4> Floor-12 Gaur city mall Noida extension - 201009</h4>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-6 d-flex align-items-center">
                                <div class="contact-form">
                                    <form id='contact-form' method='POST'><input type='hidden' name='form-name' value='contactForm' />
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <input type="text" name="name" class="form-control" id="first-name" placeholder="Enter Your Name *" required="required" />
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <input type="email" name="email" class="form-control" id="email" placeholder="Enter Your Email *" required="required" />
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <input type="number" name="email" class="form-control" id="email" placeholder="Enter phone number *" required="required" />
                                                </div>
                                            </div>

                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <textarea rows="4" name="message" class="form-control" id="description" placeholder="Enter Your Message *" required="required"></textarea>
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <button class="btn-big btn btn-bg">
                                                    Send Us <i class="fas fa-arrow-right"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.7914311116874!2d77.42705757495581!3d28.606033185284474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef6165728471%3A0xf027989e066991a4!2sGaur%20City%20Mall!5e0!3m2!1sen!2sin!4v1705555374509!5m2!1sen!2sin" width="1200" height="500" style={{border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    )
}

export default Contact
