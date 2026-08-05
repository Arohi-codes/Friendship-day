/* ===================================
            LOADER
=================================== */

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

    }, 1800);

});





/* ===================================
        CONTINUE BUTTON
=================================== */

function scrollToIntro() {

    document.getElementById("intro").scrollIntoView({

        behavior: "smooth"

    });

}





/* ===================================
        LETTER DATA
=================================== */

const letters = {

    Vrinda: {

        title: "Dear Vrinda 🌸",

        message:
        "Happy Friendship Day! ❤️ Thank you for being such a wonderful friend. Your kindness, laughter, and support make every moment more special. I hope our friendship keeps growing stronger every single year. Never stop being the amazing person you are. 💕"

    },



    Kanishka: {

        title: "Dear Kanishka 🌷",

        message:
        "Thank you for all the fun moments, endless laughs, and unforgettable memories. You always know how to make ordinary days feel extraordinary. Wishing you a Friendship Day filled with happiness and smiles. 🌈"

    },



    Latika: {

        title: "Dear Latika 🌹",

        message:
        "Some friendships become precious without us even realizing it. Thank you for always being thoughtful, caring, and understanding. I'm truly grateful to have you in my life. ❤️"

    },



    Pranshi: {

        title: "Dear Pranshi 🌺",

        message:
        "Life becomes brighter with friends like you. Thank you for your kindness, positivity, and beautiful memories. I hope our friendship always stays this special. Happy Friendship Day! 💖"

    }

};





/* ===================================
        OPEN LETTER
=================================== */

function openLetter(friend) {

    const popup = document.getElementById("popup");

    const title = document.getElementById("friendTitle");

    const message = document.getElementById("friendMessage");

    title.textContent = letters[friend].title;

    message.textContent = letters[friend].message;

    popup.style.display = "flex";

}





/* ===================================
        CLOSE LETTER
=================================== */

function closeLetter() {

    document.getElementById("popup").style.display = "none";

}

/* ===================================
        FINAL SURPRISE
=================================== */

function showSurprise() {

    const surprise = document.getElementById("surpriseMessage");

    if (surprise.style.display === "block") {

        surprise.style.display = "none";

    } else {

        surprise.style.display = "block";

    }

}





/* ===================================
    CLOSE POPUP WHEN CLICKING OUTSIDE
=================================== */

window.addEventListener("click", (event) => {

    const popup = document.getElementById("popup");

    if (event.target === popup) {

        popup.style.display = "none";

    }

});





/* ===================================
        OPTIONAL BACKGROUND MUSIC
=================================== */

const music = document.getElementById("bgMusic");

document.body.addEventListener("click", () => {

    if (music) {

        music.play().catch(() => {});

    }

}, { once: true });





/* ===================================
        SCROLL ANIMATION
=================================== */

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, {

    threshold: 0.2

});



document.querySelectorAll("section").forEach(section => {

    section.style.opacity = "0";
    section.style.transform = "translateY(60px)";
    section.style.transition = "all .8s ease";

    observer.observe(section);

});





/* ===================================
        SHOW HERO IMMEDIATELY
=================================== */

const hero = document.querySelector(".hero");

if (hero) {

    hero.style.opacity = "1";
    hero.style.transform = "translateY(0)";

}





/* ===================================
        SMALL BUTTON EFFECT
=================================== */

document.querySelectorAll("button").forEach(button => {

    button.addEventListener("mousedown", () => {

        button.style.transform = "scale(.95)";

    });

    button.addEventListener("mouseup", () => {

        button.style.transform = "";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "";

    });

});





/* ===================================
            FINISHED
=================================== */

console.log("✨ Friendship Day Website V2 Loaded Successfully ❤️");