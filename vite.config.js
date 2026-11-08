import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import { defineConfig } from 'vite'

export default defineConfig(({ command }) => {
  return {
    plugins: [
      react(),
      babel({
        presets: [reactCompilerPreset()]
      })
    ],

    // Local: /
    // Production: /HPBD-VIP/
    base: command === 'serve' ? '/' : '/HPBD-VIP/',
  }
})