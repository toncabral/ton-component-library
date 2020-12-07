import React from 'react'

import { TestComponentProps } from './TestComponent.types'

import { Container, Heading, Description } from './TestComponent.styles'

const TestComponent: React.FC<TestComponentProps> = ({ theme }: TestComponentProps) => (
  <Container
    data-testid="test-component"
    theme={theme}
  >
    <Heading>I'm the test component</Heading>
    <Description>Made with love by Ton</Description>
  </Container>
)

export default TestComponent