import styled from "styled-components"

export const Form = styled.form`
  margin-top: 36px;
  label {
    color: var(--label-text);
  }
  input,
  textarea {
    width: 100%;
    max-width: 100%;
    margin: 8px 0 16px;
    padding: 16px;
    border: 6px solid #a4a89760;
    border-radius: 12px;
    appearance: none;
    font-size: 18px;
    font-weight: 600;
    min-height: 200px;
    &:focus {
      border-color: var(--input-focus-border);
    }
  }
`
