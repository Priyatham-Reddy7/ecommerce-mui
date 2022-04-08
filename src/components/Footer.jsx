import React from 'react'

const Footer = () => {
  return (
    <>
        <section className="footer">
            <ul className="list">
                <li>
                    <a href="#">Site Map</a>
                </li>
                <li>
                    <a href="#">Search Terms</a>
                </li>
                <li>
                    <a href="#">Advanced Search</a>
                </li>
                <li>
                    <a href="#">Orders and Returns</a>
                </li>
                <li>
                    <a href="#">Contact Us</a>
                </li>
            </ul>

            <div className="social">
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-snapchat"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-facebook-f"></i></a>
            </div>
        </section>
    </>
  )
}

export default Footer