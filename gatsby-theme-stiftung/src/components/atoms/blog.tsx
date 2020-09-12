import styled from "styled-components"

export const BlogPost = styled.article`
  figure {
    margin: 40px 0;
    text-align: center;
    figcaption {
      font-size: var(--font-size-small);
      color: var(--text-color-meta);
      margin-top: 5px;
    }
  }
  blockquote {
    margin-left: 0;
    padding: 5px 5px 5px 20px;
    background-color: #f2f2f2;
    border-left: 3px solid rgba(0, 0, 0, 0.1);
  }
  iframe {
    border: 2px solid black;
    box-sizing: border-box;
  }
  img {
    max-width: 100%;
  }
`
export const BlogPostContent = styled.div`
  max-width: 70ch;
  margin: 0 auto;
  padding: 20px;
  line-height: 1.5;
  font-size: 20px;
`
export const ArticleHeader = styled.header`
  section {
    padding: 35px 0;
    text-align: center;
    margin: 0 auto;
  }

  h1 {
    font-size: 36px;
    font-size: clamp(18px, calc(1rem + 2vw), 36px);
    margin: 0 auto 6px;
    max-width: 768px;
    line-height: 1.3;
    font-weight: 600;
  }

  time {
    font-size: 14px;
    color: rgba(0, 0, 0, 0.6);
  }
`
