/*
 * @Author: Anixuil
 * @Date: 2024-10-27 16:46:07
 * @LastEditors: Anixuil
 * @LastEditTime: 2024-10-27 16:53:51
 * @Description: 状态管理
 */
import { configureStore } from "@reduxjs/toolkit";
import counter from "@/store/modules/counter";

const store = configureStore({
  reducer: {
    counter,
  },
});

export default store;
