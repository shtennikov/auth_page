<template>
    <div class="headlines">
        <span
            @click="$emit('update:modelValue', 'registry')"
            class="headlines__registry headline"
            :class="{ active: modelValue === 'registry' }"
        >
            {{ REGISTRATION_TEXT }}
        </span>
        <span class="headlines__slash">/</span>
        <span
            @click="$emit('update:modelValue', 'login')"
            class="headlines__login headline"
            :class="{ active: modelValue === 'login' }"
        >
            {{ LOGINTEXT }}
        </span>
    </div>
</template>

<script setup>
const REGISTRATION_TEXT = 'Регистрация';
const LOGINTEXT = 'Вход';

defineProps({
    modelValue: {
        type: String,
        required: true
    }
});

defineEmits(['update:modelValue']);
</script>

<style scoped>
.headlines {
    padding: 100px 0 80px 0;
    font-family: 'Molot';
    font-size: 8em;
    text-align: center;
    line-height: 100%;
}

.headlines__slash {
    margin: 0 40px 0 40px;
    color: var(--primary);
}

.headline {
    -webkit-text-stroke: 4px var(--primary);
    color: var(--light);
    cursor: pointer;
    user-select: none;

    &.active {
        color: var(--primary);
        -webkit-text-stroke: unset;
    }
}
</style>
