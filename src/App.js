import './App.css';
import React, {useState} from 'react';
import {
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  GabShareButton,
  HatenaShareButton,
  InstapaperShareButton,
  LineShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  LivejournalShareButton,
  MailruShareButton,
  OKShareButton,
  PinterestShareButton,
  PocketShareButton,
  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterIcon,
  TwitterShareButton,
  ViberShareButton,
  VKShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";
const App = () => {
  const url = "https://api.quotable.io/random";
  let quoteData = {
    content: "Let time be your only competitor.",
    author: "Seoud"
  }
  const [quote, setQuote] = useState(quoteData)

  const generateQuote = () => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setQuote({...data,author:'Seoud'})
      });
  }

  const copy = () => {
    navigator.clipboard.writeText(quote.author + " once said: " + quote.content)
    alert('copied')
  }

  return (
    <>
      <h1>Quote Generator React App</h1>
      <div className="container">
        <p>{quote.content}</p>
        <span>{quote.author}</span>
        <div className="btns">
          <button onClick={copy} className="btn">Copy</button>
          <button onClick={generateQuote}>Generate Another Quote</button>
        </div>
        <div style={{color:'white', display:'block'}}>
           <div> Share Via </div>
           <WhatsappShareButton  url={`#${quote.author}`} style={{margin:'4px'}}
            defaultValue={quote.content} value={quote.content} quote={quote.content} title={quote.content}
            contextMenu={quote.content} >
             <WhatsappIcon round='true'/>
           </WhatsappShareButton>

           <LinkedinShareButton url={`#${quote.author}`} style={{margin:'4px'}}
           defaultValue={quote.content} value={quote.content} quote={quote.content} title={quote.content}
           contextMenu={quote.content}>
              <LinkedinIcon round='true'/>
          </LinkedinShareButton>

          <TwitterShareButton url={`#${quote.author}`} style={{margin:'4px'}}
          defaultValue={quote.content} value={quote.content} quote={quote.content} title={quote.content}
          contextMenu={quote.content}>
          <TwitterIcon round='true'/>
          </TwitterShareButton>

          <FacebookShareButton url={`#${quote.author}`} style={{margin:'4px'}}
          defaultValue={quote.content} value={quote.content} quote={quote.content} title={quote.content}
          contextMenu={quote.content}>
          <FacebookIcon round='true'/>
          </FacebookShareButton>

        </div>
      </div>
    </>
  )
}


export default App;
