import {Component} from 'react'
import {
  InputElement,
  GradientGeneratorInputContainer,
  GradientGeneratorBackgroundContainer,
  MainHeading,
  ChooseTheDirectionsPara,
  GradientListContainer,
  EachInputContainer,
  DisplayTheColor,
  GenerateButton,
} from './styledComponents'
import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

class GradientGenerator extends Component {
  state = {
    activeDirection: gradientDirectionsList[0].directionId,
    value: gradientDirectionsList[0].value,
    activeLeftInputColor: '#8ae323',
    activeRightInputColor: '#014f7b',
    gradientColor: `to ${gradientDirectionsList[0].value}, #8ae323, #014f7b`,
  }

  setDirection = (direction, value) => {
    this.setState({activeDirection: direction, value})
  }

  onChangeLeftColor = event => {
    this.setState({activeLeftInputColor: event.target.value})
  }

  onChangeRightColor = event => {
    this.setState({activeRightInputColor: event.target.value})
  }

  onClickGenerate = () => {
    const {value, activeLeftInputColor, activeRightInputColor} = this.state
    this.setState({
      gradientColor: `to ${value}, ${activeLeftInputColor}, ${activeRightInputColor}`,
    })
  }

  render() {
    const {
      activeDirection,
      activeLeftInputColor,
      activeRightInputColor,
      gradientColor,
    } = this.state
    return (
      <GradientGeneratorBackgroundContainer
        data-testid="gradientGenerator"
        gradientColor={gradientColor}
      >
        <MainHeading>Generate a CSS Color Gradient</MainHeading>
        <ChooseTheDirectionsPara>Choose Direction</ChooseTheDirectionsPara>
        <GradientListContainer>
          {gradientDirectionsList.map(eachItem => (
            <GradientDirectionItem
              gradientDirectionsList={eachItem}
              setDirection={this.setDirection}
              isActive={eachItem.directionId === activeDirection}
              key={eachItem.directionId}
            />
          ))}
        </GradientListContainer>
        <ChooseTheDirectionsPara>Pick the Colors</ChooseTheDirectionsPara>
        <GradientGeneratorInputContainer>
          <EachInputContainer>
            <DisplayTheColor>{activeLeftInputColor}</DisplayTheColor>
            <InputElement
              type="color"
              onChange={this.onChangeLeftColor}
              value={activeLeftInputColor}
            />
          </EachInputContainer>
          <EachInputContainer>
            <DisplayTheColor>{activeRightInputColor}</DisplayTheColor>
            <InputElement
              type="color"
              onChange={this.onChangeRightColor}
              value={activeRightInputColor}
            />
          </EachInputContainer>
        </GradientGeneratorInputContainer>
        <GenerateButton type="button" onClick={this.onClickGenerate}>
          Generate
        </GenerateButton>
      </GradientGeneratorBackgroundContainer>
    )
  }
}

export default GradientGenerator
