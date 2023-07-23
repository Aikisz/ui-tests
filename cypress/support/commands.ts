Cypress.Commands
    .add('setCookieConsent', () =>
        cy.setCookie('kevin-demo-page-necessary-cookies', 'true')
    );
