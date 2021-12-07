<template>
  <div>
    <form>
      Title: <input type="text" v-model="post.title"><br>
      Description: <br>
      <textarea name="#" id="" cols="30" rows="10" v-model="post.body"></textarea><br>
      User: <input type="text" v-model="post.user"><br>
      <button>Actualizar</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

//! INTERFACES
import Post from '@/interfaces/Post';

//! SERVICES
import {getById} from '@/services/postServices';

export default defineComponent({
  data() {
    return {
      post: {} as Post
    }
  },
  methods: {
    async getPost(id: number){
      const post = await getById(id);
      this.post = post.data;
    }
  },
  mounted() {
    this.getPost(+this.$route.params.id);
  },
})
</script>


<style>

</style>