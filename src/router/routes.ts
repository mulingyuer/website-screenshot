/*
 * @Author: mulingyuer
 * @Date: 2023-12-23 17:19:53
 * @LastEditTime: 2023-12-23 17:41:11
 * @LastEditors: mulingyuer
 * @Description: 路由
 * @FilePath: \website-screenshot\src\router\routes.ts
 * 怎么可能会有bug！！！
 */
import type { Routes } from "./types";

export const routes: Routes = [
	{
		path: "/",
		name: "Home",
		component: () => import("@/views/home.vue")
	}
];
