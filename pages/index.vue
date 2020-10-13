<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <div class="text-center">
        {{ names }}
        <v-btn @click="click">{{ counter }}</v-btn>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      names: ['Shahar', 'Yonatan'],
      example: 'Static',
    }
  },
  computed: {
    counter() {
      return this.$store.state.exampleStore.counter
    },
  },
  methods: {
    click() {
      this.$store.dispatch('exampleStore/increment')
    },
  },
  async fetch() {
    this.example = await fetch('/').then((res) => res.json())
  },
}
</script>
