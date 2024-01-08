const newItems = ["Feed the cat", "Go to store", "Buy fruits"];

describe("test task app", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("can add new todo items", () => {
    cy.wait(500);
    const input = cy.get("input");
    newItems.forEach((item) => {
      input.type(item);
      cy.get(".add-btn").click();
    });

    cy.get(".list-items div.v-card")
      .should("have.length", 3)
      .last()
      .should("have.text", newItems[2]);

    cy.get("div.v-card")
      .contains(newItems[0])
      .parent()
      .parent()
      .find("input[type=checkbox]")
      .check();

    cy.get("div.v-card")
      .contains(newItems[2])
      .parent()
      .parent()
      .find("input[type=checkbox]")
      .check();

    cy.get("div.v-card")
      .contains(newItems[0])
      .should("have.class", "text-decoration-line-through");

    cy.get("div.v-card")
      .contains(newItems[2])
      .should("have.class", "text-decoration-line-through");

    cy.get("div.v-card")
      .contains(newItems[2])
      .parent()
      .parent()
      .find("button")
      .click();

    cy.get(".list-items div.v-card")
      .should("have.length", 2)
      .should("not.have.text", newItems[2]);

    cy.get("div.v-card")
      .contains(newItems[0])
      .parent()
      .parent()
      .find("button")
      .click();

    cy.get(".list-items div.v-card")
      .should("have.length", 1)
      .should("not.have.text", newItems[0]);
  });
});
