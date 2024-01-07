import React, { useState, useEffect } from "react"
import IFrame from "../components/IFrame"

// import remarkMath from "remark-math"
// import rehypeKatex from "rehype-katex"
const DSA = () => {
  const notebook = "/DSA.html"
  return <IFrame url={notebook} />
}

export default DSA
