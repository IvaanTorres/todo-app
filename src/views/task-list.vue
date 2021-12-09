<template>
  <div class="c-section">
    <p class="g--text-align-center">{{ loading }}</p>
    <task-list
      class="g--margin-auto"
      :tasks="tasks"
      @deleteTask="passEvent($event)"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

//!INTERFACES
import Task from '@/interfaces/Task';

//! COMPONENTS
import TaskList from '@/components/task-list.vue'; // @ is an alias to /src

//! SERVICES
import { getAll, del } from '@/services/Tasks';

export default defineComponent({
  name: 'Tasks',
  components: {
    TaskList,
  },
  data() {
    return {
      loading: 'loading...' as string,
      tasks: [] as Task[],
    };
  },
  methods: {
    async getTasks() {
      const res = await getAll();
      this.tasks = res.data;
      this.loading = '';
    },
    async deleteTask(task: Task) {
      //!PREGUNTAR

      //!OPCION 1
      /* const index = this.posts
        .map((x) => {
          return x.id;
        })
        .indexOf(post.id);

      this.posts.splice(index, 1); */

      //!OPCION 2
      if (await del(+task.id)) {
        console.log(task);
        this.getTasks();
      }
    },
    passEvent(task: Task) {
      this.deleteTask(task);
    },
  },
  mounted() {
    this.getTasks();
  },
});
</script>
