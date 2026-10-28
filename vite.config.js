import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';

export default defineConfig({
  plugins: [sveltekit({
    extensions: ['.svelte', '.svx'],
    preprocess: [vitePreprocess(), mdsvex({
      extensions: ['.svx'],
      layout: { runbook: new URL('./src/lib/layouts/runbook.svelte', import.meta.url).pathname }
    })],
    alias: { '#lib': './src/lib' },
    adapter: adapter({ pages: 'rendered', assets: 'rendered' }),
    prerender: { handleHttpError: 'warn' }
  })]
});
