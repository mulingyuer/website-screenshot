<!--
 * @Author: mulingyuer
 * @Date: 2023-12-23 17:12:51
 * @LastEditTime: 2023-12-24 02:26:24
 * @LastEditors: mulingyuer
 * @Description: 入口
 * @FilePath: \website-screenshot\src\App.vue
 * 怎么可能会有bug！！！
-->
<template>
	<t-layout class="main">
		<Header />
		<t-content>
			<router-view v-slot="{ Component }">
				<template v-if="Component">
					<component :is="Component"></component>
				</template>
			</router-view>
		</t-content>
	</t-layout>
</template>

<script setup lang="ts">
import Header from "@/components/Header.vue";
</script>

<style lang="scss" scoped>
.main {
	background-color: transparent;
}
</style>
