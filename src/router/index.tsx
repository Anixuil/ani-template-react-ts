/*
 * @Author: Anixuil
 * @Date: 2024-10-27 13:26:55
 * @LastEditors: Anixuil
 * @LastEditTime: 2024-10-27 15:26:09
 * @Description: 路由配置
 */
import { createBrowserRouter, RouteObject } from "react-router-dom";
import ErrorPage from "@/views/common/errorPage/error-page";
import IndexAndHome from "@/views/index";
import Welcome from "@/views/welcome";
import About from "@/views/about";
import { ReactNode, Suspense } from "react";

// 懒加载
const lazyLoad = (children: ReactNode): ReactNode => {
  return <Suspense>{children}</Suspense>;
};


const routes: RouteObject[] = [
  {
    path: "/",
    element: lazyLoad(<IndexAndHome />),
    errorElement: lazyLoad(<ErrorPage />),
    children: [
      {
        path: "/welcome",
        element: lazyLoad(<Welcome />),
        errorElement: lazyLoad(<ErrorPage />),
      },
      {
        path: "/about",
        element: lazyLoad(<About />),
        errorElement: lazyLoad(<ErrorPage />),
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
