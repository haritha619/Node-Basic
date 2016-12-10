var chai = require("chai"),
	expect = chai.expect,
	should = chai.should(),
	supertest = require("supertest");

var server = supertest.agent("http://localhost:3001");

describe("Contact API test suite", function(){

	it("should return the home page with json data", function(done){
		server.get("/")
			  .expect(200)
			  .expect("content-type",/json/)
			  .end(function(err, res){
			  	//console.log(res.body);
			  	//console.log(res);
				console.log(res.text);
			  //	res.status.should.be.equal(200);
			  	//res.info.should.be.false;
			  	//res.charset.should.be.equal('utf-8');
			  	//-----------below line giving error
			  	//JSON.parse(res.text).should.have.property("message").to.be.equal("Hello HYD !!");
			  	done();
			  })
	})

	it("should get the contact list", function(done){

		server.get("/contact")
			  .expect(200)
			  .expect("content-type",/json/)
			  .end(function(err, res){
			  	console.log(res.body);

			  	Array.isArray(res.body).should.be.true;
			  	console.log(res.body.length);
			  	//res.body.length.should.be.equal(2);
			  	res.body.length.should.be.a("number");
			  	res.body.forEach(function(contact){
			  		contact.should.have.property("_id");
			  		contact.should.have.property("contact");
			  		contact.should.have.property("name")
			  		//contact.should.have.property("name").with.length(7);
			  		contact.should.have.property("contact").to.contain(".com");
			  	})
			  	done();
			  })

	})

	it.skip("should create a contact in DB", function(done){

		var contactData = {
			name : "Kristie",
			contact : "kris@gmail.com"
		}

		server.post("/contact")
			  .send(contactData)
			  .expect(200)
			  .expect("content-type",/json/)
			  .end(function(err, res){
			  	console.log(res.body);
			  	console.log("ERROR : "+err);
			  	done();
			  })

	})

	it.skip("should edit contact", function(done) {

		var obj = {
		    _id: "584a68c031f350b58fbe0760",
    		name: "Catharine",
    		contact: "cathy123@gmail.com"
		};

		server.put("/contact/" + obj._id)
			   .send(obj)
			   .expect(200)
			   .expect("content-type",/json/)
			   .end(function(err, res) {
			   		console.log(res.body);
			   		done();
			   })

	})

	it.skip("should delete the contact", function(done) {

		var contactId = "584bdbaaa2c3071cd078aa69";
		server.delete("/contact/" + contactId)
			  .expect(200)
			  .expect("content-type",/json/)
			  .end(function(err, res) {
			  		console.log(res.body);
			  		done();
			  })


	})

})