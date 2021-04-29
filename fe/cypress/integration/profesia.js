describe("Integration Tests", () => {
  it("Basic navigation", () => {
    cy.visit("http://localhost:3000/");
    cy.get("[data-cy=0-board-link]").click();
    cy.url().should("include", "/board/");

    cy.get("[data-cy=back]").click();
    cy.url().should("equal", "http://localhost:3000/");

    cy.get("[data-cy=1-board-link]").click();
    cy.url().should("include", "/board/");
  });

  it("Creating Board, List & Item", () => {
    const randomName = (prefix) => `${prefix}-${Math.random() * 100000}`;
    const createEntity = (entity) => {
      const name = randomName(entity);
      cy.get(`[data-cy=${entity}-input]`).type(`${name}{enter}`);
      cy.contains(name);
      return name;
    };

    cy.visit("http://localhost:3000/");
    const randomBoardName = createEntity("board");
    cy.contains(randomBoardName).click();
    createEntity("list");
    createEntity("item");
  });
});
