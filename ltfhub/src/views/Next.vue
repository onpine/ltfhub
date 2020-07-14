<template>
  <div id="next">
    <div class="box">
      <div class="work">
        <div class="card">
          <div class="kong"></div>
          <div class="text2">
            <h2>多人运动</h2>
            <img class="img1" src="../assets/ltf/card1.jpg" alt="多人运动" />
            <p class="pp">私の暗い目の周りは純粋にメガネでサングラスの機能があります。多くの人が運動します。</p>
          </div>
        </div>
      </div>
      <div class="work">
        <div class="card">
          <div class="kong"></div>
          <div class="text2">
            <h2>时间管理</h2>
            <img class="img1" src="../assets/ltf/card2.jpg" alt="多人运动" />
            <p class="pp">夜明けの4時に寝ても、毎日の時間はまだ空いています。多くの人がハイエンドコースを学び、実戦を深める。</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
#next {
  height: calc(100vh - 80px);
  min-height: 600px;
  //   background-color: brown;
  //   background-image: linear-gradient(#ffffff, #bebcbc);
}
.box {
  width: 100%;
  height: calc(100vh - 80px);
  min-height: 600px;
  //   display: inline-flex;
  //   flex-direction: row;
  //   flex-wrap: wrap;
  //   justify-content: space-around;
  //   align-items: baseline;
}
.work {
  //   display: inline-block;
  display: inline-flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: center;
  align-items: baseline;
  //   flex-grow: 1;
  width: 50%;
  height: 100%;
  //   height: calc(100vh - 80px);
}
.card {
  width: 324px;
  height: 513px;
  background-color: rgb(228, 220, 220);
  //   background-color: rgb(138, 109, 53);
  //   position: relative;
  //   top: calc(50% - 256px);
  //   margin: auto;
  border-radius: 10px;

  cursor: pointer;
}
.card:hover {
  box-shadow: -2px -2px 6px -1px grey;
}
.kong {
  position: relative;
  top: 35px;
  height: 10px;
  width: 65px;
  margin: auto;
  background-color: #fff;
  border-radius: 5px;
}
.text2 {
  width: 100%;
  height: 300px;
  //   background-color: grey;

  position: relative;
  top: 60px;
  padding: 40px 0;
}
.text2 h2 {
  margin: 0;
  font-weight: 500;
  font-size: 20px;
}
.img1 {
  display: block;
  width: 100px;
  margin: 35px auto;
  border-radius: 5px;
}
.pp {
  display: block;
  //   line-height: 30px;
  width: 200px;
  margin: 0 auto;
  padding: 0;
  font-weight: 300px;
}
// .work2 {
//   display: inline-block;
//   background-color: cadetblue;
//   //   flex-grow: 1;
//   height: calc(100vh - 60px);
//   width: 50%;
// }
</style>