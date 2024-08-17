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
