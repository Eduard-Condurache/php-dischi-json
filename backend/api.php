<?php 
    
    $spotifyData = file_get_contents('db/spotify.json');

    header('Content-type: application/json');

    echo $spotifyData;
?>