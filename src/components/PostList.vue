<template>
    <ul>
      <li v-for="post in posts" :key="post.id" @click="this.$router.push(`/posts/${post.id}`)">{{post}}</li>
    </ul>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

//! INTERFACES
import Post from '@/interfaces/Post';

export default defineComponent({
  name: 'Post List',
  props: {
    posts:{
      type: Array as PropType<Post[]>
    }
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
a {
  color: #42b983;
}
</style>
