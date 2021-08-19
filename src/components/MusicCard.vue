<template>
    <div id="music-card" :class="{'touch-active' : touchMoveActive}" ref="musicCard"> 
        <div class="song_car">
            <!-- v-touch:swipe.bottom="touchBottom" v-touch:swipe.top="touchTop" -->
            <ul class="song_nav"  v-touch:moving="touchMoving"  @touchend="touchEnd" v-touch:start="touchStart"> 
                <li :class="{'active' : boxIsActive == 0 }" v-if="relatedMusicList.length" @click="changeTop(0)" >
                    <span>相关歌单</span>
                </li>
                <li :class="{'active' : boxIsActive == 1}" @click="changeTop(1)">
                    <span>相似歌曲</span>
                </li>
                <li :class="{'active' : boxIsActive == 2 }" @click="changeTop(2)">
                    <span>精彩评论</span>
                </li>
            </ul>

<!-- @scroll.self="scrollBox" -->
            <div class="scroll_box wrapper" ref="scrollBox" @scroll="scrollBox">
                <ul class="content"> 
                    <div class="song_list" v-if="relatedMusicList.length" ref="songList">
                        <h3 class="scroll_box_title">包含这首歌的歌单</h3>
                        <div class="recommend-wrap">
                            <ul class="recommend-ul">
                                <template v-for="item in relatedMusicList">
                                    <router-link tag="li" :key="item.id" :to=" `/musicdetails/${item.id} `">
                                        <img :src="item.picUrl">
                                        <p>{{item.name}}</p>
                                        <span>
                                            <svg class="icon" aria-hidden="true">
                                                <use xlink:href="#icon-erji"></use>
                                            </svg>
                                            {{item.playCount | getPlayCount}}
                                        </span>
                                    </router-link>
                                </template>
                            </ul>
                        </div>
                    </div>

                    <div class="more_songs" ref="moreSongs">
                        <h3 class="scroll_box_title">喜欢这首歌的人也听</h3>
                        <music-list :datas="similarMusic">
                            <template v-slot:index="dataObj">
                                <div class="music-pic"> 
                                    <img :src="dataObj.data" alt="">
                                </div>
                            </template>
                        </music-list>
                    </div>

                    <div class="user_comment" ref="userComment">
                        <h3 class="scroll_box_title">精彩评论</h3>
                        <comm-floor
                        :datas="goodComments"
                        >
                        </comm-floor>
                    </div>

                    <div class="end_open_more">
                        <span>打开云音乐查看更多精彩评论</span>
                    </div>
                </ul>
            </div> 
        </div>
    </div>
</template>

<script>
import CommFloor from './CommFloor.vue';
import MusicList from './MusicListFir.vue';
// import BScroll from '@better-scroll/core'
export default {
    data: function () {
        return {  
            myscroll: '',
            touchMoveActive: false,
            cantouch:true,
            touchStartY: "",    // 触击屏幕时的触击点的Y值
            touchEndY: ""       // 触击结束时的触击点的Y值
        }
    },
    props: {
        "relatedMusicList" : Array,
        "similarMusic": Array,
        "goodComments": Array,
        "boxIsActive": [Number,String]
    },
    components: {
        "comm-floor": CommFloor,
        "music-list": MusicList
    },
    methods: { 
        // 卡片拖动
        touchMoving(e) {  
            if(e.changedTouches[0].clientY > parseInt(e.changedTouches[0].screenY * 0.33) 
            && e.changedTouches[0].clientY < parseInt(e.changedTouches[0].screenY * 0.887)) {
                
                this.touchMoveActive = true;
                this.$refs.musicCard.style.transition = "background .6s ease-out"
                this.$refs.musicCard.style.top = e.changedTouches[0].clientY + 'px'
                
                if (e.changedTouches[0].clientY >= parseInt(e.changedTouches[0].screenY * 0.8)) {
                    this.touchMoveActive = false; 
                }
            }  
        },
        // 卡片拖动开始
        touchStart(e) { 
            this.touchStartY = e.changedTouches[0].clientY;
            // console.log(this.touchStartY);
        },
        // 卡片拖动结束
        touchEnd (e) { 
            this.touchEndY = e.changedTouches[0].clientY;
            if (this.touchEndY < this.touchStartY && Math.abs(this.touchEndY - this.touchStartY) >= 80) { // 向上滑动
                // console.log(this.touchEndY - this.touchStartY);
                this.$refs.musicCard.style.top = `8vh`;
                this.touchMoveActive = true;
            }else if (this.touchEndY < this.touchStartY && Math.abs(this.touchEndY - this.touchStartY) < 80){
                
                this.$refs.musicCard.style.top = `92.5vh`;
                this.touchMoveActive = false; 
            }
            if (this.touchEndY > this.touchStartY && Math.abs(this.touchEndY - this.touchStartY) >= 80 && this.$refs.musicCard.style.top < `50vh`) {
                this.$refs.musicCard.style.top = `92.5vh`
                this.touchMoveActive = false; 
            }else if (this.touchEndY > this.touchStartY && Math.abs(this.touchEndY - this.touchStartY) < 80){
                this.$refs.musicCard.style.top = `8vh`
                this.touchMoveActive = true;
            }
            this.$refs.musicCard.style.transition = "all .6s ease-out";
        },
        // 卡片按钮点击
        changeTop(val) {
             
            this.$emit("changeTop",val);
            switch (val) {
                case 0 : 
                    this.$refs.scrollBox.scrollTop = 0;
                    break;
                case 1 :
                    this.$refs.scrollBox.scrollTop = this.$refs.moreSongs.offsetTop - 70;
                    break;
                case 2 : 
                    this.$refs.scrollBox.scrollTop = this.$refs.userComment.offsetTop - 70;
                    break;
            }

        },
        // 滚动卡片
        scrollBox() {  
            if (this.$refs.songList && this.$refs.scrollBox.scrollTop < this.$refs.songList.offsetTop) {
                this.$emit("changeTop",0);
            }
            if (this.$refs.scrollBox.scrollTop <= this.$refs.moreSongs.offsetTop) {
                this.$emit("changeTop",1);
            } 
            if (this.$refs.scrollBox.scrollTop > this.$refs.moreSongs.offsetTop) {
                this.$emit("changeTop",2);
            }   
        },
        // 卡片归位
        closeCard() {
            this.$refs.musicCard.style.top = `92.5vh`;
            this.touchMoveActive = false; 
            this.$refs.scrollBox.scrollTop = 0;
            if (!this.relatedMusicList.length) {
                this.changeTop(0)
            } else {
                this.changeTop(1)
            }
        }
    },
    watch: {
        $route() {
            this.closeCard()
        }
    },
    created() {
        this.$nextTick(() => { 
            document.body.addEventListener("touchmove", (e) => {
                if (!document.querySelector(".scroll_box").contains(e.target)) { 
                    e.preventDefault();
                }
            },{
                passive: false, 
            }) 
        })
       
    }
    
}
</script>


<style lang="scss" scoped>
#music-card {
    position: absolute;
    width: 100%;
    // height: 90vh;
    top: 92.2vh;
    transition: all .6s ease-out;
    &.touch-active {
        // top: 8vh;
        background: #fff; 
        .song_nav {
            
            li {
                span {
                    color: #333; 
                }
                 
                &.active span{
                    color: #ff3a3a;
                    border-bottom: 2px solid #ff3a3a;
                }
            }
            &::after {
                background: rgba(51,51,51,.1);
            }

        }
    }
    z-index: 5;
    background: rgb(80, 78, 78);
    // overflow: hidden;
    border-radius: 24px 24px 0 0;
    .song_nav {
        position: relative; 
        padding-top: 30px;
        display: flex;
        margin-bottom: 5px;
        justify-content: space-around;
        li {
          
            flex: 1;
            text-align: center; 
            height: 28px;
            span {
                transition: all .4s linear ;
                color: hsla(0,0%,100%,.5); 
                padding: 0 6px 2px;
                font-size: 16px;
            }
           
           
        }
        &::after {
            content: '';
            display: block;
            position: absolute;
            top: 8px;
            left: 50%;
            transform: translateX(-50%);
            width: 54px;
            height: 5px;
            border-radius: 5px;
            background: rgba(236, 235, 235, .8);
        }
    }
    .scroll_box {
        padding: 10px 15px; 
        height: 85vh;
        overflow: scroll;
         
        &>div{
           
            margin-bottom: 10px;
        }
        .more_songs {
            .music-pic {
                width: 40px;
                height: 40px;
                border-radius: 3px;
                margin-right: 10px;
                overflow: hidden;
                img {
                    width: 100%; 
                }
            }
        }
    }
    .end_open_more{
        padding: 20px 10px;
        span{
            display: inline-block;
            width: 100%; 
            text-align: center;
            padding: 10px 0;
            border-radius: 50px;
            font-size: 14px;
            color: #fff;
            border: 1px solid #d8d8d8;
            background: rgba(0,0,0,.12);
        }
    }
}
</style>