<template>
  <div>
    <div class="tab-bar" :style="{background:tabBarColor}">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    tabBarColor: {
      type: String
    }
  },
  data() {
    return {};
  },
  computed: {
    
  },
  created(){
    console.log(this.tabBarColor)
  }
};
</script>

<style scoped>
.tab-bar {
  display: flex;
  /* background-color: #f4f4f4; */
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>