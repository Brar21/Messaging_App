import data from "../../submissionData.json"; // do not create this file
// let data = [{ submission_link: "http://localhost:8080/", id: 67890 }];
import "cypress-localstorage-commands";
import apiData from "../fixtures/apiData.json";
import filterData from "../fixtures/filtered.json";
import sortData from "../fixtures/sorting.json";
describe("Test", function () {
  let acc_score = 1;

  data.map(({ submission_link: url, id }) => {
    if (url.charAt(url.length - 1) != "/") {
      url = url + "/";
    }
    if (url && url.length) {
      beforeEach(() => {
        cy.restoreLocalStorage();
      });
      afterEach(() => {
        cy.saveLocalStorage();
      });

      it(`Check if the api call made`, () => {
        cy.intercept(
          `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-coffee`,
          (req) => {
            req.reply({
              body: apiData,
            });
          }
        ).as("apiRequest");
        cy.visit(url);
        cy.wait("@apiRequest").then((data) => {
          acc_score += 1;
        });
      }); // 1
      it(`Student is able to loop through the data and append in the dom`, () => {
        cy.visit(url);
        cy.get("#menu-container")
          .children()
          .should("have.length", apiData.data.length)
          .then(() => {
            acc_score += 0.5;
          });
        cy.get("#menu-container")
          .should("have.css", "display", "grid")
          .then(() => {
            acc_score += 0.5;
          });
      }); // 1

      it(`Check the Sorting`, () =>{
        cy.intercept(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-coffee?sort=price&order=desc`,(req) =>{
          req.reply({
            body: sortData.descending
          })
        }).as("desApiCall");
        cy.intercept(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-coffee?sort=price&order=asc`,(req) =>{
          req.reply({
            body: sortData.ascending
          })
        }).as("ascApiCall");
        cy.get("#sort").select("Ascending").then(() =>{
          cy.wait("@ascApiCall").then(() =>{
            acc_score += 0.5
            cy.get("#menu-container>div")
            .eq(0)
            .contains(sortData.ascending.data[0].price).then(() =>{
              acc_score += 0.5;
            })
          })
        })

        cy.get("#sort").select("Descending").then(() =>{
          cy.wait("@desApiCall").then(() =>{
            acc_score += 0.5;
            cy.get("#menu-container>div")
            .eq(0)
            .contains(sortData.descending.data[0].price).then(() =>{
              acc_score += 0.5;
            })
          })
        })

      })// 2

      it(`Check the Filter Part`, () => {
        cy.get("#lower").clear().type(150);
        cy.get("#upper").clear().type(500);
        cy.get("#filter-btn").click();
        cy.get("#menu-container>div")
          .should("have.length", filterData.filter1.length)
          .then(() => {
            acc_score += 1;
          });
        cy.get("#lower").clear().type(300);
        cy.get("#upper").clear().type(600);
        cy.get("#filter-btn").click();
        cy.get("#menu-container>div")
          .should("have.length", filterData.filter2.length)
          .then(() => {
            acc_score += 1;
          });
      }); // 2

      it(`Bought some Cofees`, () => {
        cy.intercept(
          `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-coffee`
        ).as("apiRequest");
        cy.visit(url);
        cy.wait("@apiRequest").then(() => {
          expect(JSON.parse(localStorage.getItem("buy"))).to.eq(null);
        });
        cy.get("#menu-container>div")
          .eq(0)
          .children("button")
          .click()
          .then(() => {
            expect(JSON.parse(localStorage.getItem("buy")).length).to.eq(1);
            acc_score += 1;
          }); //1
        cy.get("#menu-container>div")
          .eq(1)
          .children("button")
          .click()
          .then(() => {
            expect(JSON.parse(localStorage.getItem("buy")).length).to.eq(2);
            acc_score += 0.5;
          }); //1
        cy.get("#alert")
          .should("have.text", "Successfully Placed Order")
          .then(() => (acc_score += 0.5));
      }); // 2
      it(`Buy same coffee again`, () => {
        cy.get("#menu-container>div")
          .eq(0)
          .children("button")
          .click()
          .then(() => {
            expect(JSON.parse(localStorage.getItem("buy")).length).to.eq(2);
            acc_score += 0.5;
          });
        cy.get("#alert")
          .should("have.text", "Already Placed Order")
          .then(() => (acc_score += 0.5));
      }); //1

      it(`Go To order page and check if able to show on dom`, () => {
        cy.visit(url);
        cy.get(".nav a").eq(1).click();
        cy.get("#order-container")
          .children()
          .should("have.length", 2)
          .then(() => {
            acc_score += 0.5;
          });
        cy.get("#order-total")
          .contains(640)
          .then(() => {
            acc_score += 0.5;
          });
      }); // 1

      it(`Increase-Decrease the quantity and check the total`, () => {
        cy.get("#order-container>div").eq(1).contains("button", "+").click();
        cy.get("#order-container>div").eq(1).contains("button", "+").click();
        cy.get("#order-total")
          .contains(840)
          .then(() => {
            acc_score += 0.5;
          });
        cy.get("#order-container>div").eq(1).contains("button", "-").click();
        cy.get("#order-total")
          .contains(740)
          .then(() => {
            acc_score += 0.5;
          });
      }); //1

      it(`Check the delete part`, () => {
        cy.get("#order-container")
          .children()
          .eq(0)
          .contains("button", "Cancel")
          .click()
          .then(() => {
            expect(JSON.parse(localStorage.getItem("buy")).length).to.eq(1);
            acc_score += 1;
          });
        cy.get("#order-container>div")
          .should("have.length", 1)
          .then(() => {
            acc_score += 0.5;
          });
        cy.get("#order-total")
          .contains(200)
          .then(() => {
            acc_score += 0.5;
          });
      }); // 2

      it(`Apply Cupon Code`, () => {
        cy.get("#cupon > input").clear().type("mas");
        cy.get("#cupon > button").click();
        cy.get("#order-total")
          .contains(Math.floor(200))
          .then(() => {
            acc_score += 0.5;
          });
        cy.get("#cupon > input").clear().type("Masai30");
        cy.get("#cupon > button").click();
        cy.get("#order-total")
          .contains(Math.floor(Math.floor(200 * 0.7)))
          .then(() => {
            acc_score += 0.5;
          });
      });
    }

    it(`generate score`, () => {
      //////////////
      console.log(acc_score);
      let result = {
        id,
        marks: Math.floor(acc_score),
      };
      result = JSON.stringify(result);
      cy.writeFile("results.json", `\n${result},`, { flag: "a+" }, (err) => {
        if (err) {
          console.error(err);
        }
      });
      //////////////////
    });
  });
});
