import * as React from "react";
import * as Div from "@mui/material";

import { useInfo } from "../../config/data/info";

export default function Contact() {
    return (
        <Div.Grid item className="contact py-4" id="contact">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 mx-auto">
                        <h4 className="mb-4">
                            Contact us
                        </h4>
                        <ul>
                            {useInfo.contacts.map((contact, key) => (
                                <li key={key}>{contact.emoji} {contact.text}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="col-lg-6 mx-auto">
                        <div className="form_contact">
                            <form className="contFrm">
                                <div className="row">
                                    <div className="col-12">
                                        <textarea className="inptFld" name="Message" placeholder="Your Message..." required></textarea>
                                    </div>
                                    <div className="col-12">
                                        <input type="submit" value="Submit" className="inptBtn" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Div.Grid>
    );
}