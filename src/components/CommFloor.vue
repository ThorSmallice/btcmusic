<template>
    <div id="comment-floor">
        <ul class="comment-ul">
            <template v-for="item in datas">
                <li class="comment-item" :key="item.commentId">
                    <router-link class="head-port" to="#">
                        <img :src="item.user.avatarUrl" alt="">
                    </router-link>

                    <div class="user-info-wrap">
                        <router-link class="user-head" to="#">
                            {{item.user.nickname}}
                            <i class="iconfonts-vip"></i>
                        </router-link>

                        <p class="comment-times">{{ item.time }}</p>

                        <span class="comment-content">
                           {{item.content}}
                        </span>

                        <div class="dianzan">
                            {{ item.likedCount }}
                            <svg 
                            :class="['icon' ,'iconfonts-dianzan',{'dianzan-like':item.liked}]" 
                            aria-hidden="true">
                                <use xlink:href="#icon-dianzan"></use>
                            </svg>
                        </div>
                    </div>
                </li>
            </template>
        </ul>
    </div>
</template>

<script>
export default {
    props:{
        "datas": Array
    }
}
</script>

<style lang="scss" scoped>
#comment-floor {
    .comment-ul {
        .comment-item {
            display: flex;
            flex-wrap: nowrap;
            padding-top: 10px;
            width: 100%;
            .head-port {
                display: block;
                overflow: hidden;
                width: 30px;
                height: 30px;
                border-radius: 50%;
                margin: 0 10px;
                flex: none;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
            .user-info-wrap {
                position: relative;
                padding: 0 10px 11px 0;
                flex: auto;
                border-bottom: 1px solid rgba(187, 184, 184, 0.1);
                .user-head {
                    font-size: 14px;
                    color: #666;
                    line-height: 20px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
                .comment-times {
                    font-size: 9px;
                    color: #999;
                    margin-bottom: 5px;
                }
                .comment-content {
                    font-size: 15px;
                    color: #333;
                    line-height: 22px;
                }
                .dianzan {
                    position: absolute;
                    color: #999;
                    top: 5px;
                    right: 5px;
                    font-size: 11px;
                    .iconfonts-dianzan {
                        font-size: 18px;
                    }
                    .dianzan-like {
                        color: orange;
                    }
                }
            }
        }
    }
}
</style>