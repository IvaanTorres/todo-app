<template>
  <div>
    <h1>New Post</h1>
    <h2>Insert new post</h2>
    <new-post-form @getData="getData($event)" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

//! COMPONENTS
import newPostForm from '@/components/PostForm.vue';

//! INTERFACES
import Post from '@/interfaces/Post';

//! SERVICES
import {create} from '@/services/postServices';

export default defineComponent({
  name: 'New Post',
  components: {
    newPostForm,
  },
  data() {
    return {
      data: {} as Post
    }
  },
  methods: {
    getData(receivedData: Post){
      this.data = receivedData;
      this.createPost();
      this.$router.push({name: "Posts"});
    },
    async createPost(){
      const newPost = await create(this.data);
      return newPost;
    }
  },
})
</script>


<style scoped>

</style>