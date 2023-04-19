const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      ...defaultTheme.fontFamily,
      sans: ['"Noto Sans"', 'sans-serif']
    },
    fontSize: {
      ...defaultTheme.fontSize,
      s30: ['1.875rem', { lineHeight: '1.2em', letterSpacing: '-.0117em' }],
      s24: ['1.5rem', { lineHeight: '1.166667em', letterSpacing: '-0.015em' }],
      s18: ['1.125rem', { lineHeight: '1.333333em', letterSpacing: '-0.01333em' }],
      s16: ['1rem', { lineHeight: '1.25em', letterSpacing: '-0.015em' }],
      s14: ['0.875rem', { lineHeight: '1.28em', letterSpacing: '-0.011em' }],
      s12: ['0.75rem', { lineHeight: '1.1667em', letterSpacing: '-0.0125em' }],
      s10: ['0.625rem', { lineHeight: '1.4em' }]
    },
    extend: {
      backgroundColor: {
        primary: 'var(--bg-primary)',
        secondary: 'var(--bg-secondary)',
        extra: 'var(--bg-extra)',
        wrapper: 'var(--bg-wrapper)',
        green: 'var(--bg-green)',
        'green-alpha': 'var(--green-primary-alpha)',
        'yellow-alpha20': 'var(--yellow-alpha20)',
        'green-secondary': 'var(--bg-green-secondary)',
        'secondary-inverted': 'var(--bg-secondary-inverted)',
        tertiary: 'var(--bg-additional)',
        button: 'var(--text-green)',
        'button-hover': 'var(--green-dark)',
        input: 'var(--bg-input)',
        selector: 'var(--bg-selector)',
        modal: 'var(--modal)',
        grey: 'var(--middle-grey)',
        'light-grey': 'var(--bg-border)',
        'green-lighter': 'var(--green-primary)',
        progress: 'var(--bg-progress)',
        'light-grey_primary': 'var(--light-grey)',
        'calc-footer': 'var(--grey-footer)',
        'white-alpha': 'var(--divide-grey)',
        'alpha-secondary': 'var(--color-white-alpha06)',
        'alpha-orange': 'var(--bg-alpha-orange)',
        'alpha-red': 'var(--bg-alpha-red)',
        purple: '#552DC8',
        overlay: 'var(--color-overlay)',
        'green-gradient': 'var(--color-green-gradient)'
      },
      textColor: {
        ...defaultTheme.textColor,
        primary: 'var(--text-primary)',
        'primary-inverted': 'var(--text-primary-inverted)',
        secondary: 'var(--text-secondary)',
        tertiary: 'var(--text-tertiary)',
        green: 'var(--green-primary)',
        'green-middle': 'var(--green-secondary)',
        link: 'var(--text-green)',
        'link-hover': 'var(--text-green-hover)',
        'green-secondary': 'var(--text-green-secondary)',
        dark: 'var(--middle-grey)',
        'dark-grey': 'var(--dark-grey)',
        error: 'var(--text-error)'
      },
      borderColor: {
        button: 'var(--border-button)',
        dark: 'var(--bg-border)',
        'button-hover': 'var(--green-primary)',
        'input-active': 'var(--border-input-active)',
        'input-invalid': 'var(--border-input-invalid)',
        checkbox: 'var(--text-secondary)',
        green: 'var(--text-green)',
        grey: 'var(--border-grey)',
        'white-alpha': 'var(--divide-grey)',
        'black-alpha': 'var(--color-black-alpha20a)',
        radio: 'var(--bg-primary)',
        'green-lighter': 'var(--green-primary)',
        'secondary-inverted': 'var(--bg-secondary-inverted)'
      },
      borderWidth: {
        3: '3px'
      },
      divideColor: {
        ...defaultTheme.divideColor,
        grey: 'var(--border-button)',
        red: '#db3831',
        'white-alpha': 'var(--divide-grey)',
        dark: 'var(--bg-border)',
        'alpha-secondary': 'var(--color-white-alpha06)'
      },
      borderRadius: {
        ...defaultTheme.borderRadius,
        s30: '1.875rem',
        s20: '1.25rem',
        s14: '0.875rem'
      },
      textOpacity: {
        ...defaultTheme.textOpacity,
        87: '0.87'
      },
      lineHeight: {
        ...defaultTheme.lineHeight,
        s26: '1.625rem', // 26px
        s24: '1.5rem', // 24px
        s22: '1.375rem', // 22px
        s18: '1.125rem' // 18px
      },
      maxWidth: {
        ...defaultTheme.maxWidth,
        button: '20.94rem',
        layout: '60rem',
        app: '80.31rem',
        content: '53.5rem'
      },
      minWidth: {
        button: '13.75rem'
      },
      placeholderColor: {
        input: 'var(--text-secondary)'
      },
      margin: {
        s13: '0.844rem'
      },
      padding: {
        s15: '0.94rem',
        s13: '0.8125rem'
      },
      boxShadow: {
        tariff: '0px 0px 10px rgba(255, 255, 255, 0.24)',
        button: '2px 3px 10px rgba(87, 198, 0, 0.2)',
        content: '0px 12px 40px rgba(0, 0, 0, 0.04)'
      },
      outline: {
        green: '1px solid var( --text-green)'
      },
      zIndex: {
        ...defaultTheme.zIndex
      },
      flexGrow: {
        ...defaultTheme.flexGrow,
        0: 0
      },
      screens: {
        '3xl': '2200px',
        tiny: '450px'
      }
    }
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
    require('tailwindcss-pseudo-selectors'),
    require('tailwind-scrollbar-hide')
  ]
};
