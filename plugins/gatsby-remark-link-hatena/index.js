const visit = require("unist-util-visit")
const toString = require("mdast-util-to-string")
module.exports = ({ markdownAST }, pluginOptions) => {
  visit(markdownAST, "link", node => {
        const title = node.children[0].value
        const url = "https://hatenablog-parts.com/embed?url="+encodeURI(node.url)
        if (title !== "$card") {
            return
        }
    // Grab the innerText of the heading node
    let text = toString(node)

    const html = `
      <div>
      <iframe src="${url}" title="" class="embed-card embed-webcard" scrolling="no" frameborder="0" style="display: block; width: 100%; height: 155px; max-width: 500px; margin: 10px 0px;" loading="lazy"></iframe>
      </div>
      `

    node.type = "html"
    node.children = undefined
    node.value = html
  })

  return markdownAST
}