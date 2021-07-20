<template>
    <div id="Foot">
        <div class="foot-title">
             <svg class="icon icon-logo" aria-hidden="true">
                <use xlink:href="#icon-bingtanghulu"></use>
            </svg> 
            <h2 class="foot-h2">糖葫芦音乐</h2>
        </div>
        
        <router-link to="#" class="foot-openApp"> 打开App，发现更多好音乐 > </router-link>
        
        <p>网易公司版权所有©1997-2021 杭州乐读科技有限公司运营</p>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
#Foot { 
    text-align: center;
    box-sizing: border-box;
    margin-top:2px;
    width: 100%;
    height: 200px;
    background: url(//s3.music.126.net/mobile-new/img/recommand_bg_2x.png?d045fafc60e017b653f8065a87496922=) no-repeat; 
    .foot-title { 
        padding-top: 63px;
        margin-bottom: 8px;
        line-height: 40px;
        letter-spacing: 5px; 
        .icon-logo {
            font-size: 30px; 
            margin-right: 5px;
        }
        .foot-h2 {
            display: inline-block;
            font-size: 30px;  
            font-weight: 600;
        }
    }
    .foot-openApp {
        width: 300px;
        font-size: 16px;
        color: #d33a31;
        border: 1px solid #d33a31;
        line-height: 38px;
        border-radius: 38px; 
    }
    p {
        font-size: 12px;
        transform: scale(0.75);
        color: #888;
    }
}
</style>