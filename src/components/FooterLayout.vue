<script setup lang="ts">
import { onMounted, ref, computed } from "vue"
import { getMonth } from "../help/getMonth"

const now = ref<Date>(new Date())

const updateTime = (): void => {
  now.value = new Date()
}

onMounted(() => {
  setInterval(updateTime, 1000)
})

const date = computed<number>(() => now.value.getDate())
const month = computed<string>(() => getMonth(now.value.getMonth()))
const hours = computed<number>(() => now.value.getHours())
const minutes = computed<string>(() =>
  now.value.getMinutes() < 10
    ? "0" + now.value.getMinutes()
    : String(now.value.getMinutes()),
)
</script>

<template>
  <footer>
    {{ `${date} ${month}, ${hours}:${minutes}` }}
  </footer>
</template>

<style scoped>
footer {
  padding-top: 18px;
  height: 7vh;
  text-align: center;
  user-select: none;
  background-color: #f6f6f8;
  font-weight: bold;
}
</style>
