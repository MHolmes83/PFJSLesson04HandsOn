const studentList = ['Callan', 'Britt', 'Ashley'];

const getStudents = () => {
    setTimeout(() => {
        studentList.forEach((student) => {
            console.log(student);
        });
    }, 5000);
};

const addStudent = (student, callback) => {
    setTimeout(() => {
        studentList.push(student);
        callback();
    }, 1000);
};

addStudent('Timothy', getStudents);

const studentList2 = ['Dennis', 'Cillian', 'Ashleigh'];

const getNewStudents = () => {
    setTimeout(() => {
        studentList2.forEach((student) => {
            console.log(student);
        });
    }, 500);
};

const addNewStudent = (student) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            studentList2.push(student);
            resolve();
        }, 1000);
    });
};

addNewStudent('Jeremiah').then(getNewStudents);

const studentList3 = ['Selma', 'Tony', 'Oliver'];

const getMoreStudents = () => {
    setTimeout(() => {
        studentList3.forEach((student) => {
            console.log(student);
        });
    }, 500);
};

const addMoreStudents = (student) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            studentList3.push(student);
            resolve();
        }, 1000);
    });
};

const addAndGetMoreStudents =  async () => {
    await addMoreStudents('Curtis');
    getMoreStudents();
};

addAndGetMoreStudents();