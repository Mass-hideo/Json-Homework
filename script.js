class student{
    constructor(element, name, grade, gpa){
        this.element = element; //creates the overall element
        this.name = name; //creates the name 
        this.grade = grade; //creates grade
        this.gpa = gpa; //creates gpa

        this.element.classList.add('ID');
        console.log(this);
    }

    displayID (){
        this.element.innerHTML = "";

        const nameElement = document.createElement('p');
        nameElement.classList.add('name');
        nameElement.innerText = this.name;

        const gradeElement = document.createElement('p');
        gradeElement.classList.add('grade');
        gradeElement.innerText = this.grade;

        const gpaElement = document.createElement('p');
        gpaElement.classList.add('gpa');
        gpaElement.innerText = this.gpa;

        this.element.appendChild(nameElement);
        this.element.appendChild(gradeElement);
        this.element.appendChild(gpaElement);
    }
}

const idElement = document.querySelector(".content");

const id1Element = document.createElement("div");
idElement.appendChild(id1Element);