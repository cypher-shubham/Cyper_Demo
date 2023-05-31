describe('My First Test', () => {
  it('Visit Guru 99 ', () => {
    cy.visit('https://www.guru99.com/')
    cy.contains("➤ Software Testing").click()
    cy.contains('About Us').click()
    //cy.get('[data-cy="➤ Software Testing"]').click()
    //comment
  })
})