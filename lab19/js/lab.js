//Kalyn Daum

endpoint = "https://api.whatdoestrumpthink.com/api/v1/quotes/random"

$("#my-button").click(function() {
		//alert("pressed");
  // Using the core $.ajax() method
  $.ajax({
      // The URL for the request
      url: endpoint,
      // The data to send (will be converted to a query string)
      //data: {
      //id: 123
      // },
      // Whether this is a POST or GET request
      type: "GET",
      // The type of data we expect back
      dataType: "json",
    })
    // If the request succeeds
    .done(function(data) {
      //alert("Success!");
      var ourRecievedObject= data;
      var quote = ourRecievedObject.message;
      //output quote
      $("#output").append("<h6>"+quote)
    })
    // If the request fails
    .fail(function(xhr, status, errorThrown) {
      console.log(errorThrown + " Status:" + status);
    });
});
