<template>
  <div id="home">
    <first />
    <Next />
    <Next2 />
    <Next3 />
    <Saying />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import First from "@/components/First";
import Next from "@/components/Next";
import Next2 from "@/components/Next2";
import Next3 from "@/components/Next3";
import Saying from "@/components/Saying";
import Footer from "@/components/Footer";

export default {
  name: "Home",
  components: {
    HelloWorld,
    First,
    Next,
    Next2,
    Next3,
    Saying,

    Footer
  }
};
</script>

<style lang="scss" scoped>
#home {
  min-width: 1000px;
}
</style>
