<template>
    <form class="login-form">
        <div class="inputs-container">
            <UiInput v-model="email" placeholder="E-mail" input-number="01">
                <template #icon>
                    <UiIcon icon="question" />
                </template>
            </UiInput>
        </div>
        <div class="button-container">
            <UiButton @click="handleChange" type="button">Сменить пароль</UiButton>
        </div>
    </form>
</template>

<script setup>
import { ref } from 'vue';
import UiInput from './UI/UiInput.vue';
import UiIcon from './UI/UiIcon.vue';
import UiButton from './UI/UiButton.vue';

const emit = defineEmits(['change']);

const email = ref('');

const handleChange = () => {
    emit('change', email.value);
};
</script>

<style scoped>
.inputs-container {
    & > * {
        border-top: 2px solid var(--primary);

        &:last-child {
            border-bottom: 2px solid var(--primary);
        }
    }
}

.button-container {
    display: flex;
    justify-content: center;
    padding-top: 100px;
}
</style>
