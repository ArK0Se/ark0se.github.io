$("#clash").click(() =>{
    var audio = new Audio('assets/audio/HEHEHEHA.mp3');
    audio.play();
});

$("#moai").click(() =>{
    var audio = new Audio('assets/audio/moai.mp3');
    audio.play();
});

$("#cringe").one("click", () =>{
    $("#kanye source").attr('src', 'assets/video/carlitopc.mp4');
    $("#kanye")[0].load();
});

count = 0;

$("#color").click(() =>{
    let maxVal = 0xFFFFFF; // 16777215
    let randomNumber = Math.random() * maxVal; 
    randomNumber = Math.floor(randomNumber);
    let randColor = randomNumber.toString(16);
    console.log(randColor);
    $("#color").css("color", "#"+randColor);
    count++;
    if (count == 10) {
        var audio = new Audio('assets/audio/vivre.mp3');
        audio.play();
    }
});


$(document).bind('keydown', 'up', () => {
    let taille = $(".video-wrapper").css("height");
    taille = taille.substring(0, taille.length - 2);
    taille = parseInt(taille) +1;
    $("#marqueekanye").attr("height", taille);
    $("#marqueekanye").attr("width", taille);
    $("#marqueeKanyeChild").attr("width", taille);
    $(".video-wrapper").css("height", taille + "px" );
    $(".video-wrapper").css("width", taille + "px" );

    console.log(taille+"px");
});
