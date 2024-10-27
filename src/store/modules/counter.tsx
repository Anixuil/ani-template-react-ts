import { createSlice } from "@reduxjs/toolkit";

const counter = createSlice({
  name: "counter", // name of the slice  like a namespace
  initialState: {
    // initial state of the slice
    count: 0,
    list: [1, 2, 3],
  },
  // 定义reducer更新状态函数
  // 组件中dispatch使用的action.type就是这里的key
  reducers: {
    // reducers of the slice
    increment: (state, action) => {
      state.count += action.payload;
    },
    decrement: (state, action) => {
      state.count -= action.payload;
    },
    push: (state, action) => {
      state.list.push(action.payload);
    },
    del: (state, action) => {
      state.list.splice(action.payload, 1);
    },
  },
});

// export the action creators and reducers
export const { increment, decrement, push, del } = counter.actions;

export default counter.reducer;
