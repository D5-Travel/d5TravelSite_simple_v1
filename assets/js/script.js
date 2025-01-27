const container = document.getElementById("container");
const titleLink = document.getElementById("titleLink");
const homeLink = document.getElementById("homeLink");
const formLink = document.getElementById("formLink");
const faqLink = document.getElementById("faqLink");

const renderLanding = ()=>{

    container.innerHTML = `
        <div class="landing_wrapper">
            <div class="landing_hero">
                <div class="landing_card">
                    <div class="landing_title">
                        <h2 class="landing_h2">
                            Discount Tickets on Flights to/from Israel
                        </h2>
                        <h3>
                            The same flights at a lower price!
                        </h3>
                    </div>
                        <ul class="landing_ul">
                            <li class="landing_li">
                                <h4>5% off for single passengers</h4>
                            </li>
                            <li class="landing_li">
                                <h4>7.5% off for 2+ passengers</h4>
                            </li>
                        </ul>
                </div>
                <p id="landingFaq" class="landing_faq">
                    How does it work?
                </p>
                
            </div>
            
            <button id="bookButton" class="book_button btn btn-primary btn-lg" type="button">
                Let's Go!
            </button>
        </div>`
    
    // currentPage = "landing"
    localStorage.setItem("currentPage", "landing");
    
    const bookButton = document.getElementById("bookButton");
    const landingFaq = document.getElementById("landingFaq");
    bookButton.addEventListener("click", renderForm);
    landingFaq.addEventListener("click", renderFaq);

};


const renderForm = ()=>{
    const sendEmail = "8fac351969ec5f7aa0ed9f33e1ae7301";
    container.innerHTML = `
    <div class="form_container">
        <div class="booking_title">
            <h2>Booking Form</h2>
            <h4>Please fill out your flight information in the form below.  A travel agent will contact you shortly in order to move forward with the booking process.</h4>
            <h5>* indicates a required field.</h5>
        </div>

        <form action="https://formsubmit.co/${sendEmail}" method="POST" id="bookingForm" class="booking_form">
            <div class="form_body">
                <div class="form_contact">
                    <h3>Contact Information</h3>
                    <div class="mb-3">
                        <label for="firstName" class="form-label">First Name*</label>
                        <input type="text" name="firstName" class="form-control" required>
                    </div>
                    <div class="mb-3">
                        <label for="lastName" class="form-label">Last Name*</label>
                        <input type="text" name="lastName" class="form-control" required>
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">Email*</label>
                        <input type="email" class="form-control" name="email" required>
                    </div>
                    <div class="mb-3">
                        <label for="pphone" class="form-label">Phone*</label>
                        <input type="text" name="phone" class="form-control" required>
                    </div>
                </div>

                <div class="form_contact">
                    <h3>Booking Details</h3>
                    <div class="mb-3">
                        <label for="paxNo" class="form-label">Number of Passengers*</label>
                        <input type="text" name="paxNo" class="form-control" required>
                    </div>

                    <div class="radio_box">
                        <p class="radio_p">Ticket Type*</p>

                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
                            <label class="form-check-label" for="flexRadioDefault2">
                                Round Trip
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                            <label class="form-check-label" for="flexRadioDefault1">
                                One Way
                            </label>
                        </div>
                    

                    </div>

                    <div class="mb-3">
                        <label for="departCity" class="form-label">Departing City*</label>
                        <input type="text" name="departCity" class="form-control" placeholder="New York City" required>
                    </div>
                    <div class="mb-3">
                        <label for="arriveCity" class="form-label">Arrival City*</label>
                        <input type="text" name="arriveCity" class="form-control" placeholder="Tel Aviv" required>
                    </div>


                    <div class="mb-3">
                        <label for="departDate" class="form-label">Departure Date (approximate)*</label>
                        <input type="date" name="departDate" required>
                    </div>
                    <div class="mb-3">
                        <label for="returnDate" class="form-label">Return Date (approximate)</label>
                        <input type="date" name="returnDate">
                    </div>
                    
                    <div class="mb-3">
                        <label for="classPreference" class="form-label">Class Preference*</label>
                        <input type="text" name="classPreference" class="form-control" placeholder="Economy, Premium, Business, etc." required>
                    </div>

                    <div class="mb-3">
                        <label for="additionalDetails" class="form-label">Additional Details</label>
                        <textarea class="form-control" id="additionalDetails" rows="3"></textarea>
                    </div> 
                    
                </div>
                <div></div>
            </div>
                

            
            
            
            <button id="submitButton" class="submit_btn btn btn-primary btn-lg" type="submit">Submit</button>
        </form>
    </div>`

    localStorage.setItem("currentPage", "form");

    const submitButton = document.getElementById("submitButton");
    submitButton.addEventListener("submit", renderSuccess);
};

const renderFaq = ()=>{
    const qna = [
        {
            question: "How do you get discounts that I can't?",
            answer: "As a travel agency, D5 Travel has access to resources and industry connections that retail customers don't.  We use those resources to secure discounts on tickets that are not available to the public."
        },
        {
            question: "Is this all kosher?",
            answer: "Mehadrin min Hamehadrin.  D5 Travel only offers discounts that adhere unambiguously to the policies and terms of service of the airlines we book tickets for."
        },
        {
            question: "Do you use points and miles to book tickets or lower ticket costs?",
            answer: "No."
        },
        {
            question: "Can you book other accommodations for my trip (hotel, car rental, etc)?",
            answer: "You can ask in the “Additional Details” section of the form, but it will most likely be a no."
        },
        {
            question: "Why don't other travel agents offer the same discounts?",
            answer: "The short answer is that they can, but generally don't.  Many other travel agents have access to the exact same resources and connections as D5 Travel.  Most don't consider it to be worthwhile to invest in the time and effort to book tickets, when they can take a higher fee on a bigger, more expensive trip for a larger client. <br><br>At D5 Travel, we prefer to take a smaller cut on quicker, simpler bookings, which allows us to handle a higher volume of clients with more straightforward needs."
        }
    ];

    const qnaHTML = qna.map((e)=>{
        return `
            <div class="faq_card">
                <div class="faq_question">
                    <h4>${e.question}</h4>
                </div>
                <div class="faq_answer">
                    <h5>${e.answer}<h5>
                </div>
            </div>
        `;
    }).join("\n");

    container.innerHTML = `
        <div class="faq_wrapper">
            <div class="faq_title">
                <h2>Frequently Asked Questions</h2>
            </div>
            <div id="faqBody" class="faq_body">

            </div>
        </div>
    `

    const faqBody = document.getElementById("faqBody");

    faqBody.innerHTML = `${qnaHTML}`;


    localStorage.setItem("currentPage", "faq");
};


(()=>{
    titleLink.addEventListener("click", renderLanding);
    homeLink.addEventListener("click", renderLanding);
    formLink.addEventListener("click", renderForm);
    faqLink.addEventListener("click", renderFaq);


    // const currentPage = JSON.parse(localStorage.getItem("currentPage"));
    const currentPage = localStorage.getItem("currentPage");
    if(currentPage){
        switch(currentPage){
            case "landing":
                renderLanding();
                break;
            case "form":
                renderForm();
                break;
            case "faq":
                renderFaq();
                break;
        };
    } else {
        renderLanding();
    };
})()