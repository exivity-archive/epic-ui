import * as React from 'react'
import styled from 'styled-components'
import { Theme } from '../../../theme';

export interface IProps {
  checked: boolean
  onClick: () => void
  className?: string
  theme: Theme
}

const Checkbox: React.FC<IProps> = ({ checked, onClick, className, theme }) => {
  return <input className={className} type='checkbox' onClick={onClick} defaultChecked={checked} />
}

Checkbox.defaultProps = {
  checked: false
}

/** @component */
export default styled(Checkbox)`
  margin-top: 1px;
  margin-right: ${props => props.theme.global.margin}
  
  /* ${props => props.checked && 'some css'} */
`
