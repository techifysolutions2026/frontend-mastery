//!CLOCK FUNCION
function clockTime(){

    const Clock = document.querySelector("#clock")

    const now = new Date();

    const hours = now.getHours() % 12 || 12;
    const hours12 = String(hours).padStart(2 ,0);
    const minutes = String(now.getMinutes()).padStart(2,0)
    const seconds = String(now.getSeconds()).padStart(2,0)

    Clock.innerText = (`${hours12}` + ":" + `${minutes}` + ":" + `${seconds}`)
}

clockTime();
setInterval(clockTime, 1000);

//!SIDE FUNCTION
const titles = document.querySelectorAll(".div-title")

//*DEFULT GENERAL SECITON SHOULD BE CLICKED
const firstSeciton = document.querySelector(".question-div")

if(firstSeciton){
    firstSeciton.classList.add("question-div-active")
};

//*ADDING FOR EACH FOR MAKING THE RESUBLE CODE FOR ALL THREE TITLE WHEN CLICKED
titles.forEach ( (title) => {

    //*FOR LISTEN OF THE CLICK
    title.addEventListener("click", ()=>{

        //*SELECTING THE QUE-DIV OF THE CLICKED TITLE
        const currentSection = title.nextElementSibling;

        //*DOUBLE CHECK FOR THE FUNCTION
        const allSection = document.querySelectorAll(".question-div")
        allSection.forEach( (section) => {
            section.classList.remove("question-div-active")
        })

        currentSection.classList.add("question-div-active")

    })

});

//!MAIN FUNCTION
//*SELECTING DOM ELEMENTS
const generalSection = document.querySelector(".question-div-general")
const processSection = document.querySelector(".question-div-process")
const pricingSection = document.querySelector(".question-div-pricing")

//*GENRAL QUESTION
const generalQuestions = [
  "What services do you offer?",
  "How can I contact your support team?",
  "What are your business hours?",
  "Do you offer custom solutions?",
  "How long does it take to complete a project?",
  "What payment methods do you accept?",
  "Do you provide refunds?",
  "Can I track my order or project status?",
  "Is my personal information secure?",
  "Do you offer customer support after purchase?",
  "How do I get started with your service?",
  "Do you work with international clients?",
  "Can I request revisions?",
  "What makes your company different from competitors?",
  "Are there any hidden charges?",
  "Do you offer discounts for bulk orders?",
  "How can I cancel my subscription or order?",
  "Do you provide free consultations?",
  "What industries do you work with?",
  "How quickly do you respond to inquiries?"
];

//*GENERAL ANSWER
const generalAnswers = [
  "We offer a wide range of services tailored to meet your business and personal needs.",
  "You can contact our support team via email, phone, or live chat on our website.",
  "Our business hours are Monday to Friday, 9 AM to 6 PM.",
  "Yes, we provide fully customized solutions based on your requirements.",
  "Project timelines vary depending on complexity, but we always aim for timely delivery.",
  "We accept major credit cards, debit cards, UPI, and online bank transfers.",
  "Yes, we offer refunds according to our refund policy and terms of service.",
  "Yes, you can track your order or project progress through your account dashboard.",
  "Absolutely, we use secure technologies to protect your personal information.",
  "Yes, we provide ongoing customer support even after the purchase is completed.",
  "Getting started is easy — simply contact us or sign up through our website.",
  "Yes, we proudly work with clients from all around the world.",
  "Yes, revisions can be requested based on the package or agreement selected.",
  "We focus on quality, transparency, and customer satisfaction to stand out from competitors.",
  "No, we believe in transparent pricing with no hidden charges.",
  "Yes, we provide special discounts for bulk orders and long-term partnerships.",
  "You can cancel your subscription or order by contacting our support team.",
  "Yes, we offer free consultations to discuss your needs and goals.",
  "We work with a variety of industries including technology, retail, healthcare, and education.",
  "We usually respond to inquiries within 24 hours during business days."
];

//*PROCESS QUESTION
const processQuestions = [
  "How does your process work?",
  "What is the first step to start a project?",
  "How long does the entire process take?",
  "Do you provide regular project updates?",
  "Can I request changes during the process?",
  "What information do you need before starting?",
  "Do you follow a fixed workflow for every project?",
  "How do you ensure project quality?",
  "Will I have a dedicated point of contact?",
  "What happens after the project is completed?",
  "How do you handle project deadlines?",
  "Do you offer project planning assistance?",
  "Can multiple team members collaborate on a project?",
  "How do you communicate during the project?",
  "What tools do you use for project management?",
  "Do you provide testing before delivery?",
  "Can projects be completed urgently?",
  "How often will I receive progress reports?",
  "What happens if there is a delay in the project?",
  "Do you offer post-launch support?"
];

//*PROCESS ANSWER
const processAnswers = [
    "Our process includes consultation, planning, execution, testing, and final delivery.",
    "The first step is discussing your requirements and project goals with our team.",
    "Project timelines depend on the scope and complexity of the work involved.",
  "Yes, we provide regular updates to keep you informed throughout the project.",
  "Yes, reasonable changes can be requested during the development process.",
  "We usually need your project details, goals, references, and timeline expectations.",
  "We follow a structured workflow while customizing it to fit your specific needs.",
  "We maintain quality through testing, reviews, and continuous communication.",
  "Yes, a dedicated team member will assist you throughout the project.",
  "After completion, we provide support, maintenance, and final project handover.",
  "We carefully plan timelines and monitor progress to meet agreed deadlines.",
  "Yes, we can help you define project goals, strategy, and execution plans.",
  "Yes, multiple stakeholders can collaborate and share feedback during the project.",
  "We communicate through email, calls, chat platforms, and scheduled meetings.",
  "We use modern project management and collaboration tools for smooth workflow.",
  "Yes, every project goes through proper testing before final delivery.",
  "Yes, urgent projects can be accommodated depending on availability and scope.",
  "Progress reports are usually shared weekly or at key milestones.",
  "In case of delays, we immediately communicate updates and revised timelines.",
  "Yes, we provide post-launch support and maintenance services when needed."
];

//*PRICING QUESTION
const pricingQuestions = [
    "How much do your services cost?",
    "Do you offer flexible pricing plans?",
    "Is there a free consultation available?",
    "Are there any hidden charges in your pricing?",
    "Do you require advance payment?",
    "Can I get a custom quote for my project?",
  "Do you offer discounts for long-term projects?",
  "What payment methods do you accept?",
  "Can pricing change during the project?",
  "Do you provide refunds if I am not satisfied?",
  "Do you offer monthly subscription plans?",
  "Can I pay in installments?",
  "Are taxes included in the pricing?",
  "Do you charge extra for revisions?",
  "How do you calculate project pricing?",
  "Is there a minimum project budget?",
  "Do you offer enterprise pricing packages?",
  "Can I upgrade my package later?",
  "Do you provide detailed invoices?",
  "Are support and maintenance included in the pricing?"
];

//*PRICING ANSWER
const pricingAnswers = [
    "Our pricing depends on the type and complexity of the service you need.",
    "Yes, we offer flexible pricing plans suitable for different budgets.",
    "Yes, we provide a free consultation before starting any project.",
    "No, we believe in transparent pricing with no hidden fees.",
    "Yes, we usually require an initial deposit before starting the project.",
    "Absolutely, we can provide a customized quote based on your requirements.",
    "Yes, discounts may be available for long-term or bulk projects.",
    "We accept credit cards, debit cards, UPI, and bank transfers.",
    "Pricing may change only if there are major scope changes requested.",
    "Refunds are handled according to our refund policy and service agreement.",
    "Yes, we offer subscription-based plans for ongoing services.",
    "Yes, installment payment options may be available for larger projects.",
    "Taxes may or may not be included depending on your location and project type.",
    "Minor revisions are usually included, while major revisions may have additional charges.",
    "Pricing is calculated based on project scope, timeline, and required resources.",
    "Some services may have a minimum budget requirement to begin work.",
    "Yes, we offer customized enterprise packages for larger organizations.",
    "Yes, you can upgrade your package or services at any time.",
    "Yes, we provide detailed invoices for every payment made.",
    "Support and maintenance may be included depending on the selected plan."
];

//*GENRAL SECITON CREATION
generalQuestions.forEach((questionText, index) => {

    const answerText = generalAnswers[index];

    const generalInnerHTML = `
        <div class="que">
            <div class="plus-icon">+</div>
            <div class="bottom-line"></div>
            <p class="question">${questionText}</p>
        </div>

        <div class="ans">
            <div>
                <p>${answerText}</p>
            </div>
            <div class="review-1">
                <p>Is this Is helpful</p>
                <img src="resource/heart (1).png">
            </div>
        </div>
    `;

    generalSection.innerHTML += generalInnerHTML;
})

//*PROCESS SECTION CREATION
processQuestions.forEach((questionText, index)=>{

    const answerText = processAnswers[index];

    const processInnerHTML = `
        <div class="que">
            <div class="plus-icon">+</div>
            <div class="bottom-line"></div>
            <p class="question">${questionText}</p>
        </div>

        <div class="ans">
            <div>
                <p>${answerText}</p>
            </div>
            <div class="review-1">
                <p>Is this Is helpful</p>
                <img src="resource/heart (1).png" alt="">
            </div>
        </div>
    `;  

    processSection.innerHTML += processInnerHTML;
})

//*PRICING SECTION CREATION
pricingQuestions.forEach((questionText, index)=>{

    const answerText = pricingAnswers[index];

    const pricingInnerHTML = `
        <div class="que">
            <div class="plus-icon">+</div>
            <div class="bottom-line"></div>
            <p class="question">${questionText}</p>
        </div>

        <div class="ans">
            <div>
                <p>${answerText}</p>
            </div>
            <div class="review-1">
                <p>Is this Is helpful</p>
                <img src="resource/heart (1).png" alt="">
            </div>
        </div>
    `;
    
    pricingSection.innerHTML += pricingInnerHTML;
})

//!ANSWER REVEAL FUNCTION
const mainBtn = document.querySelectorAll(".plus-icon")

mainBtn.forEach((icon)=>{

    icon.addEventListener("click", ()=>{

        const associatedAns = icon.parentElement.nextElementSibling;
        const associatedBottomLine = icon.nextElementSibling;
        
        if (associatedAns.classList.contains("active")) {
            associatedAns.classList.remove("active");
            icon.classList.remove("active");
            associatedBottomLine.classList.remove("active");
            return;
        }
        
        document.querySelectorAll(".ans, .plus-icon, .bottom-line").forEach(el => el.classList.remove("active"));
        
        associatedAns.classList.add("active");
        icon.classList.add("active");
        associatedBottomLine.classList.add("active");

    })

});

//!COUNT UP FUNCITON
function countup(){
    const counters = document.querySelectorAll(".stat-num")  //SLECTING THE NUMBER TO BE ANIMATED

    counters.forEach((counter)=>{

        const target = +counter.getAttribute("data-target"); //FINAL NUMBER
        let current = 0;

        //THE TIMER EVERY 20 MILISEC
        const timer = setInterval(()=>{
        
            current += Math.ceil(target/100); //NUMBER INCREASED BY 1% EACH TIME WHEN THE TIMER RUN
        
            counter.innerText = current >= target ? target : current;
            if(current >= target )clearInterval(timer);

        }, 20)

    })  

}

//*SETTING OBSERVER FOR CHECKING STATS SECTION IS VISIBLE OR NOT AND WHEN VISIBEL RUN THE FUNCITON
const statsSection = document.querySelector(".stats")

const observer = new IntersectionObserver((enteries)=>{

    if(enteries[0].isIntersecting){
        countup();
        observer.disconnect();
    }

});

observer.observe(statsSection);