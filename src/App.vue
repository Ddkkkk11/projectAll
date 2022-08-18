<template>
  <div>我的名字是xdd</div>
</template>

<script>
import axios from "axios";
export default {
  name: "App",
  created() {
    axios
      .get(
        "https://netease-cloud-music-api-beryl-xi.vercel.app//search?keywords=海阔天空"
      )
      .then((res) => {
        console.log(res.data);
      });
  },
};
</script>

<style>
</style>