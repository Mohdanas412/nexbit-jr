module.exports = {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: {
          blue: '#3b82f6',
          purple: '#8b5cf6',
          neon: '#22c55e',
        },
      },
      fontFamily: {
        inter: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        poppins: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        neon: '0 0 0 2px rgba(34,197,94,0.4), 0 0 14px rgba(34,197,94,0.6)',
        'glow-blue': '0 0 0 2px rgba(59,130,246,0.35), 0 0 14px rgba(59,130,246,0.55)',
        'glow-purple': '0 0 0 2px rgba(139,92,246,0.35), 0 0 14px rgba(139,92,246,0.55)'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' }
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(34,197,94,0.55)' },
          '50%': { boxShadow: '0 0 0 10px rgba(34,197,94,0)' }
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 8s linear infinite',
        'pulse-glow': 'pulse-glow 2.4s ease-in-out infinite'
      },
    },
  },
  plugins: [],
}
