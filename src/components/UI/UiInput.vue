<template>
    <div class="input-wrapper">
        <div class="input-info">
            <span class="input-number" :class="{ focused: isFocused, filled: isFilled }">
                {{ inputNumber }}
            </span>
            <span v-if="isFocused" class="input-placeholder">
                {{ placeholder }}
            </span>
        </div>

        <input
            v-bind="$attrs"
            class="input"
            v-model="inputValue"
            :placeholder="placeholder"
            @focusin="isFocused = true"
            @focusout="isFocused = false"
        />

        <span class="input-icon">
            <slot name="icon" />
        </span>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';

defineProps({
    inputNumber: {
        type: [Number, String],
        required: true
    },
    placeholder: String
});

defineOptions({
    inheritAttrs: false
});

const inputValue = ref('');
const isFocused = ref(false);
const isFilled = computed(() => Boolean(inputValue.value.length));
</script>

<style scoped>
.input-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 186px;
    gap: 40px;
    padding: 24px 0 32px 0;
}

.input {
    position: relative;
    max-width: 1030px;
    height: 150px;
    border: none;
    outline: none;
    font-family: 'Germano';
    font-size: 120px;
    color: var(--primary);
    line-height: 100%;
    caret-color: var(--accent);
    background: none;

    &::placeholder {
        color: var(--text-secondary);
    }
}

.input-info {
    display: flex;
    flex-direction: column;
    flex-basis: 250px;
}

.input-placeholder {
    font-family: 'Germano';
    font-size: 48px;
    line-height: 100%;
    text-transform: lowercase;
}

.input-number {
    font-family: 'Molot';
    font-size: 128px;
    line-height: 100%;
    -webkit-text-stroke: 4px var(--primary);
    color: var(--light);

    &.focused {
        font-size: 80px;
        -webkit-text-stroke: unset;
        color: var(--primary);
    }

    &.filled {
        -webkit-text-stroke: unset;
        color: var(--primary);
    }
}
</style>
