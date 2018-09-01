// Grab the articles as a json
$.getJSON("/articles", function(data) {
  $("#articles").empty();
  // For each one
  for (let i = 0; i < data.length; i++) {
    // Display the info on the page
    $("#articles").append(
      "<div id='articleDiv'><div id='topDiv'><h1 id='headline' data-id='" +
        data[i]._id +
        "'>" +
        "<a href='" +
        data[i].link +
        "'>" +
        data[i].title +
        " " +
        "</h1></a></div><p><br /><div class='details'>" +
        data[i].details +
        "</p></div><button id='addBtn'><i class='far fa-bookmark'></i>&nbsp Save</button><button id='noteBtn'><i class='far fa-comment-alt'></i>&nbsp Comment</button></div>"
    );
  }
});

// $.getJSON("/articles/saved", function (data) {
//   // For each one
//   for (let i = 0; i < data.length; i++) {
//     // Display the apropos information on the page
//     $("#articles").empty();
//     $("#articles").append("<div id='articleDiv'><div id='topDiv'><h1 id='headline' data-id='" + data[i]._id + "'>" + "<a href='" + data[i].link + "'>" + data[i].title + " " + "<i class='fas fa-external-link-alt'></i></a></h1></div><p>" + "<br />" + data[i].details + "</p></div><div id='notes'></div>");
//   }
// });

// Whenever someone clicks a p tag
// $(document).on("click", "p", function () {
//   // Empty the notes from the note section
//   $("#notes").empty();
//   // Save the id from the p tag
//   var thisId = $(this).attr("data-id");

//   // Now make an ajax call for the Article
//   $.ajax({
//     method: "GET",
//     url: "/articles/" + thisId
//   })
//     // With that done, add the note information to the page
//     .then(function (data) {
//       console.log(data);
//       // The title of the article
//       $("#notes").append("<h2>" + data.title + "</h2>");
//       // An input to enter a new title
//       $("#notes").append("<input id='titleinput' name='title' >");
//       // A textarea to add a new note body
//       $("#notes").append("<textarea id='bodyinput' name='body'></textarea>");
//       // A button to submit a new note, with the id of the article saved to it
//       $("#notes").append("<button data-id='" + data._id + "' id='savenote'>Save Note</button>");

//       // If there's a note in the article
//       if (data.note) {
//         // Place the title of the note in the title input
//         $("#titleinput").val(data.note.title);
//         // Place the body of the note in the body textarea
//         $("#bodyinput").val(data.note.body);
//       }
//     });
// });



  //When you click 
  // $("#articles").empty();
  // for (let i = 0; i < allSaved.length; i++) {
  //   $("#articles").append(
  //     "<div id='articleDiv'><div id='topDiv'><h1 id='headline' data-id='" +
  //       data[i]._id +
  //       "'>" +
  //       "<a href='" +
  //       data[i].link +
  //       "'>" +
  //       data[i].title +
  //       " " +
  //       "<i class='fas fa-external-link-alt'></i></a></h1></div><p>" +
  //       "<br />" +
  //       data[i].details +
  //       "</p></div><div id='notes'></div>"
  //   );
  // }

  //When you click the home button
  $(document).on("click", "#home", function() {
    // Grab the id associated with the article from the submit button
    var thisId = $(this).attr("data-id");

    // Run a POST request to change the note, using what's entered in the inputs
    $.ajax({
      method: "POST",
      url: "articles",
      data: {
        // Value taken from title input
        title: $("#titleinput").val(),
        // Value taken from note textarea
        body: $("#bodyinput").val()
      }
    })
      // With that done
      .then(function(data) {
        // Log the response
        console.log(data);
      });

    // Also, remove the values entered in the input and textarea for note entry
    $("#titleinput").val("");
    $("#bodyinput").val("");
  });

  // When you click the savenote button
  $(document).on("click", "#addBtn", function() {
    // Grab the id associated with the article from the submit button
    var thisId = $(this).attr("data-id");
    db.articles.updateOne(thisId, { saved: true });
    // Run a POST request to change the note, using what's entered in the inputs
    $.ajax({
      method: "UPDATE",
      url: "/saved"
    })
      // With that done
      .then(function(data) {
        // Log the response
        console.log(data);
      });

    // Also, remove the values entered in the input and textarea for note entry
    $("#titleinput").val("");
    $("#bodyinput").val("");
  });

  $(document).on("click", "#clear", function(err, res) {
    db.articles.deleteMany();
    res: articles.delete_many({"saved": false})
  });

  //Attempt at using Vue
  // var app = new Vue({
  //   el: '#articles',
  //   data: {
  //     title: "",
  //     details: ""
  //   },
  // })

  // $.getJSON('articles', function (json) {
  //   app.json = json;
  // })
// });
