window.onload = function() {
	test("Enquiries tests.", function() {
		var enquiry = new Enquiry();
		enquiry.name = 'Joe Bloggs';
		enquiry.email = 'joe@blogs.com';
		var enquiryValid = enquiry.valid();
		assert(enquiryValid, "Enquiry is valid");
		
		var enquiry2 = new Enquiry();
		enquiry2.name = 'Joe Bloggs';
		enquiry2.email = 'joeblogscom';
		var enquiry2Valid = (enquiry2.valid()) ? false : true;
		assert(enquiry2Valid, "joeblogscom does not validate as an Email address");
		//assert(true, "Third assertion completed");
	});
	// test("Another test.", function() {
	// 	assert(true, "First assertion completed");
	// 	assert(false, "Second assertion failed");
	// 	assert(true, "Third assertion completed");
	// });
	// test("A third test.", function() {
	// 	assert(null, "fail");
	// 	assert(5, "pass");
	// });
}