describe('Testing log', () => {
    before(() => {
        cy.intercept(
            'GET', '**/intern/historikk/hendelser', { fixture: 'hendelser.json' })
            .as('getHendelser')
    })

    it('should open and show table', () => {
        cy.visit('/log')
        cy.get('.MuiDataGrid-root').should('be.visible')
    })

    it('should contain correct colunms', () => {
        let columns = ['Detaljer', 'Type', 'Tidspunkt', 'Skjema']
        columns.forEach(column => {
            cy.get('.MuiDataGrid-root').should("contain.text", column)
        })
        cy.get('.MuiDataGrid-root').should("not.contain.text", 'not_a_column')
    })

    it('should show details on details expand icon click', () => {
        cy.get('#\\32  > [data-testid="OpenInNewIcon"] > path').click()
        cy.get('.MuiDialogContent-root').should('be.visible')
    })

    it('error panel should contain correct column', () => {
        cy.get('#ERROR-panel').should('contain.text', "Feilmeldinger")
        cy.get('#ERROR-panel').should("not.contain.text", 'not_a_column')
    })
    it('should close the dialog on close button', () => {
        cy.get('.MuiDialogActions-root > .MuiButton-root').click()
    })
});
