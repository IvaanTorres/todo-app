<template>
  <div class="c-panel">
    <div class="l-hamburger">
      <div class="c-panel__header">
        <h1 class="c-panel__title">{{ post.title }}</h1>
        <p class="c-panel__user">{{ post.user }}</p>
      </div>
      <div class="c-panel__main">
        <p class="c-panel__content">{{ post.body }}</p>
      </div>
      <div class="c-panel__footer">
        <button
          class="c-button"
          :data="post"
          @click="this.$router.push({ path: `/posts/${post.id}` })"
        >
          See details
        </button>
        <button class="c-button c-button--alternative" @click="passEvent()">
          Delete
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

//! INTERFACES
import Post from '@/interfaces/Post';

export default defineComponent({
  name: 'Post',
  props: {
    post: {
      type: Object as PropType<Post>,
      require: true,
    },
  },
  data() {
    return {};
  },
  methods: {
    passEvent() {
      this.$emit('deletePost', this.post);
    },
  },
});
</script>
