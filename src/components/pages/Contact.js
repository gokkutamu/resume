import * as React from "react";
import * as Div from "@mui/material";

import { useInfo } from "../../config/data/info";

export default function Contact() {
    return (
        <Div.Grid item className="contact py-4" id="contact">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 mx-auto">
                        <div className="lat"></div>
                        <div className="long"></div>
                    </div>
                    <div className="col-lg-7 mx-auto">
                        <div className="form_contact">
                            
                        </div>
                    </div>
                </div>
            </div>
        </Div.Grid>
    );
}