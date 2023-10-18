<template>
    <form class="registry-form">
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

            <UiInput class="last" placeholder="Повторите пароль" type="password" input-number="02-1">
                <template #icon>
                    <UiIcon icon="password-toggle" />
                </template>
            </UiInput>
        </div>

        <div class="agreement">
            <PolicyAgreement />
        </div>
        <div class="button-container">
            <UiButton type="button">Регистрация</UiButton>
        </div>
    </form>
</template>

<script setup>
import UiInput from './UI/UiInput.vue';
import UiIcon from './UI/UiIcon.vue';
import PolicyAgreement from './PolicyAgreement.vue';
import UiButton from './UI/UiButton.vue';
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

.agreement {
    display: flex;
    justify-content: center;
}
</style>
