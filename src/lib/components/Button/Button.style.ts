export const buttonStyle = {
  button: {
    base: "group flex h-min items-center justify-center text-center font-medium shadow-sm",
    size: {
      xs: "px-2.5 py-1.5 text-xs",
      sm: "px-3 py-2 text-sm leading-4",
      md: "px-4 py-2 text-sm",
      lg: "px-4 py-2 text-base",
      xl: "px-6 py-3 text-base",
    },
    variant: {
      filled: {
        default:
          "text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-500 disabled:hover:bg-white disabled:hover:text-gray-900 focus:outline-none",
        primary:
          "text-white bg-blue-500 border border-transparent hover:bg-blue-600 disabled:hover:bg-blue-500",
        info: "text-white bg-cyan-500 border border-transparent hover:bg-cyan-600 disabled:hover:bg-cyan-500",
        warning:
          "text-white bg-yellow-500 border border-transparent hover:bg-yellow-600 disabled:hover:bg-yellow-500",
        success:
          "text-white bg-green-500 border border-transparent hover:bg-green-600 disabled:hover:bg-green-500",
        danger:
          "text-white bg-red-500 border border-transparent hover:bg-red-600 disabled:hover:bg-red-500",
      },
      outline: {
        default:
          "text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-500 disabled:hover:bg-white disabled:hover:text-gray-900",
        primary:
          "text-blue-500 hover:text-white disabled:hover:text-blue-500  bg-transparent hover:bg-blue-500 disabled:hover:bg-transparent border border-blue-500",
        info: "text-cyan-500 hover:text-white disabled:hover:text-cyan-500  bg-transparent hover:bg-cyan-500 disabled:hover:bg-transparent border border-cyan-500",
        warning:
          "text-yellow-500 hover:text-white disabled:hover:text-yellow-500  bg-transparent hover:bg-yellow-500 disabled:hover:bg-transparent border border-yellow-500",
        success:
          "text-green-500 hover:text-white disabled:hover:text-green-500  bg-transparent hover:bg-green-500 disabled:hover:bg-transparent border border-green-500",
        danger:
          "text-red-500 hover:text-white disabled:hover:text-red-500  bg-transparent hover:bg-red-500 disabled:hover:bg-transparent border border-red-500",
      },
      light: {
        default: "text-gray-900 bg-gray-100 border border-transparent",
        primary:
          "text-blue-500 bg-blue-50 border border-transparent hover:bg-blue-100 disabled:hover:bg-blue-50",
        info: "text-cyan-500 bg-cyan-50 border border-transparent hover:bg-cyan-100 disabled:hover:bg-cyan-50",
        warning:
          "text-yellow-500 bg-yellow-50 border border-transparent hover:bg-yellow-100 disabled:hover:bg-yellow-50",
        success:
          "text-green-500 bg-green-50 border border-transparent hover:bg-green-100 disabled:hover:bg-green-50",
        danger:
          "text-red-500 bg-red-50 border border-transparent hover:bg-red-100 disabled:hover:bg-red-50",
      },
    },
    disabled: "opacity-50 cursor-not-allowed",
  },
};
