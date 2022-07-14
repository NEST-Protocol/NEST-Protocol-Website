// theme/index.tsx.js
import { extendTheme } from '@chakra-ui/react'

// Global style overrides
import { styles } from './styles'

// Component style overrides
import { Button } from './components/button'
import { Heading } from './components/heading'

const overrides = {
  styles,
  // Other foundational style overrides go here
  components: {
    Button,
    Heading
  }
}

export default extendTheme(overrides)
