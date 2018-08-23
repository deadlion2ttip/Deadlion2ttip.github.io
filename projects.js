let projectsHash = {
    'Zorkington': {
        'description' : "A text based adventure coded in JavaScript during week 3 at Burlington Code Academy. Using hashes and state machines, the game keeps track of actions available in each location and tracks a player inventory.",
        'ghLink' : 'https://github.com/djmorosini/zorkington',
        'projectLink': 'zorkdata/zorkington.html',
        'image': 'images/zorkingtonthumbnailorig.jpg',
    },
    'Pomodoro': {
        'description': "A timer webapp based on the Pomodoro method coded in JavaScript and hosted on GitHub Pages. Created during week 5 at Burlington Code Academy.",
        'ghLink': 'https://github.com/deadlion2ttip/pomodoro',
        'projectLink': 'pomodoro',
        'image': 'images/pomodoroThumborig.jpg',
    },
    'Yelpington': {
        'description': "A restaurant review site using Leaflet maps, OpenStreetMaps API, and using AJAX to load in data from JSON files. The map and index restaurant list construction are done on the fly using data from JSON files in the root folder. Hosted using Heroku. Created week 5 at Burlington Code academy.",
        'ghLink': 'https://github.com/deadlion2ttip/yelpington',
        'projectLink': 'https://limitless-thicket-25617.herokuapp.com/',
        'image': 'images/yelpingtontnorig.jpg',
    },
    'GeoVermonter': {
        'description': 'A web based game utilizing Bootstrap, leaflet, JS classes, and the OpenStreetMap API. It uses geocoding to find a random point in Vermont, then the user explores a zoomed in map to try to guess which county their point landed in. Created week 6 at Burlington Code Academy.',
        'ghLink': "https://github.com/trose6382/geo-vermonter",
        'projectLink': 'https://calm-gorge-67638.herokuapp.com/#',
        'image': 'images/geo-vermont.jpg'
    },
    'chat': {
        'description': 'An object oriented chat server and GUI hosted on Heroku. It utilizes HTTP, OOJS, and URL encoding and decoding to create a functioning public facing chat client with multiple chatrooms. Created week 8 at Burlington Code Academy.',
        'ghLink': 'https://github.com/mfelix5/simple-server',
        'projectLink': 'https://radiant-brook-30764.herokuapp.com/',
        'image': 'images/chattn.jpg'
    }
}
$('#Pomodoro').on('mouseover', function() {
    insertProject('Pomodoro');
})

$('#Zorkington').on('mouseover', function() {
    insertProject('Zorkington');
})

$('#Yelpington').on('mouseover', function(){
    insertProject('Yelpington');
})

$('#GeoVermonter').on('mouseover', function(){
    insertProject('GeoVermonter');
})

 $('#chat').on('mouseover', function(){
    insertProject('chat');
})

function resetActive(){
    $('.activeProject').removeClass('activeProject')
}

function insertProject(projectName){
    if (!$('#'+ projectName+'').parent().hasClass('activeProject')){
    resetActive();
    $('#'+ projectName+'').parent().addClass('activeProject')
    $('#bannerImg').html("<img class='imagelink hidden' src="+ projectsHash[projectName].image+">").prop('href', projectsHash[projectName].projectLink)
    jQuery('.imagelink').fadeIn(400)
    $('#storyWindow p').html(projectsHash[projectName].description)
    $('#ghLink').prop('href', projectsHash[projectName].ghLink)
    $('#projectLink').prop('href', projectsHash[projectName].projectLink)
}
}