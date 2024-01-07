import { useState, useRef, useContext, useEffect, useCallback } from "react"
import { useTheme } from "../contexts"

const IFrame = ({ url }) => {
  const { theme } = useTheme()
  const divBoxRef = useRef(null)
  const [iFrameLoaded, setIFrameLoaded] = useState(false)

  const resizeIframe = useCallback((iframe) => {
    // get window width
    const width = window.innerWidth
    // Get the document within the iframe
    let iframeDocument = iframe.contentDocument || iframe.contentWindow.document

    // Get the body of the document within the iframe
    let iframeBody = iframeDocument.body
    // set iframe width to window width
    iframe.style.width = `${width}px`

    //set the height to the scrollHeight of the iframe
    iframe.style.height = iframeBody.scrollHeight + "px"
  }, [])

  const handleThemeChange = useCallback(
    (iframe) => {
      // Get the document within the iframe
      let iframeDocument =
        iframe.contentDocument || iframe.contentWindow.document

      // Get the body of the document within the iframe
      let iframeBody = iframeDocument.body

      // Now you can manipulate iframeBody as needed
      iframeBody.classList.add(theme)
    },
    [theme]
  )

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIFrameLoaded(true)
            resizeIframe(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    const currentRef = divBoxRef.current
    observer.observe(currentRef)

    return () => {
      observer.unobserve(currentRef)
    }
  }, [resizeIframe])

  return (
    <div ref={divBoxRef}>
      {!iFrameLoaded && (
        <span
          style={{ display: "flex", justifyContent: "center", margin: "auto" }}
        >
          loading notebook ...
        </span>
      )}

      <iframe
        style={{ display: "flex", justifyContent: "center", margin: "auto" }}
        onLoad={(e) => {
          setIFrameLoaded(true)
          resizeIframe(e.target)
          handleThemeChange(e.target)
        }}
        title="static_html"
        src={url}
      />
    </div>
  )
}
export default IFrame
