<template>
  <div>
    <form class="c-form" @submit.prevent="passData">
      <div class="c-form__wrapper">
        <div class="c-form__header">
          <label class="c-form__label" for="title">Title:</label><br />
          <input
            class="c-form__title g--margin-bottom-m"
            type="text"
            name="title"
            placeholder="Type a title"
            v-model="post.title"
          /><br />

          <label class="c-form__label" for="body">Description:</label><br />
          <textarea
            class="c-form__description g--margin-bottom-m"
            name="body"
            cols="30"
            rows="10"
            placeholder="Type a description"
            v-model="post.body"
          ></textarea>
          <br />

          <label class="c-form__label" for="user">User:</label><br />
          <input
            class="c-form__user g--margin-bottom-m"
            type="text"
            name="user"
            placeholder="Type your user"
            v-model="post.user"
          /><br />
        </div>

        <div class="c-form__footer">
          <input class="c-button" type="submit" value="Create" />
        </div>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

//! INTERFACES
import Post from '@/interfaces/Post';

export default defineComponent({
  props: {
    data: {
      type: Object as PropType<Post>,
    },
  },
  data() {
    return {
      post: {} as Post,
    };
  },
  methods: {
    passData() {
      this.$emit('getData', this.post);
    },
  },
});
</script>
