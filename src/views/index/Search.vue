<template>
    <div id="search">
        <header>
            <div class="search-inp-wrap">
                <span class="icon-box iconfonts-search">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-fangdajing"></use>
                    </svg>
                </span>

                <input 
                type="text" 
                class="search-inp" 
                placeholder="搜索歌曲、歌手、专辑" 
                v-model.trim="searchInpContent" 
                @input="SearchAdvice" 
                @keyup.enter="Search" 
                ref="searchInp"
                >

                <span 
                class="icon-box iconfonts-close" 
                @click="clearInp" 
                v-show="showcloseBtn">
                    <svg class="icon " aria-hidden="true">
                        <use xlink:href="#icon-htmal5icon19"></use>
                    </svg>
                </span>
            </div> 
        </header>

        <!-- 热搜列表 -->
        <main>
            <div class="hot-search">
                <h4>热门搜索</h4>
                <ul class="hot-serch-list">
                    <template v-for="(item,index) in hotsearchArr"> 
                        <li class="hot-serch-item" :key="index" @click="toSearch(item.first)">
                            {{item.first}}
                        </li>
                    </template>
                </ul>
            </div>
        </main>

        <!-- 搜索历史 -->
        <section>    
            <ul class="search-history-list">
                <template v-for="item in historySearchArr">
                    <li class="search-history-item" :key="item.historyId">

                        <span class="icon-wrap">
                            <svg class="icon iconfonts-history" aria-hidden="true">
                                <use xlink:href="#icon-lishi"></use>
                            </svg>
                        </span>
                        
                        <p class="search-history-text"  @click="toSearch(item.text)">{{item.text}}</p>

                        <span class="icon-wrap" @click="delHistoryItem(item.historyId)">
                            <svg class="icon iconfonts-history-delete" aria-hidden="true">
                                <use xlink:href="#icon-guanbi"></use>
                            </svg>
                        </span>
                    </li>
                </template>
            </ul>
        </section> 

        <!-- 搜索建议 -->
        <div class="search-advice" v-show="showSearchAdvice">
            <ul class="search-advice-list">
                <li class="search-advice-item">搜索 “ {{searchInpContent}} ”</li>
                <template v-for="(item, index) in searchAdviceData">
                    <li class="search-advice-item" :key="index" @click="toSearch(item.keyword)">
                        <svg class="icon iconfonts-search" aria-hidden="true">
                            <use xlink:href="#icon-fangdajing"></use>
                        </svg>
                        {{item.keyword}}
                    </li> 
                </template>
            </ul>
        </div>

        <!-- 搜索结果 -->
        <div class="search-result" v-show="showSearchResult">
            <music-listfth :datas="searchResultData"> 
            </music-listfth>
        </div>
    </div>
</template>

<script>
import musicListFth from './../../components/MusicListFth.vue';
export default {
    data: function() {
        return {
            showcloseBtn: false, // 控制显示输入框关闭按钮
            advicetimer:null, // 搜索建议请求数据的计时器
            showSearchAdvice: false,  // 控制显示搜索框
            showSearchResult: false,     // 控制显示搜索结果框
            canSearch: true,          // 允许搜索
            searchInpContent: "",   // 搜索框内容
            searchAdviceData: [],   // 搜索建议数据
            searchResultData: [],       // 搜索结果列表
            hotsearchArr: [],  // 热搜列表
            historySearchArr: [] // 历史搜索记录列表 
        }
    },
    methods: { 
        // 获取历史搜索记录
        gethistorySearchData() { 
            this.historySearchArr = localStorage.getItem("historySearchArr") ? JSON.parse(localStorage.getItem("historySearchArr")) : []
        },
        // 获取热搜列表
        getHotsearchData() {
            this.axios.get("/search/hot").then(res => { 
                this.hotsearchArr = res.result.hots
            })
        },
        // 输入搜索内容 渲染搜索建议
        SearchAdvice() { 
            this.showSearchAdvice = this.searchInpContent.length ? true : false; // 有内容 就显示搜索框
            this.showcloseBtn = this.searchInpContent.length ? true : false;  // 并且显示清空输入按钮
            clearTimeout(this.advicetimer);    // 清除上一次请求 
            this.advicetimer = setTimeout(() => {
                this.axios.get(`/search/suggest?keywords=${this.searchInpContent}&type=mobile`)
                .then(res => { 
                    this.searchAdviceData = res.result.allMatch? res.result.allMatch : []
                }) 
            },2500)
        },
        // 搜索
        Search() {
            if (this.canSearch) {
                this.searchResultData = [];  // 搜索结果列表清空
                this.canSearch = false;  // 禁止搜索
                this.showSearchResult = true; // 显示搜索结果框
                this.showSearchAdvice = false; // 隐藏搜索建议框
                this.showcloseBtn = true;   // 显示清空搜索内容按钮
                this.$refs.searchInp.blur();  // 搜索框失去焦点 
                // 发送搜索请求
                this.axios.get(`/search?keywords=${this.searchInpContent}&limit=30`).then(res => {
                    this.searchResultData = res.result.songs
                    this.canSearch = true
                })

                // 添加搜索历史记录
                this.historySearchArr.push({
                    historyId: Date.now(),
                    text: this.searchInpContent
                })

                setTimeout(()=> {
                    this.canSearch = true; // 两秒后允许搜索
                },2000)
            }
        },
        // 热门搜索点击按钮 搜索框内容变更成 搜索按钮的内容 然后执行搜索
        toSearch(content) {
            this.searchInpContent = content;        // 搜索框内容变更
            this.Search();   // 执行搜索 里面也添加了历史搜索记录
        },
        // 清空输入框内容
        clearInp() {
            this.searchInpContent = ""; // 清空输入框内容
            this.showSearchAdvice = false;  // 隐藏搜索框
            this.searchResultData = []; // 清空搜索结果列表
            this.showSearchResult = false;  // 英寸搜索结果框
            this.showcloseBtn = false; // 隐藏清空按钮
        },
        // 删除当个历史记录
        delHistoryItem(id) {
            this.historySearchArr = this.historySearchArr.filter(item => {
                return item.historyId != id
            })
        }

    },
    created() { 
        this.getHotsearchData();     // 获取热搜列表 
        this.gethistorySearchData();    // 获取搜索历史列表
    },
    watch: {
        // 储存历史搜索记录
        historySearchArr : function() {
            localStorage.setItem("historySearchArr",JSON.stringify(this.historySearchArr))
        }
    },
    components: {
        "music-listfth":musicListFth
    }
}
</script>

<style lang="scss" scoped>
#search { 
    header {
        position: relative;
        z-index: 3;
        margin-top: -20px;
        padding: 15px 10px;
        background-color: #fff;
        border-bottom: 1px solid rgba(197, 193, 193, 0.1);
        .search-inp-wrap {
            position: relative; 
            width: 100%;
            height: 30px;
            border-radius: 30px;
            padding: 0 30px;
            background-color: #ebecec;
            color: #333;
            font-size: 14px; 
            .icon-box {
                display: block;
                position: absolute;
                font-size: 14px;
                color: rgba(0,0,0,0.4);
                top: 50%; 
                text-align: center;
                transform: translateY(-50%); 
            }
            .iconfonts-search { 
                left: 8px; 
            }
            .iconfonts-close {
                width: 20px; 
                height: 20px;
                right: 8px;
            }
            .search-inp {
                width: 100%;
                height: 30px;
                line-height: 18px;
                background-color: rgba(0,0,0,0); 
            }
        }
       
    }
    main {
        padding: 15px 10px 0;
        .hot-search {
            h4 {
                font-size: 12px;
                line-height: 12px;
                color: #666; 
                font-weight: 500;
            }
            .hot-serch-list {
                margin: 10px 0 7px;
                .hot-serch-item {
                    display: inline-block;
                    height: 32px;
                    line-height: 32px;
                    font-size: 14px;
                    color: #333;
                    padding: 0 14px;
                    border: 1px solid #d3d4da;
                    margin: 0 8px 8px 0;
                    border-radius: 32px;
                }
            }
        }
    }

    section {
        .search-history-list {
            .search-history-item {
                display: flex;
                justify-content: space-between;
                height: 45px;
                line-height: 45px; 
                text-align: center;
                border-bottom: 1px solid rgba(197, 193, 193, 0.1);
                .icon-wrap {
                    flex: none;
                    width: 35px;
                    font-size: 18px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
                .search-history-text {
                    flex: 1 1 auto;
                    text-align: left;
                    font-size: 14px;
                    color: #333;
                }
            }
        }
    }
    .search-advice {
        box-sizing: border-box;
        position: fixed;
        z-index: 1;
        left: 0;
        top: 0;
        width: 100%;
        height: 100vh;
        overflow: hidden; 
        padding-top: 185px;
        background-color: #fff;
        .search-advice-list {
            padding: 0 10px;
            .search-advice-item { 
                user-select: none;
                font-size: 15px;
                color: #333;
                line-height: 45px;
                height: 45px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap; 
                border-bottom: 1px solid rgba(197, 193, 193, 0.1);
                &:first-of-type {
                    line-height: 50px;
                    height: 50px;
                    color: #507daf;
                }
                .icon {
                    font-size: 16px;
                    margin-right: 5px;
                }

            }
        }
    }
    .search-result {
        box-sizing: border-box;
        position: absolute;
        z-index: 2;
        left: 0;
        top: 0;
        width: 100%; 
        padding-top: 185px;
        min-height: 100vh;
        background-color: #fff;
    }

}
</style>