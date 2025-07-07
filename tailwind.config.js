module.exports = {
  content: ["./pages/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#E50914", // Netflix red
          50: "#FEF2F2", // red-50
          100: "#FEE2E2", // red-100
          200: "#FECACA", // red-200
          300: "#FCA5A5", // red-300
          400: "#F87171", // red-400
          500: "#EF4444", // red-500
          600: "#DC2626", // red-600
          700: "#B91C1C", // red-700
          800: "#991B1B", // red-800
          900: "#E50914", // Netflix red
        },
        secondary: {
          DEFAULT: "#000000", // black
          50: "#F9FAFB", // gray-50
          100: "#F3F4F6", // gray-100
          200: "#E5E7EB", // gray-200
          300: "#D1D5DB", // gray-300
          400: "#9CA3AF", // gray-400
          500: "#6B7280", // gray-500
          600: "#4B5563", // gray-600
          700: "#374151", // gray-700
          800: "#1F2937", // gray-800
          900: "#000000", // black
        },
        accent: {
          DEFAULT: "#FFFFFF", // white
          50: "#FFFFFF", // white
          100: "#F9FAFB", // gray-50
          200: "#F3F4F6", // gray-100
          300: "#E5E7EB", // gray-200
          400: "#D1D5DB", // gray-300
          500: "#9CA3AF", // gray-400
          600: "#6B7280", // gray-500
          700: "#4B5563", // gray-600
          800: "#374151", // gray-700
          900: "#1F2937", // gray-800
        },
        background: "#FFFFFF", // white
        surface: "#FFFFFF", // white
        text: {
          primary: "#000000", // black
          secondary: "#4B5563", // gray-600
        },
        success: {
          DEFAULT: "#10B981", // emerald-500
          50: "#ECFDF5", // emerald-50
          100: "#D1FAE5", // emerald-100
          500: "#10B981", // emerald-500
          600: "#059669", // emerald-600
        },
        warning: {
          DEFAULT: "#F59E0B", // amber-500
          50: "#FFFBEB", // amber-50
          100: "#FEF3C7", // amber-100
          500: "#F59E0B", // amber-500
          600: "#D97706", // amber-600
        },
        error: {
          DEFAULT: "#E50914", // Netflix red
          50: "#FEF2F2", // red-50
          100: "#FEE2E2", // red-100
          500: "#E50914", // Netflix red
          600: "#DC2626", // red-600
        },
        border: {
          DEFAULT: "#E5E7EB", // gray-200
          light: "#F3F4F6", // gray-100
        },
      },
      fontFamily: {
        sans: ['Source Sans Pro', 'sans-serif'],
        heading: ['Inter', 'sans-serif'],
        caption: ['Roboto', 'sans-serif'],
        data: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
      boxShadow: {
        'subtle': '0 1px 3px rgba(0, 0, 0, 0.1)',
        'elevated': '0 4px 12px rgba(0, 0, 0, 0.15)',
        'floating': '0 10px 25px rgba(0, 0, 0, 0.1)',
      },
      borderRadius: {
        'DEFAULT': '6px',
        'sm': '4px',
        'md': '6px',
        'lg': '8px',
        'xl': '12px',
        '2xl': '16px',
      },
      transitionTimingFunction: {
        'ease-out': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
      transitionDuration: {
        'fast': '200ms',
        'normal': '300ms',
      },
      animation: {
        'fade-in': 'fadeIn 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'slide-up': 'slideUp 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'scale-in': 'scaleIn 200ms cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
    },
  },
  plugins: [],
}