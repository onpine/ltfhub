<template>
  <div id="next3">
    <div class="photo">
      <div class="word">
        <h1>LTF,不如我们从新来过</h1>
        <hr />
      </div>
      <img class="p1" src="../assets/ltf/card1.jpg" alt="memory" />
      <img class="p1" src="../assets/ltf/memory1.jpg" alt="memory" />
      <img class="p1" src="../assets/ltf/memory2.jpg" alt="memory" />
      <img class="p1" src="../assets/ltf/memory3.jpg" alt="memory" />
      <img class="p1" src="../assets/ltf/card2.jpg" alt="memory" />
      <img class="p2" src="../assets/ltf/memory4.jpg" alt="memory" />
      <img class="p2" src="../assets/ltf/memory5.jpg" alt="memory" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
#next3 {
  height: calc(100vh - 80px);
  width: 100%;
  min-height: 600px;
}
.word {
  height: 54px;
  width: 100%;
}
.word h1 {
  text-align: right;
  line-height: 34px;
  font-size: 20px;
  margin: 0 10px;
}
.word hr {
  line-height: 20px;
  margin: 0 10px;
}
.photo {
  width: 906px;
  height: 480px;
  margin: auto;
  position: relative;
  top: calc(50% - 230px);
}
.p1 {
  display: inline-block;
  width: 206px;
  height: 206px;
  margin: 10px;
  cursor: pointer;
}
.p2 {
  display: inline-block;
  width: 320px;
  height: 180px;
  margin: 13px 10px 10px 10px;
  cursor: pointer;
}
.p3 {
  width: 180px;
  height: 180px;
  margin: 10px 23px;
}
.photo img:hover {
  box-shadow: -2px -2px 10px -1px grey;
}
</style>