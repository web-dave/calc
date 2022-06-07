<template>
  <output>{{ out }}</output>
</template>
<script>
export default {
  props: {
    out: String,
  },
};
</script>
<style>
output {
  display: block;
  height: 1.5em;
  background: white;
  text-align: right;
  font-size: 100%;
  padding-right: 5%;
  margin: 5px 6%;
}
</style>
