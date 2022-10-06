<template>
  <CodemirrorEditor />
</template>

<script lang="ts" setup>
  import { onMounted } from 'vue'
  import { CodemirrorEditor } from '@kit/ct/editors'
  import { invoke } from '@tauri-apps/api'

  onMounted(() => {
    invoke('test_handler', {
      theArgument: 'theArgument',
    })
  })
</script>
