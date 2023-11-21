
let music = document.getElementById("music")
let logo_gowr = document.getElementById("logo_gowr")
let main = document.querySelector("main")
let playButton = document.getElementById("playButton")


/* --------reprodução da musica---------- */
/* let tocaMusica = false;
logo_gowr.addEventListener("click", () => {
    
    if(tocaMusica == false) {
        music.play();
        tocaMusica = true;
        console.log(tocaMusica)
    } else {
        music.pause();
        tocaMusica = false;
    }
    
}) */

let playMusic = false;
function playPauseMusic() {

    if(playMusic == false) {
        music.play();
        playMusic = true;
        playButton.innerHTML = '<i class="fa-solid fa-pause"></i>'
        console.log(playMusic)
    } else {
        music.pause();
        playMusic = false;
        
        playButton.innerHTML = '<i class="fa-solid fa-play" ></i>'
    }
}




/* ---------troca de personagem--------- */
let personagem = document.getElementById("personagem")
let character = document.getElementById("character")
let textCarac = document.getElementById("text_caract")
let contador = 0

personagem.src = "./assets/section5a-characters-kratos.webp"

character.addEventListener("click", () => {
    switch (contador) {
         case 0:
            /* logo_gowr.style.display = "none" */
            personagem.src = "./assets/section5a-characters-kratos.webp"
            textCarac.innerHTML = "<h2>Kratos</h2> <p>O deus da guerra espartano construiu uma nova vida em Midgard. A paternidade deu a Kratos um novo propósito. Com o Ragnarök se aproximando, os riscos nunca foram tão altos. Kratos deve se decidir entre proteger o filho e a vida que construíram juntos ou defender os Nove Reinos da guerra catastrófica.</p>"

            contador++ ;
            break; 
        case 1:
            personagem.src = "./assets/section5a-characters-atreus.webp"
            
            textCarac.innerHTML = '<h2>Atreus</h2> <p>Atreus é um semideus adolescente, filho de Kratos e da Giganta Laufey. Os Gigantes e os Aesir o conhecem como "Loki". Com a iminência do Ragnarök, Atreus quer a todo custo explorar e compreender melhor a própria identidade para encontrar seu lugar no mundo. Ele treinou muito com o pai e, embora o relacionamento entre os dois permaneça firme, Atreus anseia por começar a seguir o seu próprio caminho.</p>'

            contador++ ;
            break;
        case 2:
            personagem.src = "./assets/section5a-characters-mimir.webp"
            textCarac.innerHTML = "<h2>Mimir</h2> <p>Ele pode até ser uma cabeça decepada que depois foi ressuscitada, mas o Mimir continua com o título de homem mais inteligente vivo. Quando Kratos e Atreus o libertaram da árvore em que Odin o mantinha aprisionado, Mimir se juntou à aventura deles e se tornou um amigo de confiança e conselheiro tanto para o pai quanto para o filho. Com os Nove Reinos afundando no caos, agora eles precisarão da sabedoria do Mimir mais do que nunca.</p>"
            contador++ ;
            break;
        case 3:
            personagem.src = "./assets/section5a-characters-thor.webp"
            textCarac.innerHTML = "<h2>Thor</h2> <p>Thor, o lendário deus do trovão, é filho de Odin e campeão dos Aesir. Magni e Modi, seus filhos, eram aliados de Baldur e foram mortos por Kratos e Atreus.</p>"
            contador++ ;
            break;
        case 4:
            personagem.src = "./assets/section5a-characters-tyr.webp"
            textCarac.innerHTML = "<h2>Týr</h2> <p>Týr é o deus da guerra Aesir que desapareceu há muito tempo. Ele viajou pelo mundo e se tornou um grande aliado dos Gigantes, buscando a paz entre os Aesir e os Jötnar. Quando Odin violou a paz e declarou guerra a Jötunheim, Týr foi aprisionado.</p>"
            contador++ ;
            break;
        case 5:
            personagem.src = "./assets/section5a-characters-angrboda.webp"
            textCarac.innerHTML = "<h2>Angrboda</h2> <p>Angrboda faz parte dos últimos Gigantes que restaram. Após a queda de Jötunheim, ela se escondeu por muitos anos à espera do momento para concretizar as profecias dos Jötnar.</p>"
            contador++ ;
            break;
        case 6:
            personagem.src = "./assets/section5a-characters-freya.webp"
            textCarac.innerHTML = "<h2>Freya</h2> <p>Freya é uma deusa Vanir, já foi líder das Valquírias, ex-mulher de Odin e antiga rainha dos Aesir. Após a morte do seu amado filho Baldur, que estava afastado dela, Freya jurou uma vingança violenta contra Kratos e Atreus.</p>"
            contador++ ;
            break;
        case 7:
            personagem.src = "./assets/section5a-characters-brok-sindri.webp"
            textCarac.innerHTML = "<h2>Brok e Sindri</h2> <p>Brok e Sindri, os Irmãos Huldra, são ferreiros Anões lendários. Eles são conhecidos ao redor dos Nove Reinos pela impressionante capacidade que têm de forjar armamentos lendários para os deuses. Após reatarem a relação há não muito tempo, os irmãos se uniram para apoiar Kratos e Atreus. O Ragnarök vai pôr à prova a força da união entre esses dois.</p>"
            contador++ ;
            break;
        default:
            personagem.src = "./assets/section5a-characters-kratos.webp"
            textCarac.innerHTML = "<p>Do Santa Monica Studio, esta é a sequência da aclamada versão de 2018 de God of War. O Fimbulwinter já começou. Kratos e Atreus devem viajar pelos Nove Reinos em busca de respostas enquanto as forças asgardianas se preparam para uma batalha profetizada que causará o fim do mundo. Nessa jornada, eles explorarão paisagens míticas impressionantes e enfrentarão inimigos aterradores: deuses nórdicos e monstros. A ameaça do Ragnarök se aproxima. Kratos e Atreus terão de escolher entre a segurança deles próprios e a dos reinos.</p>"
            contador = 1;
    }

})

let tudo = document
tudo.addEventListener("scroll", () => {
    let scrollPosicion = window.pageYOffset;
    /* console.log(scrollPosicion) */
    console.log(tudo.styleSheets)

})



/* Wallpaper */
function wallpaper() {
    main.innerHTML = '<img id="wallpaper"src="https://cybersport.metaratings.ru/storage/images/03/99/0399dd0d5f15c8ff34116b1ea59ef9cf.jpg" data-aos="fade-up"     data-aos-duration="800" data-aos-delay="00"               data-aos-easing="ease-in-out">';
}


/* Story */
function story() {
    main.innerHTML = '<div id="story" data-aos="fade-up"     data-aos-duration="800" data-aos-delay="00"               data-aos-easing="ease-in-out"><p>God of War: Ragnarok, se passa três anos após o evento do jogo de 2018, com Atreus um pouco mais velho enquanto tenta entender suas origens e a importância de seu nome de batismo — Loki. A busca por respostas vai desencadear no auge do Ragnarok, o fim dos tempos Nórdicos.</p>    <p>Kratos irá auxiliar seu filho em sua jornada por explicações, acompanhado novamente da cabeça de Mimir. Em algum momento de sua busca os personagens irão se encontrar com Tyr, o Deus da Guerra Nórdico. Ele foi mencionado no jogo anterior, onde todos acreditavam que estava morto, mas que estava somente preso e será resgatado por Kratos — para ser um aliado ou inimigo.</p>    <p>Com o Ragnarok se aproximando a guerra contra Asgard será inevitável e novos inimigos estarão no caminho de Atreus. Um deles é Thor, que já apareceu por um breve momento em uma cena pós-créditos do jogo anterior.</p>    <p>Mas rivais antigos também estão presente. Freya, que jurou destruir Kratos e seu filho após derrotarem Baldur, estará de volta. Anteriormente uma aliada, a personagem nutre uma grande ira contra os protagonistas e fará de tudo para vingar a morte de seu descendente.</p></div>';
}

/* Trailer */

function trailer() {
    main.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/WlWNsfiHJ4w?si=CeeIEjasVZt7CrEK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen data-aos="fade-up"     data-aos-duration="800" data-aos-delay="00"               data-aos-easing="ease-in-out"></iframe>';
}