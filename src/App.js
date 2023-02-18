import logo from './logo.svg';
import './App.css';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

function App() {
 


const Heading = styled('h1')`
  background-color: ${props => props.bg};
  color: ${props => props.fg};
`;

const Subheading = Heading.withComponent('h2');

const Quote = styled('blockquote')(props => ({
  fontSize: props.size
}));

const Cite = styled('cite')(
  {
    fontWeight: 100
  },
  props => ({
    fontWeight: props.weight
  })
);

const Footer = styled('footer')`
  border-top: 1px solid #ccc;
  color: #ccc;
  margin-top: 50px !important;
  padding-top: 20px;
`;
return ( 
    <div css={css`background: #ddd;`}>
      <div css={css({ padding: 10 })}>
        <Heading bg="#008f68" fg="#fae042">
          Quotations
        </Heading>
        <Subheading fg="#6db65b">
          For React Developers
        </Subheading>
        <Quote size={28}>
          I built this with <code>`emotion/react`</code> and <code>`emotion/styled`</code>!
        </Quote>
        <Cite weight={700}>Sammy</Cite>
        <Footer>Shark Facts</Footer>
      </div>
    </div>);
 
}

export default App;
