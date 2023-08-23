// src/pages/page.js
import React from "react"

import Amazon from "../components/Amazon"

export default function Page3() {

 const books=["B07N8ZT86X","B07HRQJ1WV"]
  return (
      <div>
    <Amazon asin={books} />
        <Amazon asin="B086L8S2CV" />
        </div>
  )
}