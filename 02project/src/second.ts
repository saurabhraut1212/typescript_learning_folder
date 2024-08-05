interface takephoto {
	camera: string;
	filter: string;
	burst: string;
}

interface Story {
	createStory: () => void;
}
class Youtube implements takephoto {
	constructor(
		public camera: string,
		public filter: string,
		public burst: string
	) {}
}

class NewStory implements takephoto, Story {
	constructor(
		public camera: string,
		public filter: string,
		public burst: string,
		public action: string
	) {}

	createStory(): void {
		console.log('This is function');
	}
}
