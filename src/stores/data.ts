/*
 * @Author: mulingyuer
 * @Date: 2023-12-23 18:50:45
 * @LastEditTime: 2023-12-24 04:54:02
 * @LastEditors: mulingyuer
 * @Description: 数据
 * @FilePath: \website-screenshot\src\stores\data.ts
 * 怎么可能会有bug！！！
 */
import { defineStore } from "pinia";

export const useDataStore = defineStore("data", () => {
	/** 网址 */
	const url = ref("");
	/** 设置网址 */
	function setUrl(val: string) {
		url.value = val;
	}
	/** 清空网址 */
	function clearUrl() {
		url.value = "";
	}

	/** 背景色 */
	const bgColor = ref("#eee");
	/** 设置背景色 */
	function setBgColor(val: string) {
		bgColor.value = val;
	}

	/** 是否开始截图 */
	const isScreenshot = ref(false);
	/** 设置是否开始截图 */
	function setIsScreenshot(val: boolean) {
		isScreenshot.value = val;
	}

	return {
		url,
		setUrl,
		clearUrl,
		bgColor,
		setBgColor,
		isScreenshot,
		setIsScreenshot
	};
});
