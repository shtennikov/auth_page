<template>
    <AuthHeadlines v-model="currentView" />
    <RegistryForm v-if="currentView === 'registry'" />
    <LoginForm v-else-if="currentView === 'login'" />
</template>

<script setup>
import { ref } from 'vue';
import AuthHeadlines from '../components/AuthHeadlines.vue';
import RegistryForm from '../components/RegistryForm.vue';
import LoginForm from '../components/LoginForm.vue';

const currentView = ref('registry');
</script>

<style scoped></style>
