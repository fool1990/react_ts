import React, { SFC } from 'react'
import styled from '@emotion/styled'

type ComponentProps = {
  className?: string
  label: string
}

const Component: SFC<ComponentProps> = ({
  label,
  className
}) => <div className={className}>{label}</div>

const StyledComponent0 = styled(Component)`
  color: yellow;
`

const StyledComponent1 = styled(Component)({
  color: 'blue'
})

function App() {
  return (
    <div>
      <StyledComponent0 label="Yea! No need to re-type this label prop." />
      <StyledComponent1 label="Yea! No need to re-type this label prop." />
    </div>
  )
}

export default App