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
        <div :class="['player_center',{'play-active': isplay } ]">
          <div class="player_img" >
            <img
              :src="musicPicurl"
            />

            <span class="player_btn"  v-show="!isplay" >
                <svg class="icon" aria-hidden="true" >
                    <use xlink:href="#icon-bofang"></use>
                </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="song_info">
      <h2 class="song_h2">
        <span>{{ musicDetails.name }}</span>
        <span>-</span>
        <b>{{   musicDetails.alia == true?  musicDetails.alia[0]+author : author }}</b>
      </h2>
      <div class="song_lrc">
        <div class="song_scroll" ref="songScollUl">
            <template v-for="(item, index) in musicObj.lrttext"> 
                <p class="song_scroll_item" :key="index">
                    {{item}}
                </p>
            </template> 
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
    id="musicAudio" 
    ref="musicAudio"  
    @timeupdate="runlrc" 
    :autoplay="isplay" 
    @play="addTransition" 
    @ended="initPlayStatus">
        <template v-for="item in musicUrlArr">
            <source :src="item.url" :key="item.id" :type="`audio/${item.type}`">
        </template>
    </audio>

    <div class="control-play" @click="play">

    </div>
  </div>
</template>

<script>
export default {
    data: () => {
        return {
            currentTime: 0,    // 当前播放的时间
            currentLine: 0,     // 当前播放的歌词的行数
            currentItemHeight:60,   // 当前歌词处在的高度
            isplay: false,      // 播放状态
            musicUrlArr: [],    // 音乐url列表
            musicLrc:"",        // 歌词lrc内容
            musicPicurl: "",    // 歌曲图片url
            author:"",          // 作者
            musicDetails:{},     // 歌曲详情
            musicObj: {
                lrcTime:[], // 歌词对应的时间列表
                lrttext:[]  // 歌词列表
            }         
        };
    },
    methods: {
        // 播放音乐
        play() {
            this.isplay = !this.isplay; // 播放按钮显示状态更改 
            this.isplay? this.$refs.musicAudio.play() : this.$refs.musicAudio.pause();
        },
        // 音乐播放触发的事件 歌词滚动
        runlrc() { 
            this.currentTime = this.$refs.musicAudio.currentTime; //  音乐一触发，把播放进度的时间同步给当前播放时间
            if (this.currentTime < this.musicObj.lrcTime[this.currentLine+1] && this.currentTime > this.musicObj.lrcTime[this.currentLine]) {    // 当前播放时间与歌词列表的时间对比  相等的话 跳转到对应的歌词行数
              
                this.currentItemHeight -= this.$refs.songScollUl.children[this.currentLine].clientHeight
                this.$refs.songScollUl.style.transform = `translateY(${ this.currentItemHeight}px)`; 
                this.$refs.songScollUl.children[this.currentLine].style.color = "rgb(255, 255, 255)"
                if (this.currentLine >= 1 ) { 
                    this.$refs.songScollUl.children[this.currentLine-1].style.color = ""
                }
               
                this.currentLine++; 
            }
            
            
        },
        // 获取数据
        getMusicData() {
            // 获取歌曲url
            this.axios.get(`/song/url?id=${this.$route.params.id}`).then((res) => {
                this.musicUrlArr = res.data; 
                this.isplay = true;
            });
            // 获取歌曲详情
            this.axios.get(`/song/detail?ids=${this.$route.params.id}`).then(res => {
                this.musicDetails = res.songs[0];
                this.musicPicurl = res.songs[0].al.picUrl;
                this.author = res.songs[0].ar[0].name;
            });
            // 获取歌词
            this.axios.get(`/lyric?id=${this.$route.params.id}`).then(res => {
                this.musicLrc = res.lrc.lyric;
                // console.log(this.musicLrc);
                let lrcarr = this.musicLrc.split('\n');
                lrcarr.forEach((item,index) => { 
                    this.musicObj.lrcTime[index] = (parseFloat(item.slice(item.indexOf("[")+1,item.indexOf(":")))*60 + parseFloat(item.slice(item.indexOf(":")+1,item.indexOf("]")))).toFixed(2);
                    this.musicObj.lrttext[index] = item.slice(item.indexOf("]")+1,item.length).trim();
                })
                 

                this.musicObj.lrcTime.splice(this.musicObj.lrcTime.length - 1, 1);     // 删除最后一个空的
                this.musicObj.lrttext.splice(this.musicObj.lrttext.length - 1, 1);      // 删除最后一个空的
                 
                 
            })
        },
        // 开始播放时添加动画
        addTransition() {
            this.$refs.songScollUl.style.transition = "transform .8s ease-out";
        },
        // 结束播放时
        initPlayStatus() {
            // if (this.currentLine < this.musicObj.lrttext.length) {
            //     this.currentLine = this.musicObj.lrttext.length;
            //     this.currentItemHeight -= this.$refs.songScollUl.children[this.currentLine].clientHeight;
            //     this.$refs.songScollUl.style.transform = `translateY(${this.currentItemHeight}px)`
            // }
            this.currentTime = 0;       // 重置当前播放时间
            this.currentLine = 0;         // 重置当前播放行数
            this.currentItemHeight = 60; // 重置当前歌词滚动高度
            this.$refs.songScollUl.style.transition = "none"; 
            this.$refs.songScollUl.style.transform = `translateY(30px)`; 
            this.isplay = false;  // 播放状态停止
        }
    },
    created() {
        this.getMusicData();
    }
};
</script>

<style lang="scss" scoped>
@keyframes rotateing {
    from {
        transform: translate(-50%,-50%) rotate(0deg);
    }
    to {
        transform: translate(-50%,-50%) rotate(360deg); 
    }
}
#song {
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
        padding-top: vm(230);
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
            transform: translate(-50%,-50%) rotate(0); 
            background: url(//s3.music.126.net/mobile-new/img/disc_default.png?ba7c53e…=)
            no-repeat;
            background-size: contain;
            animation:  rotateing 20s linear infinite;
            animation-play-state: paused;
            &.play-active {
                animation-play-state: running;
            }
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
        text-align: center;
        user-select: none;
        margin-top:25px;
        padding: 0 35px;
        color: #fefefe;  
        text-align: center;
        // background-color: rgb(180, 60, 60);
        .song_h2 {
        font-size: 18px;
        font-weight: 400;
        line-height: 1.1;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        b {
            font-size: 16px;
            font-weight: 500;
            color: hsla(0, 0%, 100%, 0.6);
        }
        }
        .song_lrc {
        margin-top: 25px;
        user-select: none;
        height: 80px;
        overflow: hidden;
        -webkit-mask:-webkit-linear-gradient(top,#000,#000 70%,rgba(0,0,0,0));
        .song_scroll { 
            
            transform: translateY(30px);
            .song_scroll_item {
                font-size: 16px;
                padding-bottom: 8px;
                line-height: 1.5;
                color: hsla(0,0%,100%,.6);
            }
        }
        }
    }
    .musicStreetWakeUp {
        position: relative;
        width: vm(200);
        height: vm(60);
        margin: 15px auto 0;
        border: 1px solid hsla(0, 0%, 100%, 0.2);
        border-radius: vm(50);
        img {
        width: 100%;
        }
    }
    .footer-wrap {
        position: absolute;
        bottom:80px;
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
        audio {
            display: none;
        }
    }
    .control-play{
        position: absolute;
        top: 0;
        left: 0;
        z-index: 3;
        width: 100%;
        height: 80%;
        background-color: transparent;
    }
}
</style>