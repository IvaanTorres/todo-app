<template>
  <div>
    <form @submit.prevent="handleUpdate">
      Title: <input type="text" v-model="post.title"><br>
      Description: <br>
      <textarea name="#" id="" cols="30" rows="10" v-model="post.body"></textarea><br>
      User: <input type="text" v-model="post.user"><br>
      <button>Update</button>
    </form>
    <button>Delete</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

//! INTERFACES
import Post from '@/interfaces/Post';

//! SERVICES
import {getById} from '@/services/postServices';
import {update} from '@/services/postServices';

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
    async updatePost(id: number, post: Post){
      const updatedPost = await update(id, post);
      console.log(updatedPost);
    },
    handleUpdate(){
      this.updatePost(+this.$route.params.id, this.post);
      this.$router.push({path: '/'});
    }
  },
  mounted() {
    this.getPost(+this.$route.params.id);
  },
})
</script>


<style>

</style>