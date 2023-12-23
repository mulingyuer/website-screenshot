import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { TDesignResolver } from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default defineConfig({
	base: "./",
	plugins: [
		vue({
			script: {
				defineModel: true
			}
		}),
		AutoImport({
			imports: ["vue", "vue-router"],
			resolvers: [
				TDesignResolver({
					library: "vue-next"
				})
			],
			dts: true,
			eslintrc: {
				enabled: true
			}
		}),
		Components({
			resolvers: [
				TDesignResolver({
					library: "vue-next"
				})
			],
			dts: true
		})
	],
	resolve: {
		alias: {
			"@": fileURLToPath(new URL("./src", import.meta.url))
		}
	},
	server: {
		host: true
	},
	build: {
		outDir: "docs"
	}
});
