class Maintenance{

    getNologsMsg()
    {
        return cy.get('.no-results')
    }

    getLogs()
    {
        return cy.get('.status-messages').find('>div')
    }

    
}

export default Maintenance;