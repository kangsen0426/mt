<template>
  <div class="search-panel">
    <el-row class="m-header-searchbar">
      <el-col :span="3" class="left">
        <img
          src="https://s0.meituan.net/bs/fe-web-meituan/10afbf1/img/logo.png"
          title="美团"
        />
      </el-col>
      <el-col :span="15" class="center">
        <div class="wrapper">
          <el-input
            v-model="search"
            @focus="focus"
            @blur="blur"
            @input="input"
            placeholder="搜索商家或地点"
          ></el-input>
          <button class="el-button el-button--primary mybtn">
            <i class="el-icon-search"></i>
          </button>
          <dl class="hotPlace" v-if="isHotPlace">
            <dt>热门搜索</dt>
            <dd v-for="(item,index) in hotList" :key="index">{{ item }}</dd>
          </dl>
          <dl class="searchList" v-if="isSearchList">
            <dd v-for="(item,index) in searchList" :key="index">{{ item }}</dd>
          </dl>
        </div>
        <p class="suggest">
          <a href="#">故宫博物院</a>
          <a href="#">故宫博物院</a>
          <a href="#">故宫博物院</a>
          <a href="#">故宫博物院</a>
          <a href="#">故宫博物院</a>
          <a href="#">故宫博物院</a>
          <a href="#">故宫博物院</a>
        </p>

        <ul class="nav">
          <li>
            <nuxt-link to="/" class="takeout">美团外卖</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/" class="hotel">猫眼电影</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/" class="takeout">美团酒店</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/" class="apartment">民宿/公寓</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/" class="business">商家入驻</nuxt-link>
          </li>
        </ul>
      </el-col>
      <el-col :span="6" class="right">
        <ul class="security">
          <li>
            <i class="refund">
              <p class="text">随时退</p>
            </i>
          </li>
          <li>
            <i class="single">
              <p class="text">不满意免单</p>
            </i>
          </li>
          <li>
            <i class="overdue">
              <p class="text">过期退</p>
            </i>
          </li>
        </ul>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isFocus: false,
      search: "",
      hotList: ["火锅", "小龙虾", "葡萄", "烧烤", "哈密瓜"],
      searchList: ["茄子", "麻辣烫", "西瓜"],
    //   suggestList:[]
    };
  },
  computed: {
    isHotPlace: function () {
      return this.isFocus && !this.search;
    },
    isSearchList: function () {
      return this.isFocus && this.search;
    },
  },
  methods: {
    focus() {
      this.isFocus = true;
    },
    blur() {
      let self = this;
      setTimeout(() => {
        self.isFocus = false;
      }, 200);
    },
    input(e){
        console.log(e);
    }
  },
};
</script>

<style lang="scss">
.mybtn {
  height: 48.5px;
}
</style>