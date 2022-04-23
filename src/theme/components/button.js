export const Button = {
  baseStyle: {
    fontWeight: 'medium',
    fontSize: 'md'
  },
  variants: {
    ghost: {
      height: '34px',
      _hover: {
        bg: 'none'
      },
      _active: {
        bg: 'none'
      }
    },
    outline: {
      border: '2px solid',
      borderColor: '#EAAA00',
      borderRadius: 'full',
      height: '34px',
      _hover: {
        bg: '#EAAA00'
      },
      _active: {
        bg: '#EAAA00'
      }
    },
    solid: {
      bg: '#EAAA00',
      color: 'black',
      fontWeight: 'semibold',
      borderRadius: 'full',
      height: '34px',
      _hover: {
        bg: '#EAAA00'
      },
      _active: {
        bg: '#EAAA00'
      }
    }
  },
  defaultProps: {
    size: 'md',
    variant: 'solid'
  }
}
