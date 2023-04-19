import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';

function pathResolve(dir) {
  return resolve(__dirname, '.', dir);
}

// https://vitejs.dev/config/
export default defineConfig(userConfig => {
  return {
    resolve: {
      alias: [
        {
          find: /@\//,
          replacement: pathResolve('src') + '/'
        }
      ]
    },
    define: {
      'process.env': '{}'
    },
    esbuild: {
      jsxFactory: 'jsx',
      jsxInject: '/** @jsx jsx */ import { jsx } from "@emotion/react"'
    },
    envPrefix: 'CC',
    sourcemap: userConfig.mode === 'development',
    server: {
      https: false,
      fsServe: {
        root: pathResolve('./')
      }
    },
    build: {
      rollupOptions: {}
    },
    plugins: [
      //eruda(),
      react({
        babel: {
          plugins: [
            'babel-plugin-macros',
            [
              '@emotion/babel-plugin-jsx-pragmatic',
              {
                export: 'jsx',
                import: '__cssprop',
                module: '@emotion/react'
              }
            ],
            ['@babel/plugin-transform-react-jsx', { pragma: '__cssprop' }, 'twin.macro']
          ]
        }
      })
    ]
  };
});
