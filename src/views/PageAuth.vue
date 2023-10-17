<template>
    <AuthHeadlines v-model="currentView" />
</template>

<script setup>
import { ref } from 'vue';
import AuthHeadlines from '../components/AuthHeadlines.vue';

const currentView = ref('registry');
</script>

<style scoped></style>
