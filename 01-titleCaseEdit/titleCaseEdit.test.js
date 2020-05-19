// This file is only for viewing;

const titleCaseEdit = require("./titleCaseEdit");
const { expect } = require("chai");

describe("the titleCaseEdit(title) function", function() {

  it("should return a string", function() {
    let submittedSolution = titleCaseEdit("The Alchemist");
    expect(submittedSolution, "the output is not a string").to.be.a("string");
  })

  it("should return a string of the same length as the input title", function() {
    let submittedSolution = titleCaseEdit("love");
    expect(submittedSolution, "the output possesses a length differing from the length of the input title").to.have.lengthOf(4);
  })

  it("should pass auxillary test cases", function() {
    let auxillaryTestCases = ["the sun also rises", "east Of Eden", "a scanner Darkly", "The Invisible Man", "Get out"];
    let submittedSolution = titleCaseEdit;
    expect(submittedSolution(auxillaryTestCases[0])).to.equal("The Sun Also Rises");
    expect(submittedSolution(auxillaryTestCases[1])).to.equal("East Of Eden");
    expect(submittedSolution(auxillaryTestCases[2])).to.equal("A Scanner Darkly");
    expect(submittedSolution(auxillaryTestCases[3])).to.equal("The Invisible Man");
    expect(submittedSolution(auxillaryTestCases[4])).to.equal("Get Out");
  })

})