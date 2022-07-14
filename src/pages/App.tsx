import * as React from 'react'
import {useMediaQuery} from '@chakra-ui/react'

export const App = () => {
  const isDesktop = useMediaQuery('(min-width: 768px)')
  return (
    <div>
      <h1>Hello World</h1>
      <p>Is this a desktop? {isDesktop ? 'Yes' : 'No'}</p>
    </div>
  )
}
