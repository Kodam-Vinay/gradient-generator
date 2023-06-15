import {EachDirectionListItem, EachButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {gradientDirectionsList, setDirection, isActive} = props
  const {directionId, value, displayText} = gradientDirectionsList
  const onClickDirection = () => {
    setDirection(directionId, value)
  }
  return (
    <EachDirectionListItem key={directionId}>
      <EachButton onClick={onClickDirection} isActive={isActive} type="button">
        {displayText}
      </EachButton>
    </EachDirectionListItem>
  )
}
export default GradientDirectionItem
