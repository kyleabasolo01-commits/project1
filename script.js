

let year = document.getElementById("year");

if (year) {

    year.textContent =
        new Date().getFullYear();

}

function showWelcome() {

    alert(
        "Welcome to my Portfolio Website!"
    );

}





function openImage(image) {

    let modal =
        document.getElementById("imageModal");

    let modalImage =
        document.getElementById("modalImage");


    modal.style.display = "flex";

    modalImage.src = image.src;

}




function closeImage() {

    let modal =
        document.getElementById("imageModal");

    modal.style.display = "none";

}



window.addEventListener(
    "click",
    function(event) {

        let modal =
            document.getElementById("imageModal");

        if (event.target === modal) {

            closeImage();

        }

    }
);


 

let contactForm =
    document.getElementById("contactForm");


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();

            let name =
                document.getElementById("name").value;


            alert(
                "Thank you, " +
                name +
                "! Your message has been received."
            );


            contactForm.reset();

        }
    );

}