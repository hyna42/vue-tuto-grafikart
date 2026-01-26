<template>
    <div>
        <h1>
            Etape : {{ value +1 }} / {{ max +1 }}
        </h1>
        <progress :max="max" :value="value"/>
    </div>
</template>

<script setup>
defineProps({
    value: Number,
    max:Number
})
</script>