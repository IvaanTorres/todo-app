<template>
  <div>
    <h1 class="g--text-align-center">New Task</h1>
    <!-- <h2 class="g--text-align-center">Insert new post</h2> -->
    <new-task-form @taskData="createTask($event)" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

//! COMPONENTS
import newTaskForm from '@/components/task-form.vue';

//! INTERFACES
import Task from '@/interfaces/Task';

//! SERVICES
import { create } from '@/services/Tasks';

export default defineComponent({
  name: 'New Task',
  components: {
    newTaskForm,
  },
  data() {
    return {
      data: {} as Task,
    };
  },
  methods: {
    async getData(receivedData: Task) {
      this.data = receivedData;
    },
    async createTask(receivedData: Task) {
      await this.getData(receivedData);
      const newTask = await create(this.data); // Keep obj in case we want to show it when it's created
      this.$router.push({ path: '/' });
    },
  },
});
</script>
