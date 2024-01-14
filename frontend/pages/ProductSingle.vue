<template>
    <div>
        <h1>{{ itemData?.ok?.name }}</h1>
        <p>{{ itemData?.ok?.price }} ICP </p>
    </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useCanister } from "@connect2ic/vue"
import { onMounted, ref } from 'vue';

const route = useRoute()
const itemId = route.params.id
const [itemService] = useCanister("item", { mode: "anoymous" })

const itemData = ref();

onMounted(async () => {
    console.log(itemId);
    itemData.value = await itemService.value.getSingleItem(itemId);
})

</script>

<style scoped></style>