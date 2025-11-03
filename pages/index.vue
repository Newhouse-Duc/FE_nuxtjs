<template>
  <div class="p-6">
  </div>
</template>
<script setup>
const { $socket } = useNuxtApp();

const msg = ref("");
const messages = ref([]);


onMounted(() => {
  $socket.on("chat:message", (data) => {
    messages.value.push(data);
  });
});

// Gửi message về server
const sendMessage = () => {
  if (!msg.value) return;
  $socket.emit("chat:message", msg.value);
  msg.value = "";
};
</script>
