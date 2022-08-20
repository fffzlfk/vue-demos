<script setup lang="ts">
const BASE_URL = import.meta.env.BASE_URL
const projects = [
  {
    name: 'What to eat',
    url: `${BASE_URL}what-to-eat`,
  },
  {
    name: 'Tree',
    url: `${BASE_URL}tree`,
  },
  {
    name: 'Countdown',
    url: `${BASE_URL}countdown`,
  },
  {
    name: 'Todo',
    url: `${BASE_URL}todo`,
  },
  {
    name: 'Chat Window',
    url: `${BASE_URL}chat-window`,
  },
  {
    name: 'Calculator',
    url: `${BASE_URL}calculator`
  }
]
</script>

<template>
  <DemoLists :projects="projects" />
</template>
