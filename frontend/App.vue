<script setup lang="ts">
import NavBar from './components/NavBar.vue'
import { createClient } from "@connect2ic/core"
import { defaultProviders } from "@connect2ic/core/providers"
import { ConnectDialog, Connect2ICProvider } from "@connect2ic/vue"
import { useCounterStore } from './store/global'
import "@connect2ic/core/style.css"

// import canisters
import * as counter from "../.dfx/local/canisters/counter"
import * as item from "../.dfx/local/canisters/item"

// create a client
const client = createClient({
  canisters: {
    counter,
    item
  },
  providers: defaultProviders,
  globalProviderConfig: {
    dev: import.meta.env.DEV,
  },
})


const counterStore = useCounterStore()

</script>

<template>
  <Connect2ICProvider :client="client">
    <ConnectDialog />
    <NavBar />
    <div>
      <router-view />
    </div>
  </Connect2ICProvider>
</template>

<style></style>
