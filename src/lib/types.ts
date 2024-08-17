export interface Questions {
	episodeid: number;
	content: Content[];
}

export interface Content {
	hasOutro: boolean;
	x: boolean;
	id: number;
	text: string;
	pic: boolean;
	choices: Choice[];
	us: boolean;
	hasIntro: boolean;
}

export interface Choice {
	controllerClass: string;
	correct?: boolean;
	text: string;
}

export interface FinalQuestions {
  episodeid: number
  content: FinalContent[]
}

export interface FinalContent {
  x: boolean
  id: number
  text: string
  choices: FinalChoice[]
  us: boolean
}

export interface FinalChoice {
  difficulty: number
  correct: boolean
  text: string
}

