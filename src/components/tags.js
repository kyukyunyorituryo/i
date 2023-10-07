/**
 * Amazon component that queries for data with
 * Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */



import * as React from "react"
import { Link} from "gatsby"
import kebabCase from "lodash/kebabCase"
const Tags = ({ tags }) => {
<div>
{tags && tags.length > 0 && tags.map(tag => {
return (
      <Link to={`/tags/${kebabCase(tag)}/`} itemProp="url">
      <button>{tag}</button>
      </Link>
      )
})}
</div>
}


export default Tags
