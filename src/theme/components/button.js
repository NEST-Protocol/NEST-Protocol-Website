export const Button = {
  baseStyle: {
    fontWeight: 'medium',
    fontSize: 'md',
    height: '34px',
    maxH: '34px'
  },
  variants: {
    ghost: {
      fontWeight: '500',
      fontSize: '15px',
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
      fontSize: '15px',
      fontWeight: '500',
      px: '20px',
      _hover: {
        bg: '#EAAA00'
      },
      _active: {
        bg: '#EAAA00'
      }
    },
    solid: {
      bg: '#EAAA00',
      color: '#003232',
      fontWeight: '600',
      borderRadius: 'full',
      fontSize: '15px',
      px: '20px',
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
