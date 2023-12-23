<!--
 * @Author: mulingyuer
 * @Date: 2023-12-24 02:38:36
 * @LastEditTime: 2023-12-24 05:24:11
 * @LastEditors: mulingyuer
 * @Description: IPhoneX
 * @FilePath: \website-screenshot\src\components\IPhoneX.vue
 * 怎么可能会有bug！！！
-->
<template>
	<div class="iphone-x" v-drag>
		<div class="iphone-x-head"></div>
		<div class="iphone-x-content">
			<div class="iphone-x-iframe-wrapper">
				<iframe class="iphone-x-iframe" :src="src" title="iphone-x" scrolling="no"></iframe>
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
.iphone-x {
	position: absolute;
	top: 350px;
	left: 65%;
	width: 375px;
	height: 751px;
	transform-origin: center top;
	transform: scale(0.7);
	user-select: none;
}
.iphone-x-head {
	position: absolute;
	top: 2.5%;
	left: 50%;
	width: 198px;
	height: 29px;
	margin-left: -99px;
	background-image: url("@/assets/images/iphone_x_head.png");
	background-position: center;
	background-size: contain;
	background-repeat: no-repeat;
	z-index: 1;
}
.iphone-x-content {
	width: 100%;
	height: 100%;
	background-image: url("@/assets/images/iphone_x.png");
	background-position: center;
	background-size: contain;
	background-repeat: no-repeat;
	position: relative;
}
.iphone-x-iframe-wrapper {
	position: absolute;
	inset: 2.9% 6.5%;
	background-color: #141d21;
	border-radius: 35px;
	overflow: hidden;
}
.iphone-x-iframe {
	border: none;
	width: 100%;
	height: 100%;
}
</style>
