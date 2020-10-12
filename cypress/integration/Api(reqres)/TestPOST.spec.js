describe('Testing Post Endpoint', function (){

    const postRegisterUrl = '/api/register';
    const postLoginUrl = '/api/login';
    const token = 'QpwL5tke4Pnpja7X4';

    const postRegisterItem = {
        email: "eve.holt@reqres.in",
        password: "pistol"
    };

    const postLoginItem = {
        email: "eve.holt@reqres.in",
        password: "cityslicka"
    };

    it('Post user', function () {
        const item = {
            name: "morpheus",
            job: "leader"
        };
        cy.request({method:'POST', url:'/api/users', body: item}).then((response)=>{
                expect(response.status).eq(201);
                expect(response).to.have.property('headers');
                expect(response.duration).be.below(200)
                expect(response.body).to.have.property('name', item.name);
                expect(response.body).to.have.property('job', item.job);
            });
    });

    it('Post register Successful', function () {
        cy.request({method:'POST', url:postRegisterUrl, body:postRegisterItem}).then((response)=>{
            expect(response.status).ok;
            expect(response.headers).not.null;
            expect(response.duration).be.below(200);
            expect(response.body.id).eq(4);
            expect(response.body.token).eq(token);
        })
    });

    it('Post register Unsuccessful', function () {
        cy.request({method:'POST', url:postRegisterUrl, body: {}, failOnStatusCode:false})
            .then((response)=>{
            expect(response.status).eq(400);
            expect(response.headers).not.null;
            expect(response.duration).be.below(200);
            expect(response.body.error).eq('Missing email or username');
        });

        cy.request({method:'POST', url:postRegisterUrl, body: {email: 'sydney@fife'}, failOnStatusCode:false})
            .then((response)=>{
                expect(response.status).eq(400);
                expect(response.headers).not.null;
                expect(response.duration).be.below(200);
                expect(response.body.error).eq('Missing password');
            });
    });

    it('Post Login Successful', function () {
        cy.request({method:'POST', url:postLoginUrl, body: postLoginItem}).then((response)=>{
            expect(response.status).ok;
            expect(response.duration).below(200);
            expect(response.headers).not.null;
            expect(response.body.token).eq(token);
        });
    });

    it('Post Login Unsuccessful', function () {
        cy.request({method:'POST', url:postLoginUrl, body: {}, failOnStatusCode:false})
            .then((response)=>{
                expect(response.status).eq(400);
                expect(response.headers).not.null;
                expect(response.duration).be.below(200);
                expect(response.body.error).eq('Missing email or username');
            });

        cy.request({method:'POST', url:postLoginUrl, body: {email: 'peter@klaven'}, failOnStatusCode:false})
            .then((response)=>{
                expect(response.status).eq(400);
                expect(response.headers).not.null;
                expect(response.duration).be.below(200);
                expect(response.body.error).eq('Missing password');
            });
    });
})
