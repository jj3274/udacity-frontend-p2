/*
This is empty on purpose! Your code to build the resume will go here.
 */

$('#header').prepend(HTMLheaderRole.replace('%data%',bio.role));
$('#header').prepend(HTMLheaderName.replace('%data%',bio.name));
$('#topContacts').append(HTMLmobile.replace('%data%',bio.contacts.mobile));
$('#topContacts').append(HTMLemail.replace('%data%',bio.contacts.email));
$('#topContacts').append(HTMLtwitter.replace('%data%',bio.contacts.twitter));
$('#topContacts').append(HTMLgithub.replace('%data%',bio.contacts.github));
$('#topContacts').append(HTMLlocation.replace('%data%',bio.contacts.location));
$('#header').append(HTMLbioPic.replace('%data%',bio.biopic));
$('#header').append(HTMLwelcomeMsg.replace('%data%',bio.welcomeMessage));
$('#header').append(HTMLskillsStart);
for(var i in bio.skills) {
//for(var i = 0; i < bio.skills.length; i++) {
  $('#skills').append(HTMLskills.replace('%data%',bio.skills[i]));
}
