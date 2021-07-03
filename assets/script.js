const tl = gsap.timeline({defaults: { ease: "power1.out" } }); //koliko dugo želimo da se svaka animacija dogodi

tl.to(".text", { y: "0%", duration: 2, stagger: 2});
tl.to(".slide", { y: "-150%", duration: 2.5, delay: 0.5});
tl.to(".intro", { y: "-150%", duration: 2}, "-=1"); 


$(document).ready(function(){
    //pozadina navbara
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('header').addClass("sticky");
        }else{
            $('header').removeClass("sticky");
        }
    });

    //pojavljivanje i micanje menua za mob
    $('#menu-bar').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });
    //micanje navbara kad se scrola
    $(window).on('scroll load', function(){
        $('#menu-bar').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        //prepoznavanje sekcija(scroll spy)

        $('section').each(function(){

            let top = $(window).scrollTop();
            let offset = $(this).offset().top -200;
            let height = $(this).height();
            let id = $(this).attr('id');

            if(top > offset && top < offset + height){
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
    });

    // typing text animation script
    var typed = new Typed(".typing", {
    strings: ["Svadbene svečanosti", "Krstitke", "Prve pričesti", "Krizme", 
    "Svadbene svečanosti", "Lička noć", "Noć harmonike", "Valentinovo", 
    "Svadbene svečanosti", "Doček Nove godine", "Rođendani", "À la carte"],
    typeSpeed: 160,
    backSpeed: 60,
    loop: true
    });

    //pročitaj više
    let more = document.querySelectorAll('.popular .box-container .box .btn');
    for (let i = 0; i < more.length; i++){
        more[i].addEventListener('click', function(){
            more[i].parentNode.classList.toggle('active');
        });
    }

    //promjena slike i micanje active sa btn
    $('.menu .list .btn').click(function(){
        $(this).addClass('active').siblings().removeClass('active');

        let src = $(this).attr('data-src');

        $('#menu-img').attr('src', src);
    });
    //promjena teksta
    $('#btn1').click(function(){
        $('#naslov').html("SVADBENA VEČERA");
        $('#tekst').html("Planirate vjenčanje i u potrazi ste za mjestom na kojem će Vaša svadbena svečanost biti kao nigdje drugdje. Restoran Za vašu dušu – moderno, dinamično, savršeno estetski dizajnirano mjesto. Romantična svadbena večera uz profesionalno organiziranje i praćenje svakog i najsitnijeg detalja od strane našeg stručnog osoblja. Jela su pripremana prema novim recepturama, znanjem i iskustvom naših majstora kuhinje. Cilj nam je osigurati jedinstven i prepoznatljiv okus o kojem se govori.Do sada smo surađivali sa velikim brojem organizatora vjenčanja, cvjećara, dizajnera interijera, majstorima rasvjete i kod nas su gostovali poznati svadbeni bendovi i izvođači");
    });

    $('#btn2').click(function(){
        $('#naslov').html("À la carte");
        $('#tekst').html("Isprobajte nove primamljive à la carte jelovnike - kombinacija kreativnih okusa, tradicionalne kuhinje i svježih sezonskih namirnica. Prepustite se opuštenoj eleganciji restorana Za vašu dušu. Odaberite jele prema vašim prehrambenim navikama - bez glutena, vege ili halal. Dopustite talentiranom chefu Leonu Žgeli i njegovom kulinarskom timu da za vas priredi nezaboravno iskustvo objedovanja, svaki dan.");
    });

    $('#btn3').click(function(){
        $('#naslov').html("Krstitke");
        $('#tekst').html("Krstitke....Isprobajte nove primamljive à la carte jelovnike - kombinacija kreativnih okusa, tradicionalne kuhinje i svježih sezonskih namirnica. Prepustite se opuštenoj eleganciji restorana Za vašu dušu. Odaberite jele prema vašim prehrambenim navikama - bez glutena, vege ili halal. Dopustite talentiranom chefu Leonu Žgeli i njegovom kulinarskom timu da za vas priredi nezaboravno iskustvo objedovanja, svaki dan.");
    });

    $('#btn4').click(function(){
        $('#naslov').html("Krizma");
        $('#tekst').html("Krizma....Isprobajte nove primamljive à la carte jelovnike - kombinacija kreativnih okusa, tradicionalne kuhinje i svježih sezonskih namirnica. Prepustite se opuštenoj eleganciji restorana Za vašu dušu. Odaberite jele prema vašim prehrambenim navikama - bez glutena, vege ili halal. Dopustite talentiranom chefu Leonu Žgeli i njegovom kulinarskom timu da za vas priredi nezaboravno iskustvo objedovanja, svaki dan.");
    });

    $('#btn5').click(function(){
        $('#naslov').html("Prva pričest");
        $('#tekst').html("Prva pričest...Isprobajte nove primamljive à la carte jelovnike - kombinacija kreativnih okusa, tradicionalne kuhinje i svježih sezonskih namirnica. Prepustite se opuštenoj eleganciji restorana Za vašu dušu. Odaberite jele prema vašim prehrambenim navikama - bez glutena, vege ili halal. Dopustite talentiranom chefu Leonu Žgeli i njegovom kulinarskom timu da za vas priredi nezaboravno iskustvo objedovanja, svaki dan.");
    });

    $('#btn6').click(function(){
        $('#naslov').html("Valentinovo");
        $('#tekst').html("Valentinovo....Isprobajte nove primamljive à la carte jelovnike - kombinacija kreativnih okusa, tradicionalne kuhinje i svježih sezonskih namirnica. Prepustite se opuštenoj eleganciji restorana Za vašu dušu. Odaberite jele prema vašim prehrambenim navikama - bez glutena, vege ili halal. Dopustite talentiranom chefu Leonu Žgeli i njegovom kulinarskom timu da za vas priredi nezaboravno iskustvo objedovanja, svaki dan.");
    });

    $('#btn7').click(function(){
        $('#naslov').html("Noć harmonike");
        $('#tekst').html("Noć harmonike....Isprobajte nove primamljive à la carte jelovnike - kombinacija kreativnih okusa, tradicionalne kuhinje i svježih sezonskih namirnica. Prepustite se opuštenoj eleganciji restorana Za vašu dušu. Odaberite jele prema vašim prehrambenim navikama - bez glutena, vege ili halal. Dopustite talentiranom chefu Leonu Žgeli i njegovom kulinarskom timu da za vas priredi nezaboravno iskustvo objedovanja, svaki dan.");
    });

    $('#btn8').click(function(){
        $('#naslov').html("Lička noć");
        $('#tekst').html("Lička noć....Isprobajte nove primamljive à la carte jelovnike - kombinacija kreativnih okusa, tradicionalne kuhinje i svježih sezonskih namirnica. Prepustite se opuštenoj eleganciji restorana Za vašu dušu. Odaberite jele prema vašim prehrambenim navikama - bez glutena, vege ili halal. Dopustite talentiranom chefu Leonu Žgeli i njegovom kulinarskom timu da za vas priredi nezaboravno iskustvo objedovanja, svaki dan.");
    });

    $('#btn9').click(function(){
        $('#naslov').html("Doček Nove godine");
        $('#tekst').html("Doček Nove godine....Isprobajte nove primamljive à la carte jelovnike - kombinacija kreativnih okusa, tradicionalne kuhinje i svježih sezonskih namirnica. Prepustite se opuštenoj eleganciji restorana Za vašu dušu. Odaberite jele prema vašim prehrambenim navikama - bez glutena, vege ili halal. Dopustite talentiranom chefu Leonu Žgeli i njegovom kulinarskom timu da za vas priredi nezaboravno iskustvo objedovanja, svaki dan.");
    });
});


$('#naslov').html();
$('#tekst').html('src', src);

