module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'selector',
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          'xs': '480px',
          sm: '640px',    
          md: '768px',    
          lg: '1024px',  
          xl: '1200px',  
          '2xl': '1440px'
        }
      },
      colors: {
        'primary': '#6f61ef',
        'secondary': '#b89beb',
        'NewBlack': '#151718',
        'secondary': '#A5A5A5',
        'menubg': '#9fa1b4',
        'Newblack': '#03071C',
        'portfolio': '#0B0F26',
        'portfoliobg': '#00000026',
        'newGrey': '#C9C9C9',
        'blackNew': '#00000045',
        'formOverlay': '#00000094',
        'ctaBg': '#00000040',
        'cta2': '#000000b3',
        'bgMenu': '#00000059',
        'modal': '#000000cc',
        'service': '#eef3ff',
      },
      width: {
        '173': '173px',
        '70': '70%',
        '30': '30%',
        '40': '40%',
        '35': '35%',
        '65': '65%',
        '3t': '3px',
        '560': '560px',
      },
      maxWidth: {
        '560': '560px',
        '760': '760px',
        '320': '320px',
        '1024': '1024px',
        '1200': '1200px',
        '1440': '1440px',
      },
      height: {
        '71': '71px',
        '130': '130px',
        '205': '205px',
        '600': '600px',
        '900': '900px',
        '550': '550px',
      },
      margin: {
        '55': '55px',
        '169': '169px',
      },
      fontSize: {
        'xxs': '10px',
        '28': '28px',
        '110': '110px',
        '50': '50px',
        '42': '42px',
      },
      backgroundImage: {
        'ServivceCard': "linear-gradient(180deg, rgb(111, 77, 212) 0%, 48.7952%, rgb(22, 19, 61) 97.5904%, 98.7952%, rgb(21, 19, 59) 100%)",
        'btnGradient': "linear-gradient(180deg, rgba(124, 108, 228, 1) 0%, var(--token-21c381bc-664b-4277-97a1-69816b34b276, rgb(98, 77, 227))  100%)",
        'primaryGradient': "linear-gradient(270deg, rgb(110, 86, 207) 0%, rgb(249, 209, 255) 100%)",
        'contact': "linear-gradient(83deg, rgb(135 112 231) 0%, rgb(116 98 228) 100%)",
      },
      gridTemplateColumns: {
        '3n': '1fr 3fr 1fr',
      },
      boxShadow: {
        'adsShadow': '0 0 10px #bb9eff',
        'newsShadow': '0px 16px 36px 0px rgba(32, 35, 51, 0.10)',
        'serviceShadow': '2.4em 5.6em 3.2em rgba(0, 0, 0, .08)',
        'btnShadow': 'rgba(255, 255, 255, 0.2) 0px 2px 0px 0px inset, rgba(0, 0, 0, 0.25) 0px -1px 0px 1px inset, rgba(0, 0, 0, 0.1) 0px 2px 6px 0px',
      },
      animation: {
        'Progress': 'progress 3s linear infinite',
        'Newpulse': 'Newpulse 2s infinite',
        'Newpulse2': 'Newpulse2 2s infinite',
      },
      keyframes: {
        progress: {
          '0%': { opacity: 0.3, width: 0 },
          '100%': { opacity: 0, width: '100%' },
        },
        Newpulse: {
          '0%': {
            boxShadow: '0 0 0 0 #885EFE',
          },
          '70%': {
            boxShadow: '0 0 0 10px rgba(154, 174, 255, 0)',
          },
          '100%': {
            boxShadow: '0 0 0 50px rgba(174, 190, 255, 0)',
          },
        },
        Newpulse2: {
          '0%': {
            boxShadow: '0 0 0 0 #FFF',
          },
          '70%': {
            boxShadow: '0 0 0 10px rgba(154, 174, 255, 0)',
          },
          '100%': {
            boxShadow: '0 0 0 50px rgba(174, 190, 255, 0)',
          },
        },
        
      },
      borderRadius:{
        '20': '20px',
        '30': '30px',
        '40': '40px',
      },
      inset: {
        '3px': '3px',

      },
      zIndex: {
        '1': '1',
        'm3': '-3',
        '999': '999',
        '9999': '9999',
      },
      scale: {
        'O3': '1.03',
      },
      gap: {
        '170': '170px',
        '50': '50px',
        '45': '45px',
      },
      lineHeight: {
        'auto': '1',
      },
      padding: {
        'form': '54px 109px 58px 126px',
      }
    },
  },
  variants: {
    extend: {
     
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.gradient-text': {
          '-webkit-text-fill-color': 'transparent',
          '-webkit-background-clip': 'text',
        },
      })
    },
  ],
}