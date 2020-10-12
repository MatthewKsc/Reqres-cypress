describe('Testing Get Endpoint', function (){

    it('GetUsers', function (){
        cy.request('/api/users?page=2').then((response)=>{
            expect(response.status).eq(200);
            expect(response.body).not.null;
            //expect(response.body.page).to.have.eq( 2);
            expect(response.body).to.have.property('page', 2);
            expect(response.body.data).to.have.length(6);
            expect(response.headers).not.null;
            expect(response).to.have.property('duration')
        });
    });

    it('GetUsers Delay', function (){
        cy.request('/api/users?delay=3').then((response)=>{
            expect(response.status).eq(200);
            expect(response.body).to.have.property('page', 1);
            expect(response.body.data).to.have.length(6);
            expect(response.headers).not.null;
            expect(response.duration).above(3000)
        });
    });

    it('GetUser', function () {
        cy.request('/api/users/2').then((response)=>{
           expect(response.status).eq(200);
           expect(response.headers).not.null;
           expect(response.duration).not.null;
           expect(response.body.data).to.have.property('id', 2);
           expect(response.body).to.have.property('data')
               .and.property('first_name', 'Janet');
           expect(response.body.ad).to.have.property('company', 'StatusCode Weekly');

        });
    });

    it('GetUser NotFound', function () {
        cy.request({url:'/api/users/23', failOnStatusCode:false}).then((response)=>{
            expect(response.status).eq(404);
            expect(response.body).empty;
            expect(response.headers).not.null;
            expect(response.duration).not.null;
        });
    });


    //other possibility to check with its
    it('GetUser NotFound2', function () {
        cy.request({url:'/api/users/23', failOnStatusCode:false})
            .its('status').should('eq', 404);

        cy.request({url:'/api/users/23', failOnStatusCode:false})
            .its('body').should('be.empty');
    });
})
