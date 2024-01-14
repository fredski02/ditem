<template>
    <div class="flex w-full justify-center items-center py-28 bg-rose-50">
        <div class="center text-center">
            <h1 class="text-4xl mb-2">Buy and Sell your items</h1>
            <p class="mb-6">A decentralized application with the lowest fees</p>
            <div class="input-bar flex flex-row items-center gap-x-4">
                <Button>Sell your items</Button>
                <div>Or</div>
                <InputGroup>
                    <InputText placeholder="Keyword" />
                    <Button icon="pi pi-search" severity="warning" />
                </InputGroup>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const seachText = ref("");
</script>

<style scoped></style>