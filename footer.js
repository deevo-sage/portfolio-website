import React from 'react';
import me from "../src/skills.json";

const Footer = () => {
    return(
        <div>
        <ul>
            {me.social.map((x) => {
                return (
                    <li><a className={x["icon-class"]} href={x["link"]}></a></li>
                )
            })}
            </ul>
        </div>
    );
};
export default Footer