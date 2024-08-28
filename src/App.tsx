import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon } from "react-share";

function App() {
  return (
    <>
      <FacebookShareButton
        url="https://www.italki.com/languagechallenge"
        hashtag="#italki"
      >
        <FacebookIcon />
      </FacebookShareButton>
      <TwitterShareButton
        url="https://www.italki.com/languagechallenge"
      >
        <TwitterIcon />
      </TwitterShareButton>
    </>
  )
}

export default App
