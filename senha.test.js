const { usuarioExiste } = require("./login")

describe("Teste que deve ser feito", function(){

  const { senhaexiste } = require("./login")

  describe("Teste que deve ser feito", function(){
  
    it("Testar a senha", function(){
        //validar os criterios de aceite Deve ter ao menos uma letra maiuscula, deve ter numerais, deve ter caracteres especiais

    expect(validarSenha("minha@Senha1")).toBe(true)
  })
  it("confirmar senha", function() {
    expect(confirmarSenha("minhaSenha", "minhaSenha2").toBe(true))
  } )

  it("validar se usuario existe", function(){
    const objeto = usuarioExiste("erick")
    expect(objeto).toBe(true)
  })
})

it("validar se senha existe", function(){
  const objeto = senhaexiste("Erick15*")
  expect(objeto).toBe(true)
})
})