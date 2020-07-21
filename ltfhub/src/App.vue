<template>
  <div id="app">
    <div id="nav">
      <Navigation />
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>-->
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
html,
body {
  margin: 0;
  min-width: 1000px;
  background-color: #fff;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  // padding: 0 10%;
  height: 80px;
  box-shadow: 0 2px 8px 0px grey;
  position: fixed;
  top: 0;
  width: 100%;
  // min-width: 1000px;
  z-index: 999;
  text-align: center;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #757575;
    }
  }
}
.box-active {
  position: fixed;
  top: 0;
}
</style>

<script>
// 监听事件
window.addEventListener("scroll", function() {
  let t = $("body, html").scrollTop(); // 目前监听的是整个body的滚动条距离
  if (t > 0) {
    $("#nav").addClass("box-active");
  } else {
    $("#nav").removeClass("box-active");
  }
});
</script>

<script>
import Navigation from "@/components/Navigation";
export default {
  name: "app",
  components: {
    Navigation
  },
  data() {
    return {};
  }
};
</script>