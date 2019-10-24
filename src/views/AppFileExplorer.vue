<template>
  <div>
    <v-breadcrumbs 
      :items="directories"
      divider="/" 
    >
      <template v-slot:item="props">
        <v-breadcrumbs-item 
          :href="props.item.path"
        >
          {{ props.item.name }}
        </v-breadcrumbs-item>
      </template>
    </v-breadcrumbs>
    <div class="d-flex flex-wrap">
      <FileItem      
        v-for="file in currentFiles"
        :key="file.resource_id"
        class="ma-4"
        :file="file"
      />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';
import FileItem from '@/components/FileItem.vue';

export default {
  name: 'AppFileExplorer',
  components: {
    FileItem,
  },
  computed: {
    ...mapState({
      currentFiles: state => state.files.currentFiles,
    }),
    ...mapGetters({
      directories: 'files/getDirsArray',
    }),
  },
  mounted() {
    this.initCurrentPath(this.$route.path);
    this.fetchCurrentFiles();
  },
  beforeRouteUpdate(to, from, next) {
    if (to.matched.some(record => record.meta.diskDirectory)) {
      this.initCurrentPath(to.path);
      this.fetchCurrentFiles();
    }
    next();
  },
  methods: {
    ...mapActions({
      fetchCurrentFiles: 'files/FETCH_CURRENT_FILES',
      initCurrentPath: 'files/INIT_CURRENT_PATH',
      moveDirChild: 'files/MOVE_DIRECTORY_CHILD',
    }),
  },
};
</script>

<style>
</style>