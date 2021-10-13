<template>
  <div class="m-product-categroy">
    <dl class="classic">
      <dt>分类</dt>
      <dt>全部</dt>
      <dd v-for="(item, index) in types" :key="index">
        <isselect :name="item.type" :list="item.module" />
      </dd>
    </dl>

    <dl class="classic">
      <dt>分类</dt>
      <dt>全部</dt>
      <dd v-for="(item, index) in areas" :key="index">
        <isselect :name="item.type" :list="item.module" />
      </dd>
    </dl>
  </div>
</template>



<script>
import isselect from "./isselect.vue";

export default {
  components: {
    isselect,
  },
  data() {
    return {
      types: [
        {
          type: "酒店住宿",
          module: ["全部", "景点", "展览馆", "海洋馆","全部", "景点", "展览馆", "海洋馆"],
        },
        {
          type: "周边游",
          module: ["全部", "景点", "展览馆", "海洋馆","全部", "景点", "展览馆", "海洋馆"],
        },
        {
          type: "旅游",
          module: ["全部", "景点", "展览馆", "海洋馆","全部", "景点", "展览馆", "海洋馆"],
        },
        {
          type: "母婴亲子",
          module: ["全部", "景点", "展览馆", "海洋馆","全部", "景点", "展览馆", "海洋馆"],
        },
      ],
      areas: [
        {
          type: "青山湖区",
          module: ["全部", "景点", "展览馆", "海洋馆","全部", "景点", "展览馆", "海洋馆"],
        },
        {
          type: "共青城区",
          module: ["全部", "景点", "展览馆", "海洋馆","全部", "景点", "展览馆", "海洋馆"],
        },
        {
          type: "瑶湖区",
          module: ["全部", "景点", "展览馆", "海洋馆","全部", "景点", "展览馆", "海洋馆"],
        },
      ],
    };
  },
};
</script>

<style>
</style>