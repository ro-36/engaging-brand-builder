
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
			fontFamily: {
				sans: ['Roboto', 'sans-serif'],
				display: ['Roboto', 'sans-serif'],
			},
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
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
				"fade-in": {
					"0%": {
						opacity: "0",
						transform: "translateY(10px)"
					},
					"100%": {
						opacity: "1",
						transform: "translateY(0)"
					}
				},
				"fade-out": {
					"0%": {
						opacity: "1",
						transform: "translateY(0)"
					},
					"100%": {
						opacity: "0",
						transform: "translateY(10px)"
					}
				},
				"scale-in": {
					"0%": {
						transform: "scale(0.95)",
						opacity: "0"
					},
					"100%": {
						transform: "scale(1)",
						opacity: "1"
					}
				},
				"slide-in-right": {
					"0%": { transform: "translateX(100%)" },
					"100%": { transform: "translateX(0)" }
				},
				"slide-in-left": {
					"0%": { transform: "translateX(-100%)" },
					"100%": { transform: "translateX(0)" }
				},
				"slide-in-bottom": {
					"0%": { transform: "translateY(100%)" },
					"100%": { transform: "translateY(0)" }
				},
				"slide-in-top": {
					"0%": { transform: "translateY(-100%)" },
					"100%": { transform: "translateY(0)" }
				},
				"marquee": {
					"0%": { transform: "translateX(0)" },
					"100%": { transform: "translateX(-50%)" }
				},
				"pulse-glow": {
					"0%, 100%": { 
						boxShadow: "0 0 10px 2px rgba(127, 90, 240, 0.5)"
					},
					"50%": {
						boxShadow: "0 0 20px 5px rgba(127, 90, 240, 0.8)"
					}
				}
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				"fade-in": "fade-in 0.5s ease-out",
				"fade-out": "fade-out 0.5s ease-out",
				"scale-in": "scale-in 0.5s ease-out",
				"slide-in-right": "slide-in-right 0.5s ease-out",
				"slide-in-left": "slide-in-left 0.5s ease-out",
				"slide-in-bottom": "slide-in-bottom 0.5s ease-out",
				"slide-in-top": "slide-in-top 0.5s ease-out",
				"marquee": "marquee 25s linear infinite",
				"pulse-glow": "pulse-glow 3s infinite ease-in-out",
			},
			backgroundImage: {
				"grid-pattern": "linear-gradient(to right, rgba(127, 90, 240, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(127, 90, 240, 0.1) 1px, transparent 1px)",
			},
			backgroundSize: {
				"grid-size": "40px 40px",
			},
			boxShadow: {
				card: 'var(--card-shadow)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
