<script setup lang="ts">
import { useCanister } from "@connect2ic/vue"
import { ref, watchEffect } from "vue"

let items = ref()
const [itemService] = useCanister("item", { mode: "anoymous" })

console.log(itemService)

const fetchItems = async () => {
  const itemData = await itemService.value.getAllItems()
  items.value = itemData
}


watchEffect(() => {
  if (itemService.value) {
    fetchItems()
  }
})

</script>
<template>
  <div class="py-4">
    <Toolbar class="px-2 py-2">
      <template #start>
        <Button icon="pi pi-plus" class="mr-2" />
        <Button icon="pi pi-print" class="mr-2" />
        <Button icon="pi pi-upload" />
      </template>

      <template #center>
        <span class="p-input-icon-left">
          <i class="pi pi-search" />
          <InputText placeholder="Search" />
        </span>
      </template>

      <template #end>
          <SplitButton label="Save" icon="pi pi-check" :model="items"></SplitButton>
      </template>
    </Toolbar>
  </div>
  <div class="grid grid-cols-4 gap-4">
    <Card v-for="item in items">
      <template #header>
        <img alt="user header"
          src="https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcQOO0X7mMnoYz-e9Zdc6Pe6Wz7Ow1DcvhEiaex5aSv6QJDoCtcooqA7UUbjrphvjlIc" />
      </template>
      <template #title> {{ item.name }} </template>
      <template #subtitle> {{ item.price }} ICP </template>
      <template #content>
        <p class="m-0">
          {{ item.id }}
        </p>
      </template>
      <template #footer>
        <router-link :to="`product/${item.id}`">
        <Button icon="pi pi-check" label="View" />
          </router-link>
      </template>
    </Card>
  </div>
</template>
