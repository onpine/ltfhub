<template>
  <div id="fans">
    <div class="phone">
      <div class="content">
        <div class="ptop">
          <h4>{{name}}</h4>
          <input class="select" type="button" value="︙" />
        </div>
        <div class="dialog">
          <div class="_input">
            <input type="text" name="text" id="text_input" />
            <input type="button" name="enter" id="btn_input" value="发送" />
          </div>

          <div class="dpr">
            <p class="dp">我在放屁，不服</p>
            <p class="dpr_time">9:14</p>
          </div>

          <div class="dpl">
            <p class="dp">？？？</p>
            <p class="dpl_time">8:12</p>
          </div>

          <div class="dpr">
            <p class="dp">我看不惯，就要怼你</p>
            <p class="dpr_time">00:46</p>
          </div>

          <span class="ddate">今天</span>

          <div class="dpr">
            <p class="dp">真是艹了我</p>
            <p class="dpr_time">23:13</p>
          </div>

          <div class="dpl">
            <p class="dp">Hi，我们可以聊天了</p>
            <p class="dpl_time">11:12</p>
          </div>

          <span class="ddate">昨天</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "fans",
  data() {
    return {
      name: "对面的"
    };
  }
};
</script>

<style lang="scss" scoped>
#fans {
  height: calc(100vh - 80px);
  width: 100%;
  min-height: 600px;
  display: flex;
  //   flex-direction: column;
}
.phone {
  margin: auto;
  display: block;
  width: 270px;
  height: 540px;
  /* border: 3px black solid; */
  border-top: black 6px solid;
  border-bottom: black 6px solid;
  border-left: black 3px solid;
  border-right: black 3px solid;
  border-radius: 20px;
  box-shadow: 0 0 10px 0 gray;
}

.content {
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 15px;
  /* background-color: rgb(247, 247, 247); */
  background-color: white;
}
.ptop {
  display: block;
  //   position: relative;
  //   top: 0;
  height: 40px;
  background-color: whitesmoke;
  border-radius: 15px 15px 0 0;
  padding: 0 20px;
  float: left;
}

.ptop h4 {
  display: inline-block;
  padding: 0;
  margin: 0;
  font-size: 15px;
  font-weight: 600;
  line-height: 40px;
  width: 190px;
  text-align: left;
}

.select {
  display: inline-block;
  padding: 0;
  margin: 0;
  width: 40px;
  font-size: 18px;
  font-weight: 600;
  line-height: 40px;
  height: 40px;
  text-align: center;
  outline: none;
  border: 0pt;
  cursor: pointer;
  background-color: whitesmoke;
}
.dialog {
  //   position: relative;
  display: flex;
  flex-direction: column-reverse;
  //   top: 40px;
  height: 500px;
  padding: 0px 0;
  width: 100%;
  //   background-color: yellow;
  border-radius: 0 0 15px 15px;
}
.ddate {
  font-size: 6px;
  margin: 5px 0;
}

._input {
  display: flex;
  align-items: center;
  height: 35px;
  width: 94%;
  padding: 0 3%;
  background-color: whitesmoke;
  border-radius: 0 0 15px 15px;
}
#text_input {
  //   float: left;
  height: 25px;
  width: 74%;
  border: 0;
  padding: 0 3%;
  outline: none;
  border-radius: 6px;
}
#btn_input {
  //   float: right;
  height: 25px;
  width: 20%;
  border: 0;
  padding: 0;
  outline: none;
  border-radius: 6px;
  font-size: 12px;
  background-color: lightsteelblue;
  cursor: pointer;
}
.dp {
  margin: 0;
  background-color: #ff9900;
  padding: 5px 10px;
  text-align: left;
  border-radius: 6px;
  font-size: 12px;
  line-height: 20px;
}
.dpr {
  margin: 5px;
  max-width: 70%;
  align-self: flex-end;
}
.dpr_time {
  text-align: right;
  width: 100%;
  height: 12px;
  margin: 0;
  font-size: 5px;
  padding: 5px 0;
  color: gray;
}
.dpl {
  margin: 5px;
  max-width: 70%;
  align-self: flex-start;
}
.dpl_time {
  text-align: left;
  width: 100%;
  height: 12px;
  margin: 0;
  font-size: 5px;
  padding: 5px 0;
  color: gray;
}
</style>