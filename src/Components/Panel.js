import styled from "styled-components";

const PanelBox = styled.div`
  display: inline-flex;
  justify-content: center;
  gap: 1rem;
  
  a {
    display: flex;
    width: 38px;
    height: 38px;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    border: solid 1px #fcfcfc;
    border-radius: 50%;
    color: #fcfcfc;
    font-size:16px;
    cursor:pointer;
    transition: opacity 0.3s ease;
    opacity: 0.5;
    &:hover {
      opacity: 1;
    }
  }
`;

const Panel = ({ onClick, twitter }) => {
    return (
        <PanelBox>
        <a id="fb-quote" role="link" target="_blank" rel="noreferrer" title="Share on Facebook!" href="#">
            <i className="fa-brands fa-facebook-f"></i>
        </a>
        <a id="tweet-quote" role="link" target="_blank" rel="noreferrer" title="Tweet it!" href={twitter}>
            <i className="fa-brands fa-twitter"></i>
        </a>
        <a href="#" role="button" title="Get another quote!" id="new-quote" onClick={onClick}>
            <i className="fa-solid fa-rotate"></i>
        </a>
        </PanelBox>
    );
}

export default Panel;