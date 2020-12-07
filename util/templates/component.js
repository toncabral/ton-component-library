module.exports = (componentName) => ({
  content: `// Generated with util/create-component.js
  import React from 'react'

  import { ${componentName}Props } from './${componentName}.types'

  import { Container } from './${componentName}.styles'

  const ${componentName}: React.FC<${componentName}Props> = ({ foo }) => (
    <Container data-testid="${componentName}">{foo}</Container>
  )

  export default ${componentName}
`,
extension: `.tsx`
})