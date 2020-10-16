<template>
  <div id="fans">
    <div class="fanscon">
      <div class="QRcode">
        <div class="chatGroup">
          <h3 style="margin:0;line-height:35px">粉丝后援会</h3>
          <p>支持持续致力于怼人事业发展，怼人怼天怼空气不是最终目标；加入粉丝后援会为Ltf特别出道计划不懈奋斗</p>
          <p>全球化进程中，我们将首先在亚洲（东京）、欧洲（巴黎）开展业务。</p>
        </div>
        <img src="../assets/ltf/qrcode.png" alt="code" />
      </div>
      <div class="fansqq">
        <div class="qqid">
          <img src="../assets/ltf/1.jpg" alt="duidui" />
          <h4>首席会长</h4>
        </div>
        <div class="qqid">
          <img src="../assets/ltf/2.jpg" alt="duidui" />
          <h4>多人运动副会长</h4>
        </div>
        <div class="qqid">
          <img src="../assets/ltf/3.jpg" alt="duidui" />
          <h4>时间管理副会长</h4>
        </div>
        <div class="qqid">
          <img src="../assets/ltf/4.jpg" alt="duidui" />
          <h4>未来发展副会长</h4>
        </div>
        <div class="qqid">
          <img src="../assets/ltf/5.jpg" alt="duidui" />
          <h4>中华区会长</h4>
        </div>
        <div class="qqid">
          <img src="../assets/ltf/6.jpg" alt="duidui" />
          <h4>亚洲区会长</h4>
        </div>
        <div class="qqid">
          <img src="../assets/ltf/7.jpg" alt="duidui" />
          <h4>北美区会长</h4>
        </div>
        <div class="qqid">
          <img src="../assets/ltf/8.jpg" alt="duidui" />
          <h4>欧洲区会长</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#fans {
  height: calc(100vh - 80px);
  padding-top: 80px;
  width: 100%;
  min-width: 1000px;
  min-height: 600px;
  // background-color: brown;
}
.fanscon {
  width: 100%;
  display: flex;
  height: calc(100% - 80px);
  justify-content: center;
  padding-top: 80px;
  // flex-direction: column;
}
.QRcode {
  display: block;
  // background-color: coral;
  width: 20%;
  min-width: 300px;
  margin: 0;
}
.QRcode img {
  width: 200px;
  height: 200px;
  // margin: 30px 0;
}
.chatGroup {
  // height: 260px;
  height: 50%;
  width: 260px;
  padding: 0 30px;
  margin: 0;
  // background-color: white;
  p {
    margin: 0;
    padding: 0 10px;
    line-height: 35px;
    text-align: left;
    font-size: 12px;
    font-weight: 600;
  }
}
.fansqq {
  width: 60%;
  min-width: 700px;

  // background-color: cadetblue;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.qqid {
  min-height: 220px;
  // height: 250px;
  // padding: 20px 0;
  width: 24%;
  // border: 1px black solid;

  img {
    border-radius: 75px;
    width: 150px;
    height: 150px;

    // border: 1px solid #ff9900;
    box-shadow: gray 0 0 10px 0;
    cursor: pointer;
  }
  img:hover {
    box-shadow: white 0 0 10px 0;
  }
  h4 {
    font-size: 13px;
  }
}
</style>