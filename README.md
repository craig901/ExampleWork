# ExampleWork

##Example Useage

###PHP

####New Enquiry

<pre>
$enquiry 		= new Enquiry();<br />
$enquiry->name 		= $_POST['name'];<br />
$enquiry->email 	= $_POST['email'];<br />
$enquiry->enquiry 	= $_POST['enquiry'];<br />

if ( $enquiry->valid() ) { }<br />
$errors = $enquiry->getErrors();<br />
$enquiry->save();<br />
</pre>

###Javascript

####New Enquiry

<pre>
var enquiry = new Enquiry();<br />
enquiry.ename = $('#name').val();<br />
enquiry.email = $('#email').val();<br />
enquiry.enquiry = $('#enquiry').val();<br />
enquiry.nonce = nonce;<br />

enquiry.valid();<br />
enquiry.submitEnquiry(function(response)<br />
{<br />
  // Callback code here<br />
});<br />
var errors = enquiry.getErrors();
</pre>
