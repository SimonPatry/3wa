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
        const studentsList  = response.split(' \r\n');
        studentsList.forEach((stud, key) => {
            if (key > 0) {
                const tmp = stud.split(" ");
                stud = {
                    note: tmp[0],
                    name: tmp[1],
                    adress: tmp[2]
                }
                students.push(stud);}
        })

        const notes = students.map((stud) => {
            return stud.note;
        })

        console.log(students);
        console.log(Math.max(...notes));
    })
}

getStudentsList();