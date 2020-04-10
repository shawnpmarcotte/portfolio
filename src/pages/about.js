import React from "react"
import Helmet from "react-helmet"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import Resume from "../../static/assets/Resume.pdf"

const aboutPage = ({
  data: {
    site
  },
}) => {
  return (
    <Layout>
      <Helmet>
        <title>About</title>
        <meta name="description" content={site.siteMetadata.description} />
      </Helmet>
      <div className="two-grids -contact">
        <div className="post-thumbnail" style={{ backgroundImage: `url('/assets/IMG_5003.jpg')`, marginBottom: 0 }}>
          <h1 className="post-title">About Shawn &rarr;</h1>
        </div>
        <div>
          <div className="about-page">
            <ul>
              Freelance Web Developer
                  </ul>
            <ul>
              Army Veteran | Full Stack Web Engineer
                  </ul>
            <ul>
              High aptitude for increasing customer value and leading cross functional teams
                  </ul>
            <ul>
              Dedicated and driven in the pursuit for excellence
                  </ul>
            <ul>
              Professional history demonstrates effective, innovative and dynamic work strategies in order to drive sales, enhance operational productivity, and achieve business goals
                    </ul>
            <ul>
              Extensive experience within the Maritime and Telecommunications industry
                  </ul>
            <div
              style={{ marginTop: 15 }}>
              <a href={Resume} download="Resume_Shawn Marcotte"
                className="button -primary"
              >Download Resume</a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default aboutPage
export const pageQuery = graphql`
  query aboutPageQuery{
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`