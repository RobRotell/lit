import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import browserslistToEsbuild from 'browserslist-to-esbuild'
import path from 'path'


// https://vitejs.dev/config/
export default defineConfig({
	plugins: [ preact() ],
	build: {
		target: browserslistToEsbuild(),
	},
	resolve: {
		alias: {
		  '@': path.resolve( __dirname, 'src' ),
		}
	  }
})
