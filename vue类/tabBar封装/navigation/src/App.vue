<template>
  <div class="app">
    <!-- 此处引入tabbar组件 -->
    <tab-bar :tabBarColor="tabBarColor">
      <!-- 此处引入TabBarItemz组件 -->
      <tab-bar-item path="/home" :activeColor="activeColor" :normalColor="normalColor">
      <!-- 第一个引入非活跃的图片或者字体图片自行引入   注意：需要加slot="item-ico"属性 -->
        <img slot="item-ico" src="./assets/images/tabbar/y2.png" alt="">
        <!--第二个引入活页的图片或者字体图标自行引入    注意：需要加slot="item-ico-active"属性 -->
        <img slot="item-ico-active" src="./assets/images/tabbar/y1.png" alt="">
        <!-- 此处是文字 -->
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category"  :activeColor="activeColor" :normalColor="normalColor">
        <img slot="item-ico" src="./assets/images/tabbar/y2.png" alt="">
        <img slot="item-ico-active" src="./assets/images/tabbar/y1.png" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/cart"  :activeColor="activeColor" :normalColor="normalColor">
        <img slot="item-ico" src="./assets/images/tabbar/y2.png" alt="">
        <img slot="item-ico-active" src="./assets/images/tabbar/y1.png" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/profile"  :activeColor="activeColor" :normalColor="normalColor">
        <img slot="item-ico" src="./assets/images/tabbar/y2.png" alt="">
        <img slot="item-ico-active" src="./assets/images/tabbar/y1.png" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>

    </tab-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import TabBar from "./components/tabbar/TabBar"
import TabBarItem from "./components/tabbar/TabBarItem"
export default {
  name: 'app',
  data() { 
    return {
      activeColor:"yellow",//活跃时的字体颜色
      normalColor:"blue",//非活跃时的字体颜色,
      tabBarColor:"pink"//改变tabbar的背景颜色
    }
  },
  components:{
    TabBar,
    TabBarItem
  }
 }
</script>

<style>
  @import "./assets/css/base.css";
</style>