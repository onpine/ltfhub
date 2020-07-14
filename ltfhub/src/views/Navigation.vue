<template>
  <div id="navi">
    <div class="logo">
      <img src="../assets/logo.png" alt="logo" />
    </div>
    <div class="list">
      <ul>
        <li>时代领先</li>
        <li>多人运动</li>
        <li>时间管理</li>
        <li>关于Ltfhub</li>
        <li>如何加入</li>
      </ul>
    </div>
  </div>
</template>
<style lang="scss" scoped>
#navi {
  height: 80px;
  width: 90%;
  padding: 0 5%;
  background-color: #fff;
}
.logo {
  float: left;
}
.logo img {
  height: 80px;
  cursor: pointer;
}
.list {
  background-color: #fff;
  float: right;
  height: 80px;
  width: calc(100% - 141.46px - 10%);
  text-align: center;
}
.list ul {
  display: block;
  line-height: 80px;
  height: 80px;
  padding: 0;
  margin: 0;
  font-weight: 500;
  font-size: 18px;
}
.list ul li {
  display: inline-block;
  overflow: inherit;
  height: 80px;
  width: 20%;
  margin: 0 0%;
  cursor: pointer;
}
.list ul li:hover {
  border-bottom: #2c3e50 3px solid;
}
</style>