import { useEffect, useState } from "react"
import styled from "styled-components"

const HTMLObject = styled.object<{ currentHeight: number}>`
  width: 100%;
  minHeight: 800px;
  height: ${p => p.currentHeight}px;
`

export default function CV() {
  const [h, setH] = useState(null)

  useEffect(() => {
    setH(window.innerHeight)
  }, [])

  if (!h) return null

  return (<HTMLObject data="/cv.pdf" type="application/pdf" width="100%" currentHeight={h}>
  <p>Your web browser doesn't have a PDF plugin.
   <a href="/cv.pdf">click here to download the PDF file.</a></p>
</HTMLObject>)
}

 