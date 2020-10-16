<template>
  <div id="footer">
    <div id="end">
      <div>
        <div class="bottom2">
          <p class="explain">* Ltf特别出道计划-1.02</p>
          <p class="explain">* 诞生于早些时候，活跃于多人运动时代。多人运动时代的时间管理大师初代目</p>
          <p class="explain">* 持续致力于怼人事业发展，怼人怼天怼空气不是最终目标</p>
          <p class="explain">* 索马里证卷交易所 海盗创业板上市</p>
          <hr />
          <!--链接-->
          <div class="lian_jie">
            <div>
              <ul style="list-style-type:none;">
                <li>
                  <h4>业务</h4>
                </li>

                <li>
                  <a href="/#">
                    <span>多人运动</span>
                  </a>
                </li>
                <li>
                  <a href="/#">
                    <span>时间管理</span>
                  </a>
                </li>
                <li>
                  <a href="/#">
                    <span>不服&怼人</span>
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <ul style="list-style-type:none;">
                <li>
                  <h4>全球战略</h4>
                </li>
                <li>
                  <a href="/#">
                    <span>东京</span>
                  </a>
                </li>
                <li>
                  <a href="/#">
                    <span>未来路南段</span>
                  </a>
                </li>
                <li>
                  <a href="/#">
                    <span>巴黎</span>
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <ul style="list-style-type:none;">
                <li>
                  <h4>支持</h4>
                </li>
                <li>
                  <a href="/#">
                    <span>@棒棒</span>
                  </a>
                </li>
                <li>
                  <a href="/#">
                    <span>@贝贝</span>
                  </a>
                </li>

                <li>
                  <a href="/#">
                    <span>@杠杠</span>
                  </a>
                </li>
                <li>
                  <a href="/#">
                    <span>@鬼鬼</span>
                  </a>
                </li>
                <li>
                  <a href="/#">
                    <span>@贱贱</span>
                  </a>
                </li>
                <li>
                  <a href="/#">
                    <span>@妹妹</span>
                  </a>
                </li>
                <li>
                  <a href="/#">
                    <span>@屁屁</span>
                  </a>
                </li>
                <li>
                  <a href="/#">
                    <span>@帅帅</span>
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <ul style="list-style-type:none;">
                <li>
                  <h4>HOST</h4>
                </li>

                <li>
                  <a href="/#">
                    <span>@怼怼</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <hr />
          <span style="font-size: 10px; float: right;">*本网页仅供学习交流</span>
        </div>
      </div>
    </div>
    <div class="foot">
      <p>@LTF 2020</p>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.foot {
  height: 60px;
  width: 100%;
  color: white;
  background-color: black;
}
.foot p {
  line-height: 30px;
  margin: 0;
  padding: 15px 0;
}
#end {
  text-align: left;
  color: white;
}
.bottom2 {
  padding: 1% 5% 1% 5%;
  margin: 0;
  background-color: black;
}
.explain {
  font-size: 10px;
  padding: 0;
  margin: 10px auto;
}
.lian_jie {
  padding: 1% 5%;
  display: flex;
  display: -webkit-flex;
  flex-direction: row;
  flex-wrap: nowrap; /*一排排不下，不换行*/
  justify-content: flex-start; /*主轴对齐方式*/
  align-items: flex-start; /*align-items属性定义项目在交叉轴上如何对齐。*/
}
.lian_jie div {
  flex-grow: 1;
}
.lian_jie li {
  height: 30px;
}
.lian_jie li a {
  text-decoration: none;
}
.lian_jie li a:hover {
  text-decoration: underline;
}
.lian_jie li a span {
  font-size: 13px;
  color: white;
}
.face {
  width: 30px;
  height: 30px;
}
</style>
