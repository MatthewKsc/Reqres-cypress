describe('Testing Delete Endpoint', function (){

    it('Delete user', function () {
        cy.request({method:'DELETE', url:'/api/users/2'}).then((response)=>{
            expect(response.status).eq(204);
            expect(response.body).empty;
        });
    });

})
