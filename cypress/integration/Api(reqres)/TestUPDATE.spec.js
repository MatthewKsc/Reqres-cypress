describe('Testing PUT and PATCH Endpoint', function (){

    const updateUrl = '/api/users/2';
    const itemUpdate= {
        name: 'morpheus',
        job: 'zion resident'
    }

    it('Put User', function () {
        cy.request({method:'PUT', url: updateUrl, body: itemUpdate}).then((response)=>{
           expect(response.status).ok;
           expect(response.duration).below(200);
           expect(response.headers).not.null;
           expect(response.body.name).eq(itemUpdate.name);
           expect(response.body.job).eq(itemUpdate.job);
        });
    });

    it('Patch User', function () {
        cy.request({method:'PATCH', url: updateUrl, body: itemUpdate}).then((response)=>{
            expect(response.status).ok;
            expect(response.duration).below(200);
            expect(response.headers).not.null;
            expect(response.body.name).eq(itemUpdate.name);
            expect(response.body.job).eq(itemUpdate.job);
        });
    });
});
