import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 30rem;
  padding: 30px;  
  border-radius: 4px;

  color: #7159c1;

  margin: 4rem auto;

  display: flex;

  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 { 
    text-align: center;
    margin-bottom: 1.5rem;
  }

  label {
    display: inline-block;
    margin-bottom: .5rem;
  }

  input {
    width: 100%;
    margin-bottom: 1.2rem;
    background-color: #eff;
    border: 1px solid #7159c1;    
  }

  button {
    background: #7159c1;
    color: #fff;
    width: 100%;    
    border: 0;
    border-radius: 4px;
    padding: 12px 20px;
    font-weight: bold;
    text-transform: uppercase;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.06, '#7159c1')};
    }
  }

`;


