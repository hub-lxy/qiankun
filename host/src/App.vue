<template>
  <div id="app">
    <!-- <router-link to="/one">微应用one</router-link>
    <router-link to="/two">微应用two</router-link> -->
    <a href="/one">微应用one</a>
    <a href="/two">微应用two</a>
    <!-- <router-view class="box"> </router-view> -->
    <div id="oneContent">微应用one容器</div>
    <div id="twoContent">微应用two容器</div>
  </div>
</template>

<style scoped>
#oneContent,
#twoContent {
  float: left;
  width: 300px;
  padding: 50px;
  border: 1px solid #ccc;
  margin: 50px 20px;
}
</style>
