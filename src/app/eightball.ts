import { Component, Output, EventEmitter } from '@angular/core';

export class Eightball {
	possibleAnswers: PossibleAnswers[] = ["it is certain.", "It is decidedly so.", "Without a doubt.", "Yes - definitely.", "You may rely on it.", "As I see it, yes.", "Most likely.", "Outlook good.", "Yes.", "Signs point to yes.", "Reply hazy, try again", "Ask again later.", "Better not tell you now.", "Cannot predict now.", "Concentrate and ask again.", "Don't count on it.", "My reply is no.", "My sources say no", "Outlook not so good.", "Very doubtful."];
	string answer;
	int randomNummer;
	
	constructor() {}
	
	getRandomInt(max) {
		return Math.floor(Math.random() * Math.floor(max));
	}

	getAnswer(question: string): {
		if (localStorage.getItem(question) === null){
			randomNummer = getRandomInt(20);
			answer = possibleAnswers[randomNummer];
			localStorage.setItem(question, answer);
		}
		else{
			answer = localStorage.getItem(question);
		}
   }
}