import { questions } from "$lib/game/questions"
import type { Questions } from "$lib/types";

/** @type {import('./$types').PageLoad} */
export function load(): Questions {
	return questions;
}
