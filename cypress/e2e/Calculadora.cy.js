/*como Usuario
quiero ingresar varios numeros y que se sumen
para sumar los numeros ingresados
 */
describe("Pagina web", () => {
  it("la pagina deve escribir la cadena y retornar la suma", () => {
    cy.visit("/");
    cy.get("#CadenaNumeros").type("1,2,3");
    cy.get("#sumar-button").click();
    cy.get("#resultado-div").should("contain", "6");
  });
  it("deberia calcular la suma de los caracteres 2,2,3", () => {
    cy.visit("/")
    cy.get("#CadenaNumeros").type("2,2,3");
    cy.get("#sumar-button").click();
    cy.get("#resultado-div").should("contain","7")  });
  it("deberia calcular la suma de los caracteres 1,2,4,8", () => {
    cy.visit("/")
    cy.get("#CadenaNumeros").type("1,2,4,8");
    cy.get("#sumar-button").click();
    cy.get("#resultado-div").should("contain","15")  });
  it("deberia calcular la suma de los caracteres 1-2,3", () => {
    cy.visit("/")
    cy.get("#CadenaNumeros").type("1-2,3");
    cy.get("#sumar-button").click();
    cy.get("#resultado-div").should("contain","6")  });
  it("deberia calcular la suma de los caracteres //[;] 6;7;4", () => {
    cy.visit("/")
    cy.get("#CadenaNumeros").type("//[;] 6;7;4");
    cy.get("#sumar-button").click();
    cy.get("#resultado-div").should("contain","17")  });
  it("deberia calcular la suma de los caracteres //[;] 6,3-2;1", () => {
    cy.visit("/")
    cy.get("#CadenaNumeros").type("6,3-2;1");
    cy.get("#sumar-button").click();
    cy.get("#resultado-div").should("contain","12")  });
  it("deberia Ignorar los numeros mayores a 1000 y retornar 2", () => {
    cy.visit("/")
    cy.get("#CadenaNumeros").type("2,1001");
    cy.get("#sumar-button").click();
    cy.get("#resultado-div").should("contain","2")  });

  it("deberia calcular la suma de los caracteres //[***] 1***2***3", () => {
    cy.visit("/")
    cy.get("#CadenaNumeros").type("//[***] 1***2***3");
    cy.get("#sumar-button").click();
    cy.get("#resultado-div").should("contain","6")  });
  it("deberia calcular la suma de los caracteres //[*][%] 1*2%3,7-9", () => {
    cy.visit("/")
    cy.get("#CadenaNumeros").type("//[*][%] 1*2%3,7-9");
    cy.get("#sumar-button").click();
    cy.get("#resultado-div").should("contain","22")  });
});

/*Criterios de confirmacion
la funcion debe sumar los numeros dentro de la cadena sin importar que tenga caracteres raros
*/
