const contentElement = document.querySelector('.content');

async function getStudents(){
    const response = await fetch('students.json');
    console.log(response);
    const list = await response.json();
    console.log(list);

    for (let i = 0; i < list.results.length; i++){
        const idEl = document.createElement('div');
        const newID = new student(idEl, list.results[i].name, list.results[i].grade, list.results[i].gpa)
        newID.displayBook();
    }
}

getStudents()