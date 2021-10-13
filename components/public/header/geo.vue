<template>
  <div class="m-geo">
    <i class="el-icon-location">北京市</i>
    <nuxt-link class="changCity" to="/changCity">切换城市</nuxt-link>
    [香河 廊坊 天津]
  </div>
</template>


<script>

import axios from 'axios'

export default {
  data() {
    return {
      city: "",
    };
  },
  methods: {},
  async mounted() {
    const { status, data } = await axios.get("/geo/getPosition");

    console.log(data);
  },
};
</script>

<style>
</style>