<!--
 * @Author: mulingyuer
 * @Date: 2023-12-24 03:00:36
 * @LastEditTime: 2023-12-24 04:29:02
 * @LastEditors: mulingyuer
 * @Description: iPad_Air
 * @FilePath: \website-screenshot\src\components\IPadAir.vue
 * 怎么可能会有bug！！！
-->
<template>
	<div class="ipad-air" v-drag>
		<div class="ipad-air-content">
			<div class="ipad-air-iframe-wrapper">
				<iframe class="ipad-air-iframe" :src="src" title="ipad-air" scrolling="no"></iframe>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useDataStore } from "@/stores";

const dataStore = useDataStore();
const src = computed(() => dataStore.url);
</script>

<style lang="scss" scoped>
.ipad-air {
	position: absolute;
	top: 220px;
	left: 10%;
	width: 768px;
	height: 1024px;
	transform-origin: left top;
	transform: scale(0.6);
	user-select: none;
}
.ipad-air-content {
	width: 100%;
	height: 100%;
	background-image: url("@/assets/images/ipad_air.png");
	background-position: center;
	background-size: contain;
	background-repeat: no-repeat;
	position: relative;
}
.ipad-air-iframe-wrapper {
	position: absolute;
	inset: 8.6% 6% 9.5%;
	background-color: #141d21;
	border: 1px solid #141d21;
}
.ipad-air-iframe {
	border: none;
	width: 100%;
	height: 100%;
}
</style>
