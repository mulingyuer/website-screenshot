<!--
 * @Author: mulingyuer
 * @Date: 2023-12-24 04:01:53
 * @LastEditTime: 2023-12-24 04:29:07
 * @LastEditors: mulingyuer
 * @Description: 截图
 * @FilePath: \website-screenshot\src\components\Screenshot.vue
 * 怎么可能会有bug！！！
-->
<template>
	<div v-show="show" class="screenshot">
		<t-button shape="circle" size="large" @click="onClick">
			<icon name="camera" />
		</t-button>
	</div>
</template>

<script setup lang="ts">
import { Icon } from "tdesign-icons-vue-next";
import { NotifyPlugin } from "tdesign-vue-next";
import { useDataStore } from "@/stores";

const dataStore = useDataStore();
/** 是否显式 */
const show = computed(() => !dataStore.isScreenshot);

/** 截图 */
function onClick() {
	dataStore.setIsScreenshot(true);
	NotifyPlugin("info", {
		title: "提醒",
		content:
			"由于跨域的影响iframe无法直接截图，所以你需要通过浏览器原生的元素截图功能自行截取，本次已将不需要的元素隐藏，双击可以恢复！",
		closeBtn: true,
		duration: 15000
	});
	// 监听事件
	document.documentElement.addEventListener("dblclick", onDblclick, { once: true });
}

/** 双击事件 */
function onDblclick() {
	dataStore.setIsScreenshot(false);
}
</script>

<style lang="scss" scoped>
.screenshot {
	position: absolute;
	top: 70px;
	right: 20px;
	user-select: none;
}
</style>
