import type { FinalQuestions, Questions } from '$lib/types';

declare global {
  namespace App {
    interface PageData {
      questions: Questions;
      finalQuestions: FinalQuestions;
    }
  }
}

export {};
