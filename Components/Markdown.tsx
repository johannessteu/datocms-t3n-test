import React from 'react';
import marked from 'marked';
import styled from 'styled-components';
import btoa from 'btoa';

import { composeTextStyle } from '@t3n/theme';

const StyledMarkdown = styled.div`
  h1 {
    ${({ theme }) => composeTextStyle({ theme, textStyle: 'h1' })}
  }

  h2 {
    ${({ theme }) => composeTextStyle({ theme, textStyle: 'h2' })}
  }

  h3 {
    ${({ theme }) => composeTextStyle({ theme, textStyle: 'h3' })}
  }

  h4 {
    ${({ theme }) => composeTextStyle({ theme, textStyle: 'h4' })}
  }

  h5 {
    ${({ theme }) => composeTextStyle({ theme, textStyle: 'h5' })}
  }

  h6 {
    ${({ theme }) => composeTextStyle({ theme, textStyle: 'h6' })}
  }

  p {
    ${({ theme }) => composeTextStyle({ theme, textStyle: 'regular' })}
  }

  *:first-child {
    margin-top: 0;
  }

  *:last-child {
    margin-bottom: 0;
  }

  a:link,
  a:active,
  a:visited {
    color: #2a2a2a;
    text-decoration: none;
    background-repeat: repeat-x;
    background-size: 1px 1px;
    background-position: 0 100%;
    background-image: url('data:image/svg+xml;base64,${btoa(
      '<svg preserveAspectRatio="none" viewBox="0 0 1 1" xmlns="http://www.w3.org/2000/svg"><g stroke="rgb(42,42,42)"><rect x="0" y="0" width="1" height="1" /></g></svg>'
    )}');
  }

  a:hover,
  a:focus {
    background-image: url('data:image/svg+xml;base64,${btoa(
      '<svg preserveAspectRatio="none" viewBox="0 0 1 1" xmlns="http://www.w3.org/2000/svg"><g stroke="rgb(249,66,58)"><rect x="0" y="0" width="1" height="1" /></g></svg>'
    )}');
  }
`;

const Markdown: React.FC<{ parse: string }> = ({ parse }) => (
  <StyledMarkdown dangerouslySetInnerHTML={{ __html: marked(parse) }} />
);

export default Markdown;
