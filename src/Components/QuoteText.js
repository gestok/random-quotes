import styled from "styled-components";

const QuoteTextWrapper = styled.div`
    position:relative;

    > p {
        transition: all 0.8s ease;
    }

    > .fade {
        background: transparent!important;
        color: transparent!important;
        text-shadow: 0px 2px 2px #0000!important;
    }
`;

const Text = styled.p`
    color:#fcfcfc;
    text-shadow:0px 2px 2px #0009;
    font-size:2.8rem;
    font-family: 'Raleway', sans-serif;
`;

const Author = styled.p`
    color:#eaeaea;
    font-size:1.2rem;
    font-family: 'Roboto', sans-serif;
    display: inline-flex;
    background: #0003;
    padding: 4px 8px;
    margin: 0rem 0 2rem 0;
`;

const Tag = styled.p`
    position: absolute;
    font-size: 1.4rem;
    font-family: 'Raleway', sans-serif;
    text-transform: uppercase;
    color: #fff3;
    top: -40px;
    width: 100%;
    margin: 0;
    z-index: -1;
    user-select: none;
    pointer-events: none;
    letter-spacing: 4px;

    &::before {
        content:'# ';
    }
`;

const QuoteText = ({text, author, tag}) => {
    return (
        <QuoteTextWrapper>
            <Text id="text">{text}</Text>
            <Author id="author">{author}</Author>
            <Tag id="tag">{tag}</Tag>
        </QuoteTextWrapper>
    );
}

export default QuoteText;