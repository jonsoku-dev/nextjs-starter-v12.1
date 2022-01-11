import React from 'react'
import styled from 'styled-components'

export interface ButtonProps {}

const Button: React.FC<ButtonProps> = () => {
  return <StyledWrapper>Button</StyledWrapper>
}

export default Button

const StyledWrapper = styled.button`
 background-color: ${props => props.theme.palette.primary.main};
`
