/**
 * Amazon component that queries for data with
 * Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */



import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Amazon = ({ asin }) => {
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

 var file = book.filter(word => asin.includes(word.node.Asin));
    return (
    <div>
      {file.map(e => (
      <div key={e.node.Asin}>
        <a className="amazon-card-container" href={e.node.URL}>
          <div className="amazon-card-body">
            <div className="amazon-card-title">{e.node.Title}</div>
            <div className="amazon-card-domain">価格：{e.node.Price}、ポイント：{e.node.Points}、{e.node.Contributor}、出版社：{e.node.Publisher}、カテゴリー：{e.node.Category}</div>
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


export default Amazon