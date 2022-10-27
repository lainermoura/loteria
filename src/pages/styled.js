import styled from "styled-components";
import sidebar from "../assets/sidebar.png";

export const Body = styled.body`
  font-family: Montserrat;
  display: flex;
  background-color: #eee;
`;

export const LeftContainer = styled.div`
  width: 40vw;
  height: 100vh;
  display: flex;
  background-image: url(${sidebar});
  background-position: 100%;
  background-size: cover;
  flex-wrap: wrap;
  justify-content: center;
  `;

export const Select = styled.select`
  height: 5vh;
  border: 1px #eee solid;
  border-radius: 5px;
  font-size: .7rem;
  outline: none;
  margin: 0 0 0 -10vw;
  &:hover,
  &:focus {
    transition: 0.4s;
    border: 1px solid;
    transition: 0.2s;
  }
  `;

// LOGO E TÍTULO

export const LogoTitleContainer = styled.div`
  display: flex;
  /* justify-self: flex-start; */
  /* justify-content: left; */
  align-items: center;
  /* margin: 0 0 0 -5vw; */
  
`

export const LogoLoterias = styled.img`
  color: #fff;
  width: 4vw;
  height: 7vh;
  margin: 0 1vw 0 -1vw;
  /* margin: 0 0 0 5vw; */
  `;

export const Title = styled.p`
  color: white;
  font-size: 1.5rem;
  font-weight: 700;
  /* padding: 0 0 0 .1vw; */
`;

// FIM DE LOGO E TÍTULO

// INÍCIO DE CONTAINERS DOS NUMEROS SORTEADOS

export const RightContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items:center;
`;


export const NumberContainer = styled.div`
display: flex;
flex-wrap: wrap;
width: 50vw;
`;
export const Circle = styled.div`
  background-color: red;
  border-radius: 50%;
  background-color: white;
  font-weight: bolder;
  font-size: 1rem;
  padding: 1rem;
`;
