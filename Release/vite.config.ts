import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Cast process to any to resolve "Property 'cwd' does not exist on type 'Process'" error
  const env = loadEnv(mode, (process as any).cwd(), '');
  return {
    // IMPORTANT: This must match your GitHub repository name "/Release/"
    // This fixes the white screen/404 errors on GitHub Pages
    base: '/Release/', 
    plugins: [react()],
    define: {
      // Polyfill process.env for the browser to match the provided coding guidelines
      'process.env.API_KEY': JSON.stringify(env.API_KEY)
    }
  };
});