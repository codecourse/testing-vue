<template>
    <p>You must <router-link :to="{ name: 'auth-signin', query: { redirect: $route.fullPath } }">sign in</router-link> to access this.</p>
</template>

<script>
    export default {
        //
    }
</script>
