<template>
  <div class="" />
</template>

<script>
import axios from "axios";
export default {
  layout: "blank",
  middleware: async (ctx) => {
    axios.get("/users/exit").then(({ status, data }) => {

  

      if (status === 200) {
        if (data && data.code === 0) {
          location.href = "/";
        } else {
          console.log(data.msg);
        }
      } else {
        self.error = `服务器出错，错误码：${status}`;
      }
    });
  },
};
</script>
