declare namespace Cypress {
    interface Chainable<Subject = any> {
        setCookieConsent(): Chainable<any>;
    }
}
