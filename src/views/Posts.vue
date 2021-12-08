<template>
  <div class="c-section">
    <p class="g--text-align-center">{{ loading }}</p>
    <post-list
      class="g--margin-auto"
      :posts="posts"
      @deletePost="passEvent($event)"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

//!INTERFACES
import Post from '@/interfaces/Post';

//! COMPONENTS
import PostList from '@/components/PostList.vue'; // @ is an alias to /src

//! SERVICES
import { getAll, del } from '@/services/postServices';

export default defineComponent({
  name: 'Posts',
  components: {
    PostList,
  },
  data() {
    return {
      loading: 'loading...' as string,
      posts: [] as Post[],
    };
  },
  methods: {
    async getPosts() {
      const res = await getAll();
      this.posts = res.data;
      this.loading = '';
    },
    async deletePost(post: Post) {
      //!PREGUNTAR

      //!OPCION 1
      /* const index = this.posts
        .map((x) => {
          return x.id;
        })
        .indexOf(post.id);

      this.posts.splice(index, 1); */

      //!OPCION 2
      if (await del(+post.id)) {
        console.log(post);
        this.getPosts();
      }
    },
    passEvent(post: Post) {
      this.deletePost(post);
    },
  },
  mounted() {
    this.getPosts();
  },
});
</script>
