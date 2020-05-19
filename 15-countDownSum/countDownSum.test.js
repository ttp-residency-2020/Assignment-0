// This file is only for viewing;

let StudentSolution = require("./countDownSum");
const { expect } = require("chai");
const sinon = require("sinon");

describe("the countDownSum(num) function", function () {

  let submittedSolution;

  beforeEach(function() {
    submittedSolution = new StudentSolution();
  })

  it("should return a number", function () {
    expect(submittedSolution.countDownSum(3), "the output is not a finite number").to.be.finite;
  })

  it("should return the sum of all numbers from `num` down to and including 1", function () {
    expect(submittedSolution.countDownSum(10)).to.equal(55);
  })

  it("should be implemented recursively", function () {
    let mySpy = sinon.spy(submittedSolution, "countDownSum");
    
    submittedSolution.countDownSum(5);
    expect(mySpy.callCount).to.equal(5);
    
    mySpy.resetHistory();

    submittedSolution.countDownSum(10);
    expect(mySpy.callCount).to.equal(10);

    mySpy.restore();
  })

  it("should pass auxillary test cases", function() {
    expect(submittedSolution.countDownSum(1)).to.equal(1);
    expect(submittedSolution.countDownSum(2)).to.equal(3);
    expect(submittedSolution.countDownSum(3)).to.equal(6);
    expect(submittedSolution.countDownSum(4)).to.equal(10);
    expect(submittedSolution.countDownSum(100)).to.equal(5050);
  })

});
