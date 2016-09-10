/*
This is empty on purpose! Your code to build the resume will go here.
 */
/**
Header Section
*/
bio.display = function() {
    $('#header').prepend(HTMLheaderRole.replace('%data%', bio.role));
    $('#header').prepend(HTMLheaderName.replace('%data%', bio.name));
    $('#topContacts, #footerContacts').append(HTMLmobile.replace('%data%', bio.contacts.mobile));
    $('#topContacts, #footerContacts').append(HTMLemail.replace('%data%', bio.contacts.email));
    $('#topContacts, #footerContacts').append(HTMLtwitter.replace('%data%', bio.contacts.twitter));
    $('#topContacts, #footerContacts').append(HTMLgithub.replace('%data%', bio.contacts.github));
    $('#topContacts, #footerContacts').append(HTMLlocation.replace('%data%', bio.contacts.location));
    $('#header').append(HTMLbioPic.replace('%data%', bio.biopic));
    $('#header').append(HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage));
    $('#header').append(HTMLskillsStart);

    for (var i = 0; i < bio.skills.length; i++) {
        $('#skills').append(HTMLskills.replace('%data%', bio.skills[i]));
    }
};

/**
Work Experience Section
*/
work.display = function() {
    for (var i = 0; i < work.jobs.length; i++) {
        $('#workExperience').append(HTMLworkStart);

        var HTMLworkEmployerAndTitle = HTMLworkEmployer.replace('%data%', work.jobs[i].employer) +
            HTMLworkTitle.replace('%data%', work.jobs[i].title);

        var lastWorkEntry = $('#workExperience .work-entry:last-child');
        lastWorkEntry.append(HTMLworkEmployerAndTitle);
        lastWorkEntry.append(HTMLworkDates.replace('%data%', work.jobs[i].dates));
        lastWorkEntry.append(HTMLworkLocation.replace('%data%', work.jobs[i].location));
        lastWorkEntry.append(HTMLworkDescription.replace('%data%', work.jobs[i].description));
    }
};

//Projects Section//
projects.display = function() {
    for (var i = 0; i < projects.projects.length; i++) {
        $('#projects').append(HTMLprojectStart);

        var lastProjectsEntry = $('#projects .project-entry:last-child');
        lastProjectsEntry.append(HTMLprojectTitle.replace('%data%', projects.projects[i].title));
        lastProjectsEntry.append(HTMLprojectDates.replace('%data%', projects.projects[i].dates));

        lastProjectsEntry.append(HTMLprojectDescription.replace('%data%', projects.projects[i].description));

        for (var j = 0; j < projects.projects[i].images.length; j++) {
            lastProjectsEntry.append(HTMLprojectImage.replace('%data%', projects.projects[i].images[j]));
        }

        lastProjectsEntry.find('img').attr('width', '200px');
    }
};

//Education section//
education.display = function() {
    for (var i = 0; i < education.schools.length; i++) {
        $('#education').append(HTMLschoolStart);

        var lastEducationEntry = $('#education .education-entry:last-child');
        var HTMLschoolNameAndDegree = HTMLschoolName.replace('%data%', education.schools[i].name) +
            HTMLschoolDegree.replace('%data%', education.schools[i].degree);

        lastEducationEntry.append(HTMLschoolNameAndDegree);
        lastEducationEntry.append(HTMLschoolDates.replace('%data%', education.schools[i].dates));
        lastEducationEntry.append(HTMLschoolLocation.replace('%data%', education.schools[i].location));
        lastEducationEntry.append(HTMLschoolMajor.replace('%data%', education.schools[i].majors));
    }

    $('#education').append(HTMLonlineClasses);

    for (var k = 0; k < education.onlineCourses.length; k++) {
        $('#education').append(HTMLschoolStart);

        var lastOnlineEntry = $('#education .education-entry:last-child');
        lastOnlineEntry.append(HTMLonlineTitle.replace('%data%', education.onlineCourses[k].title) +
            HTMLonlineSchool.replace('%data%', education.onlineCourses[k].school));
        lastOnlineEntry.append(HTMLonlineDates.replace('%data%', education.onlineCourses[k].dates));
        lastOnlineEntry.append(HTMLonlineURL.replace('%data%', education.onlineCourses[k].url));
    }
};

bio.display();
work.display();
projects.display();
education.display();
$("#mapDiv").append(googleMap);
