export const styles = {
  global: {
    body: {
      background: 'white',
      'font-family': 'Montserrat'
    },
    '.js-focus-visible :focus:not([data-focus-visible-added])': {
      'outline': 'none',
      'box-shadow': 'none'
    },
    '*': {
      '-webkit-overflow-scrolling': 'touch',
      '-ms-overflow-style': 'none'
    },
    '*::-webkit-scrollbar': {
      display: 'none'
    },
    'div,a,img': {
      '-webkit-tap-highlight-color': 'transparent',
      '-webkit-touch-callout': 'none'
    }
  }
}
