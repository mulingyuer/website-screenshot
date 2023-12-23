<!--
 * @Author: mulingyuer
 * @Date: 2023-12-23 17:39:45
 * @LastEditTime: 2023-12-24 04:30:17
 * @LastEditors: mulingyuer
 * @Description: header
 * @FilePath: \website-screenshot\src\components\Header.vue
 * 怎么可能会有bug！！！
-->
<template>
	<t-header v-show="show">
		<t-head-menu v-model="menuValue" theme="light">
			<template #logo>
				<h2 class="header-logo">website screenshot</h2>
			</template>
			<template #operations>
				<div class="header-right">
					<t-input class="header-url" v-model="url" placeholder="请输入网址" size="large" clearable />
					<t-button class="header-url-btn" size="large" @click="onUrlBtnClick">确定</t-button>
				</div>
			</template>
		</t-head-menu>
	</t-header>
</template>

<script setup lang="ts">
import { MessagePlugin } from "tdesign-vue-next";
import { useDataStore } from "@/stores";

const dataStore = useDataStore();
/** 是否显式 */
const show = computed(() => !dataStore.isScreenshot);
const menuValue = ref("");
/** 网址 */
const url = ref("");

/** 确认 */
const urlReg = /^https?:\/\/(([a-zA-Z0-9_-])+(\.)?)*(:\d+)?(\/((\.)?(\?)?=?&?[a-zA-Z0-9_-](\?)?)*)*$/i;
function onUrlBtnClick() {
	if (!urlReg.test(url.value)) {
		MessagePlugin.error("请输入正确的网址");
		return;
	}
	dataStore.setUrl(url.value);
}
</script>

<style lang="scss" scoped>
.header-logo {
	font-size: 20px;
	color: #223657;
}
.header-right {
	height: 100%;
	display: flex;
	align-items: center;
}
.header-url {
	flex-shrink: 0;
	width: 300px;
	margin-right: 10px;
}
</style>
