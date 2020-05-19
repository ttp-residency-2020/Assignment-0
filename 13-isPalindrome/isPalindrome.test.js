// This file is only for viewing;

const isPalindrome = require("./isPalindrome");
const { expect } = require("chai");

describe("the isPalindrome(word) function", function() {

  it("should return a boolean value", function() {
    let submittedSolution = isPalindrome("banana");
    expect(submittedSolution, "the output is not a boolean value").to.be.a("boolean");
  })

  it("should return true if the input `word` is a palindrome", function() {
    let submittedSolution = isPalindrome("racecar");
    expect(submittedSolution).to.be.true;
  })

  it("should return false if the input `word` is not a palindrome", function() {
    let submittedSolution = isPalindrome("banana");
    expect(submittedSolution).to.be.false;
  })

  it("should pass auxillary test cases", function() {
    let submittedSolution = isPalindrome;
    expect(submittedSolution("a")).to.be.true;
    expect(submittedSolution("aa")).to.be.true;
    expect(submittedSolution("hi")).to.be.false;
    expect(submittedSolution("hello")).to.be.false;
    expect(submittedSolution("train")).to.be.false;
  })

})