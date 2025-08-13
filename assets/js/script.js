const container = document.getElementById("container");
const titleLink = document.getElementById("titleLink");
const homeLink = document.getElementById("homeLink");
const quickFormLink = document.getElementById("quickFormLink");
const formLink = document.getElementById("formLink");
const faqLink = document.getElementById("faqLink");
const contactLink = document.getElementById("contactLink");


const renderLanding = ()=>{

    container.innerHTML = `
        <div class="landing_wrapper">
            <div class="landing_hero">
                <div class="landing_card">
                    <div class="landing_title">
                        <h2 class="landing_h2">
                            Discount Tickets on El Al Flights
                        </h2>
                        <h3>
                            The same flights at a lower price!
                        </h3>
                        <h4>
                            Pay after confirmation!
                        </h4>
                    </div>
                        <ul class="landing_ul">
                            <li class="landing_li">
                                <div class="book_card_title">
                                    <h4>7.5% off for Quick Book*</h4>
                                </div>
                                <div class="book_card_body">
                                    <p>
                                        Enter your desired flight and get your discounted tickets in as little as 30 minutes!
                                        <br><span style="font-size: 0.75rem;">*For bookings less than $1500 total, 7.5% discounts may not be available (you will receive the discount at cost).</span></br>
                                    </p>
                                    <button id="quickBookButton" class="book_button btn btn-primary btn-lg" type="button">Let's Go!</button>
                                </div>
                            </li>
                            <li class="landing_li">
                                <div class="book_card_title">
                                    <h4>5% off for Phone Booking</h4>
                                </div>
                                <div class="book_card_body">
                                    <p>Book over the phone.  One call is all it takes!</p>
                                    <button id="bookButton" class="book_button btn btn-primary btn-lg" type="button">Let's Go!</button>
                                </div>
                            </li>
                        </ul>
                </div>
                <p id="landingFaq" class="landing_faq">
                    Frequently Asked Questions
                </p>
                
            </div>
        </div>`
    
    // currentPage = "landing"
    localStorage.setItem("currentPage", "landing");
    
    const bookButton = document.getElementById("bookButton");
    const quickBookButton = document.getElementById("quickBookButton");
    const landingFaq = document.getElementById("landingFaq");
    bookButton.addEventListener("click", renderForm);
    quickBookButton.addEventListener("click", renderQuickForm);
    landingFaq.addEventListener("click", renderFaq);

};

const renderForm = ()=>{
    container.innerHTML = `
        <div class="form_container">
            <div class="booking_title">
                <h2>Phone Booking Process</h2>
                <h4>Please read before continuing.</h4>
            </div>
            <div class="booking_form">
                <p>
                    You will receive a call from the booking agent.  If you miss the call, you may return it at your convenience.  If you do not return the call, you will receive a single followup.
                </p>
                <p>
                    The booking agent will work with you to find the right flight(s) for your trip.  Once you choose your itinerary, you MUST choose whether or not you'd like to book while on the call.
                </p>
                <p>
                    If you choose to book, we will secure your discount.  The time it takes to complete the process can vary, but most bookings take less than an hour.
                </p>
                <p>
                    Once your booking is complete, we will send you an email with confirmation, as well as our payment information.  We currently accept Zelle, Paypal, and Venmo.  Once payment is received, we will forward your tickets to your email.
                </p>
                <p>
                    After booking and payment are concluded, D5 Travel's role in your trip is complete.  We are not a full service travel agency.
                </p>
                <h3 style="color: #e40000; line-weight: 900; margin-top: 1.5rem;">
                    PAYMENT (OR PROOF OF PAYMENT) MUST BE RECEIVED BY D5 TRAVEL WITHIN 12 HOURS OF BOOKING CONFIRMATION.
                </h3>
                <h3 style="color: #e40000; line-weight: 900; margin-top: 1rem;">
                    IF NO PAYMENT IS RECEIVED WITHIN 12 HOURS, YOUR BOOKING WILL BE CANCELED.
                </h3>

                <p style="font-size: 1.5rem; line-weight: 750; margin-top: 1rem;">
                    Cancellation Policy:
                </p>
                <p>
                    All sales are <span style="color: #e40000; line-weight: 900;">FINAL</span>.  If you cancel your flight, D5 will not compensate you in any way.
                </p>
                <p>
                    If El Al cancels your flight, D5 will pass along to you any compensation El Al send us.
                </p>

            <div>
            
            <button id="confirmButton" class="submit_btn btn btn-primary btn-lg" type="button">Continue</button>
        </div>
    `

    localStorage.setItem("currentPage", "form");

    const confirmButton = document.getElementById("confirmButton");
    confirmButton.addEventListener("click", renderCont);

    function renderCont(){
        const sendEmail = "8fac351969ec5f7aa0ed9f33e1ae7301";
        container.innerHTML = `
        <div class="form_container">
            <div class="booking_title">
                <h2>Phone Booking Form</h2>
                <h4>Please fill out your flight information in the form below.  A travel agent will call you shortly to book your flight(s).</h4>
                <h5><span style="color: red;">*</span> indicates a required field.</h5>
            </div>

            <form action="https://formsubmit.co/${sendEmail}" method="POST" id="bookingForm" class="booking_form">
                <input type="text" name="Phone_Book" id="Phone_Book" value="Phone" hidden>
                <div class="form_body">
                    <div class="form_contact">
                        <h3>Contact Information</h3>
                        <div class="mb-3">
                            <label for="firstName" class="form-label">First Name<span style="color: red;">*</span></label>
                            <input type="text" name="firstName" class="form-control" required>
                        </div>
                        <div class="mb-3">
                            <label for="lastName" class="form-label">Last Name<span style="color: red;">*</span></label>
                            <input type="text" name="lastName" class="form-control" required>
                        </div>
                        <div class="mb-3">
                            <label for="email" class="form-label">Email<span style="color: red;">*</span></label>
                            <input type="email" class="form-control" name="email" required>
                        </div>
                        <div class="mb-3">
                            <label for="pphone" class="form-label">Phone<span style="color: red;">*</span></label>
                            <input type="text" name="phone" class="form-control" required>
                        </div>
                        <div class="mb-3">
                            <label for="discovery" class="form-label">How did you find us?<span style="color: red;">*</span></label>
                            <input type="text" name="discovery" class="form-control" required>
                        </div>
                    </div>

                    <div class="form_contact">
                        <h3>Booking Details</h3>
                        <div class="mb-3">
                            <label for="paxNo" class="form-label">Number of Passengers<span style="color: red;">*</span></label>
                            <input type="text" name="paxNo" class="form-control" required>
                        </div>

                        <div class="mb-3">
                            <label for="paxDetails" class="form-label">Passenger Details<span style="color: red;">*</span></label>
                            <p>
                                Enter Details for Passengers as Follows:
                                <br>[Passenger #]) [Senior/Adult/Child/Baby] - [Prefix][Name (exactly as it appears on your passport)] - [Date of Birth (mm/dd/yyyy)] - [Gender] - [Known Traveler Number (Optional)]</br>
                            </p>
                            <p>
                                Example:
                                <br>1) Adult - Mr. Johnathan James Smith - 01/01/1980 - Male</br>
                                2) Senior - Mrs. Sarah Smith - 01/01/1960 - Female
                                </p>
                                <p>
                                Your booking will use the information EXACTLY as it is written here.  Please double check that you've entered everything correctly.
                                <br> If your information is not correct, and D5 needs to contact El Al to fix or change your booking, you will be charged a $40 fee (if it is our error, the will handle it free of charge).</br>
                            </p>
                            <textarea class="form-control" id="paxDetails" name="paxDetails" rows="3" required></textarea>
                        </div> 

                        <div class="radio_box">
                            <p class="radio_p">Ticket Type<span style="color: red;">*</span></p>

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
                            <label for="departCity" class="form-label">Departing City<span style="color: red;">*</span></label>
                            <input type="text" name="departCity" class="form-control" placeholder="New York City" required>
                        </div>
                        <div class="mb-3">
                            <label for="arriveCity" class="form-label">Arrival City<span style="color: red;">*</span></label>
                            <input type="text" name="arriveCity" class="form-control" placeholder="Tel Aviv" required>
                        </div>


                        <div class="mb-3">
                            <label for="departDate" class="form-label">Departure Date<span style="color: red;">*</span></label>
                            <input type="date" name="departDate" required>
                        </div>
                        <div class="mb-3">
                            <label for="returnDate" class="form-label">Return Date (if applicable)</label>
                            <input type="date" name="returnDate">
                        </div>
                        
                        <div class="mb-3">
                            <label for="classPreference" class="form-label">Class Preference<span style="color: red;">*</span></label>
                            <input type="text" name="classPreference" class="form-control" placeholder="Economy, Premium, Business, etc." required>
                        </div>

                        <div class="mb-3">
                            <label for="additionalDetails" class="form-label">Additional Details</label>
                            <textarea class="form-control" id="additionalDetails" name="additionalDetails" rows="3"></textarea>
                        </div>

                        <div class="mb-3">
                            <p>Payment Method (Check any you have access to)<span style="color: red;">*</span></p>
                            <input type="checkbox" class="btn-check" id="btncheck1" name="Zelle" autocomplete="off">
                            <label class="btn btn-outline-primary" for="btncheck1">Zelle (preferred)</label>

                            <input type="checkbox" class="btn-check" id="btncheck2" name="Paypal" autocomplete="off">
                            <label class="btn btn-outline-primary" for="btncheck2">Paypal</label>

                            <input type="checkbox" class="btn-check" id="btncheck3" name="Venmo" autocomplete="off">
                            <label class="btn btn-outline-primary" for="btncheck3">Venmo</label>
                            <h3 style="color: #e40000; line-weight: 900; margin-top: 1rem;">
                                If we do not receive payment of proof or payment within 12 hours of confirmation, your booking will be cancelled.
                            </h3>
                        </div>
                        
                    </div>
                    <div></div>
                </div>
                    

                
                
                
                <button id="submitButton" class="submit_btn btn btn-primary btn-lg" type="submit">Submit</button>
            </form>
        </div>`

        

        const submitButton = document.getElementById("submitButton");
        submitButton.addEventListener("submit", renderLanding);
    };
    
};


const renderQuickForm = ()=>{
    container.innerHTML = `
        <div class="form_container">
            <div class="booking_title">
                <h2>Quick Booking Process</h2>
                <h4>Please read before continuing.</h4>
            </div>
            <div class="booking_form">
                <p>
                    Enter all of flight information EXACTLY as it appears on the El Al website.
                </p>
                <p>
                    Our booking agent will acquire the necessary discount and book as quickly as possible.  The time it takes to complete the process can vary, but most bookings take less than an hour.  Timelines may also vary based on the availability and working hours of our booking agent.
                </p>
                <p>
                    If you choose to book, we will secure your discount.  The time it takes to complete the process can vary, but most bookings take less than an hour.
                </p>
                <p>
                    If the price or seat availability changes before we can begin the booking process, we will send you an email with updated flight information.  You can tell us if you would like to continue with the new booking if seats are still available.
                </p>
                <p style="font-size: 1.25rem; line-weight: 750; margin-top: 1rem;">
                    WE DO NOT BOOK UNLESS THE FLIGHT INFORMATION ON THE EL AL MATCHES THE SUBMISSION AT TIME OF BOOKING.
                </p>
                <p>
                    Once your booking is complete, we will send you an email with confirmation, as well as our payment information.  We currently accept Zelle, Paypal, and Venmo.  Once payment is received, we will forward your tickets to your email.
                </p>
                <p>
                    After booking and payment are concluded, D5 Travel's role in your trip is complete.  You are solely responsible for your own checkin, keeping track of any flight changes, and anything else related to your trip.  We are not a full service travel agency.
                </p>
                <h3 style="color: #e40000; line-weight: 900; margin-top: 1.5rem;">
                    PAYMENT (OR PROOF OF PAYMENT) MUST BE RECEIVED BY D5 TRAVEL WITHIN 12 HOURS OF BOOKING CONFIRMATION.
                </h3>
                <h3 style="color: #e40000; line-weight: 900; margin-top: 1rem;">
                    IF NO PAYMENT IS RECEIVED WITHIN 12 HOURS, YOUR BOOKING WILL BE CANCELED.
                </h3>
                <p style="font-size: 1.5rem; line-weight: 750; margin-top: 1rem;">
                    Cancellation Policy:
                </p>
                <p>
                    All sales are <span style="color: #e40000; line-weight: 900;">FINAL</span>.  If you cancel your flight, D5 will not compensate you in any way.
                </p>
                <p>
                    If El Al cancels your flight, D5 will pass along to you any compensation El Al send us.
                </p>

            <div>
            
            <button id="confirmButton" class="submit_btn btn btn-primary btn-lg" type="button">Continue</button>
        </div>
    `

    localStorage.setItem("currentPage", "quickForm");

    const confirmButton = document.getElementById("confirmButton");
    confirmButton.addEventListener("click", renderCont);

    function renderCont(){
        const sendEmail = "8fac351969ec5f7aa0ed9f33e1ae7301";
        container.innerHTML = `
        <div class="form_container">
            <div class="booking_title">
                <h2>Quick Booking Form</h2>
                <h4>Please fill out your flight information in the form below.  You will receive an email with confirmation when the booking is completed.  You will receive your tickets after payment is received.</h4>
                <h5>* indicates a required field.</h5>
            </div>

            <form action="https://formsubmit.co/${sendEmail}" method="POST" id="bookingForm" class="booking_form">
                <input type="text" name="Quick_Book" id="Quick_Book" value="Quick" hidden>
                <div class="form_body">
                    <div class="form_contact">
                        <h3>Contact Information</h3>
                        <div class="mb-3">
                            <label for="firstName" class="form-label">First Name<span style="color: red;">*</span></label>
                            <input type="text" name="firstName" class="form-control" required>
                        </div>
                        <div class="mb-3">
                            <label for="lastName" class="form-label">Last Name<span style="color: red;">*</span></label>
                            <input type="text" name="lastName" class="form-control" required>
                        </div>
                        <div class="mb-3">
                            <label for="email" class="form-label">Email<span style="color: red;">*</span></label>
                            <input type="email" class="form-control" name="email" required>
                        </div>
                        <div class="mb-3">
                            <label for="pphone" class="form-label">Phone<span style="color: red;">*</span></label>
                            <input type="text" name="phone" class="form-control" required>
                        </div>
                        <div class="mb-3">
                            <label for="discovery" class="form-label">How did you find us?<span style="color: red;">*</span></label>
                            <input type="text" name="discovery" class="form-control" required>
                        </div>
                    </div>

                    <div class="form_contact">
                        <h3>Booking Details</h3>
                        <div class="mb-3">
                            <label for="paxNo" class="form-label">Number of Passengers<span style="color: red;">*</span></label>
                            <input type="text" name="paxNo" class="form-control" required>
                        </div>

                        <div class="mb-3">
                            <label for="paxDetails" class="form-label">Passenger Details<span style="color: red;">*</span></label>
                            <p>
                                Enter Details for Passengers as Follows:
                                <br>[Passenger #]) [Senior/Adult/Child/Baby] - [Prefix][Name (exactly as it appears on your passport)] - [Date of Birth (mm/dd/yyyy)] - [Gender] - [Known Traveler Number (Optional)]</br>
                            </p>
                            <p>
                                Example:
                                <br>1) Adult - Mr. Johnathan James Smith - 01/01/1980 - Male</br>
                                2) Senior - Mrs. Sarah Smith - 01/01/1960 - Female
                                </p>
                                <p>
                                Your booking will use the information EXACTLY as it is written here.  Please double check that you've entered everything correctly.
                                <br> If your information is not correct, and D5 needs to contact El Al to fix or change your booking, you will be charged a $40 fee (if it is our error, the will handle it free of charge).</br>
                            </p>
                            <textarea class="form-control" id="paxDetails" name="paxDetails" rows="3" required></textarea>
                        </div> 

                        <div class="softEnd radio_box">
                            <p class="radio_p">Ticket Type<span style="color: red;">*</span></p>

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
                        
                        <h3 style="margin-top: 1rem;">Departing Flight</h3>
                        <div class="mb-3">
                            <label for="departArprt" class="form-label">Departing Airport<span style="color: red;">*</span></label>
                            <input type="text" name="departArprt" class="form-control" placeholder="JFK" required>
                        </div>
                        <div class="mb-3">
                            <label for="arriveArprt" class="form-label">Arrival Airport<span style="color: red;">*</span></label>
                            <input type="text" name="arriveArprt" class="form-control" placeholder="Ben Gurion" required>
                        </div>

                        
                        <div class="mb-3">
                            <label for="departDate" class="form-label">Departure Date<span style="color: red;">*</span></label>
                            <input type="date" name="departDate" required>
                        </div>

                        <div class="mb-3">
                            <label for="departTime" class="form-label">Departure Time<span style="color: red;">*</span></label>
                            <input type="time" name="departTime" required>
                        </div>

                        <div class="mb-3">
                            <label for="flightNo" class="form-label">Flight Number<span style="color: red;">*</span></label>
                            <input type="text" name="flightNo" class="form-control" required>
                        </div>

                        <div class="mb-3">
                            <label for="stopovers" class="form-label">Stopovers (if applicable)</label>
                            <input type="text" name="stopovers" class="form-control">
                        </div>
                        
                        <div class="mb-3">
                            <label for="classPreference" class="form-label">Class Preference<span style="color: red;">*</span></label>
                            <input type="text" name="classPreference" class="form-control" placeholder="Economy, Premium, Business, etc." required>
                        </div>

                        <div class="softEnd mb-3">
                            <label for="paxPrice" class="form-label">Price Per Ticket (as it appears on the El Al website, including denomination)<span style="color: red;">*</span></label>
                            <input type="text" name="paxPrice" class="form-control" required>
                        </div>

                        


                        <h3>Returning Flight (If Applicable)</h3>

                        <div class="mb-3">
                            <label for="departArprt" class="form-label">Departing Airport</label>
                            <input type="text" name="departArprt_Rtrn" class="form-control" placeholder="JFK">
                        </div>
                        <div class="mb-3">
                            <label for="arriveArprt" class="form-label">Arrival Airport</label>
                            <input type="text" name="arriveArprt_Rtrn" class="form-control" placeholder="Ben Gurion">
                        </div>

                        
                        <div class="mb-3">
                            <label for="departDate" class="form-label">Departure Date</label>
                            <input type="date" name="departDate_Rtrn">
                        </div>

                        <div class="mb-3">
                            <label for="departTime" class="form-label">Departure Time</label>
                            <input type="time" name="departTime_Rtrn">
                        </div>

                        <div class="mb-3">
                            <label for="flightNo" class="form-label">Flight Number</label>
                            <input type="text" name="flightNo_Rtrn" class="form-control">
                        </div>

                        <div class="mb-3">
                            <label for="stopovers" class="form-label">Stopovers (if applicable)</label>
                            <input type="text" name="stopovers_Rtrn" class="form-control">
                        </div>
                        
                        <div class="mb-3">
                            <label for="classPreference" class="form-label">Class Preference</label>
                            <input type="text" name="classPreference_Rtrn" class="form-control" placeholder="Economy, Premium, Business, etc.">
                        </div>

                        <div class="softEnd mb-3">
                            <label for="paxPrice" class="form-label">Price Per Ticket (as it appears on the El Al website, including denomination)</label>
                            <input type="text" name="paxPrice_Rtrn" class="form-control">
                        </div>

                        <h3>Extras</h3>
                        <div class="mb-3">
                            <label for="extras" class="form-label">Extra Charges (extra bags, extra legroom, etc)</label>
                            <p>Most additional charges and upgrades available on the El Al website are covered under the D5 discount.</p>
                            <textarea class="form-control" id="extras" name="extras" rows="3"></textarea>
                        </div>
                        <div class="softEnd mb-3">
                            <label for="additionalDetails" class="form-label">Additional Details</label>
                            <p>Anything not covered by the form that you'd like us to know before booking.</p>
                            <textarea class="form-control" id="additionalDetails" name="additionalDetails" rows="3"></textarea>
                        </div>
                        

                        <h3>Payment Details</h3>
                        <div class="mb-3">
                            <label for="priceTotal" class="form-label">Total Price (as calculated by the El Al website, including denomination)<span style="color: red;">*</span></label>
                            <input type="text" name="priceTotal" class="form-control" required>
                        </div>
                        <div class="mb-3">
                            <p>Payment Method (Check any you have access to)<span style="color: red;">*</span></p>
                            <input type="checkbox" class="btn-check" id="btncheck1" name="Zelle" autocomplete="off">
                            <label class="btn btn-outline-primary" for="btncheck1">Zelle (preferred)</label>

                            <input type="checkbox" class="btn-check" id="btncheck2" name="Paypal" autocomplete="off">
                            <label class="btn btn-outline-primary" for="btncheck2">Paypal</label>

                            <input type="checkbox" class="btn-check" id="btncheck3" name="Venmo" autocomplete="off">
                            <label class="btn btn-outline-primary" for="btncheck3">Venmo</label>
                            <h3 style="color: #e40000; line-weight: 900; margin-top: 1rem;">
                                If we do not receive payment of proof or payment within 12 hours of confirmation, your booking will be cancelled.
                            </h3>
                        </div>
                        
                    </div>
                    <div></div>
                </div>
                    

                
                
                
                <button id="submitButton" class="submit_btn btn btn-primary btn-lg" type="submit">Submit</button>
            </form>
        </div>`

        const submitButton = document.getElementById("submitButton");
        submitButton.addEventListener("submit", renderLanding);
    };
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




const renderContact = ()=>{

    const sendEmail = "8fac351969ec5f7aa0ed9f33e1ae7301";
    container.innerHTML = `
    <div class="form_container">
        <div class="booking_title">
            <h2>Contact Us</h2>
            <h4>Fill out your information and send us a message.  We will attempt to respond in a timely fashion.</h4>
        </div>

        <form action="https://formsubmit.co/${sendEmail}" method="POST" id="bookingForm" class="booking_form">
            <input type="text" name="Contact_Form" id="Contact_Form" value="Contact" hidden>
            <div class="form_body">
                <div class="form_contact">
                    <h3>Contact Information</h3>
                    <div class="mb-3">
                        <label for="firstName" class="form-label">First Name</label>
                        <input type="text" name="firstName" class="form-control" required>
                    </div>
                    <div class="mb-3">
                        <label for="lastName" class="form-label">Last Name</label>
                        <input type="text" name="lastName" class="form-control" required>
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">Email</label>
                        <input type="email" class="form-control" name="email" required>
                    </div>
                    <div class="mb-3">
                        <label for="pphone" class="form-label">Phone</label>
                        <input type="text" name="phone" class="form-control" required>
                    </div>
                </div>

                <div class="form_contact">
                    <h3>Message Body</h3>
                    <div class="mb-3">
                        <textarea class="form-control" id="contactBody" name="contactBody" rows="3" required></textarea>
                    </div>
                </div>
                <div></div>
            </div>
                

            
            
            
            <button id="submitButton" class="submit_btn btn btn-primary btn-lg" type="submit">Send</button>
        </form>
    </div>`

    localStorage.setItem("currentPage", "contact");

    const submitButton = document.getElementById("submitButton");
    submitButton.addEventListener("submit", renderLanding);
};









(()=>{
    titleLink.addEventListener("click", renderLanding);
    homeLink.addEventListener("click", renderLanding);
    formLink.addEventListener("click", renderForm);
    quickFormLink.addEventListener("click", renderQuickForm);
    faqLink.addEventListener("click", renderFaq);
    contactLink.addEventListener("click", renderContact);


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
            case "quickForm":
                renderQuickForm();
                break;
            case "faq":
                renderFaq();
                break;
            case "contact":
                renderContact();
                break;
        };
    } else {
        renderLanding();
    };
})()