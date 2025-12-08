// 本地番剧数据配置
export type AnimeItem = {
	title: string;
	status: "completed" | "watching" | "planned";
	rating: number;
	cover: string;
	description: string;
	episodes: string;
	year: string;
	genre: string[];
	studio: string;
	link: string;
	progress: number;
	totalEpisodes: number;
	startDate: string;
	endDate: string;
};

const localAnimeList: AnimeItem[] = [
	{
		title: "[test]尼奥尼软碳",
		status: "watching",
		rating: 9.0,
		cover: "/assets/anime/test.jpg",
		description: "九九成，稀罕物！",
		episodes: "12 episodes",
		year: "5.25",
		genre: ["余*博", "可小刀", "九成新", "神器"],
		studio: "2",
		progress: 8,
		totalEpisodes: 12,
		link: "https://www.fishyflicks.ggff.net/about/",
		startDate: "2025-07",
		endDate: "2025-10",
	},
	{
		title: "[test]尼奥尼硬碳",
		status: "watching",
		rating: 9.5,
		cover: "/assets/anime/test.jpg",
		description: "九九成，稀罕物！",
		episodes: "12 episodes",
		year: "5.25",
		genre: ["余*博", "可小刀", "九成新", "神器"],
		studio: "2",
		link: "https://www.fishyflicks.ggff.net/about/",
		progress: 8,
		totalEpisodes: 12,
		startDate: "2015-07",
		endDate: "2015-09",
	},
	{
		title: "美术生使用过的橡皮屑",
		status: "watching",
		rating: 0.2,
		cover: "/assets/anime/test.jpg",
		description: "全手工制作",
		episodes: "12 episodes",
		year: "0",
		genre: ["张*三", "不可刀", "一成新", "绝对值"],
		studio: "9999.99",
		link: "https://www.fishyflicks.ggff.net/about/",
		progress: 623,
		totalEpisodes: 845,
		startDate: "2020-01",
		endDate: "2020-03",
	},
	{
		title: "全自动画画手",
		status: "planned",
		rating: 10.1,
		cover: "/assets/anime/test.jpg",
		description: "低价卖",
		episodes: "12 episodes",
		year: "无价",
		genre: ["李*四", "可小刀", "全新", "神器"],
		studio: "0.01",
		link: "https://www.fishyflicks.ggff.net/about/",
		progress: 12,
		totalEpisodes: 12,
		startDate: "2014-04",
		endDate: "2014-06",
	},
	{
		title: "[test]尼奥尼中碳",
		status: "completed",
		rating: 9.8,
		cover: "/assets/anime/test.jpg",
		description: "Girl's gunfight",
		episodes: "12 episodes",
		year: "5.25",
		genre: ["余*博", "可小刀", "九成新", "神器"],
		studio: "2",
		link: "https://www.fishyflicks.ggff.net/about/",
		progress: 8,
		totalEpisodes: 12,
		startDate: "2022-07",
		endDate: "2022-09",
	},
];

export default localAnimeList;
