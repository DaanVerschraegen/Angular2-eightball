import { Component, Output, EventEmitter } from '@angular/core';

import { LocalStorageService } from './localStorage.Service';

@Component({
   selector: 'eightball',
   templateUrl: './eightball.html'
})

export class Eightball {
	string answer;
	
	constructor(private LocalStorageService: LocalStorageService) {
		string question = eightball.Question.value;
	}
	
	ngOnInit(): void {
        this.LocalStorageService.getAnswer(question).subscribe(data => this.answer = data);
   }
}