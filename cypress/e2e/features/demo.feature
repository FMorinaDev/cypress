Feature: Demo de Cucumber

    Demostracion de como utilizar cucumber

    Scenario: Demo de cucumber dos
    Given Abrir el navegador principal
    When Cargando el nombre <nombre>
    When Cargando el email
    And Cargando la direccion
    Then Validar el nombre de la pagina

    Examples:
        | nombre |
        | FrancoC|