<template>
    <div id="Index">
        <header>
            <headerBar></headerBar>
        </header>
        <nav>
            <navbar></navbar>
        </nav>
        <main>
            <router-view></router-view>
        </main>
    </div>
</template>

<script>
import headerBar from "./../components/HeaderBar.vue"
import navbar from "./../components/Navbar.vue"
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
     
}
</style>