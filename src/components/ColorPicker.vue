<!--
 * @Author: mulingyuer
 * @Date: 2023-12-24 03:42:37
 * @LastEditTime: 2023-12-24 04:29:36
 * @LastEditors: mulingyuer
 * @Description: 背景色选择器
 * @FilePath: \website-screenshot\src\components\ColorPicker.vue
 * 怎么可能会有bug！！！
-->
<template>
	<div v-show="show" class="color-picker">
		<t-color-picker
			v-model="color"
			:colorModes="['monochrome']"
			enableAlpha
			:show-primary-color-preview="false"
			@change="onChange"
		/>
	</div>
</template>

<script setup lang="ts">
import { useDataStore } from "@/stores";

const dataStore = useDataStore();
/** 是否显式 */
const show = computed(() => !dataStore.isScreenshot);
/** 颜色 */
const color = computed({
	get: () => dataStore.bgColor,
	set: (value) => dataStore.setBgColor(value)
});

/** 颜色发生变化 */
function onChange(value: string) {
	setBodyBg(value);
}

/** 给body设置颜色 */
function setBodyBg(color: string) {
	document.body.style.backgroundColor = color;
}

// init
function init() {
	setBodyBg(color.value);
}
init();
</script>

<style lang="scss" scoped>
.color-picker {
	position: absolute;
	top: 20px;
	right: 20px;
}
</style>
