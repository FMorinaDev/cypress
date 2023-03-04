/// <reference types='cypress'/>
describe('Demo de una rest api desde cypress', () =>{
    let datos;
    it('Test get', () => {
        datos =  cy.request('http://localhost:3000/posts')
        datos.its('status').should('equal', 200);
    });
    it('Test get 2', () => {
        datos =  cy.request('http://localhost:3000/posts')
        .should((response)=>{
            expect(response.status).to.eq(200);
        });
    });
    it('Test get request', () => {
        cy.request({
            method: 'GET',
            url: 'http://localhost:3000/posts',
            headers:{
                accept: 'application/json'
            }
        }).then(response =>{
            let datos;
            datos= JSON.parse(JSON.stringify(response.body));
            console.log(datos);
            expect(datos[1]).has.property('title','cypress franco');
        })
    });
    it.only('Test post', () => {
        cy.request({
            method: 'POST',
            url: 'http://localhost:3000/posts',
            body: {
                "id": 4,
                "title": "prueba post",
                "author": "Franco M"
            }
        }).then(response =>{
            expect(response.status).to.eql(201);
        })
    });
});