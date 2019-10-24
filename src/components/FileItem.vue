<template>
  <v-card 
    :disabled="file.type === 'dir' ? false : true" 
    @click="pushDirectory"
  >   
    <v-card-title>
      <v-icon class="mr-2">
        {{ file.type === 'dir' ? 'mdi-folder' : 'mdi-file' }}
      </v-icon>
      {{ file.name }}
    </v-card-title>
  </v-card>
</template>

<script>
export default {
  name: 'FileItem',
  props: {
    file: {
      type: Object,
      required: true,
    },
  },
  methods: {
    pushDirectory() {
      if (this.file.isUp) {
        let newPathArr = this.$route.path.split('/');
        newPathArr.pop();
        this.$router.push(`${newPathArr.join('/')}`);
      } else {
        this.$router.push(`${this.$route.path}/${this.file.name}`);
      }
    }
  },
}
</script>

<style>

</style>