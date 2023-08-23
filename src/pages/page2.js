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
console.log(book)
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
            <img className="amazon-card-image" src={e.node.ImageURL} loading="lazy" alt={e.node.Title}/>
          </div>
        </a>
      </div>

      ))}
    </div>
    )
}