import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>React & Gatsby</h1>
        <p>
          Working through some tutorials to learn how to design and code using
          React and Gatsby framework, which seems pretty straighforward so far.
        </p>
        <Link to="/video/">Watch the video</Link>
      </div>
    </div>
  </div>
)

export default IndexPage
