<template>
  <div id="song">
    <div class="bg"></div>
    <div class="top">
      <div class="head_portrait">
        <img
          src="//p2.music.126.net/p4gS961wdeSUwtvNGVWl9w==/109951163282076195.jpg?imageView=1&type=webp&thumbnail=126x0"
          alt=""
        />
      </div>
      你知道这首歌居然被这么评论？
      <span class="look_look">打开看看&gt;</span>
    </div>
    <div class="player_box">
      <div class="record_player">
        <div class="player_center">
          <div class="player_img" @click="play">
            <img
              src="http://p2.music.126.net/-SebB9G58GprMCOSN4rMCQ==/109951166177053222.jpg?imageView&thumbnail=360y360&quality=75&tostatic=0"
              alt=""
            />

            <span class="player_btn" v-show="isplay"> </span>
          </div>
        </div>
      </div>
    </div>
    <div class="song_info">
      <h2 class="song_h2">
        <span>☆偶像系列 (☆Lil uzi vert)</span>
        <span>-</span>
        <b>李佳隆/VVS_MUSIC</b>
      </h2>
      <div class="song_lrc">
        <div class="song_scroll">
          <p>他们等我出现等得太久</p>
          <p>他们等我出现等得太久</p>
          <p>他们等我出现等得太久</p>
          <p>他们等我出现等得太久</p>
          <p>他们等我出现等得太久</p>
          <p>他们等我出现等得太久</p>
          <p>他们等我出现等得太久</p>
          <p>他们等我出现等得太久</p>
          <p>他们等我出现等得太久</p>
          <p>他们等我出现等得太久</p>
        </div>
      </div>
    </div>
    <div class="musicStreetWakeUp">
      <img
        src="//s3.music.126.net/mobile-new/img/musicStreet.png?22227b514ca899d2759a388ffbac109b"
        alt=""
      />
    </div>
    <div class="footer-wrap">
      <span class="open_app">打开</span>
      <span class="download_app">下载</span>
    </div>
    <audio
      :src="playList"
      autoplay
      @pause="is_stop = true"
      @play="is_stop = false"
      ref="audio"
    ></audio>

    <div class="song_car" @click="carUp" :style="{ top: carTop + 'px' }">
      <ul class="song_nav">
        <li class="active">相关歌单</li>
        <li>相似歌曲</li>
        <li>精彩评论</li>
      </ul>
      <div class="scroll_box">
        <div class="song_list">
          <h3 class="scroll_box_title">包含这首歌的歌单</h3>
          <div class="list_box">
            <ul>
              <li>
                <div class="img_box">
                  <img
                    src="http://p2.music.126.net/c62r_l2eYC_ydpR8f2MimQ==/109951165094955243.jpg?imageView=1&type=webp&thumbnail=246x0"
                    alt=""
                  />
                  <span class="play_count">
                    <svg class="icon icon-erji" aria-hidden="true">
                      <use xlink:href="#icon-erji"></use></svg
                    >1261.1万</span
                  >
                </div>
                <h4>『治愈基地』夜里的故事总是那么丰富</h4>
                <p>by 勒溪</p>
              </li>
              <li>
                <div class="img_box">
                  <img
                    src="http://p2.music.126.net/c62r_l2eYC_ydpR8f2MimQ==/109951165094955243.jpg?imageView=1&type=webp&thumbnail=246x0"
                    alt=""
                  />
                  <span class="play_count"
                    ><svg class="icon icon-erji" aria-hidden="true">
                      <use xlink:href="#icon-erji"></use></svg
                    >1261.1万</span
                  >
                </div>
                <h4>『治愈基地』夜里的故事总是那么丰富</h4>
                <p>by 勒溪</p>
              </li>
              <li>
                <div class="img_box">
                  <img
                    src="http://p2.music.126.net/c62r_l2eYC_ydpR8f2MimQ==/109951165094955243.jpg?imageView=1&type=webp&thumbnail=246x0"
                    alt=""
                  />
                  <span class="play_count"
                    ><svg class="icon icon-erji" aria-hidden="true">
                      <use xlink:href="#icon-erji"></use></svg
                    >1261.1万</span
                  >
                </div>
                <h4>『治愈基地』夜里的故事总是那么丰富</h4>
                <p>by 勒溪</p>
              </li>
            </ul>
          </div>
        </div>
        <div class="more_songs">
          <h3 class="scroll_box_title">喜欢这首歌的人也听</h3>
          <div class="moreSongs_list">
            <ul>
              <li>
                <div class="lt">
                  <img
                    src="http://p1.music.126.net/KUUrg-bbybCdG_EwDSnNFA==/109951164176658680.jpg?imageView=1&type=webp&thumbnail=120x0"
                    alt=""
                  />
                </div>
                <div class="cen">
                  <h3>有点甜</h3>
                  <p>汪苏泷 / By2 - 万有引力</p>
                </div>
                <div class="rt">
                  <svg class="icon icon-bofang" aria-hidden="true">
                    <use xlink:href="#icon-bofang"></use>
                  </svg>
                </div>
              </li>
              <li>
                <div class="lt">
                  <img
                    src="http://p1.music.126.net/KUUrg-bbybCdG_EwDSnNFA==/109951164176658680.jpg?imageView=1&type=webp&thumbnail=120x0"
                    alt=""
                  />
                </div>
                <div class="cen">
                  <h3>有点甜</h3>
                  <p>汪苏泷 / By2 - 万有引力</p>
                </div>
                <div class="rt">
                  <svg class="icon icon-bofang" aria-hidden="true">
                    <use xlink:href="#icon-bofang"></use>
                  </svg>
                </div>
              </li>
              <li>
                <div class="lt">
                  <img
                    src="http://p1.music.126.net/KUUrg-bbybCdG_EwDSnNFA==/109951164176658680.jpg?imageView=1&type=webp&thumbnail=120x0"
                    alt=""
                  />
                </div>
                <div class="cen">
                  <h3>有点甜</h3>
                  <p>汪苏泷 / By2 - 万有引力</p>
                </div>
                <div class="rt">
                  <svg class="icon icon-bofang" aria-hidden="true">
                    <use xlink:href="#icon-bofang"></use>
                  </svg>
                </div>
              </li>
              <li>
                <div class="lt">
                  <img
                    src="http://p1.music.126.net/KUUrg-bbybCdG_EwDSnNFA==/109951164176658680.jpg?imageView=1&type=webp&thumbnail=120x0"
                    alt=""
                  />
                </div>
                <div class="cen">
                  <h3>有点甜</h3>
                  <p>汪苏泷 / By2 - 万有引力</p>
                </div>
                <div class="rt">
                  <svg class="icon icon-bofang" aria-hidden="true">
                    <use xlink:href="#icon-bofang"></use>
                  </svg>
                </div>
              </li>

              <li>
                <div class="lt">
                  <img
                    src="http://p1.music.126.net/KUUrg-bbybCdG_EwDSnNFA==/109951164176658680.jpg?imageView=1&type=webp&thumbnail=120x0"
                    alt=""
                  />
                </div>
                <div class="cen">
                  <h3>有点甜</h3>
                  <p>汪苏泷 / By2 - 万有引力</p>
                </div>
                <div class="rt">
                  <svg class="icon icon-bofang" aria-hidden="true">
                    <use xlink:href="#icon-bofang"></use>
                  </svg>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="user_comment">
          <h3 class="scroll_box_title">精彩评论</h3>
          <div class="comment_list">
            <div class="comment_box">
              <div class="header_img">
                <img
                  src="http://p2.music.126.net/q6xXLgwHDy4Z6E8VMjjKyQ==/109951165849817945.jpg?imageView=1&type=webp&thumbnail=90x0"
                  alt=""
                />
              </div>
              <div class="comment_rt">
                <div class="user_name">
                  <div class="lt">
                    <span
                      >焕焕焕焕焕o<svg class="icon icon-vip" aria-hidden="true">
                        <use xlink:href="#icon-vip"></use></svg
                    ></span>
                    <p>2021年7月19日</p>
                  </div>
                  <div class="rt">
                    1609
                    <svg class="icon icon-dianzan" aria-hidden="true">
                      <use xlink:href="#icon-dianzan"></use>
                    </svg>
                  </div>
                </div>
                <div class="comment">
                  有汪苏泷汪苏泷声音的剧，我都追！还有三天。
                </div>
              </div>
            </div>
            <div class="comment_box">
              <div class="header_img">
                <img
                  src="http://p2.music.126.net/q6xXLgwHDy4Z6E8VMjjKyQ==/109951165849817945.jpg?imageView=1&type=webp&thumbnail=90x0"
                  alt=""
                />
              </div>
              <div class="comment_rt">
                <div class="user_name">
                  <div class="lt">
                    <span
                      >焕焕焕焕焕o<svg class="icon icon-vip" aria-hidden="true">
                        <use xlink:href="#icon-vip"></use></svg
                    ></span>
                    <p>2021年7月19日</p>
                  </div>
                  <div class="rt">
                    1609
                    <svg class="icon icon-dianzan" aria-hidden="true">
                      <use xlink:href="#icon-dianzan"></use>
                    </svg>
                  </div>
                </div>
                <div class="comment">
                  有汪苏泷汪苏泷声音的剧，我都追！还有三天。
                </div>
              </div>
            </div>
            <div class="comment_box">
              <div class="header_img">
                <img
                  src="http://p2.music.126.net/q6xXLgwHDy4Z6E8VMjjKyQ==/109951165849817945.jpg?imageView=1&type=webp&thumbnail=90x0"
                  alt=""
                />
              </div>
              <div class="comment_rt">
                <div class="user_name">
                  <div class="lt">
                    <span
                      >焕焕焕焕焕o<svg class="icon icon-vip" aria-hidden="true">
                        <use xlink:href="#icon-vip"></use></svg
                    ></span>
                    <p>2021年7月19日</p>
                  </div>
                  <div class="rt">
                    1609
                    <svg class="icon icon-dianzan" aria-hidden="true">
                      <use xlink:href="#icon-dianzan"></use>
                    </svg>
                  </div>
                </div>
                <div class="comment">
                  有汪苏泷汪苏泷声音的剧，我都追！还有三天。
                </div>
              </div>
            </div>
            <div class="comment_box">
              <div class="header_img">
                <img
                  src="http://p2.music.126.net/q6xXLgwHDy4Z6E8VMjjKyQ==/109951165849817945.jpg?imageView=1&type=webp&thumbnail=90x0"
                  alt=""
                />
              </div>
              <div class="comment_rt">
                <div class="user_name">
                  <div class="lt">
                    <span
                      >焕焕焕焕焕o<svg class="icon icon-vip" aria-hidden="true">
                        <use xlink:href="#icon-vip"></use></svg
                    ></span>
                    <p>2021年7月19日</p>
                  </div>
                  <div class="rt">
                    1609
                    <svg class="icon icon-dianzan" aria-hidden="true">
                      <use xlink:href="#icon-dianzan"></use>
                    </svg>
                  </div>
                </div>
                <div class="comment">
                  有汪苏泷汪苏泷声音的剧，我都追！还有三天。
                </div>
              </div>
            </div>
            <div class="comment_box">
              <div class="header_img">
                <img
                  src="http://p2.music.126.net/q6xXLgwHDy4Z6E8VMjjKyQ==/109951165849817945.jpg?imageView=1&type=webp&thumbnail=90x0"
                  alt=""
                />
              </div>
              <div class="comment_rt">
                <div class="user_name">
                  <div class="lt">
                    <span
                      >焕焕焕焕焕o<svg class="icon icon-vip" aria-hidden="true">
                        <use xlink:href="#icon-vip"></use></svg
                    ></span>
                    <p>2021年7月19日</p>
                  </div>
                  <div class="rt">
                    1609
                    <svg class="icon icon-dianzan" aria-hidden="true">
                      <use xlink:href="#icon-dianzan"></use>
                    </svg>
                  </div>
                </div>
                <div class="comment">
                  有汪苏泷汪苏泷声音的剧，我都追！还有三天。
                </div>
              </div>
            </div>
            <div class="comment_box">
              <div class="header_img">
                <img
                  src="http://p2.music.126.net/q6xXLgwHDy4Z6E8VMjjKyQ==/109951165849817945.jpg?imageView=1&type=webp&thumbnail=90x0"
                  alt=""
                />
              </div>
              <div class="comment_rt">
                <div class="user_name">
                  <div class="lt">
                    <span
                      >焕焕焕焕焕o<svg class="icon icon-vip" aria-hidden="true">
                        <use xlink:href="#icon-vip"></use></svg
                    ></span>
                    <p>2021年7月19日</p>
                  </div>
                  <div class="rt">
                    1609
                    <svg class="icon icon-dianzan" aria-hidden="true">
                      <use xlink:href="#icon-dianzan"></use>
                    </svg>
                  </div>
                </div>
                <div class="comment">
                  有汪苏泷汪苏泷声音的剧，我都追！还有三天。
                </div>
              </div>
            </div>
          </div>
          <div class="end_open_more">打开云音乐查看更多精彩评论</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      isplay: false,
      playList: [],
      carTop: 80,
      isUp: true,
      is_stop: true,
    };
  },
  methods: {
    play() {
      this.isplay = !this.isplay;
      if (this.is_stop) {
        this.$refs.audio.play();
      } else {
        this.$refs.audio.pause();
      }
    },
    carUp() {
      if (this.isUp) {
        this.isUp = false;
        this.carTop = -488;
      } else {
        this.isUp = true;
        this.carTop = 80;
      }
    },
  },
  created() {
    this.axios.get("/song/url?id=33894312").then((res) => {
      this.playList = res.data[0].url;
      console.log(this.playList);
    });
  },
};
</script>

<style lang="scss" scoped>
#song {
  overflow: hidden;
  height: 100vh;
  .bg {
    background-image: url("http://p2.music.126.net/-SebB9G58GprMCOSN4rMCQ==/109951166177053222.jpg?imageView&thumbnail=50y50&quality=15&tostatic=0");
    opacity: 1;
    transform: scale(1.5);
    transform-origin: center center;
    filter: blur(50px);

    background-color: #161824;
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: auto 100%;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    height: 100%;
    overflow: hidden;
    &::before {
      content: " ";
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
      background-color: rgba(0, 0, 0, 0.5);
    }
  }
  .top {
    position: fixed;
    left: 5vw;
    width: 90%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    height: vm(90);
    // line-height: vm(80);
    background-color: rgba(255, 89, 89, 0);
    color: #fff;
    border-bottom: 1px solid hsla(0, 0%, 100%, 0.2);

    .head_portrait {
      width: vm(60);
      height: vm(60);
      background-color: rgb(155, 209, 105);
      border-radius: 50%;
      margin-right: vm(15);
      overflow: hidden;
      img {
        width: 100%;
      }
    }
    .look_look {
      text-align: center;
      width: vm(160);
      height: vm(50);
      line-height: vm(50);
      border: 1px solid #fff;
      border-radius: vm(50);
      position: absolute;
      right: 0;
    }
  }
  .player_box {
    position: relative;
    padding-top: vm(200);

    .record_player {
      position: relative;
      margin: 0 auto;
      width: vm(500);
      height: vm(500);
      background: url(//s3.music.126.net/mobile-new/img/disc.png?d3bdd10…=)
        no-repeat;
      background-size: contain;
      &::after {
        content: "";
        position: absolute;
        width: 73px;
        height: 118px;
        top: -50px;
        left: 112px;
        -webkit-transform: rotate(-7deg);
        -ms-transform: rotate(-7deg);
        transform: rotate(-7deg);
        -webkit-transform-origin: left top;
        -ms-transform-origin: left top;
        transform-origin: left top;
        background: url(//s3.music.126.net/mobile-new/img/needle-ab.png?4b81da0…=)
          no-repeat;
        background-size: contain;
      }
      .player_center {
        position: absolute;
        overflow: hidden;
        border-radius: 50%;
        width: 150px;
        height: 150px;
        left: 50%;
        top: 50%;

        margin: -75px 0 0 -75px;
        background: url(//s3.music.126.net/mobile-new/img/disc_default.png?ba7c53e…=)
          no-repeat;
        background-size: contain;
        .player_img {
          // position: absolute;
          // overflow: hidden;
          // border-radius: 50%;
          // width: 150px;
          // height: 150px;
          // left: 50%;
          // top: 50%;

          // margin: -75px 0 0 -75px;
          img {
            width: 100%;
            transform: rotate(60deg);
          }
          .player_btn {
            position: absolute;
            width: 50px;
            height: 50px;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKgAAACoCAMAAABDlVWGAAABJlBMVEUAAAAAAAD////l5eX///9iYmKDg4Pn5+f///9YWFj////09PT////4+Pjt7e3///////9oaGhBQUH////////////////CwsIaGhr///8xMTEkJCT////7+/vp6en///////////////+srKyoqKienp58fHz////y8vKTk5P///8EBAT////////////////V1dW3t7f////////////////////v7++jo6N9fX3///////+UlJT////s7Oz////Nzc3///////+RkZGPj495eXkTExP////////29vb////k5OTPz882Njb////////////c3Nz///////9ycnJsbGz///9dXV3////////Q0ND///9QUFD///////////////////9FeiN6AAAAYXRSTlNmAP3c+oWT3ueB9vA19ealRId5EQbuurpu83RxD/nh05dfAquooo+M7JtzaSolE+vMspJ3Wj7w6KSQj6ucKeXNxLWnmpmObVYd8t3axXZRSt7TvbKLideCeSzHnn4V3Nh6YarbPAAABlRJREFUeNrU14lWEmEYh/GXcdj3HQTZRCkS913UNE2zbLd9Oc/930Q2LmVpwPAC03MD/M5835n/IC6dkqHnzcVoZvdkLp2HfHruZDcTXWw+DyVdOilAt6uNjI8782Ua1W2XjTShtdDSmzRdlH6zFKq5bKQBTS5H57gqXJrP1tsb7kShkBPJFQoJ90a7np0vhblqLrrc8R7oQ4vVPZOLIp8mp8flzsanJ59FuMjcqxZdHVKFxvYDWK1lPQXpooInu4ZVYD/m6pAWNLn0DSvvekJ6KLHuxerb0qyrQwrQViV/oZzKSc/lpi6sgUrLdSN16MyWARBcOBWbnS4EAYytj67r1KGtqMUseaSvPCWLGr14u+pDZysmwFhc+i4+BmBWZgcATTXTFvO9qOS3qOlmShu68g7A6xa13F6A7yuq0ORnA9jZENU2dgDjc1IPGvMB4QNR7+AJ4IspQVObBjDmF+Wur6qxmdKAbpeBoEcGlCcIlLf7hx7lOzxOlYeaP+oTmmoYQFsGWhswGql+oMUMEInLgItHgEzRPvS43OHYVY+/fGwXGvIBkzKU6oAvZA8aywOPZEg9AvIxO9AXAZg4lKF1OAGBF71DX5jw5EyG2NkTMJ/3Co2ZcM8tQ819D8xYb9CVgA2nijSw0gs0tArBzk59aRBWQ91Dj30QjssIiofBd9wttFiGiTMZSWcTUC52B629Bg5lRB0Cr2tdQRvAfRlZ94FGN9AjA+oywupgHHWGzuRhTEbaGORnOkFTZYj4ZaT5I1BOdYBuAnEZcXFg89/QmAFtGXltMGL/ghZ9I7+g19fUV/wHtAJBvzggfxAqd0NXDPCII/KAsXIXNPXOIQd/efjvUndAmxB2xMH/zB+G5u3Qr2k4EMd0AOmvt0IrsCMOagcqt0FbJkyLg5oGs3ULNApecVReiP4NnTHALY7KDcbHv6BbDno1XTUGW39CWwa8F4flB6P1B3TRgQ/UeqSLN6GzAQd83f1dHAKzN6AfoCQOrARLN6Andr9GpiITT9/KwPLAye/QGATFTusAxsOCDKogxH6D7sOC2GkNq+B9GVALsP8LWgzAqdjJ4LJXCRlIpxAoXkOrtteT6yYmH8gg8kL1GroHU/1CoTSQBZ6CvSto0oRc/1DM7GNRLwdm8hK6DF5RgMI9j6jnheVLaBTWdaAwPy7KrUP0Alqbg4QWlPCU6JaAuZoFDcGaqEHh6RdRLQIhC/oBsppQzAXVN1UWlixoBjyqUIhozr8H3vyE1lYhpwnVnv8CpH9CZyAi2lAIPtK8pDPn0Cp8UoWqz/8zqJ5DGzCpCdWf/0lonEMzMK0J1Z//acicQ30wrgnVn/9x8LkkCWFRherPfxiSEgKvLlR//r0QkmWY14Xqz/88LEsTsqpQ/fm3RlQWoa4L1Z//OixKFNq6UP35vw9RycDGMKAYD3P9vEhlF9y6UP35d8OuvISELlR//hPwUqxh0oTqz781TbIKueFB4em4rb/Mq5IfMpRn0nOPIS+ADBUatvcz/w/0B/X2VgMACMNQ9AMnWOADKwT/QuahyZYcDcte7e146X9W+vFmWmEzOeOJGfjMCmWOEubMYw7no7wizHPHvMuMAMFIOo5IxsiOjJDLSOOM2cDYN44hxliMjGnL2OAOWMCgGgz84uBEDKDFIG8ORLhzLPO2Y5kK6PpMdJiBsR28nQkMOBEMJtTixISY4JUTZWPCgVXevesgCINhGG7dZPLEIg7GRRsMTsaoMTEOnmLUuBgn+e//JuTHGt0aKT3y3QIFpj6vO9ctnbnAmr9PIysefn0E0PfhkjW92HFtnQHULn5AAG9aISZGF3NaQYxVrInRrcVYBW4H5vkPEPIfuIV5UGXhClHT8Qv9oXQ/MckoTfb+wVTGqK8ZUl9+4mmUnpGj03pOmzlH5y/w5w6ZiAil+G9qA0KpkfWMTxKsJ6530wel3try9CwjSscg27BTDcw321gHjzyuEjj9IbwP1hPeDqHo2abP0pn5XMR/NhTB/fyo2gv3q0gh1JSkEHCrUuMSG1VxCdxDOtfR1ZDr4AGUwIUACi5JJZMyx1RHUgY3kIn0LBuFQk2EFlv7J3t0+id7JPi86wlJsfm9FUVbQrZR1LrPmQ0hKZfSXC7Fzr5LeD7uGoYBQBCGV56PS2g5ewGy+NkUNbjr9gAAAABJRU5ErkJggg==)
              0 0 no-repeat;
            background-size: contain;
          }
        }
      }
    }
  }
  .song_info {
    position: relative;
    height: vm(266);
    text-align: center;
    color: #fefefe;
    margin-top: vm(50);
    padding: 0 vm(80);
    // background-color: rgb(180, 60, 60);
    .song_h2 {
      text-align: center;
      font-size: vm(36);
      font-weight: 400;
      line-height: 1.1;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      b {
        font-size: vm(30);
        color: hsla(0, 0%, 100%, 0.6);
      }
    }
    .song_lrc {
      margin-top: vm(20);
      .song_scroll {
        height: vm(210);
        // background-color: rgb(32, 92, 62);
        overflow: hidden;
        font-size: vm(32);
        line-height: 2em;
      }
    }
  }
  .musicStreetWakeUp {
    position: relative;
    width: vm(200);
    height: vm(60);
    margin: 0 auto;
    border: 1px solid hsla(0, 0%, 100%, 0.2);
    border-radius: vm(50);
    img {
      width: 100%;
    }
  }
  .footer-wrap {
    position: absolute;
    bottom: vm(160);
    margin: 0 auto;
    .open_app,
    .download_app {
      width: vm(350);
      height: vm(80);
      line-height: vm(80);
      border-radius: vm(80);
      border: 1px solid red;
      text-align: center;
      color: red;
      font-size: vm(36);
      letter-spacing: 10px;
      margin-left: vm(20);
    }
    .download_app {
      background-color: red;
      color: #fff;
    }
  }
  .song_car {
    position: relative;
    // top: vm(-970);
    height: 788px;
    overflow: auto;
    background-color: rgba(255, 255, 255);
    border-radius: 30px 30px 0 0;
    padding: vm(65) vm(30);
    .song_nav {
      // position: absolute;
      // top: 0;
      // left: 0;
      display: flex;
      justify-content: space-around;
      font-size: vm(32);

      li {
        height: vm(60);
        text-align: center;
        width: 5em;
      }
      .active {
        color: red;
        border-bottom: 2px solid red;
      }
      &::before {
        position: absolute;
        left: 50%;
        top: 8px;
        transform: translateX(-50%);
        content: "";
        display: block;
        width: 54px;
        height: 5px;
        border-radius: 5px;
        background: rgba(51, 51, 51, 0.1);
      }
    }
    .song_list {
      margin-top: vm(5);
      ul {
        display: flex;
        justify-content: space-between;
        margin-top: vm(20);
        li {
          width: vm(218);
          .img_box {
            position: relative;
            .icon-erji {
              font-size: vm(30);
            }
            img {
              width: 100%;
            }
            .play_count {
              position: absolute;
              top: 5px;
              right: 5px;
              color: #fff;
              font-size: vm(16);
            }
          }
          h4 {
            font-size: vm(16);
            font-weight: 400;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
          }
          p {
            color: gray;
            font-size: vm(16);
          }
        }
      }
    }
    .more_songs {
      margin-top: vm(50);
      .scroll_box_title {
        margin-bottom: vm(30);
      }
      .moreSongs_list {
        ul {
          li {
            display: flex;
            .lt {
              width: vm(80);
              // float: left;
              margin-right: vm(20);
              img {
                width: 100%;
              }
            }
          }
          .cen {
            // float: left;
            H3 {
              font-weight: 400;
              font-size: vm(30);
            }
            p {
              color: #c1c1c1;
              font-size: vm(26);
              margin-top: vm(3);
            }
          }
          .rt {
            // float: left;
            font-size: vm(55);
            position: absolute;
            right: vm(30);
          }
        }
      }
    }
    .user_comment {
      .scroll_box_title {
        margin-top: vm(30);
        margin-bottom: vm(30);
      }
      .comment_box {
        display: flex;
        .header_img {
          width: vm(80);
          height: vm(80);
          border-radius: 50%;
          overflow: hidden;
          margin-right: vm(20);
          img {
            width: 100%;
            height: 100%;
          }
        }
        .comment_rt {
          .user_name {
            display: flex;
            justify-content: space-between;

            .icon-vip {
              font-size: vm(60);
              vertical-align: middle;
              position: absolute;
            }
            p {
              font-size: vm(16);
              color: #c1c1c1;
            }
          }
          .comment {
            padding-bottom: vm(50);
            border-bottom: 1px solid #c1c1c1;
            margin-top: vm(20);
            margin-bottom: vm(30);
          }
        }
      }
      .end_open_more {
        height: vm(80);
        line-height: vm(80);
        border-radius: vm(80);
        color: #fff;
        text-align: center;

        background-color: #c1c1c1;
        margin-bottom: vm(300);
      }
    }
  }
}
</style>