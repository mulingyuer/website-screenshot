<!--
 * @Author: mulingyuer
 * @Date: 2023-12-23 18:59:36
 * @LastEditTime: 2023-12-24 04:28:55
 * @LastEditors: mulingyuer
 * @Description: MacBook
 * @FilePath: \website-screenshot\src\components\MacBook.vue
 * 怎么可能会有bug！！！
-->
<template>
	<div class="mac-book" v-drag>
		<div class="mac-book-content">
			<div class="mac-book-iframe-wrapper">
				<iframe class="mac-book-iframe" :src="src" title="mac-book" scrolling="no"></iframe>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useDataStore } from "@/stores";

const dataStore = useDataStore();
const src = computed(() => dataStore.url);

// 拖拽
</script>

<style lang="scss" scoped>
.mac-book {
	position: absolute;
	top: 100px;
	left: 50%;
	width: 2000px;
	height: 1150px;
	margin-left: -1000px;
	transform-origin: center top;
	transform: scale(0.6);
	user-select: none;
}
.mac-book-content {
	width: 100%;
	height: 100%;
	background-image: url("@/assets/images/mac_book.png");
	background-position: center;
	background-size: contain;
	background-repeat: no-repeat;
	position: relative;
}
.mac-book-iframe-wrapper {
	position: absolute;
	inset: 7.5% 12.4% 11%;
	background-color: #141d21;
}
.mac-book-iframe {
	border: none;
	width: 100%;
	height: 100%;
}
</style>
