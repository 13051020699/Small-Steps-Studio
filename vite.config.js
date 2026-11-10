import { defineConfig } from 'vite';

export default defineConfig({
  appType: 'mpa',
  build: {
    rollupOptions: {
      input: {
        home: 'index.html',
        quotes: 'quotes.html',
        projects: 'project.html',
        machine: 'machine.html'
      }
    }
  }
});
