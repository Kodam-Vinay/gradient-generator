import styled from 'styled-components'

// export const FormContainer = styled.form`
//   display: flex;
//   flex-direction: column;
//   padding: 0;
//   margin: 0;
// `

export const GradientGeneratorBackgroundContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(${props => props.gradientColor});
  background-size: cover;
  font-family: 'Roboto';
`
export const MainHeading = styled.h1`
  color: #ededed;
  font-size: 20px;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`
export const ChooseTheDirectionsPara = styled.p`
  color: #ffffff79;
  text-align: center;
`

export const GradientGeneratorInputContainer = styled.div`
  color: black;
  display: flex;
  width: 60%;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    width: 35%;
  }
`

export const InputElement = styled.input`
  height: 40px;
  width: 90px;
  border: 0;
  background-color: transparent;
  @media screen and (min-width: 768px) {
    height: 40px;
    width: 120px;
  }
`

export const GradientListContainer = styled.ul`
  display: flex;
  padding: 1px;
  flex-wrap: wrap;
  justify-content: center;
`
export const EachInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const DisplayTheColor = styled.p`
  color: #ffffff;
`
export const GenerateButton = styled.button`
  height: 40px;
  width: 120px;
  text-align: center;
  background-color: #00c9b7;
  margin-top: 10px;
  border: 0;
  outline: none;
  cursor: pointer;
  font-weight: 600;
  border-radius: 5px;
`
