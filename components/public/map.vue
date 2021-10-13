<template>
  <div
    class="m-map"
    :id="id"
    :style="{ width: width + 'px', height: height + 'px', margin: '34px auto' }"
  ></div>
</template>

<script>
export default {
  props: {
    width: {
      type: Number,
      default: 300,
    },
    height: {
      type: Number,
      default: 300,
    },
    point: {
      type: Array,
      default() {
        return [116.46, 39.92];
      },
    },
  },
  data() {
    return {
      id: "map",
      key: "bf1316b381872d0aa8230b3f859d6c62",
    };
  },
  watch: {
    point: (val, old) => {
      this.map.setCenter(val);
      this.marker.setPosition(val);
    },
  },
  mounted() {
   

    let self = this;
    self.id = `map${Math.random().toString().slice(4, 6)}`;

    // 声明异步加载回调函数
    window.onMapLoad = function () {
      let map = new AMap.Map(self.id, {
        resizeEnable: true,
        zoom: 11,
        center: self.point,
      });
      self.map = map;

     

        AMap.plugin("AMap.ToolBar", () => {
            //异步加载插件
            let toolbar = new AMap.ToolBar();
            map.addControl(toolbar);

            let marker = new AMap.Marker({
            position: self.position,
            icon: "//webapi.amap.com/theme/v1.3/markers/n/mark_b.png", // 添加 Icon 图标 URL
            });

            self.marker = marker;

            marker.setMap(map);
        });
    };

    let url = `https://webapi.amap.com/maps?v=2.0&key=${self.key}&callback=onMapLoad`;
    let jsapi = document.createElement("script");
    jsapi.charset = "utf-8";
    jsapi.src = url;
    document.head.appendChild(jsapi);
  },
};
</script>

<style>
</style>