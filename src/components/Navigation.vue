<template>
  <div id="navi">
    <div class="logo">
      <img src="../assets/logo.png" alt="logo" />
    </div>
    <div class="list">
      <ul>
        <li>
          <router-link to="/">时代领先</router-link>
        </li>
        <li>
          <router-link to="/">多人运动</router-link>
        </li>
        <li>
          <router-link to="/">时间管理</router-link>
        </li>
        <li>
          <router-link to="/">关于Ltfhub</router-link>
        </li>
        <li>
          <router-link to="/Fans">粉丝后援会</router-link>
        </li>
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
  min-width: 1000px;
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

.list ul li a {
  font-size: 18px;
  text-decoration: none;
  &.router-link-exact-active {
    color: #2c3e50;
  }
}
</style>