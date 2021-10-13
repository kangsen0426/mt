<template>
  <div class="m-crumbs">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">江西美团</el-breadcrumb-item>
      <el-breadcrumb-item><a href="/">{{keyword}}</a></el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
    props:{
        keyword:{
            type:String,
            default:''
        }
    }
};
</script>

<style>
</style>