// Generated with util/create-component.js
import React from 'react'
import { render } from '@testing-library/react'
import Cachorro from './Cachorro'
import { CachorroProps } from './Cachorro.types'

describe('Test Component', () => {
  let props: CachorroProps
  beforeEach(() => {
    props = {
      foo: 'bar'
    }
  })
  const renderComponent = () => render(<Cachorro {...props} />)
  
  it('should render foo text correctly', () => {
    props.foo = 'harvey was here'
    const { getByTestId } = renderComponent()
    const component = getByTestId('Cachorro')
    expect(component).toHaveTextContent('harvey was here')
  })
})
