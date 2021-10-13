<template>
  <div class="m-products-list">
    <dl>
      <dd
        v-for="item in nav"
        :key="item.name"
        :class="[item.name, item.active ? 's-nav-active' : '']"
      >
        {{ item.txt }}
      </dd>
    </dl>

    <ul>
      <Item v-for="(item, index) in list" :key="index" :meta="item"></Item>
    </ul>
  </div>
</template>

<script>
import Item from "./product.vue";

export default {
  components: {
    Item,
  },
  data() {
    return {
      nav: [
        {
          name: "s-default",
          txt: "智能排序",
          active: true,
        },
        {
          name: "s-price",
          txt: "价格最低",
          active: false,
        },
        {
          name: "s-visit",
          txt: "人气最高",
          active: false,
        },
        {
          name: "s-comment",
          txt: "评价最高",
          active: false,
        },
      ],
      list: [
        {
          img: "https://img.meituan.net/phoenix/205393b37972a0fc7180c6d52ef7d2ce1856950.jpg@740w_416h_1e_1c",
          name: "有投影私人大屏影院/佛罗伦萨小镇/武清高铁站/一居欢迎您的入住",
          module: "",
          rate: 4.5,
          comment: "2365",
          type: "test",
          addr: "test",
          price: "168",
          status: "今日可定",
          scene:
            "位置就在城际站站东南角，开车五分钟即到，卧室有两米大投影和客厅电视，两者可以随意观看，可以做饭，有厨具和简单调料调料，不管您是出游还是小聚，都可以做上一顿精心的美味。屋内洗漱齐全:备有一次性浴巾",
        },
        {
          img: "	https://img.meituan.net/phoenix/781170e9f7464f846c7b1040b3d7fb333756402.jpg@740w_416h_1e_1c",
          name: "葉子民宿，日租房，观影房，密码锁，精装，免费停车",
          module: "",
          rate: 4,
          comment: "1532",
          type: "test",
          addr: "test",
          price: "158",
          status: "今日可定",
          scene:
            "近公交车站，便利店，餐饮，免费停车，幕布投影，临街住宅小区，投影，密码锁",
        },
        {
          img: "https://img.meituan.net/phoenix/d681fd63f884f6f5fd9fd5493e65f86c4428480.jpg@740w_416h_1e_1c",
          name: "【爱巢公寓】时尚临湖投影公寓，近机场，空港肿瘤医院",
          module: "",
          rate: 3,
          comment: "235",
          type: "test",
          addr: "test",
          price: "210",
          status: "今日可定",
          scene:
            "距离机场十多分钟车程,位置好找,近欢乐谷附近人闹市区，loft户型小别墅班的感受,可做饭,材料齐全机场附近空港经济区的好房。室内温馨舒适。，房源周边到处是美味可口的小吃店，酒足饭饱后可以散步到距",
        },
      ],
    };
  },
};
</script>

<style>
</style>