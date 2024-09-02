"use strict";

/* Get */
let birthYear = prompt("Please enter your birth year:");

/* Convert */
birthYear = parseInt(birthYear);

/* Get */
let currentYear = new Date().getFullYear();

/* Calculate */
let age = currentYear - birthYear;

/* Result */
console.log("You are " + age + " years old.");
