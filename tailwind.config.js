/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        text:{
          100: '##E0E0FF',
          200: '#B3B3D1',
          300: '#666680',
          400: '#5A39FF',
          500: '##917CFF',
        }
        
      },
      backgroundColor: {
        bgColors:{
          100: '#F4F8FB',
          800: '#161625',
          900: '#131A35'
        },
        divider: '#3D3D5C',
      },
      borderColor:{
        borderColors:{
          100: '#4A4A6A',
          200: '#5C5C85',
        }
      },
      mainPattern: "linear-gradient(90deg, #1CCFFA 0%, #250F8B 52%, #FC08B5 100%)",
      secondaryPattern: "linear-gradient(90deg, #80E6FF 0%, #7152FF 52%, #FF85DB 100%)"
    },
    backgroundImage: {
      'text-gradient': 'linear-gradient(90deg, #80E6FF 0%, #7152FF 52%, #FF85DB 100%)',
    },
  },
  plugins: [],
}

