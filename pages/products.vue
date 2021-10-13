<template>
  <el-row class="page-product">
      <el-col :span="19">
          <crumbs :keyword="keyword"/>
          <categroy/>
          <list/>
      </el-col>
      <el-col :span="5">
          <amap v-if="point.length" :width="230" :height="290" :point="point"/>
      </el-col>
  </el-row>
</template>

<script>

import Crumbs from '../components/products/crumbs.vue'
import List from '../components/products/list.vue'
import Categroy from '../components/products/category.vue'
import Amap from '../components/public/map.vue'

export default {
    components:{
        Crumbs,
        List,
        Categroy,
        Amap
    },
    data() {
        return {
            keyword:'',
            point:[116.46, 39.92]
        }
    },
}
</script>

<style lang='scss'>
       @import "~assets/css/products/index.scss";

</style>