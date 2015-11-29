# ExampleWork

This an example app that I have used to build Jengnet.co.uk. It is based on the MVC pattern and is fairly extendible.

###Example Useage

####PHP (Create Enquiry)

<pre>
$enquiry 		= new Enquiry();
$enquiry->name 		= $_POST['name'];
$enquiry->email         = $_POST['email'];
$enquiry->enquiry       = $_POST['enquiry'];

if ( $enquiry->valid() ) {
  $enquiry->save();
} else {
  $errors = $enquiry->getErrors();
}
</pre>

####PHP (Read Enquiry)

<pre>
$enquiry = Enquiry::get($id);
</pre>

####PHP (Update Enquiry)

<pre>
$enquiry = Enquiry::get($id);
$enquiry->name = "Joe Bloggs";
$enquiry->save();
</pre>

####PHP (Delete Enquiry)

<pre>
$enquiry = Enquiry::get($id);
$enquiry->delete();
</pre>

####Javascript (Create Enquiry)

<pre>
var enquiry         = new Enquiry();
enquiry.ename       = $('#name').val();
enquiry.email       = $('#email').val();
enquiry.enquiry     = $('#enquiry').val();
enquiry.nonce       = nonce;

if ( enquiry.valid() ) {
  enquiry.submitEnquiry(function(response)
  {
    // Do success stuff
  });
} else {
  self.errors = enquiry.getErrors();
  // Do error stuff
}
</pre>

####Javascript (Delete Enquiry)

<pre>
var enquiry = new Enquiry();
enquiry.enquiryID = id;
enquiry.ajaxAction = 'delete-enquiry';
enquiry.nonce = nonce;

enquiry.deleteEnquiry(function()
{
	// Do success stuff
});
</pre>
