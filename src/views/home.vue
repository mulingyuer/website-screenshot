<!--
 * @Author: mulingyuer
 * @Date: 2023-12-23 17:35:41
 * @LastEditTime: 2023-12-24 04:02:53
 * @LastEditors: mulingyuer
 * @Description: 首页
 * @FilePath: \website-screenshot\src\views\home.vue
 * 怎么可能会有bug！！！
-->
<template>
	<div class="home">
		<MacBook />
		<IPadAir />
		<IPhoneX />
		<ColorPicker />
		<Screenshot />
	</div>
</template>

<script setup lang="ts">
import MacBook from "@/components/MacBook.vue";
import IPhoneX from "@/components/IPhoneX.vue";
import IPadAir from "@/components/IPadAir.vue";
import ColorPicker from "@/components/ColorPicker.vue";
import Screenshot from "@/components/Screenshot.vue";
</script>

<style lang="scss" scoped>
.home {
	padding: 20px;
	position: relative;
}
</style>
