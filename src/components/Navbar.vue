<template>
  <div id="navbar">
    <ul class="nav-bar">
        <router-link tag="li" to="/recommend">
            <span> 推荐音乐 </span>
        </router-link>
        <router-link tag="li" to="/hot">
            <span> 热歌榜 </span>
        </router-link>
        <router-link tag="li" to="/search">
            <span> 搜索 </span>
        </router-link>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
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
</style>