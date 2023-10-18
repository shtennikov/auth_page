<template>
    <AuthHeadlines v-model="currentView" />
    <RegistryForm />
</template>

<script setup>
import { ref } from 'vue';
import AuthHeadlines from '../components/AuthHeadlines.vue';
import RegistryForm from '../components/RegistryForm.vue';

const currentView = ref('registry');
</script>

<style scoped></style>
