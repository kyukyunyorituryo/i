// src/pages/page.js
import React from "react"
import { graphql, useStaticQuery } from "gatsby"

export default function Page() {
  const data = useStaticQuery(graphql`
query MyQuery {
  allJson {
    edges {
      node {
        Asin
        Booktype
        Category
        Contributor
        ImageURL
        Points
        Price
        Publisher
        Title
        URL
      }
    }
  }
}
  `)
  const book = data.allJson.edges
const asin=["B08DTXKTFV","B0B683NKKV"]

 var file = book.filter(word => asin.includes(word.node.Asin));
var image_m
var image_s
for (let i = 0; i < file.length; i++) {
image_m=file[i].node.ImageURL.replace(/_SL500_/, '_SL160_');
image_s=file[i].node.ImageURL.replace(/_SL500_/, '_SL75_');
file[i].node.image_m=image_m
file[i].node.image_s=image_s
}
    return (
    <div>
      {file.map(e => (
      <div key={e.node.Asin}>
        <a className="amazon-card-container" href={e.node.URL}>
          <div className="amazon-card-body">
            <div className="amazon-card-title">{e.node.Title}</div>
            <div className="amazon-card-domain">価格：{e.node.Price}、ポイント：{e.node.Points}、{e.node.Contributor}、出版社：{e.node.Publisher}</div>
          </div>
          <div className="amazon-card-image-container">
          <img className="amazon-card-image"
           srcSet={`${e.node.image_s} 320w, ${e.node.image_m} 640w, ${e.node.ImageURL} `}
     src={e.node.image_s}
     sizes="(max-width:1280px) 50vw, 1280px"
      loading="lazy" alt={e.node.Title}/>
          </div>
        </a>
      </div>

      ))}
    </div>
    )
}