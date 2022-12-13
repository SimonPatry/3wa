const fs = require('fs').promises;

async function getStudents() {
    try {
        const data = await fs.readFile("students.txt", "utf8");
        return data;
    }catch(error){
        console.error(error);
    }
}

const getStudentsList = () => {
    getStudents()
    .then((response) => {
        const students = [];
        const studentsList = response.split('\n');
        console.log(studentsList);
        let count = 0;
        studentsList.forEach(stud => {
            console.log(count);
            if (count >=0){
                console.log(stud);
                const tmp = stud.split(" ");
                stud = {
                    note: tmp[0],
                    name: tmp[1],
                    adress: tmp[2]
                }
                students.push(stud);
                console.log(stud);
            }
            count++;
        })

        const notes = students.map((stud) => {
            return stud.note;
        })
        console.log("array: ")
        console.log(students);
        console.log("notes: ")
        console.log(Math.max(...notes));
    })
}

getStudentsList();