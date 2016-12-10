var assert = require("chai").assert,
	expect = require("chai").expect,
	should = require("chai").should();

describe("My first test suite", function(){

	before("before test", function() {
		console.log("before test");
	})

	beforeEach("before each test", function() {
		console.log("before each test");
	})


	after("after test", function() {
		console.log("after test");
	})


	afterEach("after each test", function() {
		console.log("after each test");
	})

	it("should return true", function(){
		var name = "Scott";
		expect(name).to.be.equal("Scott");

	});

	it("should return anything", function(){
		var name = "Scott";
		expect(name).to.be.equal("Scott");

	});

	it("should return something", function(){
		var name = "Scott";
		expect(name).to.be.equal("Scott");

	});

	
})