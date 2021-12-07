<template>
  <div>
    <form @submit.prevent="passData">
      Titulo: <input type="text" v-model="post.title"><br>
      Descripción: <input type="text" v-model="post.body"><br>
      Usuario: <input type="text" v-model="post.user"><br>
      <button>Generar</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

//! INTERFACES
import Post from '@/interfaces/Post';

export default defineComponent({
  props:{
    data:{
      type: Object as PropType<Post>
    }
  },
  data() {
    return {
      post: {} as Post
    }
  },
  methods: {
    passData(){
      this.$emit('getData', this.post);
    }
  },
})
</script>


<style scoped>

</style>