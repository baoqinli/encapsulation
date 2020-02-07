<template>
  <div @click="itemClick" class="tab-bar-item">
      <div v-if="isActive">
        <slot name="item-ico"></slot>
      </div>
    <div v-else>
        <slot name="item-ico-active"></slot>
    </div>
    <div :style="activeStyle">
        <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props:{
    path:String,
    activeColor:{
      type:String,
      default:"palevioletred"
    },
    normalColor:{
      type:String,
      default:"red"
    }
  },
  computed:{
    isActive(){
      //判断当前活跃路由里面的path和传递过来的path是否一样  如果一样就是真
      // console.log(this.$route.path)
      return this.$route.path.indexOf(this.path) !==-1
    },
    activeStyle(){
      return this.isActive ? {color:this.activeColor} : {color:this.normalColor}
    }
    
  },
  data() {
    return {
        // isActive:true,
        // path:"/home"
    };
  },
  // created(){
  //   console.log(this.path)
  // },
  methods:{
    itemClick(){
      // console.log("ooo")
      this.$router.push(this.path)
    }
  }
};
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tab-bar-item img {
  width: 24px;
  height: 24px;
  display: block;
  margin: 0 auto;
  vertical-align: middle;
}
.active{
    color: palevioletred;
}
</style>