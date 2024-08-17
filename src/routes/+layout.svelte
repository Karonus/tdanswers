<script lang="ts">
  import '../app.css';
  import { ModeWatcher } from 'mode-watcher';
</script>

<ModeWatcher />

<div class="container mx-auto">
  <main class="mt-4">
    <slot />
  </main>
</div>
