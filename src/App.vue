<template>
    <div class="wrapper">
        <header class="header">Очень крутой хедер</header>
        <main>
            <PageAuth />
        </main>
        <footer class="footer">Очень крутой футер</footer>
    </div>
</template>

<script setup>
import PageAuth from './views/PageAuth.vue';
</script>

<style scoped>
.wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh;
}

.header,
.footer {
    padding: 10px;
}

.footer {
    margin-top: auto;
}
</style>
