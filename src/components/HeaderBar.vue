<template>
    <div id="headerBar">
       <div class="header-left"> 
            <svg class="icon icon-logo" aria-hidden="true">
                <use xlink:href="#icon-bingtanghulu"></use>
            </svg> 
            <h2>糖葫芦音乐</h2>
       </div>
       <div class="header-right">
            <router-link to="#" class="download">下载App</router-link>
       </div>
    </div>
</template>

<script> 
export default {

}
</script>

<style lang="scss" scoped> 
#headerBar {  
    width: 100%;
    height: 84px;
    padding: 10px; 
    background-color: #D43B33;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center; 
    .header-left {
        display: flex;
        flex-wrap: nowrap; 
        align-items: center;
        width: 142px;
        height: 25px;
        font-size: 20px;
        .icon-logo { 
            font-size: 30px;
            margin-right: 10px;
        } 
        h2 {  
            white-space: nowrap;
            font-size: 20px;
            font-weight: 500;
            color: #fefefe;
        }
    }
    .header-right {
        .download{
            height: 36px;
            width: 100px;
            background-color: #fefefe; 
            color: #D43B33;
            text-align: center;
            line-height: 36px;
            font-size: 16px;
            border-radius: 18px;
        }
    }
}

</style>