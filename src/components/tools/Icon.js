import * as React from "react";

export default function IconSocial(props) {
    const { link, icon, label } = props;
    return (
        <a target="_blank" aria-label={label} rel="noopener noreferrer" href={link}>
            <i className={icon} aria-hidden="true" />
        </a>
    );
}