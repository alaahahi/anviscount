<script setup>
import { computed } from 'vue';
import { Link } from '@inertiajs/inertia-vue3';

const props = defineProps({
    active: Boolean,
    href: String,
    as: String,
});

const classes = computed(() => {
    return props.active
        ? 'navlist__link active'
        : 'navlist__link';
});
</script>

<template>
    <div>
        <Link :href="href" :class="classes">
            <slot />
        </Link>
    </div>
</template>
