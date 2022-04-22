export const Button = {
  baseStyle: {
    fontWeight: 'bold',
    fontSize: 'md',
    textTransform: 'uppercase',
    borderRadius: 'base',
  },
  variants: {
    ghost: {
      height: '34px',
      _hover: {
        bg: 'none',
      },
      _active: {
        bg: 'none',
      }
    },
    outline: {
      border: '2px solid',
      height: '34px'
    },
    solid: {
      bg: '#EAAA00',
      color: 'black',
      borderRadius: '17px',
      height: '34px',
      _hover: {
        bg: '#EAAA00',
      },
      _active: {
        bg: '#EAAA00'
      }
    },
  },
  defaultProps: {
    size: 'md',
    variant: 'solid',
  },
}