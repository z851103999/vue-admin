import svgLoader from "vite-svg-loader";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { viteMockServe } from "vite-plugin-mock";
import { resolve } from "node:path";
/**工作目录 */
const root: string = process.cwd();
/** 路径查找 */
const pathResolve = (dir: string): string => {
  return resolve(__dirname, ".", dir);
};
/** 设置别名 */
const alias: Record<string, string> = {
  "/@": pathResolve("src")
};

// https://vitejs.dev/config/
export default defineConfig({
  root,
  resolve: {
    alias
  },
  // 服务器
  server: {
    https: false,
    port: 3000,
    host: "0.0.0.0"
  },
  plugins: [vue(), vueJsx(), svgLoader(), viteMockServe()]
});
