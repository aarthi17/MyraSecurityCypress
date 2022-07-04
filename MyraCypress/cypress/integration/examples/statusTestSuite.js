/// <reference types="cypress" />
import MainPage from "../../support/pageObject/mainPage";
import Maintenance from "../../support/pageObject/maintenance";

describe('Validate Login feature ', function (){
    
    let data
    
    beforeEach(function () {
      
      cy.visit(Cypress.env("url"));

      cy.fixture("input").then(function (fdata) {
        data = fdata;
      })

      })

      const mainpage = new MainPage();
      const maintenance = new Maintenance();


      it('Validate if current date is displayed', () => {
        
        var options = { weekday: 'long', year: 'numeric', day: 'numeric', month: 'long' };
        var today  = new Date();
        let date = today.toLocaleDateString("en-DE", options)        
        
        mainpage.getDateHeader().invoke('text').then((text=>{
          expect(text.trim()).to.contains("Status for " + date)
        }))
        

      })

      it('Validate the no log status', () => {

        mainpage.getMaintenance().click()
        
        maintenance.getLogs()
        .then(log => {
             const logCount = Cypress.$(log).length - 1;
            if(!logCount)
            {
              maintenance.getNologsMsg().invoke('text').then((text=>{
              expect(text.trim()).to.contains(data.noReports)
            }))
          }
            
           });
      })
  
   

})