<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <p>{{loading}}</p>
    <post-list :posts="posts"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

//!INTERFACES
import Post from '@/interfaces/Post';

//! COMPONENTS
import PostList from '@/components/PostList.vue'; // @ is an alias to /src

//! SERVICES
import {getAll} from '@/services/postServices';

export default defineComponent({
  name: 'Posts',
  components: {
    PostList,
  },
  data() {
    return {
      loading: 'loading...' as string,
      posts: [] as Post[]
    }
  },
  methods: {
    async getPosts(){
      setTimeout(async () => {
        const res = await getAll();
        this.posts = res.data;
        this.loading = '';
      }, 250);
    }
  },
  mounted() {
    this.getPosts();
  },
});
</script>
