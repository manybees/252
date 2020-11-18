//Kalyn Daum

//where the comic comes from the API Data
url = "https://xkcd.com/2385/info.0.json"

// Use $.getJSON() to retrieve data and store this object in a variable comicObj. Here's detailed info on the getJSON() method.
// Process the parts and add them to your webpage with the appropriate tags.
// Give the section a title using the comicObj.title key from the object
// Create an image tag using the comicObj.img key from the object
// Give the image an alt attribute using the comicObj.alt key from the object

$.getJSON(url, function(data) {

      var comicObj= data;
      var title = comicObj.title;
      var img = comicObj.img
      var alt = comicObj.alt
      
 // do stuff if we succeed

 console.log(data);

 //output quote
      $("#output").append("<h6>"+ title + "</h6>" + "<br>" + alt)
      $("#img").attr("src", img)

});