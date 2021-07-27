<template>
    <div id="Index">
        <header>
            <headerBar></headerBar>
        </header>
        <nav>
            <navbar></navbar>
        </nav>
        <main>
            <transition 
            name="index-navbar"
            enter-active-class="animate__animated animate__fadeIn"
            >
                <router-view></router-view>
            </transition>
        </main> 
    </div>
</template>

<script>
import headerBar from "./../components/HeaderBar.vue";
import navbar from "./../components/Navbar.vue";

export default {
    components: {
        headerBar,
        navbar
    }
}
</script>

<style lang="scss" scoped>
#Index { 
    width: 100%;
    padding-top: 144px;
    header{
        width: 100%;
        position: fixed; 
        top: 0;
        left: 0;
        z-index: 20;
    }
    nav {
        width: 100%;
        position: fixed;
        top: 84px;
        left: 0;
        z-index: 20;
    }
}
</style>