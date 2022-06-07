<template>
  <button @click="$emit('pong', value)">{{ value }}</button>
</template>
<script>
export default {
  props: {
    value: String,
  },
};
</script>
<style>
button {
  cursor: pointer;
  margin: 5px 2%;
  width: 18%;
}
</style>
