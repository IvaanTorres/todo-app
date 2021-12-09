<template>
  <div class="l-RAM">
    <task-component
      v-for="task in tasks"
      :key="task.id"
      :task="task"
      @deleteTask="passEvent($event)"
    ></task-component>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

//! COMPONENTS
import taskComponent from '@/components/task.vue';

//! INTERFACES
import Task from '@/interfaces/Task';

export default defineComponent({
  name: 'Task List',
  components: { taskComponent },
  props: {
    tasks: {
      type: Array as PropType<Task[]>,
    },
  },
  methods: {
    passEvent(task: Task) {
      this.$emit('deleteTask', task);
    },
  },
});
</script>
