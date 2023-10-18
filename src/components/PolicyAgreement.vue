<template>
    <div class="privacy-policy-agreement">
        <UiIcon class="checkbox" @click="handleCheck" :icon="iconName" />
        <div class="privacy-policy-agreement_text">
            {{ AGREEMENT_TEXT }}
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import UiIcon from './UI/UiIcon.vue';

const emit = defineEmits(['checked', 'unchecked']);

const AGREEMENT_TEXT = 'Я ознакомился с Политикой конфиденциальности и Пользовательским соглашением';
const isChecked = ref(false);
const iconName = computed(() => (isChecked.value ? 'checkbox-checked' : 'checkbox'));

const handleCheck = () => {
    isChecked.value = !isChecked.value;

    if (isChecked.value) emit('checked');
    else emit('unchecked');
};
</script>

<style scoped>
.privacy-policy-agreement {
    display: flex;
    justify-content: center;
    gap: 40px;
    max-width: 1160px;
    margin: 24px 0 32px 0;
}

.privacy-policy-agreement_text {
    font-family: 'Germano';
    font-size: 64px;
    line-height: 100%;
    text-align: left;
    color: var(--primary);
}
</style>
