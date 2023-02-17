import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
  
  Given("Abrir el navegador principal", () => {
    cy.visit("https://testingqarvn.com.es/datos-personales/");
  });
  
  When("Cargando el nombre {word}", (word) => {
    cy.get('#wsf-1-field-21').should('be.visible').type(word);
    cy.wait(500);    
  });
  
  When("Cargando el email", () => {
    cy.get('#wsf-1-field-23').should('be.visible').type('email@gmail.com');
    cy.wait(500);
  });
  When("Cargando la direccion", () => {
    cy.get('#wsf-1-field-28').should('be.visible').type('direccion');
    cy.wait(500);
  });
  Then("Validar el nombre de la pagina", () => {
    cy.title().should('eq','Datos Personales | TestingQaRvn');
    cy.wait(500);
  });