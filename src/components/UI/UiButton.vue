<template>
    <button class="button">
        <slot />
    </button>
</template>

<script setup></script>

<style scoped>
.button {
    --shadow-color: rgba(3, 64, 137, 0.45);
    &:hover {
        --shadow-color: var(--accent);
    }

    display: inline-block;
    position: relative;
    width: 480px;
    height: 480px;
    border-radius: 480px;
    border: none;
    outline: none;
    background-color: var(--light);

    -webkit-box-shadow: 0px 0px 200px 20px var(--shadow-color);
    -moz-box-shadow: 0px 0px 200px 20px var(--shadow-color);
    box-shadow: 0px 0px 200px 20px var(--shadow-color);

    font-family: 'Germano';
    font-size: 64px;
    color: var(--text-secondary);

    cursor: pointer;
}
</style>
