import { defineConfig } from 'vite';
export default defineConfig({
  resolve: {
    alias: {
      '@nestjs/websockets/socket-module': false,
      '@nestjs/microservices/microservices-module': false,
      '@nestjs/microservices': false,
    },
  },
});
