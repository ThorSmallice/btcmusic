<template>
    <div id="hot">
        <div class="hot-titpic">
            <div class="hot-icon"></div>
            <p>更新日期: {{ getUpdataTime }}</p>
        </div>
        

        <div class="music-list"> 
            <musiclistrd :datas="hotmusicArr">
                <template v-slot:index="dataObj">
                    <div class="music-index">
                        {{  dataObj.index  | getmusicIndex }}
                    </div>
                </template>
            </musiclistrd>
       </div> 

       <footer>
           <router-link to="#" class="look-all">
               查看完整榜单 &gt;
           </router-link>
       </footer>
    </div>
</template>

<script>
import musiclistrd from '../../components/MusicListrd.vue'

export default {
    data: function() {
        return {
            hotmusicObj: {},
            hotmusicArr:[]
        }
    },
    methods:{
        // 获取热歌榜数据列表
        getHotArr () {
             if (!localStorage.getItem("hotmusicObj")) {
                this.axios.get("/playlist/detail?id=3778678").then(res => { 
                    this.hotmusicObj = res.playlist; 
                })
            } else {
                this.hotmusicObj = JSON.parse(localStorage.getItem("hotmusicObj")); 
            }
            this.hotmusicArr = this.hotmusicObj.tracks.slice(0,20)
           
        }
    },
    created() {
        this.getHotArr();   
    },
    watch : {
        hotmusicObj : function() {
            localStorage.setItem("hotmusicObj", JSON.stringify(this.hotmusicObj))
        }
    },
    computed: {
        getUpdataTime() {
            let date = new Date(this.hotmusicObj.updateTime);
            let month = date.getMonth() + 1;
            let day =  date.getDate();
            month = month < 10? String(month).padStart(2,"0") : month;
            day = day < 10 ?  String(day).padStart(2,"0") : day;
            return `${month}月${day}日`
        }
    },
    components: {
        musiclistrd
    },
    filters: {
        getmusicIndex: function(value) {
            if (!value) return "";
            return String(value).padStart(2,"0")
        } 
    }

}
</script>

<style lang="scss" scoped>
#hot {
    margin-top: -20px;
    .hot-titpic { 
        box-sizing: border-box;
        padding: 20px 0 20px 20px;
        height: 145px;
        background: url(//s3.music.126.net/mobile-new/img/hot_music_bg_2x.jpg?f01a252389c26bcf016816242eaa6aee=) no-repeat;
        .hot-icon {
            margin-bottom: 10px;
            width: 142px;
            height: 67px;
            background: url(//s3.music.126.net/mobile-new/img/index_icon_2x.png?5207a28c3767992ca4bb6d4887c74880=) no-repeat -24px -30px / 166px 97px ;
        } 
        p {
            font-size: 12px;
            color: #fff ;
        }
    }
    .music-list {
        ul {
            li {
                &:nth-of-type(-n + 3) > .music-index {
                    color: #d43b33;
                }
            }
        }
        
        .music-index {
            font-size: 17px;
            width: 35px; 
            padding-left: 5px;
            margin-right: 5px;
            color: #333; 
        }
    }
    footer {
        width: 100%;
        height: 55px;
        line-height: 55px;
        text-align: center;
        .look-all {
            font-size: 14px;
            color: #999;
        }
    }
}
</style>