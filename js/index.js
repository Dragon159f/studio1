// Write your JS here
import test from './database.js';

console.log('test');

test();

var database = firebase.database();
var databaseRef = database.ref('/');
databaseRef.once('value').then(function(snapshot) {
  const databaseValues = snapshot.val();
  console.log(databaseValues);
$("#cats").append("<li>" + databaseValues.neko.neko1 + "</li>");
ref.set({
  threads: [
    comments{
      messages: "fda";
    }
  ]
});