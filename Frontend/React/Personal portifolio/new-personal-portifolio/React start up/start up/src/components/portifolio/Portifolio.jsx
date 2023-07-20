import React from 'react'
import './portifolio.css'
import IMG1 from "../../assets/verygood image.jpg"
import IMG2 from "../../assets/chat_templates_and_infographics.jpg"
import IMG3 from "../../assets/figmaDashboard.jpg"
import IMG4 from "../../assets/HireCreatives.gif"
import IMG5 from "../../assets/verygood image.jpg"
import IMG6 from "../../assets/verygood image.jpg"
import IMG7 from "../../assets/verygood image.jpg"
import IMG8 from "../../assets/verygood image.jpg"


//do not use the images in the production

const data = [
  {
  id:1,
  image: IMG1,
  title: "Crypto Currency Dashboard & Financial Visualisation",
  github: "https://github.com",
  demo:"https://dribbble.com/shots/1667371-Crypto-currency-dashboard-and-financial-data-visualisation"
},
  
  {
    id: 2,
    image: IMG2,
    title: "Charts templates * Infographics in Figma",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/16580766-Orion-UI-kit-Charts-templates-information-in-Figma"
  },
  {
    id: 3,
    image: IMG3,
    title: "Figma dashboard UI kit for data design web apps",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/17290917-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps"
  },
  {
    id: 4,
    image: IMG4,
title:"Creative Design and prototyping",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/1667371-Crypto-currency-dashboard-and-financial-data-visualisation"
  },
  {
    id: 5,
    image: IMG5,
    title: "Crypto Currency Dashboard & Financial Visualisation",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/1667371-Crypto-currency-dashboard-and-financial-data-visualisation"
  },

]
const Portifolio = () => {
  return (
    <section id='portifolio'>
      <h5>My portifolio</h5>
      <h2>What i have done</h2>
      <div className="portifolio_container">
        {
          data.map(({ id, title, image, github, demo }) => {
            return (
              <article className="portifolio_item" key={id}>
                <div className="portifolio_item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portifolio_item-cta">
                  <a href={github} className='btn' target='_blank' >Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
     </div>
      
    </section>
  )
}

export default Portifolio