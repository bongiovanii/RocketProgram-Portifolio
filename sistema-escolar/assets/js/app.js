const user = [];

window.onload = () => {
  const contaSelect = document.getElementById("conta");
  if (contaSelect) {
    contaSelect.addEventListener("change", mostrarCampos);
  }
};

function mostrarCampos() 
{
  const tipoConta = document.getElementById("conta").value;

  document.getElementById("campoMateria").style.display = "none";
  document.getElementById("campoTurma").style.display = "none";

  if (tipoConta == 1) {
    // Professor
    document.getElementById("campoMateria").style.display = "block";
  } else if (tipoConta == 2) {
    // Aluno
    document.getElementById("campoTurma").style.display = "block";
  }
}


function cadastrar() 
{
  const tipoConta = document.getElementById("conta").value;
  if (tipoConta == 1) 
  {
    // <---- Cadastrar Professor ---->
    const professor = new Professor();
    professor = setProfessor(professor);

    user.push(professor);
    console.log(user);
    setLocalStorage(user);
    
    alert(`Usuário ${professor.name} cadastrado`);
  } 
  else if (tipoConta == 2) 
  {
    // <---- Cadastrar Aluno ---->
    const aluno = new Aluno();

    aluno = setAluno(aluno);

    

    user.push(aluno);
    console.log(user);
    setLocalStorage(user);
    alert(`Usuário ${aluno.name} cadastrado`);
  }
}

function logar() 
{
 
  const userString = localStorage.getItem("users");
  const user = JSON.parse(userString);

  const email = document.getElementById("checkEmail").value;
  const senha = document.getElementById("checkSenha").value;
  console.log(email, senha);

  let autenticado = false;
  for (let i = 0; i < user.length; i++) 
  {
    console.log(user[i]._email, user[i]._password);
    if (email === user[i]._email && senha === user[i]._password) 
    {
      autenticado = true;
      break;
    }
  }

  if (autenticado) {
    window.location.href = "./aprovado.html";
  }

  console.log(user, autenticado);
}


function setProfessor(professor)
{
  const nome = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("senha").value;
  const materia = document.getElementById("materia").value;

  professor.name = nome;
  professor.email = email;
  professor.password = password;
  professor.materias = materia;

  return professor;
}

function setAluno(aluno)
{
  const nome = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("senha").value;
  const turma = document.getElementById("turma").value;

  aluno.name = nome;
  aluno.email = email;
  aluno.password = password;
  aluno.turma = turma;
  return aluno
}

function setLocalStorage(user)
{
  localStorage.setItem("users", JSON.stringify(user));
}