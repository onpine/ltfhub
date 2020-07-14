<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>-->
      <router-view />
    </div>
    <first />
    <Next />
    <Next2 />
    <Next3 />
    <Fans />
    <Footer />
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
      color: #42b983;
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
import First from "./views/First";
import Next from "./views/Next";
import Next2 from "./views/Next2";
import Next3 from "./views/Next3";
import Fans from "./views/Fans";
import Footer from "./views/Footer";
export default {
  name: "app",
  components: {
    First,
    Next,
    Next2,
    Next3,
    Fans,

    Footer
  },
  data() {
    return {};
  }
};
</script>