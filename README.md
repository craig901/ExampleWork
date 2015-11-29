# ExampleWork

###Example Useage

####PHP (Create Enquiry)

<pre>
$enquiry 		        = new Enquiry();
$enquiry->name 		  = $_POST['name'];
$enquiry->email 	  = $_POST['email'];
$enquiry->enquiry 	= $_POST['enquiry'];

if ( $enquiry->valid() ) {
  $enquiry->save();
} else {
  $errors = $enquiry->getErrors();
}
</pre>

####PHP (Get Enquiry)

<pre>
$enquiry = Enquiry::get($id);
</pre>

####PHP (Delete Enquiry)

<pre>
$enquiry = Enquiry::get($id);
$enquiry->delete();
</pre>

###Javascript (New Enquiry)

<pre>
var enquiry         = new Enquiry();
enquiry.ename       = $('#name').val();
enquiry.email       = $('#email').val();
enquiry.enquiry     = $('#enquiry').val();
enquiry.nonce       = nonce;

enquiry.valid();
enquiry.submitEnquiry(function(response)
{
  // Callback code here
});
var errors = enquiry.getErrors();
</pre>
