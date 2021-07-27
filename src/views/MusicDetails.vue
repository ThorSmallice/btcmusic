<template>
    <div id="MusicDetails">
        <header>
            <div class="header-bg" :style=" 'background-image:url('+ CurrentDate.coverImgUrl + '?param=170y170)' "></div>

            <div class="user-wrap">
                <div class="user-portrait">
                    <img :src="CurrentDate.coverImgUrl + '?imageView=1&type=webp&thumbnail=252x0' ">
                    <span>
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-erji"></use>
                        </svg>
                        {{CurrentDate.playCount | getPlayCount}}
                    </span>
                </div>

                <router-link class="user-music-text" tag="div" :to="`/user/${CurrentDate.userId}`">
                    <h2>{{CurrentDate.name}}</h2>
                    <div class="recomm-user">
                        <img :src=" `${creatorData.avatarUrl}?imageView=1&type=webp&thumbnail=60x0 ` " alt="">
                        {{creatorData.nickname}}
                    </div>
                </router-link>    
            </div>
        </header>
        <main>
             <p class="music-list-text">歌曲列表</p>

            <musicListTh :datas="CurrentDate.tracks"></musicListTh>

            <p class="download-app">
                查看更多歌曲，请下载客户端
            </p>
            
            <p class="music-list-text">精彩评论</p>
            <comment-floor :datas=" CommentData "></comment-floor>

            <router-link to="#" class="comment-lookall" tag="p">查看全部{{CommentData.total}}条评论</router-link>
        </main>
        <footer>
            <button class="collectionList">
                <svg 
                class="icon icon-logo" 
                aria-hidden="true">
                    <use xlink:href="#icon-bingtanghulu"></use>
                </svg>
                收藏歌单
            </button>
        </footer>
    </div>
</template>

<script>
import musicListTh from './../components/MusicListTh.vue';
import commentFloor from './../components/CommFloor.vue';

export default {
    data: function () {
        return {
            CurrentDate:{},     // 歌曲列表
            CommentData: [],    // 评论列表
            creatorData: {}     // 创建者信息
        }
    },
    methods:{
        getCurrentDate() {  
            this.axios.get(`/playlist/detail?id=${this.$route.params.id}`).then(res => { 
                // console.log(res);
                this.CurrentDate = res.playlist 
                this.creatorData = res.playlist.creator
            }) 
            this.axios.get(`/comment/playlist?id=${this.$route.params.id}`).then(res => { 
                this.CommentData = res.hotComments.length? res.hotComments : res.comments
                
            })
            // if (!localStorage.getItem("CurrentDate")) {
            //     this.axios.get(`/playlist/detail?id=${this.$route.params.id}`).then(res => { 
            //         this.CurrentDate = res.playlist
            //     })
            // } else {
            //     this.CurrentDate = JSON.parse(localStorage.getItem("CurrentDate"));
            // }
        }
    },
    created() {
        this.getCurrentDate()
    },
    watch: {
        // CurrentDate : function() {
        //     localStorage.setItem("CurrentDate", JSON.stringify(this.CurrentDate))
        // }
    },
    components: {
        musicListTh,
        "comment-floor" : commentFloor
    },
    filters: {
        getPlayCount: function(value) {
            if (!value) return "";
            return Number(value/10000).toFixed(2) + '万'
        }
    }
}
</script>

<style lang="scss" scoped>
#MusicDetails {
    header {
        position: relative;  
        z-index: 0;
        width: 100%;
        padding: 30px 10px 30px 15px;
        height: 186px;
        overflow: hidden;
        .header-bg {
            position: absolute;
            top: 0;
            left: 0;
            z-index: 1;
            width: 100%;
            height: 100%;
            // background-color: pink;
            transform: scale(1.5);
            filter: blur(20px);
            background-repeat: no-repeat;
            background-size: cover;
        }
        .user-wrap {
            width: 100%;
            height: 100%; 
            z-index: 2;
            position: relative;
            display: flex;
            justify-content: space-between;
            // background-color: #fff;
            .user-portrait {
                position: relative;
                width: 126px;
                height: 126px;
                flex: none;
                // background-color: purple;
                img {
                    width: 100%;
                }
                span {
                    position: absolute;
                    right: 8px;
                    top:5px;
                    color: #fff;
                    font-size: 12px;
                }
            }
            .user-music-text {
                flex: 1 1 auto;
                // background-color: red;
                padding: 1px 0 0 16px;
                height: 100%;
                padding: 10px;
                h2 {
                    height: 44px;
                    font-size: 17px; 
                    color: #fefefe;
                    font-weight: 500;
                    vertical-align: middle;
                    margin-bottom: 2px;
                }
                .recomm-user {
                    color: hsla(0,0%,100%,.7);
                    img {
                        border-radius: 50%;
                        width: 30px;
                        height: 30px;
                        vertical-align: middle;
                    }
                }
            }
        }
    }
    main {
        padding-bottom: 50px;
    }
    .music-list-text {
        padding: 0 10px;
        line-height: 23px;
        height: 23px;
        font-size: 12px;
        color: #666;
        background-color: #eeeff0;
    }
    .download-app {
        font-size: 14px;
        text-align: center;
        color: #999;
        margin-top: 10px;
    }
    .comment-lookall {
        width: 100%;
        font-size: 14px;
        color: #999;
        padding: 18px 0;
        text-align: center;
        border-bottom: 1px solid rgba(114, 113, 113, 0.1);
    }
    footer {
        width: 100%;
        position:fixed;
        bottom: 0;
        left: 0;
        text-align: center;
        padding: 5px;
        background-color: #fff;
        .collectionList {
            width: vm(610);
            height: 40px;
            line-height: 40px;
            border-radius: 40px;
            background-color: #ff3a3a;
            font-size: 16px;
            color:#fff;
            .icon-logo {
                font-size: 20px;
            }
        }
    }
}
</style>