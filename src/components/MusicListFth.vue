<template>
    <div id="musicList">
        <ul class="musics-ul">
            <template v-for="(item,index) in datas">
                <router-link tag="li" :key="index" :to="`/song/${item.id}`">
                    <slot name="index"></slot>

                    <div class="music-text-wrap">
                        <div class="music-title"  v-html="getBlueText(item.name,inpVal)"> 
                            <!-- <span>{{ item.song.alias[0] | getMusicTitle}}</span> -->
                        </div> 

                        <div class="music-author">
                            <i class="iconfonts-sq"></i>
                            <template v-for="(chid,index) in item.artists">
                                <p :key="index">
                                    <span v-html="getBlueText(chid.name,inpVal)"></span>
                                </p>
                                
                            </template>
                            <p v-html="getBlueText( item.album.name,inpVal)"></p>
                        </div>
                    </div>

                    <div class="music-playbtn">
                        <svg class="icon icon-bofang" aria-hidden="true">
                            <use xlink:href="#icon-bofang"></use>
                        </svg>
                    </div>
                </router-link>
            </template>
        </ul>
    </div>
</template>

<script>
// import func from 'vue-editor-bridge';
export default {
    props:{
        datas: Array,
        inpVal : String

    },
    data : function () {
        return {
            
        }
    },
    methods: {
        getBlueText : function (value,inpVal) {
            if (!value) return "";  
            return value.replace(inpVal,`<span class="text-blue" style="color: #507daf;">${inpVal}</span>`) ;
           
        }

    },
    computed: {
        
    },
    filters: {
        // getMusicTitle : function (value) {
        //     if (!value) return "";
        //     return `(${ value } )`
        // },
        
    }
}
</script>

<style lang="scss" scoped>
#musicList {
    width: 100%;
    .musics-ul {
        padding: 0 10px;
        li {
             
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 6px 0; 
            border-bottom: 1px solid rgba(0,0,0,.1);
            .music-text-wrap {  
                flex: 1 1 auto; 
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis; 
                word-break: normal; 
                .music-title {
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis; 
                    word-break: normal; 
                    font-size: 17px; 
                    color: #333;
                    span {
                        color: #888; 
                    }
                    
                }
                .music-author {
                    display: flex; 
                    align-items: center;
                    .iconfonts-sq { 
                        display: block;
                        width: 13px;
                        height: 8px;
                        background: url(./../assets/images/index_icon_2x.png) no-repeat 0 0;
                        background-size:165.5px 96.5px;
                        margin-right: 4px;
                    }
                    p {
                        overflow: hidden;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        word-break: normal;   
                        font-size: 12px; 
                    }
                }

            }
            
            .music-playbtn { 
                flex: 0 0 auto;
                box-sizing: border-box;
                padding: 10px;
                text-align: center; 
                width: 42px;
                .icon-bofang {
                    font-size: 22px;
                }
            }
        }
    }
}
</style>