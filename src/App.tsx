import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon } from "react-share";

function App() {
  return (
    <>
      <FacebookShareButton
        url="https://og.codewithfelix.com/"
        hashtag="#italki"
      >
        <FacebookIcon />
      </FacebookShareButton>
      <TwitterShareButton
        url="https://og.codewithfelix.com/"
      >
        <TwitterIcon />
      </TwitterShareButton>
    </>
  )
}

export default App
