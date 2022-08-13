// theme/index.tsx.js
import { extendTheme } from '@chakra-ui/react'

// Component style overrides
import { Button } from './components/button'

const overrides = {
  // Other foundational style overrides go here
  components: {
    Button,
  }
}

export default extendTheme(overrides)
