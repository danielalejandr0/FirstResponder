import React from "react";

function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer>
            <p>Copyrightⓒ Prophet Market, Inc {year}</p>
        </footer>
    );
}

export default Footer;