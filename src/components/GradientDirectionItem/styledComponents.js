import styled from 'styled-components'

export const EachDirectionListItem = styled.li`
  color: black;
  margin: 10px;
  list-style: none;
`

export const EachButton = styled.button`
  color: ${props => (props.isActive ? ' #334155' : '#1e293b')};
  height: 40px;
  width: 110px;
  border-radius: 5px;
  border: 0;
  background-color: #ffffff;
  font-weight: 600;
  opacity: ${props => (props.isActive ? 1 : 0.5)};
`
