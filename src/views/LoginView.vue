<template>
    <ForgetPassword @change="handleSend" v-if="isForgetPassword && !isMailToSend" />
    <LoginForm @forget="isForgetPassword = true" v-else-if="!isForgetPassword && !isMailToSend" />
    <div v-if="isMailToSend" class="message">
        <p class="message__text">
            На почту <span class="email">{{ inputedEmail }}</span> отправлено письмо со ссылкой для сброса пароля.
        </p>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import ForgetPassword from '../components/ForgetPassword.vue';
import LoginForm from '../components/LoginForm.vue';

const isForgetPassword = ref(false);
const isMailToSend = ref(false);
const inputedEmail = ref('');

const handleSend = (email) => {
    isMailToSend.value = true;

    inputedEmail.value = email;
};
</script>

<style scoped>
.message {
    margin: 24px 0 32px 0;
    border-top: 2px solid var(--primary);
    border-bottom: 2px solid var(--primary);
    font-family: 'Germano';
    font-size: 64px;
    color: var(--primary);

    & .email {
        text-decoration: underline;
    }
}
.message__text {
    max-width: 1440px;
    margin: auto;
    text-align: center;
}
</style>
