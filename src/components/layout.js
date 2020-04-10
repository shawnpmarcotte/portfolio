import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Navigation from "../components/navigation"
import 'prismjs/themes/prism-okaidia.css';
import linkedIn from "../../static/assets/LinkedIn.png";
import github from "../../static/assets/github.png";

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <div className="site-wrapper">
      <header className="site-header">
        <div className="site-title">
          <Link to="/">{data.site.siteMetadata.title}</Link>
        </div>
        <Navigation />
      </header>
      {children}
      <footer className="site-footer">
        <div className="footer">
          <div><a href="https://github.com/shawnpmarcotte">
            <img src={github} alt="github" className="github-logo" />
          </a></div>
          <div><a href="https://www.linkedin.com/in/shawn-paul-marcotte-799b31114/">
            <img src={linkedIn} alt="LinkedIn" className="linkedin-logo" />
          </a></div>
        </div>
      </footer>
    </div>
  )
}