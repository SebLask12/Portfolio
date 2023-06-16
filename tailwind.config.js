/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'move-up': 'moveUp .2s ease-in-out forwards',
        'scale-up': 'scaleUp .2s ease-in-out forwards',
        OpenList: 'openList .4s ease-in-out forwards',
        CloseList: 'closeList .5s ease-in-out forwards',
      },
      keyframes: {
        moveUp: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-5px)' },
        },
        scaleUp: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.1)' },
        },
        openList: {
          '0%': {
            opacity: '0',
            transform: 'translateY(-100%)',
          },
          '100%': {
            opacity:'1',
            transform: 'translateY(0)',
          },
        },
        closeList: {
          '0%': {
            opacity:'1',
            transform: 'translateY(0)',
          },
          '100%': {
            opacity:'0',
            transform: 'translateY(-100%)',
          },
        },
      },
    },
  },
  plugins: [],
};
