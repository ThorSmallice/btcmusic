<template>
  <div id="navbar">
    <ul class="nav-bar">
        <router-link to="/recommend" custom v-slot="{ navigate, isActive}">
            <li :class="{ 'link-active ' : isActive}" @click="navigate">
                <span> 推荐音乐 </span>
            </li>
        </router-link>
        <router-link to="/hot" custom v-slot="{ navigate, isActive}">
            <li :class="{ 'link-active ' : isActive}" @click="navigate">
                <span> 热歌榜 </span>
            </li>
        </router-link>
        <router-link to="/search" custom v-slot="{ navigate, isActive}">
            <li :class="{ 'link-active ' : isActive}" @click="navigate">
                <span> 搜索 </span> 
            </li>
        </router-link>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#navbar {
    margin-bottom: 20px;
    background-color: #fff;
    .nav-bar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: nowrap;
        width: 100%;
        height: 40px;
        border-bottom: 1px solid #ccc; 
        li {
            cursor: pointer;
            flex: 1;
            box-sizing: border-box;
            width: 30%;
            text-align: center;
            color: #333;
            span {
            position: relative;
            box-sizing: border-box;
            padding: 0px 5px 5px;
            }
        }
        .link-active span {
            color: #d43b35;
            &::after {
            position: absolute;
            content: "";
            display: block;
            width: 100%;
            height: 2px;
            left: -50%;
            top: 30px;
            transform: translateX(50%);
            background-color: #d43b35;
            }
        }
    }
}
</style>