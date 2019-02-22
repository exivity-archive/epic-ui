import * as React from 'react'
import styled from 'styled-components';

interface ITextInputProps {
  value?: string
  onChange: (value: string) => void
  className?: string
}

export const TextInput: React.FC<ITextInputProps> = ({ value, onChange, className }) => (
  <input 
    type='text'
    value={value} 
    onChange={(event) => onChange(event.target.value)} 
    className={className}
  />
)

TextInput.defaultProps = {
  value: ''
}

export default styled(TextInput)`
  font-family: inherit;
  color: #444444;
  height: 30px;
  width: 300px;
  background-color: #F4F4F4;
  border: none;
  outline: none;
  padding: 0 15px;
`