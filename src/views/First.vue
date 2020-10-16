<template>
  <div id="first">
    <div class="text">
      <img src="../assets/logo.png" alt="we" />
      <h1>多人运动时代持续领导者，时间管理大师初代目</h1>
      <h3>マルチスポーツ時代の指導者、時間管理マスターの初代目</h3>
      <p>
        <!-- <span>@ tf•L</span> -->
        <!-- <span class="qq">QQ:123456789</span>
        <span class="address">address:dormitory-5220</span>-->
      </p>
      <input id="like" type="button" />
    </div>
  </div>
</template>

<script>
export default {
  name: "First",
  methods: {
    goto: function() {
      document.querySelector("#next").scrollIntoView();
    }
  }
};
</script>

<style lang="scss" scoped>
#first {
  height: 100vh;
  // background-color: peru;
  min-height: 600px;
}
img {
  height: 100px;
}
.text {
  width: 800px;
  height: 300px;
  margin: auto;
  // box-shadow: -2px -2px 6px 0px #333333;
  border-radius: 10px;
  position: relative;
  top: calc(50% - 150px);
}
h1 {
  margin: 10px 0;
  font-weight: 500;
  font-size: 2em;
}
h3 {
  margin: 10px 0;
}
p {
  margin-top: 50px;
  padding: 0 150px;
  font-size: 15px;
  font-weight: 600;
}
.address {
  float: right;
  margin: 0 10%;
}
.qq {
  float: left;
  margin: 0 10%;
}
#like {
  height: 35px;
  width: 80px;
  border: 0;
  border-radius: 5px;
  cursor: pointer;
  background-color: #ff9900;
  font-weight: 700;
}
#like:visited {
  border: 0;
}
</style>

<script type="application/javascript">
window.onload = function() {
  setCookie("like", "1");
  function setCookie(cookiename, cookievalue) {
    var date = new Date();
    //最终时间
    var milsecond = getExpireTime();
    date.setTime(date.getTime() + milsecond);
    //判断是否已有cookie
    var key = getCookie(cookiename);
    if (key != "") {
      if (key == "0") {
        //若没有，新建cookievalue=0
        document.cookie =
          cookiename + "=" + "0" + "; path=/;expires = " + date.toGMTString();
        document.getElementById("like").value = "LIKE";
        console.log(
          "Create_Cookie_Value=" + document.getElementById("like").value
        );
        document
          .getElementById("like")
          .addEventListener("click", clickLike, false);
      } else if (key == "1") {
        document.getElementById("like").value = cookievalue;
        console.log("Cookie_Value=" + document.getElementById("like").value);
      }
    } else {
      //若没有，新建cookievalue=0
      document.cookie =
        cookiename + "=" + "0" + "; path=/;expires = " + date.toGMTString();
      document.getElementById("like").value = "LIKE";
      console.log(
        "Create_Cookie_Value=" + document.getElementById("like").value
      );
      document
        .getElementById("like")
        .addEventListener("click", clickLike, false);
    }
  }
  function clickLike() {
    var date = new Date();
    //最终时间
    var milsecond = getExpireTime();
    date.setTime(date.getTime() + milsecond);
    var key = getCookie("like");
    //若已有，cookievalue值加一
    var cookievalue = 1 + parseInt(key);
    document.cookie =
      "like=" + cookievalue + "; path=/;expires = " + date.toGMTString();
    document.getElementById("like").value = cookievalue;
    console.log("Cookie_Value=" + document.getElementById("like").value);
    document
      .getElementById("like")
      .removeEventListener("click", clickLike, false);
  }
  function getExpireTime() {
    var date = new Date();
    var hour = 23 - date.getHours();
    var min = 59 - date.getMinutes();
    var sec = 59 - date.getSeconds();
    var ms = (3600 * hour + 60 * min + sec) * 1000;
    return ms;
  }
  function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i].trim();
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
};
</script>