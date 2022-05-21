/*!
* Start Bootstrap - Freelancer v7.0.5 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
//

AOS.init();


function showHTML5(){
    $('#techHTML5').addClass("techActive");
    $('#techCSS3').removeClass("techActive");
    $('#techJS').removeClass("techActive");
    $('#techPHP').removeClass("techActive");
    $('#techBootstrap').removeClass("techActive");

    document.getElementById("techTextTitle").innerHTML = "HTML5";
    document.getElementById("techLogoLang").innerHTML = "<i class='fa-brands fa-html5 techLogoBig'></i>";
    document.getElementById("techTextLangEN").innerHTML = "HTML5(Hyper Text Markup Language 5) is a markup language for the World Wide Web and is a key Internet technology, originally proposed by Opera Software. It is the fifth version of the HTML language.";
    document.getElementById("techTextLangPT").innerHTML = "HTML5(Hyper Text Markup Language 5) é uma linguagem de marcação para a World Wide Web e é uma tecnologia chave da Internet, originalmente proposta pela Opera Software. É a quinta versão da linguagem HTML.";
}

function showCSS3(){
    $('#techHTML5').removeClass("techActive");
    $('#techCSS3').addClass("techActive");
    $('#techJS').removeClass("techActive");
    $('#techPHP').removeClass("techActive");
    $('#techBootstrap').removeClass("techActive");

    document.getElementById("techTextTitle").innerHTML = "CSS3";
    document.getElementById("techLogoLang").innerHTML = "<i class='fa-brands fa-css3 techLogoBig'></i>";
    document.getElementById("techTextLangEN").innerHTML = "CSS3 is the third and newest version of the famous Cascading Style Sheets, through which you define styles for a web project. With transition effects, image, background image, and others, you can create unique styles for your web projects, changing many design aspects of the page layout.";
    document.getElementById("techTextLangPT").innerHTML = "CSS3 é a terceira e mais recente versão das famosas Folhas de Estilo em Cascata, através da qual se definem estilos para um projecto web. Com efeitos de transição, imagem, imagem de fundo, e outros, pode criar estilos únicos para os seus projectos web, alterando muitos aspectos de design do layout da página.";
}


function showJS(){
    $('#techHTML5').removeClass("techActive");
    $('#techCSS3').removeClass("techActive");
    $('#techJS').addClass("techActive");
    $('#techPHP').removeClass("techActive");
    $('#techBootstrap').removeClass("techActive");

    document.getElementById("techTextTitle").innerHTML = "JavaScript";
    document.getElementById("techLogoLang").innerHTML = "<i class='fa-brands fa-js-square techLogoBig'></i>";
    document.getElementById("techTextLangEN").innerHTML = "JavaScript is a structured, high-level scripting, interpreted programming language with weak dynamic typing and multi-paradigm. Along with HTML and CSS, JavaScript is one of the three core technologies of the World Wide Web.";
    document.getElementById("techTextLangPT").innerHTML = "O JavaScript é uma linguagem de programação estruturada, de alto nível, interpretada com tipagem dinâmica fraca e multi-paradigma. Juntamente com HTML e CSS, o JavaScript é uma das três tecnologias centrais da World Wide Web.";
}

function showPHP(){
    $('#techHTML5').removeClass("techActive");
    $('#techCSS3').removeClass("techActive");
    $('#techJS').removeClass("techActive");
    $('#techPHP').addClass("techActive");
    $('#techBootstrap').removeClass("techActive");

    document.getElementById("techTextTitle").innerHTML = "PHP";
    document.getElementById("techLogoLang").innerHTML = "<i class='fa-brands fa-php techLogoBig'></i>";
    document.getElementById("techTextLangEN").innerHTML = "PHP is a free interpreted language originally used only for the development of present and active server-side applications capable of generating dynamic content on the World Wide Web.";
    document.getElementById("techTextLangPT").innerHTML = "PHP é uma linguagem de interpretação livre originalmente utilizada apenas para o desenvolvimento de aplicações actuais e activas do lado do servidor capazes de gerar conteúdo dinâmico na World Wide Web.";
}

function showBootstrap(){
    $('#techHTML5').removeClass("techActive");
    $('#techCSS3').removeClass("techActive");
    $('#techJS').removeClass("techActive");
    $('#techPHP').removeClass("techActive");
    $('#techBootstrap').addClass("techActive");

    document.getElementById("techTextTitle").innerHTML = "Bootstrap";
    document.getElementById("techLogoLang").innerHTML = "<i class='fa-brands fa-bootstrap techLogoBig'></i>";
    document.getElementById("techTextLangEN").innerHTML = "Bootstrap is an open source web framework for developing front-end and interface components for websites and web applications using HTML, CSS and JavaScript, based on design templates for typography, improving the user experience on a user-friendly and responsive website.";
    document.getElementById("techTextLangPT").innerHTML = "Bootstrap é uma estrutura web de código aberto para desenvolver componentes front-end e de interface para websites e aplicações web utilizando HTML, CSS e JavaScript, baseada em modelos de design para tipografia, melhorando a experiência do utilizador num website de fácil utilização e resposta.";
}

function myFunction(x) {
    if (x.matches) { // If media query matches
        document.querySelector('#animationAbout1').removeAttribute('data-aos');
        document.querySelector('#animationAbout2').removeAttribute('data-aos');
        document.querySelector('#animationAbout3').removeAttribute('data-aos');
        document.querySelector('#animationAbout4').removeAttribute('data-aos');
        document.querySelector('#animationAbout5').removeAttribute('data-aos');
        document.querySelector('#animationAbout6').removeAttribute('data-aos');
        document.querySelector('#animationAbout7').removeAttribute('data-aos');
        document.querySelector('#animationAbout8').removeAttribute('data-aos');
        document.querySelector('#animationAbout9').removeAttribute('data-aos');
        document.querySelector('#animationAbout10').removeAttribute('data-aos');
    } else {
        document.querySelector('#animationAbout1').setAttribute('data-aos', 'fade-right');
        document.querySelector('#animationAbout2').setAttribute('data-aos', 'fade-left');
        document.querySelector('#animationAbout3').setAttribute('data-aos', 'fade-right');
        document.querySelector('#animationAbout4').setAttribute('data-aos', 'fade-left');
        document.querySelector('#animationAbout5').setAttribute('data-aos', 'fade-right');
        document.querySelector('#animationAbout6').setAttribute('data-aos', 'fade-left');
        document.querySelector('#animationAbout7').setAttribute('data-aos', 'fade-right');
        document.querySelector('#animationAbout8').setAttribute('data-aos', 'fade-left');
        document.querySelector('#animationAbout9').setAttribute('data-aos', 'fade-right');
        document.querySelector('#animationAbout10').setAttribute('data-aos', 'fade-left');
    }
  }
  
  var x = window.matchMedia("(max-width: 991px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes

let scrollBtn = document.querySelector(".btn-scroll-up");

window.addEventListener("scroll", () => {
    if(window.pageYOffset > 100){
        scrollBtn.style.cursor = "pointer";
        scrollBtn.style.display = "block";
        scrollBtn.classList.add("active");
    }else{
        scrollBtn.style.cursor = "auto";
        scrollBtn.classList.remove("active");
    }
});

// Confirmar formulario

function confirmSubmit(){
    if(window.getComputedStyle(document.getElementById("btnLangPT")).display == "block"){
        return confirm('Are you sure you want to send this message?');
    }else{
        return confirm('Tem a certeza de que quer enviar esta mensagem?');
    }
}

// Request api dos idiomas

const url = "https://marioponte.github.io/Portfolio/js/languages.json";

async function getDados() {
    const dados = await fetch(url);
    const response = await dados.json();

    const pegueiDados = JSON.parse(JSON.stringify(response));

	// Resposta

    document.getElementById('btnLangPT').onclick = function() {

        document.getElementById('techTextLangEN').style.display = 'none';
        document.getElementById('techTextLangPT').style.display = 'block';

        // Navbar

        document.getElementById("navProjects").innerHTML = pegueiDados.portuguese.lanNavbar.projects;
        document.getElementById("navAbout").innerHTML = pegueiDados.portuguese.lanNavbar.about;
        document.getElementById("navTechnologies").innerHTML = pegueiDados.portuguese.lanNavbar.technologies;
        document.getElementById("navServices").innerHTML = pegueiDados.portuguese.lanNavbar.services;
        document.getElementById("navContact").innerHTML = pegueiDados.portuguese.lanNavbar.contact;

        // Section Projects

        document.getElementById("titleProjects").innerHTML = pegueiDados.portuguese.secProjects.projects;
        $('.caption-item').html(pegueiDados.portuguese.secProjects.view);
        $('.whatis').html(pegueiDados.portuguese.secProjects.whatis);
        $('.whycreate').html(pegueiDados.portuguese.secProjects.whycreate);
        $('.usedtechnologies').html(pegueiDados.portuguese.secProjects.technologies);
        $('#notAvaiable').html(pegueiDados.portuguese.secProjects.notAvaiable);

        $('#portfolioModalTitle1').html(pegueiDados.portuguese.secProjects.project1.project);
        $('#whatisText1').html(pegueiDados.portuguese.secProjects.project1.whatis);
        $('#whycreateText1').html(pegueiDados.portuguese.secProjects.project1.whycreate);
        $('.btnModalDoc').html(pegueiDados.portuguese.secProjects.project1.btndoc);
        $('.btnModal1').html(pegueiDados.portuguese.secProjects.project1.btnsee);
        $('.btnModal2').html(pegueiDados.portuguese.secProjects.project1.btncode);

        $('#portfolioModalTitle2').html(pegueiDados.portuguese.secProjects.project2.project);
        $('#whatisText2').html(pegueiDados.portuguese.secProjects.project2.whatis);
        $('#whycreateText2').html(pegueiDados.portuguese.secProjects.project2.whycreate);
        $('#tools').html(pegueiDados.portuguese.secProjects.project2.tools);
        $('#contributeFeatures').html(pegueiDados.portuguese.secProjects.project2.contributeFeatures);
        $('.btnModalDoc').html(pegueiDados.portuguese.secProjects.project2.tools);
        $('.btnModal1').html(pegueiDados.portuguese.secProjects.project2.btnsee);
        $('.btnModal2').html(pegueiDados.portuguese.secProjects.project2.btncode);

        $('#portfolioModalTitle3').html(pegueiDados.portuguese.secProjects.project3.project);
        $('#whatisText3').html(pegueiDados.portuguese.secProjects.project3.whatis);
        $('#whycreateText3').html(pegueiDados.portuguese.secProjects.project3.whycreate);
        $('.btnModalDoc').html(pegueiDados.portuguese.secProjects.project3.btndoc);
        $('.btnModal1').html(pegueiDados.portuguese.secProjects.project3.btnsee);
        $('.btnModal2').html(pegueiDados.portuguese.secProjects.project3.btncode);

        $('#portfolioModalTitle4').html(pegueiDados.portuguese.secProjects.project4.project);
        $('#whatisText4').html(pegueiDados.portuguese.secProjects.project4.whatis);
        $('#whycreateText4').html(pegueiDados.portuguese.secProjects.project4.whycreate);
        $('.btnModalDoc').html(pegueiDados.portuguese.secProjects.project4.btndoc);
        $('.btnModal1').html(pegueiDados.portuguese.secProjects.project4.btnsee);
        $('.btnModal2').html(pegueiDados.portuguese.secProjects.project4.btncode);

        $('#portfolioModalTitle5').html(pegueiDados.portuguese.secProjects.project5.project);
        $('#whatisText5').html(pegueiDados.portuguese.secProjects.project5.whatis);
        $('#whycreateText5').html(pegueiDados.portuguese.secProjects.project5.whycreate);
        $('.btnModalDoc').html(pegueiDados.portuguese.secProjects.project5.btndoc);
        $('.btnModal1').html(pegueiDados.portuguese.secProjects.project5.btnsee);
        $('.btnModal2').html(pegueiDados.portuguese.secProjects.project5.btncode);

        // Section About

        document.getElementById("titleAbout").innerHTML = pegueiDados.portuguese.secAbout.about;
        document.getElementById("lead1").innerHTML = pegueiDados.portuguese.secAbout.text1;
        document.getElementById("lead2").innerHTML = pegueiDados.portuguese.secAbout.text2;
        document.getElementById("btnCV").innerHTML = pegueiDados.portuguese.secAbout.btncv;

        // Section Technologies

        document.getElementById("titleTechnologies").innerHTML = pegueiDados.portuguese.secTechnologies.technologies;
        document.getElementById("clickTech").innerHTML = pegueiDados.portuguese.secTechnologies.click;

        // Section Services

        document.getElementById("titleServices").innerHTML = pegueiDados.portuguese.secServices.services;
        document.getElementById("servicesTitle1").innerHTML = pegueiDados.portuguese.secServices.title1;
        document.getElementById("servicesText1").innerHTML = pegueiDados.portuguese.secServices.text1;
        document.getElementById("servicesTitle2").innerHTML = pegueiDados.portuguese.secServices.title2;
        document.getElementById("servicesText2").innerHTML = pegueiDados.portuguese.secServices.text2;
        document.getElementById("servicesTitle3").innerHTML = pegueiDados.portuguese.secServices.title3;
        document.getElementById("servicesText3").innerHTML = pegueiDados.portuguese.secServices.text3;
        document.getElementById("servicesTitle4").innerHTML = pegueiDados.portuguese.secServices.title4;
        document.getElementById("servicesText4").innerHTML = pegueiDados.portuguese.secServices.text4;

        // Section Contact

        document.getElementById("titleContact").innerHTML = pegueiDados.portuguese.secContact.contact;
        document.getElementById("titlePhone").innerHTML = pegueiDados.portuguese.secContact.phone;
        document.getElementById("labelName").innerHTML = pegueiDados.portuguese.secContact.name;
        document.getElementById("labelPhone").innerHTML = pegueiDados.portuguese.secContact.phoneNum;
        document.getElementById("labelMessage").innerHTML = pegueiDados.portuguese.secContact.message;
        document.getElementById("submitButton").innerHTML = pegueiDados.portuguese.secContact.btnsub;

        // Section Social Media

        document.getElementById("location").innerHTML = pegueiDados.portuguese.secSocialMedia.location;
        document.getElementById("socialmedia").innerHTML = pegueiDados.portuguese.secSocialMedia.socialmedia;
        document.getElementById("questionsTitle").innerHTML = pegueiDados.portuguese.secSocialMedia.questionsTitle;
        document.getElementById("questionsText").innerHTML = pegueiDados.portuguese.secSocialMedia.questionsText;

        // Section Footer

        document.getElementById("endFooter").innerHTML = pegueiDados.portuguese.secFooter.footer;

        // Buttons

        document.getElementById('btnLangPT').style.display = "none";
        document.getElementById('btnLangEN').style.display = "block";
    }

    document.getElementById('btnLangEN').onclick = function() {

        document.getElementById('techTextLangEN').style.display = 'block';
        document.getElementById('techTextLangPT').style.display = 'none';

        // Navbar

        document.getElementById("navProjects").innerHTML = pegueiDados.english.lanNavbar.projects;
        document.getElementById("navAbout").innerHTML = pegueiDados.english.lanNavbar.about;
        document.getElementById("navTechnologies").innerHTML = pegueiDados.english.lanNavbar.technologies;
        document.getElementById("navServices").innerHTML = pegueiDados.english.lanNavbar.services;
        document.getElementById("navContact").innerHTML = pegueiDados.english.lanNavbar.contact;

        // Section Projects

        document.getElementById("titleProjects").innerHTML = pegueiDados.english.secProjects.projects;
        $('.caption-item').html(pegueiDados.english.secProjects.view);
        $('.whatis').html(pegueiDados.english.secProjects.whatis);
        $('.whycreate').html(pegueiDados.english.secProjects.whycreate);
        $('.usedtechnologies').html(pegueiDados.english.secProjects.technologies);
        $('#notAvaiable').html(pegueiDados.english.secProjects.notAvaiable);

        $('#portfolioModalTitle1').html(pegueiDados.english.secProjects.project1.project);
        $('#whatisText1').html(pegueiDados.english.secProjects.project1.whatis);
        $('#whycreateText1').html(pegueiDados.english.secProjects.project1.whycreate);
        $('.btnModalDoc').html(pegueiDados.english.secProjects.project1.btndoc);
        $('.btnModal1').html(pegueiDados.english.secProjects.project1.btnsee);
        $('.btnModal2').html(pegueiDados.english.secProjects.project1.btncode);

        $('#portfolioModalTitle2').html(pegueiDados.english.secProjects.project2.project);
        $('#whatisText2').html(pegueiDados.english.secProjects.project2.whatis);
        $('#whycreateText2').html(pegueiDados.english.secProjects.project2.whycreate);
        $('#tools').html(pegueiDados.english.secProjects.project2.tools);
        $('#contributeFeatures').html(pegueiDados.english.secProjects.project2.contributeFeatures);
        $('.btnModalDoc').html(pegueiDados.english.secProjects.project2.btndoc);
        $('.btnModal1').html(pegueiDados.english.secProjects.project2.btnsee);
        $('.btnModal2').html(pegueiDados.english.secProjects.project2.btncode);

        $('#portfolioModalTitle3').html(pegueiDados.english.secProjects.project3.project);
        $('#whatisText3').html(pegueiDados.english.secProjects.project3.whatis);
        $('#whycreateText3').html(pegueiDados.english.secProjects.project3.whycreate);
        $('.btnModalDoc').html(pegueiDados.english.secProjects.project3.btndoc);
        $('.btnModal1').html(pegueiDados.english.secProjects.project3.btnsee);
        $('.btnModal2').html(pegueiDados.english.secProjects.project3.btncode);

        $('#portfolioModalTitle4').html(pegueiDados.english.secProjects.project4.project);
        $('#whatisText4').html(pegueiDados.english.secProjects.project4.whatis);
        $('#whycreateText4').html(pegueiDados.english.secProjects.project4.whycreate);
        $('.btnModalDoc').html(pegueiDados.english.secProjects.project4.btndoc);
        $('.btnModal1').html(pegueiDados.english.secProjects.project4.btnsee);
        $('.btnModal2').html(pegueiDados.english.secProjects.project4.btncode);

        $('#portfolioModalTitle5').html(pegueiDados.english.secProjects.project5.project);
        $('#whatisText5').html(pegueiDados.english.secProjects.project5.whatis);
        $('#whycreateText5').html(pegueiDados.english.secProjects.project5.whycreate);
        $('.btnModalDoc').html(pegueiDados.english.secProjects.project5.btndoc);
        $('.btnModal1').html(pegueiDados.english.secProjects.project5.btnsee);
        $('.btnModal2').html(pegueiDados.english.secProjects.project5.btncode);

        // Section About

        document.getElementById("titleAbout").innerHTML = pegueiDados.english.secAbout.about;
        document.getElementById("lead1").innerHTML = pegueiDados.english.secAbout.text1;
        document.getElementById("lead2").innerHTML = pegueiDados.english.secAbout.text2;
        document.getElementById("btnCV").innerHTML = pegueiDados.english.secAbout.btncv;

        // Section Technologies

        document.getElementById("titleTechnologies").innerHTML = pegueiDados.english.secTechnologies.technologies;
        document.getElementById("clickTech").innerHTML = pegueiDados.english.secTechnologies.click;

        // Section Services

        document.getElementById("titleServices").innerHTML = pegueiDados.english.secServices.services;
        document.getElementById("servicesTitle1").innerHTML = pegueiDados.english.secServices.title1;
        document.getElementById("servicesText1").innerHTML = pegueiDados.english.secServices.text1;
        document.getElementById("servicesTitle2").innerHTML = pegueiDados.english.secServices.title2;
        document.getElementById("servicesText2").innerHTML = pegueiDados.english.secServices.text2;
        document.getElementById("servicesTitle3").innerHTML = pegueiDados.english.secServices.title3;
        document.getElementById("servicesText3").innerHTML = pegueiDados.english.secServices.text3;
        document.getElementById("servicesTitle4").innerHTML = pegueiDados.english.secServices.title4;
        document.getElementById("servicesText4").innerHTML = pegueiDados.english.secServices.text4;

        // Section Contact

        document.getElementById("titleContact").innerHTML = pegueiDados.english.secContact.contact;
        document.getElementById("titlePhone").innerHTML = pegueiDados.english.secContact.phone;
        document.getElementById("labelName").innerHTML = pegueiDados.english.secContact.name;
        document.getElementById("labelPhone").innerHTML = pegueiDados.english.secContact.phoneNum;
        document.getElementById("labelMessage").innerHTML = pegueiDados.english.secContact.message;
        document.getElementById("submitButton").innerHTML = pegueiDados.english.secContact.btnsub;

        // Section Social Media

        document.getElementById("location").innerHTML = pegueiDados.english.secSocialMedia.location;
        document.getElementById("socialmedia").innerHTML = pegueiDados.english.secSocialMedia.socialmedia;
        document.getElementById("questionsTitle").innerHTML = pegueiDados.english.secSocialMedia.questionsTitle;
        document.getElementById("questionsText").innerHTML = pegueiDados.english.secSocialMedia.questionsText;

        // Section Footer

        document.getElementById("endFooter").innerHTML = pegueiDados.english.secFooter.footer;

        // Buttons

        document.getElementById('btnLangEN').style.display = "none";
        document.getElementById('btnLangPT').style.display = "block";
    }
}

getDados();

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 72,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
