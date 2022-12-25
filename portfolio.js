import emoji from "react-easy-emoji";

export const greetings = {
	name: "Hrutik Kumthekar",
	title: "Hi all, I'm Hrutik",
	description:
		"Hope you are well , I am experienced developer .I like the growing and hustling environment of startups . Already had a experience with service based as well as product based startups (3 years of development experience) currently working on opensource project  and I am currently only looking for freelance opportunities",
	resumeLink:
		"https://drive.google.com/file/d/1YdbIkUcJIk8fdYGfX4APi9XBixT0C4oq/view?usp=sharing",
};

export const openSource = {
	githubUserName: "hrutik7",
};

export const contact = {};

export const socialLinks = {
	// url: "https://1hanzla100.github.io/",
	linkedin: "https://www.linkedin.com/in/hrutik-kumthekar-b997bb228/",
	github: "https://github.com/hrutik7",
	// instagram: "https://www.instagram.com/__hanzla100",
	// facebook: "https://www.facebook.com/1hanzla100",
	twitter: "https://twitter.com/HrutikKumthekar",
};

export const skillsSection = {
	title: "What I do",
	subTitle:
		"CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
	data: [
		{
			title: "Full Stack Development",
			lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
			skills: [
				emoji(
					"⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js"
				),
				emoji("⚡ Building responsive static websites using Next.js"),
				emoji(
					"⚡ Building RESTful APIs in Django & Django REST Framework"
				),
			],
			softwareSkills: [
				{
					skillName: "HTML-5",
					fontAwesomeClassname: "vscode-icons:file-type-html",
				},
				{
					skillName: "CSS-3",
					fontAwesomeClassname: "vscode-icons:file-type-css",
				},
				{
					skillName: "JavaScript",
					fontAwesomeClassname: "logos:javascript",
				},
				{
					skillName: "Reactjs",
					fontAwesomeClassname: "vscode-icons:file-type-reactjs",
				},
				{
					skillName: "Nextjs",
					fontAwesomeClassname: "vscode-icons:file-type-light-next",
				},
				{
					skillName: "Python",
					fontAwesomeClassname: "logos:python",
				},
				// {
				// 	skillName: "Django",
				// 	fontAwesomeClassname: "vscode-icons:file-type-django",
				// },

				{
					skillName: "Redux",
					fontAwesomeClassname: "logos:redux",
				},
				{
					skillName: "NPM",
					fontAwesomeClassname: "logos:npm-icon",
				},
				{
					skillName: "Yarn",
					fontAwesomeClassname: "logos:yarn",
				},
			],
		},
		{
			title: "Cloud Infra-Architecture",
			lottieAnimationFile: "/lottie/skills/cloudinfra.json", // Path of Lottie Animation JSON File
			skills: [
				emoji("⚡ Experience of working on multiple cloud platforms"),
				emoji(
					"⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases"
				),
				emoji(
					"⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions"
				),
			],
			softwareSkills: [
				// ? Check README To get icon details
				{
					skillName: "AWS",
					fontAwesomeClassname: "logos:aws",
				},
				// {
				// 	skillName: "Azure",
				// 	fontAwesomeClassname: "logos:microsoft-azure",
				// },
				{
					skillName: "Heroku",
					fontAwesomeClassname: "logos:heroku-icon",
				},
				{
					skillName: "PostgreSQL",
					fontAwesomeClassname: "logos:postgresql",
				},
				{
					skillName: "Github",
					fontAwesomeClassname: "akar-icons:github-fill",
				},
				{
					skillName: "Docker",
					fontAwesomeClassname: "logos:docker-icon",
				},
				{
					skillName: "Github Actions",
					fontAwesomeClassname: "logos:github-actions",
				},
				{
					skillName: "Cloudinary",
					fontAwesomeClassname: "logos:cloudinary",
				},
				{
					skillName: "Nginx",
					fontAwesomeClassname: "logos:nginx",
				},
				{
					skillName: "Sentry",
					fontAwesomeClassname: "logos:sentry-icon",
				},
			],
		},
		// {
		// 	title: "Blockchain",
		// 	lottieAnimationFile: "/lottie/skills/ethereum.json", // Path of Lottie Animation JSON File
		// 	skills: [
		// 		emoji(
		// 			"⚡ Experience in developing Smart Contract using Solidity & Ethereum"
		// 		),
		// 		emoji(
		// 			"⚡ Building Scripts for automated testing & deployment of Smart Contracts using Brownie & Infura"
		// 		),
		// 		emoji(
		// 			"⚡ Experience of using Openzeppelin Smart Contract Standards & Chainlink Oracles"
		// 		),
		// 		emoji(
		// 			"⚡ Developing NFT Smart Contracts using ERC-721 Token Standard"
		// 		),
		// 		emoji(
		// 			"⚡ Building Dapps with React.js & Solidity using Web3.js, Moralis & IPFS"
		// 		),
		// 	],
		// 	softwareSkills: [
		// 		{
		// 			skillName: "Ethereum",
		// 			fontAwesomeClassname: "logos:ethereum",
		// 		},
		// 		{
		// 			skillName: "Solidity",
		// 			fontAwesomeClassname: "logos:solidity",
		// 		},
		// 		{
		// 			skillName: "Web3js",
		// 			fontAwesomeClassname: "logos:web3js",
		// 		},
		// 		{
		// 			skillName: "Metamask",
		// 			fontAwesomeClassname: "logos:metamask-icon",
		// 		},
		// 		{
		// 			skillName: "Ganache",
		// 			fontAwesomeClassname: "logos:ganache-icon",
		// 		},
		// 	],
		// },
	],
};

export const SkillBars = [
	{
		Stack: "Frontend/Design", //Insert stack or technology you have experience in
		progressPercentage: "90", //Insert relative proficiency in percentage
	},
	{
		Stack: "Backend",
		progressPercentage: "70",
	},
	{
		Stack: "Programming",
		progressPercentage: "60",
	},
];

export const educationInfo = [
	// {
	// 	schoolName: "VIT pune",
	// 	// subHeader: "Master of Science in Computer Science",
	// 	// duration: "September 207 - April 2019",
	// 	desc: "Participated in the research of XXX and published 3 papers.",
	// 	grade: "Grade A",
	// 	descBullets: [
	// 		"Lorem ipsum dolor sit amet, consectetur adipdfgiscing elit",
	// 		"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
	// 	],
	// },
];

export const experience = [
	{
		role: "Software Developer",
		company: "Kurage",
		companylogo: "https://media.licdn.com/dms/image/C560BAQE1ucBzr7Zcvg/company-logo_100_100/0/1599303555621?e=1680134400&v=beta&t=PnqY9GkqNwtdbbuYBz3918E7WAoqjR16iGHQkv471gM",
		date: "June 2022 – Present",
		desc: "I worked as Software developer . worked on technologies like android , web developement and workend on backend ecommerce developement vendure io which is based on nest js",
	},
	{
		role: "Software Engineer",
		company: "Daphnis Labs",
		companylogo: "https://media.licdn.com/dms/image/C4E0BAQE4YfgEesuOGg/company-logo_100_100/0/1519869245124?e=1680134400&v=beta&t=ECRgePI4ITgufKLIwjsTvFEbeLh6Vjl9y0xd3uzLwoU",
		date: "may 2022 – june 2022",
		desc: "I worked as SOftware Engineer Fixed some of the existing bug that are present shopify product and  develope admin portal for the shopify app and worked on one client project in tech stack next js , material ui and vercel .",
		// descBullets: [
		// 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
		// 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		// ],
	},
	{
		role: "React Developer",
		company: "Koyo Software Solutions,",
		companylogo: "https://media.licdn.com/dms/image/C4D0BAQEw5VZyytOX6w/company-logo_200_200/0/1623228406009?e=1680134400&v=beta&t=EfeSb7rq04rEd7nE0SBUInc-OtHDMF2TKC-RknDqyf4",
		date: "Oct 2021 - Apr 2022",
		desc: "Worked on a live project . https://koyoaccountassist.web.app/ Technologies used :1 . Next.js 2. React.js 3. Node.js 4. python beautiful soup4	5 . bootstrap (styling framework)",
	},
	{
		role: "Web Developer",
		company: "Sharkweb",
		companylogo: "https://media.licdn.com/dms/image/D4D0BAQFYEpA-K5kVvg/company-logo_200_200/0/1666530963953?e=1680134400&v=beta&t=rsI4pQAutYVVcxsaCZ9Usotj6pD6EC1gEoNrCs3EFpo",
		date: "july 2021 - Sept 2021",
		desc: "Worked as a React Developer.",
	},
];

export const projects = [
	{
		name: "developer-portfolio",
		desc: "Software Developer Portfolio Template built with react.js and next.js bootstrap that helps you showcase your work and skills as a software developer.",
		github: "https://github.com/hrutik7/portfolio",
		link: "https://aboutme-hrutik7.vercel.app/",
	},
	{
		name: "CV generator",
		desc: "With CV Generator, it’s easy to Build the Asthatically great cv with different themes.",
		github: "https://github.com/hrutik7",
	},
	{
		name: "Crypto currency tracker",
		desc: "Get Live rates of crypto currency and get the data in the chart format for analysing the data",
		github: "https://github.com/hrutik7",
	},
	{
		name: "Animeshop (Ecommerce)",
		desc: "A dedicated e-commerce platform for anime lovers",
		link: "https://animesshop.netlify.app/",
	},
];

export const feedbacks = [
	{
		name: "John Smith",
		feedback:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
	},
	{
		name: "John Smith",
		feedback:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
	},
];

// option to hide or show the ContactUs component
export const showContactUs = true;

// See object prototype on SEO.jsx page
export const seoData = {
	title: "Hrutik kumthekar",
	description:
		"A passionate Full Stack Web Developer and Blockchain Developer.",
	author: "Hrutik kumthekar",
	image: "https://avatars3.githubusercontent.com/u/59178380?v=4",
	url: "https://aboutme-hrutik7.vercel.app/",
	keywords: [
		"Hrutik",
		"Hrutik kumthekar",
		"@HrutikKumthekar",
		"hrutik7",
		"Portfolio",
		"Hrutik Portfolio ",
		"Hrutik kumthekar Portfolio",
	],
}
