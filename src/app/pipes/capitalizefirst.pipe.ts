import { Pipe, PipeTransform } from '@angular/core';
/*
 * Capitalize the first letter of the string
 * Takes a string as a value.
 * Usage:
 *  value | capitalizefirst
 * Example:
 *  // value.name = daniel
 *  {{ value.name | capitalizefirst  }}
 *  fromats to: Daniel
 */
 @Pipe({
 	name: 'capitalizeFirst'
 })
 export class CapitalizeFirstPipe implements PipeTransform {
 	transform(value: string, args: any[]): string {
		 if (value === null) return 'Not assigned';
		 if (value == undefined) return 'Not assigned';
 		let wordsArr = value.split(' ');
 		let finalStr = '';
 		for(let i = 0; i < wordsArr.length; i++) {
 			finalStr += wordsArr[i].charAt(0).toUpperCase() + wordsArr[i].slice(1).toLowerCase();
 			if (i != wordsArr.length - 1) {
 				finalStr += ' ';
 			}
 		}
 		return finalStr;
 	}
 }