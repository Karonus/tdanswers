import { questions } from '$lib/game/questions';
import { finalQuestions } from '$lib/game/final';
import type { PageLoad } from './$types';

export const load: PageLoad = () => ({
  questions,
  finalQuestions
});
