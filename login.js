function validarSenha(senha) {
  }
  
  const dadosDeTeste = [
    { senha: "Senha123", resultadoEsperado: "Senha válida." },
    { senha: "12345678", resultadoEsperado: "A senha deve conter pelo menos uma letra maiúscula." },
    { senha: "senhafraca", resultadoEsperado: "A senha deve conter pelo menos um número." },
    { senha: "SENHAFORTE1", resultadoEsperado: "Senha válida." },
  ];

  const usuarios = [
    {
      user_name: "erick",
      pass: "Erick15*"
    }
  ]

  const Senhas = [
    {
      user_name: "erick",
      pass: "Erick15*"
    }
  ]

  function usuarioExiste(user_name) {
    const user = usuarios.find( x=> x.user_name == user_name)
    return user != undefined
  }

  function senhaexiste(pass_senhas) {
    const pass = Senhas.find( x=> x.pass_senhas == pass_senhas)
    return pass != undefined
  }

  module.exports = {usuarioExiste}

  module.exports = {senhaexiste}
  