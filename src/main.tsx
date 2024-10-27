/*
 * @Author: Anixuil
 * @Date: 2024-10-27 13:12:43
 * @LastEditors: Anixuil
 * @LastEditTime: 2024-10-27 16:54:36
 * @Description: 入口文件
 */
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "@/router";
import { ConfigProvider } from "antd";
import { Provider } from "react-redux";
import store from "@/store/index";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: "red",
      },
    }}
  >
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </ConfigProvider>
);
