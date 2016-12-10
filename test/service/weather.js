var chai = require("chai"),
	expect = chai.expect,
	should = chai.should(),
	supertest = require("supertest");

	var server = supertest.agent("http://api.openweathermap.org");


	describe("weather api test suite", function(){

		it("should get weather details", function(done){
			server.get("/data/2.5/weather?q=London,uk&appid=837f4f14a1346dc5486efe55e7de9285")
				  .expect(200)
				  .expect("content-type",/json/)
				  .end(function(err, res) {
				  	console.log(res.body);
				  	done();
				  })
		})

	})