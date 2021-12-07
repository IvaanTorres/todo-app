<template>
  <div>
    <form @submit.prevent="updatePost()">
      Title: <input type="text" v-model="post.title"><br>
      Description: <br>
      <textarea name="#" id="" cols="30" rows="10" v-model="post.body"></textarea><br>
      User: <input type="text" v-model="post.user"><br>
      <button>Update</button>
    </form>
    <button @click="deletePost()">Delete</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

//! INTERFACES
import Post from '@/interfaces/Post';

//! SERVICES
import {getById, update, del} from '@/services/postServices';

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
    },
    async updatePost(){
      const updatedPost = await update(+this.$route.params.id, this.post);
      console.log(updatedPost);
      this.$router.push({path: '/'});
    },
    async deletePost(){
      const post = this.post; // Keep post obj to show it in case it's been deleted
      if (await del(+this.$route.params.id)) {
        console.log(post);
        this.$router.push({path: '/'}); 
      }
    },
  },
  mounted() {
    this.getPost(+this.$route.params.id);
  },
})
</script>


<style>

</style>