<h1 align="center">Hi 👋, I'm Adem Hatay</h1>
<p>My 🌎, hello world</p>
<p align="left"> <img src="https://komarev.com/ghpvc/?username=ademhatay&label=Profile%20views&color=0e75b6&style=flat" alt="ademhatay" /> </p>

```
npm install ademhatay
```

<details>

<summary>Show Profile</summary>

```
// ademhatay.ts
// Welcome To My Profile

interface person_skills {
	html?: boolean;
	css?: boolean;
	js?: boolean;
	react?: boolean;
	node?: boolean;
	c?: boolean;
	docker?: boolean;
	// ...
}

interface person_social {
	twitter?: string;
	facebook?: string;
	linkedin?: string;
	github?: string;
	instagram?: string;
	youtube?: string;
	website?: string;
}

interface person_info {
	readonly id: string;
	first_name: string;
	last_name: string;
	middle_name?: string;
	age: number;
	school1?: string;
	school2?: string;
	current_company?: string;
	phone_number: string;
	email: string;
	social: person_social;
	skills: person_skills;
}

const getSkills = (person: person_info) => {
	const skills = Object.keys(person.skills).filter((skill) => person.skills[skill]);
	return skills;
};

const getSocialLinks = (person: person_info) => {
	let socialLinks = "";
	for (const key in person.social) {
		socialLinks += `${key}: ${person.social[key]}\n`;
	}
	return socialLinks;
};

const getProfile = (person: person_info) => {
	let profile = "";
	for (const key in person) {
		if (typeof person[key] === "undefined") {
			profile += `${key}: ---\n`;
		} else if (typeof person[key] !== "object") {
			profile += `${key}: ${person[key]}\n`;
		}
	}
	let social = getSocialLinks(person);
	let skills = getSkills(person);
	return profile + social + 'Skills\n' + skills;
};

class Person implements person_info {
	id: string;
	first_name: string;
	last_name: string;
	middle_name?: string;
	age: number;
	school1?: string;
	school2?: string;
	current_company?: string;
	phone_number: string;
	email: string;
	social: person_social;
	skills: person_skills;

	constructor(person: person_info) {
		this.id = person.id;
		this.first_name = person.first_name;
		this.last_name = person.last_name;
		this.middle_name = person.middle_name;
		this.age = person.age;
		this.school1 = person.school1;
		this.school2 = person.school2;
		this.current_company = person.current_company;
		this.phone_number = person.phone_number;
		this.email = person.email;
		this.social = person.social;
		this.skills = person.skills;
	}

	getProfile() {
		return getProfile(this);
	}
}

const Adem = new Person({
	id: "1",
	first_name: "Adem",
	last_name: "Hatay",
	age: 19,
	school1: "Istanbul University - Management Information Systems",
	school2: "Anadolu University - Computer Programming",
	phone_number: "+90 553 748 81 17",
	email: "hatayadem5@gmail.com",
	social: {
		twitter: "https://twitter.com/hatayadem",
		facebook: "https://facebook.com/Ademhatay31",
		linkedin: "https://linkedin.com/in/ademhatay",
		github: "https://github.com/ademhatay",
		instagram: "https://instagram.com/ademhatay_",
		youtube: "https://youtube.com/@ademhatay",
		website: "https://ademhatay.com"
	},
	skills: {
		html: true,
		css: true,
		js: true,
		react: true,
		node: true,
		c: true,
		docker: false
	}
});

console.log(Adem.getProfile());


```
</details>
