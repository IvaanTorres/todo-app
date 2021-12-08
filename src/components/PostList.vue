<template>
  <div class="l-RAM">
    <post-component
      v-for="post in posts"
      :key="post.id"
      :post="post"
      @deletePost="passEvent($event)"
    ></post-component>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

//! COMPONENTS
import PostComponent from '@/components/Post.vue';

//! INTERFACES
import Post from '@/interfaces/Post';

export default defineComponent({
  name: 'Post List',
  components: { PostComponent },
  props: {
    posts: {
      type: Array as PropType<Post[]>,
    },
  },
  methods: {
    passEvent(post: Post) {
      this.$emit('deletePost', post);
    },
  },
});
</script>
