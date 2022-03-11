//* ---- Type assertion -----
let txt: string;
txt = "str";
//------

//* first trying : const formVersion1 = document.querySelector('form');

//* On hover of the varibable name, we can apercieve that : its type is : HTMLFormElement | null;

//* There is a type for each HTML element

//* null is here to handle and/or fallback in case of error

//console.log(formVersion1.children);

//* Why null ? Well because form may return null and it can causes problem on the log of its children

//* If of my null variable, I search a property : it does not work
//* Because the querySelector can certainly return form, if the form exists but null if the form does not exist (or badly selected)
//! So : we can not deduct a children property of nothing!

//Assertion
// const formVersion2 : HTMLFormElement = document.querySelector('form')!;

//* There needs to be an exclamation point to say : this can not return null !
//* => uniquely return a form

// console.log(formVersion2.children);

//* now console.log(form.children) works !

//*------- Type Casting ---------

const form : HTMLFormElement = document.querySelector('form')! ;

// const form1 = document.querySelector(".form-container");


//* querySelectors with high-level of specificity return : Element | null ;
//* Element is a Custom type of the DOM that regroups all the elements in general (without precision)
//? Not enough precise ?

const input = document.querySelector("input") as HTMLInputElement;

console.log(form);

// form.addEventListener("submit", handleSubmit);



function handleSubmit(event: Event){
	event.preventDefault();
	// prevents default behavior
	// the form refreshes the page on submit

	console.log("SUBMITTED");
}

//* Discovery of the type : Event !
//* That function only accept Events in parameters

window.addEventListener("click", handleClick);

function handleClick(event: MouseEvent) {
	console.log(event.clientX, event.clientY);
};

//* TypeSCript (Microsoft) has regrouped all Events in category, events of the mouse are : MouseEvent
//* the click is a MouseEvent;

const paragraphList = document.querySelectorAll('p') as NodeListOf<HTMLParagraphElement>;

console.log(paragraphList);




//* The querySelectorAll return a NodeList and are never considered as null by TypeScript
//* Even  badly done ,querySelectorAll always return a NodeList but... empty! An empty array