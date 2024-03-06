/**
 * Challenge: Add more animals so you can vote for more favorites.
 */
 
//When the cat is clicked, add an entry to the voteTable database
onEvent("catImage", "click", function() {
  createRecord("voteTable", {animal:'Cat'}, function(record) {
    showResults();
  });
});

//When the dog is clicked, add an entry to the voteTable database
onEvent("dogImage", "click", function() {
  createRecord("voteTable", {animal:'Dog'}, function(record) {
    showResults();
  });
});

onEvent("voteAgain", "click", function() {
  setScreen("voteScreen");
});

// Read all the records from the database, tally up the votes
// for cats vs. dogs, and then show the results in a chart
function showResults() {
  setScreen("resultsScreen");
  readRecords("voteTable", {}, function(records) {
    var dogVotes = 0;
    var catVotes = 0;
    var totalVotes = records.length;
    for (var i =0; i < totalVotes; i++) {
      if(records[i].animal == "Cat"){
        catVotes++;
      }
      else{
        dogVotes++;
      }
    }
    drawChart("resultsChart", "pie", [
    	{ label: "Cats", value: (catVotes/totalVotes*100) },
    	{ label: "Dogs", value: (dogVotes/totalVotes*100) }
    ]);
  });
}


/**
 * Image attribution:
 * Kitten: https://www.flickr.com/photos/grovesa16/12139930183
 * Puppy: https://www.flickr.com/photos/53887959@N07/4985420598
 **/
