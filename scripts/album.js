// Example Album
let albumPicasso = {
    title: 'The Colors',
    artist: 'Pablo Picasso',
    label: 'Cubism',
    year: '1881',
    albumArtUrl: 'assets/images/album_covers/01.png',
    songs: [{
            title: 'Blue',
            duration: '4:26'
        },
        {
            title: 'Green',
            duration: '3:14'
        },
        {
            title: 'Red',
            duration: '5:01'
        },
        {
            title: 'Pink',
            duration: '3:21'
        },
        {
            title: 'Magenta',
            duration: '2:15'
        }
    ]
};

// Another Example Album
let albumMarconi = {
    title: 'The Telephone',
    artist: 'Guglielmo Marconi',
    label: 'EM',
    year: '1909',
    albumArtUrl: 'assets/images/album_covers/20.png',
    songs: [{
            title: 'Hello, Operator?',
            duration: '1:01'
        },
        {
            title: 'Ring, ring, ring',
            duration: '5:01'
        },
        {
            title: 'Fits in your pocket',
            duration: '3:21'
        },
        {
            title: 'Can you hear me now?',
            duration: '3:14'
        },
        {
            title: 'Wrong phone number',
            duration: '2:15'
        }
    ]
};

// Third example Album
let albumThird = {
    title: `Can't come up with a title`,
    artist: `Can't come up with an artist`,
    label: 'idk',
    year: '2017',
    albumArtUrl: 'assets/images/album_covers/03.png',
    songs: [{
            title: 'First Song',
            duration: '4:26'
        },
        {
            title: 'Second Song',
            duration: '3:14'
        },
        {
            title: 'Third Song',
            duration: '5:01'
        },
        {
            title: 'Fourth Song',
            duration: '3:21'
        },
        {
            title: 'Fifth Song',
            duration: '2:15'
        }
    ]
};

// Template
let createSongRow = function (songNumber, songName, songLength) {
    let template =
        '<tr class="album-view-song-item">' +
        '  <td class="song-item-number" data-song-number="' + songNumber + '">' + songNumber + '</td>' +
        '  <td class="song-item-title">' + songName + '</td>' +
        '  <td class="song-item-duration">' + songLength + '</td>' +
        '</tr>';

    return template;
};

let setCurrentAlbum = function (album) {
    // #1, we select all of the HTML elements required to display on the album page: 
    // title, artist, release info, image, and song list. We want to populate these 
    // elements with information. To do so, we assign the corresponding values of 
    // the album objects' properties to the HTML elements.
    let albumTitle = document.getElementsByClassName('album-view-title')[0];
    // console.log(document.getElementsByClassName('album-view-title'));
    // console.log(albumTitle);
    // console.log(albumTitle.childNodes[0]);
    // console.log(albumTitle.childNodes[0].nodeValue);
    // console.log(albumTitle.firstChild.nodeValue);
    // console.log(document.getElementsByClassName('album-view-title').constructor === Array);
    let albumArtist = document.getElementsByClassName('album-view-artist')[0];
    let albumReleaseInfo = document.getElementsByClassName('album-view-release-info')[0];
    let albumImage = document.getElementsByClassName('album-cover-art')[0];
    let albumSongList = document.getElementsByClassName('album-view-song-list')[0];

    // #2, the firstChild property identifies the first child node of an element, 
    // and  nodeValue returns or sets the value of a node. Alternatively, we could 
    // technically use  innerHTML to insert plain text (like we did in collection.js), 
    // but it's excessive and semantically misleading in this context because we 
    // aren't adding any HTML.
    albumTitle.firstChild.nodeValue = album.title;
    albumArtist.firstChild.nodeValue = album.artist;
    albumReleaseInfo.firstChild.nodeValue = album.year + ' ' + album.label;
    albumImage.setAttribute('src', album.albumArtUrl);

    // #3,clear the album song list HTML to make sure there are no interfering elements.
    albumSongList.innerHTML = '';

    // #4, to go through all the songs from the specified album object and insert 
    // them into the HTML using the innerHTML property. The createSongRow function 
    // is called at each loop, passing in the song number, name, and length arguments 
    // from our album object.
    for (let i = 0; i < album.songs.length; i++) {
        albumSongList.innerHTML += createSongRow(i + 1, album.songs[i].title, album.songs[i].duration);
    }
};

let findParentByClassName = function (element, targetName) {
    if (element.parentElement==null){return console.log('No parent found')}
    else {
    while (element.className != targetName) {
       // console.log(element.className);
        element = element.parentElement;
    }
    console.log(element);
    if (element.parentElement == null) {return console.log('No parent found with that class name')}
    return element;}
};

let getSongItem = function (element) {
    switch (element.className) {
        case 'song-item-number':
            element;
            console.log(element);
            break;
        case 'album-view-song-item':
        console.log(element.children[0]);
            element = element.children[0];
            console.log(element);
            break;
        case 'song-item-title':
        case 'song-item-duration':
        console.log(element.parentElement.children[0]);
            element = element.parentElement.children[0];
            console.log(element);
            break;
        default:
            console.log(element);
            element = element = findParentByClassName(element, 'song-item-number');
            console.log(element);
    }
    console.log(element);
    return element;
};

let clickHandler = function (targetElement) {
    console.log(targetElement);
    let songItem = getSongItem(targetElement);
    console.log(songItem);

    if (currentlyPlayingSong === null) {
        songItem.innerHTML = pauseButtonTemplate;
        currentlyPlayingSong = songItem.getAttribute('data-song-number');
    } else if (currentlyPlayingSong === songItem.getAttribute('data-song-number')) {
        songItem.innerHTML = playButtonTemplate;
        currentlyPlayingSong = null;
    } else if (currentlyPlayingSong !== songItem.getAttribute('data-song-number')) {
        let currentlyPlayingSongElement = document.querySelector('[data-song-number="' + currentlyPlayingSong + '"]');
        currentlyPlayingSongElement.innerHTML = currentlyPlayingSongElement.getAttribute('data-song-number');
        songItem.innerHTML = pauseButtonTemplate;
        currentlyPlayingSong = songItem.getAttribute('data-song-number');
    }
};

let songListContainer = document.getElementsByClassName('album-view-song-list')[0];
let songRows = document.getElementsByClassName('album-view-song-item');

// Album button templates
let playButtonTemplate = '<a class="album-song-button"><span class="ion-play"></span></a>';
let pauseButtonTemplate = '<a class="album-song-button"><span class="ion-pause"></span></a>';

// Store state of playing songs
let currentlyPlayingSong = null;

window.onload = function () {
    setCurrentAlbum(albumPicasso);

    songListContainer.addEventListener('mouseover', function (event) {
        // Only target individual song rows during event delegation
        if (event.target.parentElement.className === 'album-view-song-item') {
            // Change the content from the number to the play button's HTML
            event.target.parentElement.querySelector('.song-item-number').innerHTML = playButtonTemplate;
        }
    });

    for (let i = 0; i < songRows.length; i++) {
        songRows[i].addEventListener('mouseleave', function (event) {
            // #1
            let songItem = getSongItem(event.target);
            let songItemNumber = songItem.getAttribute('data-song-number');

            // #2
            if (songItemNumber !== currentlyPlayingSong) {
                songItem.innerHTML = songItemNumber;
            }
        });

        songRows[i].addEventListener('click', function (event) {
            // Event handler call
            clickHandler(event.target);
        });
    }
};