import '@testing-library/cypress/add-commands'

const bankPaymentBtn: string = 'bank-payment-btn';
const amountInput: string = 'amount-input';
const emailInput: string = 'email-input';
const privacyPolicyTermsCheckbox: string = 'checkmark-icon';
const termsAndConditionsAlert: string = '[role="alert"]';
const bankName: string = 'SWEDBANK_LT';

const termsAndConditionsText: string = 'You have to agree to the terms and conditions and privacy policy';

const generateReceiverCardLocator = (receiverName: string): string => `${receiverName}-card`;
const clickThePayButton = () => cy.findByText('PAY').click();
const enterAmountToDonate = (amount: string) => cy.findByTestId(amountInput).type(amount);

it('makes a donation on the bank payment demo page', () => {
    cy.setCookieConsent();
    cy.visit('/');
    cy.findByTestId(bankPaymentBtn).click();
    cy.findByTestId(generateReceiverCardLocator('mamu-unija')).click({force: true});
    enterAmountToDonate(Cypress.env().amount);
    cy.findByTestId(emailInput).type(Cypress.env().email);
    cy.get(`[value="${bankName}"]`).click({force: true});
    clickThePayButton();
    cy.get(termsAndConditionsAlert).last()
        .should('contain.text', termsAndConditionsText)
        .and('have.css', 'color')
        .and('eq', 'rgb(255, 59, 48)');
    cy.findByTestId(privacyPolicyTermsCheckbox).click();
    cy.get(termsAndConditionsAlert).last()
        .should('not.contain.text', termsAndConditionsText);
    clickThePayButton();
    cy.url()
        .should('contain', `redirectPreferred=true&bankId=${bankName}`);
    cy.visit('/').getCookie('kevin-demo-page-necessary-cookies')
        .should('have.property', 'value', 'true')
})
