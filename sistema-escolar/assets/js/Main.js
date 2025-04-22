import {User} from './User.js';
import {Aluno} from './Aluno.js';
import {Professor} from './Professor.js';

const usersAlunos = {};
const usersProfessores = {};


for(let i = 0; i < 10; i++){
    const aluno = new Aluno();
    aluno.name= "Aluno ", i ;
    aluno.email = `email.aluno${i}@gmail.com`;
    aluno.password = `111234${i}`;
    aluno.turma = "Turma: 3ºA";

    usersAlunos[i] = {aluno};
}

for(let i = 0; i < 10; i++){
    const professor = new Professor();
    professor.name= `Professor ${i}` ;
    professor.email = `email.professor${i}@gmail.com`;
    professor.password = `122234${i}`;
    professor.materias = `Geografia ${i} e História ${i}`;

    usersProfessores[i] = {professor};
}

console.log(usersAlunos);
console.log(usersProfessores);

