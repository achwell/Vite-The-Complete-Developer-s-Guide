import {defineConfig, UserConfigExport} from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig((args) => {
  const {command, mode, ssrBuild} = args;

  console.log({command, mode, ssrBuild})

  const options: UserConfigExport = {
    plugins: [react()],
    base: "/"
  }

  return command === "serve" ? {
    ...options,
    base: "/dev"
  } : options;
})
