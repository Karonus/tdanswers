<script lang="ts">
  import Input from '$lib/components/ui/input/input.svelte';
  import type { Content } from '$lib/types';
  import type { PageData } from './$types';

  export let data: PageData;

  let questions: Content[] = [],
    search: string = '';

  const filterQuestions = (query: string) =>
    [...data.questions.content, ...data.finalQuestions.content].filter((q) =>
      q.text.toLowerCase().startsWith(query.toLowerCase())
    );

  $: if (search) questions = filterQuestions(search);
</script>

<div class="flex flex-col gap-6">
  <Input placeholder="Напиши вопрос" bind:value={search} />
  {#each questions as question (question.id)}
    <div class="flex max-w-xl flex-col gap-2">
      <p class="probe text-lg">{@html question.text}</p>
      {#each question.choices as choice}
        <span class="probe {choice.correct ? 'text-green-500' : 'text-red-500'}">
          {@html choice.text}
        </span>
      {/each}
    </div>
    <hr />
  {/each}
</div>
