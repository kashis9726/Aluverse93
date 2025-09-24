import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  // Base path configuration for GitHub Pages
  // After creating your GitHub repository, replace 'YOUR_REPO_NAME' below
  // with your actual repository name (e.g., 'my-alumni-app')
  base: process.env.NODE_ENV === 'production' ? '/YOUR_REPO_NAME/' : '/',
});
