<template>
  <h1 class="g--text-align-center">Task Details</h1>
  <form class="c-form" @submit.prevent="updateTask()">
    <div class="c-form__wrapper">
      <div class="c-form__header">
        <label class="c-form__label" for="title">Title:</label><br />
        <input
          class="c-form__title g--margin-bottom-m"
          type="text"
          name="title"
          spellcheck="false"
          v-model="task.title"
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
          v-model="task.body"
        ></textarea>
        <br />
        <label class="c-form__label" for="user">User:</label><br />
        <input
          class="c-form__user g--margin-bottom-m"
          type="text"
          name="user"
          spellcheck="false"
          v-model="task.user"
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
            @click="deleteTask()"
          />
        </div>
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

//! INTERFACES
import Task from '@/interfaces/Task';

//! SERVICES
import { getById, update, del } from '@/services/Tasks';

export default defineComponent({
  data() {
    return {
      task: {} as Task,
    };
  },
  methods: {
    async getTask(id: number) {
      const task = await getById(id);
      this.task = task.data;
    },
    async updateTask() {
      await update(+this.$route.params.id, this.task);
      this.$router.push({ path: '/' });
    },
    async deleteTask() {
      const task = this.task; // Keep post obj to show it in case it's been deleted
      if (await del(+this.$route.params.id)) {
        this.$router.push({ path: '/' });
      }
    },
  },
  mounted() {
    this.getTask(+this.$route.params.id);
  },
});
</script>
