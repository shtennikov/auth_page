<template>
    <img class="icon" :src="iconSrc" :alt="icon" />
</template>

<script>
import { defineProps, computed } from 'vue';
import PasswordToggle from '../../assets/icons/password-toggle.svg';
import PasswordToggleAlert from '../../assets/icons/password-toggle-alert.svg';
import Question from '../../assets/icons/question.svg';
import QuestionAlert from '../../assets/icons/question-alert.svg';

const icons = {
    'password-toggle': PasswordToggle,
    'password-toggle-alert': PasswordToggleAlert,
    question: Question,
    'question-alert': QuestionAlert
};
</script>

<script setup>
const props = defineProps({
    icon: {
        type: String,
        required: true,
        validator: (value) => Object.keys(icons).includes(value)
    }
});

const iconSrc = computed(() => icons[props.icon]);
</script>

<style scoped></style>
