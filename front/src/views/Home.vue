<template>
  <div class="home">
    <button @click="foo">submit</button>
  </div>
</template>

<script>

export default {
  methods: {
    foo(){
      this.$http.get('/users')
    }
  },
}
</script>
