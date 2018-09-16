import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/card'

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
      <div className="Cards">
        <Card
          title="React for Designers"
          text="12 sections"
          image={require('../images/wallpaper.jpg')}
        />
        <Card
          title="React for Designers"
          text="12 sections"
          image={require('../images/wallpaper.jpg')}
        />
      </div>
    </div>
  </div>
)

export default IndexPage
