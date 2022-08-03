import styled from "styled-components";

const SourceWrapper = styled.div`
  position: absolute;
  bottom: 14px;
  right: 12px;
  
  a {
    display: flex;
    gap: 6px;
    color: #808080;
    box-shadow: 0px 4px 0px -2px;
    border-radius: 18px;
    padding: 4px 8px;
    text-decoration: none;
    align-items: center;
    font-family: 'Raleway';
    font-size: 14px;
    font-weight: 600;
    background: #252525;
    transition: all 0.3s ease;
    &:hover {
      color: #acacac;
    }
  }
`;

const Source = () => {
    return (
        <SourceWrapper id="github">
        <a href="https://github.com/gestok/random-quotes" title="Github Source" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-github"></i> Source
        </a>
        </SourceWrapper>
    );
}

export default Source;