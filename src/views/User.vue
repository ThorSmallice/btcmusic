<template>
  <div id="user">
    <div
      class="top"
      style="
        background-image: url(http://p1.music.126.net/HS9wzE4rIPfVNqH3BlNzmg==/109951165657409376.jpg?imageView=1&thumbnail=100y65);
      "
    >
      <div class="lt">
        <p>3222</p>
        <p>听歌数</p>
      </div>
      <div class="head-portrait">
        <img
          src="http://p1.music.126.net/XK3D_CC1HjbwezcqYjNcJA==/109951164169901681.jpg?imageView=1&thumbnail=240x0"
          alt=""
        />
      </div>
      <div class="rt">
        <p>5710</p>
        <p>粉丝数</p>
      </div>
    </div>
    <div class="user-radio">
      <section>播单(1)</section>
      <ul>
        <li>
          <div class="lt"></div>
          <div class="rt">
            <h4><span>创作翻唱</span>你认真地说你喜欢白山茶</h4>
            <div>共6期，3910人订阅</div>
          </div>
        </li>
      </ul>
    </div>

    <div class="user-playlist">
      <section>歌单(1)</section>
      <ul>
        <li>
          <div class="lt"></div>
          <div class="rt">
            <h4>你认真地说你喜欢白山茶</h4>
            <div>共6期，3910人订阅</div>
          </div>
        </li>
      </ul>
    </div>

    <div class="bottom">
      <svg class="icon icon-logo" aria-hidden="true">
        <use xlink:href="#icon-bingtanghulu"></use>
      </svg>
      去TA的个人主页
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#user {
  .top {
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: vm(500);
    background: no-repeat;
    background-size: cover;
    color: #fff;
    .head-portrait {
      //   width: vm(80);
      border-radius: 50%;
    }
  }
  //   .user-radio {
  section {
    background-color: #dddddd;
    height: vm(50);
    line-height: vm(50);
    padding-left: vm(20);
  }
  li {
    padding: vm(5) vm(10);
    display: flex;
    .lt {
      width: vm(100);
      height: vm(100);
      background-color: rgb(212, 110, 110);
      margin-right: vm(20);
    }
    .rt {
      h4 {
        margin-top: vm(10);
        span {
          color: red;
          border: 1px solid red;
          margin-right: vm(10);
        }
      }
      div {
        margin-top: vm(10);
      }
    }
  }
  //   }
  .bottom {
    position: absolute;
    bottom: vm(20);
    left: 10vw;
    width: 80vw;
    height: vm(80);
    line-height: vm(80);
    background-color: red;
    color: #fff;
    border-radius: vm(60);
    text-align: center;
    font-size: vm(33);
  }
}
</style>