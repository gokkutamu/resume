import * as React from "react";
import * as Div from "@mui/material";

import { useInfo } from "../../config/data/info";

export default function Pr() {
    return (
        <Div.Grid item className="resume py-5 text-align-center" id="resume">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-12">
                        <h4 className="mb-4">
                            Experiences
                        </h4>
                        <div className="timeline">
                            {useInfo.projects.experiences.map((experience, key) => (
                                <div className="timeline-wrapper" key={key}>
                                    <div className="timeline-yr"><span>{experience.year}</span></div>
                                    <div className="timeline-info">
                                        <h3>
                                            <span>{experience.name_pr}</span>
                                            <small>{experience.position}</small>
                                            <p>
                                                {experience.topics.map((topic, key) => (
                                                    <button className="btn btn-dark" key={key}>{topic}</button>
                                                ))}
                                            </p>
                                        </h3>
                                        <p>{experience.content}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="col-lg-6 col-12 text-align-right">
                        <h4 className="mb-4">
                            Educations
                        </h4>
                        <div className="timeline">
                            {useInfo.projects.educations.map((education, key) => (
                                <div className="timeline-wrapper" key={key}>
                                    <div className="timeline-yr"><span>{education.year}</span></div>
                                    <div className="timeline-info">
                                        <h3>
                                            <span>{education.name_pr}</span>
                                            <small>{education.position}</small>
                                            <p>
                                                {education.topics.map((topic, key) => (
                                                    <button className="btn btn-dark" key={key}>{topic}</button>
                                                ))}
                                            </p>
                                        </h3>
                                        <p>{education.content}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Div.Grid>
    );
}