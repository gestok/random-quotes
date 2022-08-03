import styled from "styled-components";
import { useState, useEffect } from "react";
import QuoteText from './Components/QuoteText';
import Panel from './Components/Panel';
import Source from './Components/Source';

const QuoteBox = styled.div`
  margin:auto;
  max-width:800px;
  text-align:center;
  width:100%;
  padding: 0 16px;
  z-index:1;
`;


const RandomQuoteMachine = () => {
  const [data, setData] = useState([]);
  const [text, setText] = useState('Getting Quotes!');
  const [author, setAuthor] = useState('George Chond');
  const [tag, setTag] = useState('Loading...');
  const [twitterUrl, setTwitterUrl] = useState('');

  async function fetchData(source){
    // Fetch Data from API
    const result = await fetch(source);
    const data = await result.json();

    /* Generate Random Colours and set opacity to 0 */
    const bgStart = '#' + Math.floor(Math.random()*16777215).toString(16);
    const bgEnd = '#' + Math.floor(Math.random()*16777215).toString(16);

    /* If we got new data, fade text and opacity of background colours in 0.8s */
    if (await data){
      document.querySelectorAll('#quote-box p').forEach(elem => {
        elem.classList.add('fade');
      });
      document.getElementById('app').style.setProperty("--bg-opacity", 0);

      // After 0.8s where everything is faded, change data, fade in the text and raise background opacity to 1
      setTimeout(function(){
        setText(data.content);
        setAuthor(data.author);
        setTag(data.tags);
        setTwitterUrl(`https://twitter.com/intent/tweet?hashtags=${data.tags}&related=georgechond&text=${data.content+"%22"+data.author}`);
        document.querySelectorAll('#quote-box p').forEach(elem => {
          elem.classList.remove('fade');
        });
        document.getElementById('app').style.setProperty("--bg-start", bgStart);
        document.getElementById('app').style.setProperty("--bg-end", bgEnd);
        document.getElementById('app').style.setProperty("--bg-opacity", 1);
      }, 800);
    }
  }

  useEffect(() => {
    fetchData('https://api.quotable.io/random');
  }, [data]);
  
  const handleClick = () => {
    fetchData('https://api.quotable.io/random');
  }

  return (
    <QuoteBox id="quote-box">
      <QuoteText text={text} author={author} tag={tag}/>
      <Panel onClick={handleClick} twitter={twitterUrl}/>
      <Source/>
    </QuoteBox>
  );
}

export default RandomQuoteMachine;