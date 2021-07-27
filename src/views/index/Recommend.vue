<template>
    <div id="recommend">
        <h2>编辑推荐</h2>
        <div class="recommend-wrap">
            <ul class="recommend-ul">
                <template v-for="item in recommendArr">
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

        <h2>最新音乐</h2>
        <div class="latest-music-wrap">
            <musicList
            :datas="latestMusicArr"
            >

            </musicList>
        </div>

        <footer>
            <Foot></Foot>
        </footer>
    </div>
</template>

<script>
import musicList from './../../components/MusicList.vue';
import Foot from "./../../components/Foot.vue"
export default {
    data: function () { 
        return {
            recommendArr : [],  // 编辑推荐数据
            latestMusicArr: []  // 最新音乐数据
        }
    },
    methods: {
        // 获取编辑推荐数据
        getCommendArr () {
            if (!localStorage.getItem("recommendArr")) {
                this.axios.get("/personalized?limit=6").then(res => { 
                    this.recommendArr = res.result; 
                })
            } else {
                this.recommendArr = JSON.parse(localStorage.getItem("recommendArr"));
               
            }

            if (!localStorage.getItem("latestMusicArr")) {
               
                this.axios.get("/personalized/newsong").then(res => { 
                    this.latestMusicArr = res.result; 
                })
            } else {
                this.latestMusicArr = JSON.parse(localStorage.getItem("latestMusicArr"));
            }
        }
    },
    created() {
        this.getCommendArr(); 
    },
    watch: {
        recommendArr : function() {
            localStorage.setItem("recommendArr", JSON.stringify(this.recommendArr))
        },
        latestMusicArr : function() {
            localStorage.setItem("latestMusicArr", JSON.stringify(this.latestMusicArr))
        }
    },
    filters: {
        getPlayCount: function(value) {
            if (!value) return "";
            return Number(value/10000).toFixed(2) + '万'
        }
    },
    components: {
        musicList,
        Foot
    }
}
</script>

<style lang="scss" scoped>
#recommend {
    padding-top: 144px;
    h2 {
        padding-left: 9px;
        font-size: 17px;
        font-weight: 500;
        border-left: 2px solid #d33a31;
        margin-bottom: 20px;
    }
    .recommend-wrap {
        width: 100%;
        margin-bottom: 24px;
        .recommend-ul {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            align-content: space-between;
            li {
                position: relative;
                width: vm(245);
                margin-bottom: 16px;
                img {
                    width: 100%;
                }
                p {
                    padding: 2px 2px 0 6px; 
                    text-align: left;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    font-size: 13px;
                }
                span {
                    position: absolute;
                    top: vm(5);
                    right: vm(5);
                    color: #fff;
                    font-size: 12px;
                }
            }
        }
    }
}
</style>