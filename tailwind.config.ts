
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Custom colors for Pulse Robot
				pulse: {
					"50": "#fff7ed",
					"100": "#ffedd5",
					"200": "#fed7aa",
					"300": "#fdba74",
					"400": "#fb923c",
					"500": "#f97316", // Primary orange
					"600": "#ea580c",
					"700": "#c2410c",
					"800": "#9a3412",
					"900": "#7c2d12",
					"950": "#431407",
				},
			dark: {
					"900": "#121212",
					"800": "#1e1e1e",
					"700": "#2d2d2d",
					"600": "#3d3d3d",
				},
				cyber: {
					green: "#00ff41",
					"green-dim": "#00cc33",
					blue: "#00d4ff",
					purple: "#bf00ff",
					red: "#ff0040",
				},
				"cyber-green": "#00ff41",
			},
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
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-in-right': {
					'0%': { opacity: '0', transform: 'translateX(-20px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' }
				},
				'fade-in-left': {
					'0%': { opacity: '0', transform: 'translateX(20px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' }
				},
				'pulse-slow': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.8' }
				},
			'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'glitch-1': {
					'0%, 100%': { clipPath: 'inset(0 0 0 0)' },
					'20%': { clipPath: 'inset(20% 0 60% 0)', transform: 'translate(-2px, 2px)' },
					'40%': { clipPath: 'inset(60% 0 10% 0)', transform: 'translate(2px, -1px)' },
					'60%': { clipPath: 'inset(40% 0 30% 0)', transform: 'translate(-1px, 2px)' },
					'80%': { clipPath: 'inset(80% 0 5% 0)', transform: 'translate(1px, -2px)' },
				},
				'glitch-2': {
					'0%, 100%': { clipPath: 'inset(0 0 0 0)' },
					'20%': { clipPath: 'inset(60% 0 10% 0)', transform: 'translate(2px, -2px)' },
					'40%': { clipPath: 'inset(10% 0 70% 0)', transform: 'translate(-2px, 1px)' },
					'60%': { clipPath: 'inset(70% 0 5% 0)', transform: 'translate(1px, -1px)' },
					'80%': { clipPath: 'inset(30% 0 40% 0)', transform: 'translate(-1px, 2px)' },
				},
				'terminal-cursor': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0' },
				},
				'cyber-scan-x': {
					'0%': { left: '-5%' },
					'100%': { left: '105%' },
				},
				'cyber-scan-y': {
					'0%': { top: '-5%' },
					'100%': { top: '105%' },
				},
				'neon-flicker': {
					'0%, 19%, 21%, 23%, 25%, 54%, 56%, 100%': {
						textShadow: '0 0 7px #00ff41, 0 0 10px #00ff41, 0 0 21px #00ff41, 0 0 42px #00ff41',
					},
					'20%, 24%, 55%': {
						textShadow: 'none',
					},
				},
				'cyber-pulse': {
					'0%, 100%': { boxShadow: '0 0 5px #00ff41, 0 0 10px #00ff41, inset 0 0 5px rgba(0,255,65,0.1)' },
					'50%': { boxShadow: '0 0 20px #00ff41, 0 0 30px #00ff41, inset 0 0 10px rgba(0,255,65,0.2)' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.7s ease-out forwards',
				'fade-in-right': 'fade-in-right 0.7s ease-out forwards',
				'fade-in-left': 'fade-in-left 0.7s ease-out forwards',
				'pulse-slow': 'pulse-slow 3s infinite',
				'float': 'float 6s ease-in-out infinite',
				'terminal-cursor': 'terminal-cursor 1s step-end infinite',
				'cyber-scan-x': 'cyber-scan-x 4s ease-in-out infinite',
				'cyber-scan-y': 'cyber-scan-y 6s ease-in-out infinite',
				'neon-flicker': 'neon-flicker 3s infinite',
				'cyber-pulse': 'cyber-pulse 2s ease-in-out infinite',
			},
			backgroundImage: {
				'hero-gradient': 'linear-gradient(90deg, hsla(24, 100%, 83%, 1) 0%, hsla(341, 91%, 68%, 1) 100%)',
				'hero-gradient-2': 'linear-gradient(90deg, hsla(39, 100%, 77%, 1) 0%, hsla(22, 90%, 57%, 1) 100%)',
				'pulse-gradient': 'linear-gradient(180deg, rgba(249,115,22,0.8) 0%, rgba(249,115,22,0) 100%)',
			},
			fontFamily: {
				'sans': ['Inter', 'sans-serif'],
				'display': ['Brockmann', 'SF Pro Display', 'Inter', 'sans-serif'],
				'brockmann': ['Brockmann', 'serif'],
				'playfair': ['"Playfair Display"', 'serif'],
			},
			boxShadow: {
				'elegant': '0 4px 20px rgba(0, 0, 0, 0.08)',
				'elegant-hover': '0 8px 30px rgba(0, 0, 0, 0.12)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
