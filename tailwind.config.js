/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
  	extend: {
  		fontFamily: {
  			poppins: ['poppins', 'sans-serif']
  		},
  		boxShadow: {
  			'custom-main-shadow': '0px 0px 16px 0px rgba(28, 207, 250, 0.75)'
  		},
  		colors: {
  			fontcolors: {
  				'100': '#E0E0FF',
  				'200': '#B3B3D1',
  				'300': '#666680',
  				'400': '#5A39FF',
  				'500': '##917CFF',
  				'600': '#161625',
  				'700': '#131A35'
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		backgroundColor: {
  			bgColors: {
  				'100': '#F4F8FB',
  				'200': '#250F8B',
  				'800': '#161625',
  				'900': '#131A35'
  			},
  			divider: '#3D3D5C'
  		},
  		borderColor: {
  			borderColors: {
  				'100': '#4A4A6A',
  				'200': '#5C5C85'
  			},
			divider: '#3D3D5C'
  		},
  		mainPattern: 'linear-gradient(90deg, #1CCFFA 0%, #250F8B 52%, #FC08B5 100%)',
  		secondaryPattern: 'linear-gradient(90deg, #80E6FF 0%, #7152FF 52%, #FF85DB 100%)',
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	},
  	backgroundImage: {
  		'default-bg': 'linear-gradient(90deg, rgba(37,15,128,1) 0%, rgba(37,15,128,1) 100%)',
  		'text-main-gradient': 'linear-gradient(90deg, #1CCFFA 0%, #250F8B 52%, #FC08B5 100%)',
  		'text-title-gradient': 'linear-gradient(90deg, #80E6FF 0%, #7152FF 52%, #FF85DB 100%)',
  		'text-title-description-title': 'linear-gradient(90deg, #80E6FF 0%, #7152FF 52%)'
  	}
  },
  plugins: [require("tailwindcss-animate",function({ addUtilities }) {
      const newUtilities = {
        '.border-gradient': {
          borderImage: 'linear-gradient(90deg, #1CCFFA 0%, #250F8B 52%, #FC08B5 100%) 1',
        },
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    })],
}

