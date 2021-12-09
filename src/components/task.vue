<template>
  <div class="c-task">
    <div class="l-hamburger">
      <div class="c-task__header">
        <h1 class="c-task__title">{{ task.title }}</h1>
        <p class="c-task__user">{{ task.user }}</p>
      </div>
      <div class="c-task__main">
        <p class="c-task__content">{{ task.body }}</p>
      </div>
      <div class="c-task__footer">
        <button
          class="c-button"
          :data="task"
          @click="this.$router.push({ path: `/tasks/${task.id}` })"
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
import Task from '@/interfaces/Task';

export default defineComponent({
  name: 'Task',
  props: {
    task: {
      type: Object as PropType<Task>,
      require: true,
    },
  },
  data() {
    return {};
  },
  methods: {
    passEvent() {
      this.$emit('deleteTask', this.task);
    },
  },
});
</script>
