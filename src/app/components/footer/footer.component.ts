import { Component, OnInit } from '@angular/core';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
	links = [
		{
			url: 'https://github.com/magnusquest',
			description: 'My Github',
			icon: faGithubAlt,
		},
	];

	constructor() {}

	ngOnInit(): void {}
}
