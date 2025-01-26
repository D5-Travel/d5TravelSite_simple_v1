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
                        <p id="faqLink" class="faq_link">
                            How does it work?
                        </p>
                </div>
                
            </div>
            
            <button id="bookButton" class="book_button btn btn-primary btn-lg" type="button">
                Let's Go!
            </button>
        </div>`
};


const renderForm = ()=>{
    const sendEmail = "ben@d5travel.com";
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

                <div class="form_flight">
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
            </div>
                

            
            
            
            <button class="submit_btn btn btn-primary btn-lg">Submit</button>
        </form>
    </div>`
}



renderLanding()