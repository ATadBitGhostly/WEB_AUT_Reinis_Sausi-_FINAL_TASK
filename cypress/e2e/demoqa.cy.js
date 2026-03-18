import { FormPage } from "./pageObjects/formPage";

describe('Final Task scenario.', () => {
  beforeEach(() => {
    FormPage.visit();
  });

  it.only('Form Testing Scenario', () => {

    const formInputs = {
      firstName: 'George',
      lastName: 'Griffin',
      email: 'GriffG@gmail.com',
      mobile: '678954320',
      year: '1930',
      month: '2',
      day: '28',
      subject: 'Economics',
      state: 'NCR',
      city: 'Delhi',
    }

    FormPage.nameInput.type(formInputs.firstName);
    FormPage.surnameInput.type(formInputs.lastName);
    FormPage.emailInput.type(formInputs.email);
    FormPage.genderMaleInput.click();
    FormPage.mobileInput.type(formInputs.mobile);
    
    FormPage.dateOfBirthBox.click();
    FormPage.dobYear.select(formInputs.year)
    FormPage.dobMonth.select(formInputs.month)
    FormPage.dobMonthContainer.contains('.react-datepicker__day', formInputs.day).click();

    FormPage.subjectsBox.type(formInputs.subject);
    FormPage.subjectAutoCompleteBox.contains(formInputs.subject).click();

    FormPage.hobbyMusicChkBox.click();

    FormPage.pictureBox.selectFile('cypress/fixtures/files/dyinglightTheBeast.avif');

    FormPage.stateSelect.click().type(formInputs.state + '{enter}');
    FormPage.citySelect.click().type(formInputs.city + '{enter}');

    FormPage.submitBtn.click();

    FormPage.nameValid.contains(formInputs.firstName + " " + formInputs.lastName).should('be.visible');
    FormPage.emailValid.contains(formInputs.email).should('be.visible');
    FormPage.genderValid.contains('Male').should('be.visible');
    FormPage.mobileValid.contains(formInputs.mobile).should('be.visible');
    FormPage.dobValid.contains('28 February,1930').should('be.visible');
    FormPage.subjectsValid.contains(formInputs.subject).should('be.visible');
    FormPage.hobbyValid.contains('Music').should('be.visible');
    FormPage.pictureValid.contains('dyinglightTheBeast.avif').should('be.visible');
    FormPage.stateAndCityValid.contains(formInputs.state + ' ' + formInputs.city).should('be.visible');

  })
});