function validarSenha(senha) {
    if (senha.length < 8) {
      return "A senha deve ter pelo menos 8 caracteres.";
    }
  
    if (!/[A-Z]/.test(senha)) {
      return "A senha deve conter pelo menos uma letra maiúscula.";
    }
  
    if (!/[a-z]/.test(senha)) {
      return "A senha deve conter pelo menos uma letra minúscula.";
    }
  
    if (!/[0-9]/.test(senha)) {
      return "A senha deve conter pelo menos um número.";
    }
  
    return "Senha válida.";
  }
  
  const senha = "Erick15*";
  const resultado = validarSenha(senha);
  console.log(resultado); 
  