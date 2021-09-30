module.exports = {
  theme: {
    extend: {
      leading: {
        12: '50px'
      },
      inset: {
        '-17.5': '-74px'
      },
      rounded: {
        5: '5px'
      },
      fontSize: {
        '0.7vw': '0.7vw',
        '1vw': '1vw',
        '1.2vw': '1.2vw',
        '1.5vw': '1.5vw',
        '2vw': '2vw',
        '2.5vw': '2.5vw',
        '3vw': '3vw',
        '4vw': '4vw',
        '11px': '11px',
        '13px': '13px',
        '15px': '15px',
        '19px': '19px',
        '21px': '21px',
        '24px': '24px',
        '32px': '32px',
        '35px': '35px',
        '42px': '42px',
        '5.5xl': '54px',
        '76px': '76px',
      },
      width: {
        '32%': '32%',
        '48%': '48%',
        260: '260px'
      },
      height: {
        315: '315px',
        320: '320px'
      },
      maxWidth: {
        'screen': '100vw',
        '10vw': '10vw',
        '8vw': '8vw',
        1400: '1400px',
        1100: '1100px',
        1049: '1049px',
        1000: '1000px',
        940: '940px',
        904: '904px',
        840: '840px',
        820: '820px',
        760: '760px',
        720: '720px',
        640: '640px',
        600: '600px',
        540: '540px',
        424: '424px',
        390: '390px',
        340: '340px',
        260: '260px',
        '40%': '40%',
        '60%': '60%',
        '70%': '70%',
        '80%': '80%',
      },
      minHeight: {
        150: '150px',
        210: '210px',
        330: '330px',
      },
      padding: {
        3.8: '15px',
        7.5: '30px',
        8.5: '35px',
        13: '50px',
        15: '60px',
        17: '70px',
        17.5: '74px',
        18: '76px',
        18.5: '78px',
        21: '84px',
        23: '90px',
        24: '95px',
        25: '100px',
        26: '106px',
        30: '120px',
        34: '135px',
        37: '150px',
      },
      margin: {
        3.8: '15px',
        7.5: '30px',
        8.5: '35px',
        13: '50px',
        15: '60px',
        17: '70px',
        17.5: '74px',
        18: '76px',
        21: '84px',
        23: '90px',
        24: '95px',
        25: '100px',
        26: '106px',
        30: '120px',
        34: '135px',
        37: '150px',
      },
      textColor: {
        current: '#171716',
        gray: '#888888',
        grayFooter: '#818181',
        cyan: '#6BCABB',
        error: '#D7241C',
        blue: '#2F5AD3',
        yellow: '#F7AF00',
        pink: '#EB7D91',
      },
      borderWidth: {
        DEFAULT: '1px'
      },
      borderColor: ({
        gray: '#888888',
        grayFooterBar: '#4B4B4B',
        cyan: '#6BCABB',
        error: '#D7241C',
      }),
      backgroundColor: {
        gray: '#888888',
        lightGray: '#f5f5f5',
        grayFooterBar: '#4B4B4B',
        black: '#171716',
        blue: '#2F5AD3',
        yellow: '#F7AF00',
        pink: '#EB7D91',
        green: '#49A461',
        cyan: '#6BCABB',
        purple: '#9489C1'
      },
      lineHeight: {
        '20': '5rem'
      }
    },
    screens: {
      '2xl': {'max': '1536px'},
      // => @media (max-width: 1536px) { ... }

      'xl': {'max': '1280px'},
      // => @media (max-width: 1280px) { ... }

      'lg': {'max': '1024px'},
      // => @media (max-width: 1024px) { ... }

      'md': {'max': '768px'},
      // => @media (max-width: 768px) { ... }

      'sm': {'max': '640px'},
      // => @media (max-width: 640px) { ... }

      'xs': {'max': '480px'},
      // => @media (max-width: 480px) { ... }
    },
    fontFamily: {
      light: ['SoleilLight', 'Montserrat-Light', 'SoleilRegular', 'Montserrat-Regular', 'Arial', 'sans-serif'],
      regular: ['SoleilRegular', 'Montserrat-Regular', 'Arial', 'sans-serif'],
      book: ['SoleilBook', 'Montserrat-Book', 'SoleilRegular', 'Montserrat-Regular', 'Arial', 'sans-serif'],
      semibold: ['SoleilSemiBold', 'Montserrat-SemiBold', 'SoleilBook', 'Montserrat-Book', 'SoleilRegular', 'Montserrat-Regular', 'Arial', 'sans-serif'],
      bold: ['SoleilBold', 'Montserrat-Bold', 'SoleilSemiBold', 'Montserrat-SemiBold', 'SoleilBook', 'Montserrat-Book', 'SoleilRegular', 'Montserrat-Regular', 'Arial', 'sans-serif'],
      boldItalic: ['SoleilBi', 'Montserrat-BoldItalic', 'SoleilBold', 'Montserrat-Bold', 'SoleilSemiBold', 'Montserrat-SemiBold', 'SoleilBook', 'Montserrat-Book', 'SoleilRegular', 'Montserrat-Regular', 'Arial', 'sans-serif']
    }
  },
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './components/**/*.vue',
      './layouts/**/*.vue',
      './pages/**/*.vue',
      './plugins/**/*.js',
      './nuxt.config.js',
    ]
  },
  future: {
    purgeLayersByDefault: true,
  }
}
