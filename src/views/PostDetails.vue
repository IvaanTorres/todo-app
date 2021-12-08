<template>
  <h1 class="g--text-align-center">Post Details</h1>
  <form class="c-form" @submit.prevent="updatePost()">
    <div class="c-form__wrapper">
      <div class="c-form__header">
        <label class="c-form__label" for="title">Title:</label><br />
        <input
          class="c-form__title g--margin-bottom-m"
          type="text"
          name="title"
          spellcheck="false"
          v-model="post.title"
        />
        <br />
        <label class="c-form__label" for="description">Description:</label
        ><br />
        <textarea
          class="c-form__description g--margin-bottom-m"
          name="description"
          cols="30"
          rows="10"
          spellcheck="false"
          v-model="post.body"
        ></textarea>
        <br />
        <label class="c-form__label" for="user">User:</label><br />
        <input
          class="c-form__user g--margin-bottom-m"
          type="text"
          name="user"
          spellcheck="false"
          v-model="post.user"
        />
        <br />
      </div>
      <div class="c-form__footer">
        <div class="g--margin-auto">
          <input
            class="c-button g--margin-right-s"
            type="submit"
            value="Update"
          />
          <input
            class="c-button c-button--alternative"
            type="button"
            value="Delete"
            @click="deletePost()"
          />
        </div>
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

//! INTERFACES
import Post from '@/interfaces/Post';

//! SERVICES
import { getById, update, del } from '@/services/postServices';

export default defineComponent({
  data() {
    return {
      post: {} as Post,
    };
  },
  methods: {
    async getPost(id: number) {
      const post = await getById(id);
      this.post = post.data;
    },
    async updatePost() {
      const updatedPost = await update(+this.$route.params.id, this.post);
      console.log(updatedPost);
      this.$router.push({ path: '/' });
    },
    async deletePost() {
      const post = this.post; // Keep post obj to show it in case it's been deleted
      if (await del(+this.$route.params.id)) {
        console.log(post);
        this.$router.push({ path: '/' });
      }
    },
  },
  mounted() {
    this.getPost(+this.$route.params.id);
  },
});
</script>
