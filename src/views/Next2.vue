<template>
  <div id="next2">
    <div class="title">
      <h1>全球化战略与跨国实战</h1>
    </div>
    <div class="flex">
      <div class="note">
        <div class="dong"></div>
        <div class="country">
          <img src="../assets/ltf/name1.jpg" alt="country" />
        </div>
        <div class="name">
          <h2>东京</h2>
        </div>
      </div>
      <div class="note">
        <div class="dong"></div>
        <div class="country">
          <img src="../assets/ltf/name2.jpg" alt="country" />
        </div>
        <div class="name">
          <h2>未来路南段</h2>
        </div>
      </div>
      <div class="note">
        <div class="dong"></div>
        <div class="country">
          <img src="../assets/ltf/name3.jpg" alt="country" />
        </div>
        <div class="name">
          <h2>巴黎</h2>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
#next2 {
  height: calc(100vh - 80px);
  min-height: 600px;
  //   background-image: linear-gradient(#ffffff, #c9c9c9);
  //   background-color: rgb(28, 120, 135);
}
.title {
  height: 100px;
  width: 100%;
  //   background-color: saddlebrown;
}
.title h1 {
  margin: 0;
  line-height: 40px;
  padding-top: 60px;
  font-weight: 500;
  font-size: 28px;
}
.flex {
  width: calc(100% - 60px);
  margin: auto;
  height: calc(100% - 100px);
  display: inline-flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: baseline;
  align-content: space-around;
}

.note {
  //   flex-grow: 1;
  margin: 0 50px;
  width: 210px;
  height: 350px;
  background-color: rgb(228, 220, 220);
  cursor: pointer;
}
.note:hover {
  box-shadow: -2px -2px 10px -1px grey;
}
.name {
  height: 70px;
  width: 100%;
  color: #2c3e50;
}
.name h2 {
  margin: 0;
  line-height: 30px;
  padding: 20px 0;
  font-size: 16px;
  font-weight: 500;
}
.dong {
  height: 20px;
  width: 20px;
  border-radius: 10px;
  margin: 25px auto;
  background-color: white;
}
.country {
  height: 210px;
  width: 100%;
  background-color: aliceblue;
  //   background-image: url("../assets/ltf/card1.jpg");
}
.country img {
  width: 210px;
  height: 210px;
}
</style>