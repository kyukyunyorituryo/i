/**
 * Amazon component that queries for data with
 * Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */



import * as React from "react"

const Hatena = ({ src,title }) => {
        const url = "https://hatenablog-parts.com/embed?url="+encodeURI(src)
    return (
    <div>
      <div key={src}>
      <iframe src={url} title={title} className="embed-card embed-webcard" scrolling="no" frameBorder="0" loading="lazy"></iframe>
      </div>

    </div>
    )
}


export default Hatena