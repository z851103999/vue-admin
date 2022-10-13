// tailwind.config.js
module.exports = {
  // 黑暗模式
  darkMode: "class",
  // 核心插件
  corePlugins: {
    // tailwind基础/重置样式
    preflight: false
  },
  // 包含文件
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  // 主题
  theme: {
    extend: {
      color: {}
    }
  }
};
