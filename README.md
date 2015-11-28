# ExampleWork

##Example Useage

###PHP

####New Enquiry

$enquiry 		= new Enquiry()
$enquiry->name 		= $_POST['name'];
$enquiry->email 	= $_POST['email'];
$enquiry->enquiry 	= $_POST['enquiry'];

if ( $enquiry->valid() ) { }
$errors = $enquiry->getErrors();
$enquiry->save();

###Javascript

####New Enquiry

var enquiry = new Enquiry();
enquiry.ename = $('#name').val();
enquiry.email = $('#email').val();
enquiry.enquiry = $('#enquiry').val();
enquiry.nonce = nonce;

enquiry.valid();
enquiry.submitEnquiry(function(response)
{
  // Callback code here
});
var errors = enquiry.getErrors();
