class MainPage{

getDateHeader()
{
    return  cy.get('h1')
}

getMaintenance()
{
    return  cy.contains('Maintenance')
}

    
}

export default MainPage;