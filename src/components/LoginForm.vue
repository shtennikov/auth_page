<template>
    <form class="login-form">
        <div class="inputs-container">
            <UiInput placeholder="E-mail" input-number="01">
                <template #icon>
                    <UiIcon icon="question" />
                </template>
            </UiInput>

            <UiInput placeholder="Пароль" type="password" input-number="02">
                <template #icon>
                    <UiIcon icon="password-toggle" />
                </template>
            </UiInput>
        </div>
        <div class="forget-password">
            <a class="forget-password__link">{{ FORGET_PASSWORD_TEXT }}</a>
        </div>
        <div class="button-container">
            <UiButton type="button">Войти</UiButton>
        </div>
    </form>
</template>

<script setup>
import UiInput from './UI/UiInput.vue';
import UiIcon from './UI/UiIcon.vue';
import UiButton from './UI/UiButton.vue';

const FORGET_PASSWORD_TEXT = 'Забыли пароль?';
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

.forget-password {
    position: relative;
    margin: 24px 0 32px 0;
    font-family: 'Germano';
    font-size: 64px;
    color: var(--primary);
    text-align: center;
}

.forget-password__link {
    position: relative;
    left: -250px;
}

.button-container {
    display: flex;
    justify-content: center;
    padding-top: 100px;
}

.agreement {
    display: flex;
    justify-content: center;
}
</style>
