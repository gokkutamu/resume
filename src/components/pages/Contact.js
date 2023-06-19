import * as React from "react";

import { useInfo } from "../../config/data/info";

export default function Contact() {
    return (
        <section id="section-07" className="section animation interaction-in">
            <div className="section-body">
                <h2 className="section-title animation-translate-overline animation-item-1">Contact</h2>
                <div className="row mb-10 animation-translate animation-item-2">
                    <div className="col-12 col-md-4">
                        <div className="contact">
                            <strong className="contact-label">Stay in touch</strong>
                            <p>{useInfo.miniBio[2].text}</p>
                            <a href="tel:+84939461842">+84 939461842</a>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="contact">
                            <strong className="contact-label">MXH</strong>
                            <a href="https://www.facebook.com">Facebook</a>
                            <a href="https://www.linked.com">LinekdIn</a>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="contact">
                            <strong className="contact-label">Address</strong>
                            {useInfo.miniBio[0].text}
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-xl-9">
                        <h3 className="section-subtitle animation-translate animation-item-3">Leave a message</h3>
                        <form className="needs-validation animation-translate animation-item-4">
                            <div className="row">
                                <div className="col-12 col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="contact-form-name">Name</label>
                                        <input type="text" className="form-control" name="name" id="contact-form-name" placeholder="Your name" required="" />
                                        <div className="invalid-feedback">Please enter your name.</div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="contact-form-name">E-mail</label>
                                        <input type="email" className="form-control" name="email" id="contact-form-email" placeholder="@" required="" />
                                        <div className="invalid-feedback">Please enter a valid e-mail address.</div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="contact-form-message">Message</label>
                                <textarea className="form-control" name="message" id="contact-form-message" placeholder="Your message" rows="5" required=""></textarea>
                                <div className="invalid-feedback">Please type some message.</div>
                            </div>
                            <button type="submit" className="btn btn-primary">Send</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="section-footer animation-translate animation-item-5">
                <span className="section-next goto-section">
                    <span className="section-next-counter">07/07</span>
                </span>
            </div>
        </section>
    );
}