import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import { defineConfig } from 'vite'

export default defineConfig(({ command }) => ({
  plugins: [
    react(),
    babel({
      presets: [reactCompilerPreset()]
    })
  ],
  base: command === 'serve' ? '/' : '/HPBD-VIP/',
}))