const container = document.getElementById("container");
const titleLink = document.getElementById("titleLink");
const homeLink = document.getElementById("homeLink");
const formLink = document.getElementById("formLink");
const faqLink = document.getElementById("faqLink");

const rednerLanding = ()=>{

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
            
            <button id="bookButton" class="book_button submit_btn btn btn-primary btn-lg" type="button">
                Let's Go!
            </button>
        </div>`
};




rednerLanding()