import { BasePage } from "./basePage";

export class FormPage extends BasePage {
    static get url() {
        return '/automation-practice-form';
    }

    static get nameInput() {
        return cy.get('#firstName');
    }

    static get surnameInput() {
        return cy.get('#lastName');
    }

    static get emailInput() {
        return cy.get('#userEmail');
    }

    static get genderMaleInput() {
        return cy.get('#gender-radio-1');
    }

    static get mobileInput() {
        return cy.get('#userNumber');
    }

    static get dateOfBirthBox() {
        return cy.get('#dateOfBirthInput');
    }

    static get dobYear() {
        return cy.get('.react-datepicker__year-select');
    }

    static get dobMonth() {
        return cy.get('.react-datepicker__month-select');
    }

    static get dobMonthContainer() {
        return cy.get('.react-datepicker__month-container');
    }

    static get subjectsBox() {
        return cy.get('#subjectsContainer');
    }

    static get subjectAutoCompleteBox() {
        return cy.get('.subjects-auto-complete__menu');
    }

    static get hobbyMusicChkBox() {
        return cy.get('#hobbies-checkbox-3');
    }

    static get pictureBox() {
        return cy.get('#uploadPicture');
    }

    static get stateSelect() {
        return cy.get('#react-select-3-input');
    }

    static get citySelect() {
        return cy.get('#react-select-4-input');
    }

    static get submitBtn() {
        return cy.get('#submit');
    }

    static get nameValid() {
        return cy.get('tbody tr:nth-child(1) td:nth-child(2)');
    }
    
    static get emailValid() {
        return cy.get('tbody tr:nth-child(2) td:nth-child(2)');
    }
    
    static get genderValid() {
        return cy.get('tbody tr:nth-child(3) td:nth-child(2)');
    }
    
    static get mobileValid() {
        return cy.get('tbody tr:nth-child(4) td:nth-child(2)');
    }
    
    static get dobValid() {
        return cy.get('tbody tr:nth-child(5) td:nth-child(2)');
    }
    
    static get subjectsValid() {
        return cy.get('tbody tr:nth-child(6) td:nth-child(2)');
    }
    
    static get hobbyValid() {
        return cy.get('tbody tr:nth-child(7) td:nth-child(2)');
    }
    
    static get pictureValid() {
        return cy.get('tbody tr:nth-child(8) td:nth-child(2)');
    }
    
    static get stateAndCityValid() {
        return cy.get('tbody tr:nth-child(10) td:nth-child(2)');
    }

}