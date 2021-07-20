<template>
  <div id="user">
    <div
      class="top"
      style="
        background-image: url(http://p1.music.126.net/HS9wzE4rIPfVNqH3BlNzmg==/109951165657409376.jpg?imageView=1&thumbnail=100y65);
      "
    >
      <div class="box">
        <div class="up">
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
        <div class="dn">
          <h3 class="user_name">
            温差感
            <svg
              style="font-size: 25"
              class="icon icon-logo"
              aria-hidden="true"
            >
              <use xlink:href="#icon-vip"></use>
            </svg>
            <svg class="icon icon-logo" aria-hidden="true">
              <use xlink:href="#icon-xingbienan"></use>
            </svg>
          </h3>
          <div class="attention">+关注</div>
        </div>
      </div>
    </div>
    <div class="user-radio">
      <section>播单(1)</section>
      <ul>
        <li>
          <div class="lt"></div>
          <div class="rt">
            <h4><span>创作翻唱</span>你认真地说你喜欢白山茶</h4>
            <div class="tis">共6期，3910人订阅</div>
          </div>
        </li>
      </ul>
    </div>

    <div class="user-playlist">
      <section>歌单({{ playList.data.playlist.length }})</section>
      <ul>
        <template v-for="item in playList.data.playlist">
          <li :key="item.id">
            <div class="lt">
              <img :src="item.coverImgUrl" alt="" />
            </div>
            <div class="rt">
              <h4>{{ item.name }}</h4>
              <div class="tis">
                {{ item.trackCount }}首，播放{{ item.playCount }}次
              </div>
            </div>
          </li>
        </template>
      </ul>
    </div>

    <div class="bottom">
      <div class="home">
        <svg class="icon icon-logo" aria-hidden="true">
          <use xlink:href="#icon-bingtanghulu"></use>
        </svg>
        去TA的个人主页
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      playList: [],
    };
  },
  mounted() {
    this.axios.get("/user/playlist?uid=1398221246").then((res) => {
      console.log(res);
      this.playList = res;
    });
  },
};
</script>

<style lang="scss" scoped>
#user {
  .top {
    width: 100%;
    height: vm(500);
    background: no-repeat;
    background-size: cover;
    color: #fff;
    text-align: center;
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
      width: 100%;
      height: vm(500);
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAMhCAYAAAGI8zHRAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3tpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowMTgwMTE3NDA3MjA2ODExODIyQUMzOTg5M0NFQ0YwNyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoxQzI4RDIzRkNCNjUxMUU2OUM2REIwNjMzMUNEOURENCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxQzI4RDIzRUNCNjUxMUU2OUM2REIwNjMzMUNEOURENCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6YWFkODQ2ZTUtOTVlZC0zZjQ0LWI2YzYtZTljM2I3NTExMzA1IiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6Zjk5NjliNzAtMDcwZS0xMTdhLTg1NjgtY2YzNDBkZTU1ZWVmIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+5YiX/wAAA8NJREFUeNpiZGBgOMCABFiA+B/pAn9JV0ENLWQY+ocWtlBD4M8g8f6/gVFBDYH/pKlgYkADI0sAFB6MpAsw0ULFoBVgpoIKmhhKE2sHrQBKCgIIIMbRSmu00hqttEYrrdFKa7TSGiqVFkAAgTj7GfAAjKxPloK/Q8GKP7S34u8gUPCH9r74MyzCYXhENx3yxZDI/v9p74Z/tHUDEwMBMKpgOCnAqKvJMoGJIiuoYwLlVjANAm8y096Rw8OK0ZActWIwZX+AAOxYQQrAMAgD//9mXe+DbWQdJi69Bk1UVOzpY+7xWqYEc46ghFbbLWey5VZLULK5LSm1gyzdZXJdVkyhvBvjxcZZDWprBtgRZ8DHs0GDBjeAl+ffR25xTtxtB2dHKB0gfvzjlnrpC6n0/aVkYUFqxfY0YZsmXnTrHQKwawc5AIIwEEWD97+y6BFIMAiTPvc/bacDadXhjzrTw9ToGX6XXhr52Qb3zLQr1twJllIzh9VQu/O2tJfCN4c5z9QmmPGRYAevwMFph7bK/vwXHPxiKdCeoZfBp7TBYDAYDAYvmwyayAmR98EVaw4W7NLnFHhfq0Rmz0O9TW1qq9ntyWHU5m0wuBU7GKGL6CsAO/eSAyAIAwE03P/O4I6lcUUc5h1g0s6nRYPx9WczXyoHXrOF3j8HX+SuMp+pbZ61bfXutqeEpVRmlbZxNpJCIiR8FhIhaVLbVPHZJiGYw51VBsPelm1ryFT9dKq0HdW2WyM+qyzblSHxxRLOt7btebvDKmBgYGBgYGBgYGBgYGDg4y/fg2DXC9bos5/M8ZnaBKsVjNoEw5lgOONMMJzjOcs2n1UmmB3GZ8eN48YToGyrLNuybW+rLCQ442yehYTa5YI9ArR3R7cBhEAMRBH91wwUsUJG7EsDI4+9d5efpPTH+Ku+dgI8R+gnBo6p7texxO74quqlY+ekY3dMNdVU+/TxdqKaaqp17O2kY6um2rOaaqqp1rFPH+MyLh3r2APEqiX226I7tmrjAtYx1R4gwDqm2gPEuKyaaqqpptprUcfOyTk9kNiqnRPVVFMtsXFRTbXEPm/dsXEZl449qyWmWscSAzsn5wQMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDJwCl/5pItXAxuWcgI1LYomplti4mnZsXMZlXBJTrWMd65hqq7ZqHetYx1QbF9USS0y1joE9uSR2TlRLLDGwby4dU021xFRT7bWoY6qplphqiSV2TsZlXL6rdaxjHVMtscQSS0y1jnUsscRUS/xP4gPCMwFN4MxUIAAAAABJRU5ErkJggg==)
        repeat-x;
      background-size: contain;
    }

    .box {
      position: relative;
      // top:0;
      // left:0;
      z-index: 2;
    }
    .up {
      display: flex;
      justify-content: space-around;
      padding-top: vm(100);

      .lt,
      .rt {
        width: vm(100);
        height: vm(130);
        margin-top: vm(60);
      }
      .head-portrait {
        width: vm(180);
        height: vm(180);
        border-radius: 50%;
        overflow: hidden;
        img {
          width: 100%;
        }
      }
    }
    .dn {
      .attention {
        margin: 0 auto;
        margin-top: vm(20);
        width: vm(230);
        height: vm(60);
        border-radius: vm(60);
        line-height: vm(60);
        border: 1px solid #fff;
      }
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
    padding: vm(5) vm(15);
    display: flex;
    .lt {
      width: vm(100);
      height: vm(100);
      margin-right: vm(20);
      img {
        width: 100%;
      }
    }
    .rt {
      h4 {
        margin-top: vm(10);
        font-weight: 400;
        font-size: vm(32);
        span {
          color: red;
          border: 1px solid red;
          margin-right: vm(10);
        }
        .tis {
          font-size: vm(16);
          color: rgb(18, 177, 39);
        }
      }
      div {
        margin-top: vm(10);
      }
    }
  }
  //   }

  .bottom {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: vm(120);

    background-color: rgb(255, 255, 255);
  }
  .home {
    position: fixed;
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