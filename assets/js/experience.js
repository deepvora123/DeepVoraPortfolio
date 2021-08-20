//  Work experience cards


const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Quantum Hedge Fund Analyst",
    cardImage: "assets/images/experience-page/alpha_alternatives.jpg",
    place: "Alpha Alternatives",
    time: "(June, 2021 - July, 2021)",
    desp: "<li>Worked with a strategist, tabulated his idea using Python, and pitched it to the stakeholders.</li> <li>Helped the company collect raw market depth data via APIs and convert it into CSVs that could be used further for trading.</li> ",
  },
  {
    title: "Chief Project Manager",
    cardImage: "assets/images/experience-page/story_of_makers.png",
    place: "Story Of Makers",
    time: "(Mar, 2019 - July, 2021)",
    desp: "<li>Assisted more than 15 young makers to ideate, make, and exhibit their dream projects.</li><li>Helped developed their website using WordPress.</li>",
  },
  {
    title: "Research Intern",
    cardImage: "assets/images/experience-page/magnes_motors.png",
    place: "Magnes Motors",
    time: "(Jan - March, 21)",
    desp:"<li>Determined the Battery State-of-Charge of Electric Vehicles using Arduino coding.</li><li>Created a sample PCB model that determines the same.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
      <ul>
      <li class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </li>
    </ul>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);


// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "Community Of Coders, VJTI",
    cardImage: "assets/images/experience-page/coc.png",
    description:
      "Helped my juniors by mentoring their projects and teaching programming languages via workshops.",
  },
  {
    title: "Chief EAO, Technovanza 2020-21",
    cardImage: "assets/images/experience-page/technovanza.jpg",
    description:
      "Raised funds by approaching 25 corporate and business executives for our annual Tech-fest.",
  },
  {
    title: "Google Developer Student Club, VJTI",
    cardImage: "assets/images/experience-page/gdp.png",
    description:
      "Actively participated in 30DaysOfCloud workshop and helped peers resolve their doubts.",
  },
  {
    title: "Jain Youth Forum",
    cardImage: "assets/images/experience-page/jyf.png",
    description:
      "Conducted and administered workshops, visits and seminars related to management and Jain philosophy.",
  },
  {
    title: "Josh Talks, Mumbai Coordinator",
    cardImage: "assets/images/experience-page/josh_talks.jpg",
    description:
      "Organized 2 shoots for the company’s YouTube channel that impacts a million people.",
  },
  {
    title: "Entrepreneurship Cell, VJTI",
    cardImage: "assets/images/experience-page/ecell_vjti.png",
    description:
      "Organized the Ecell - Startup netcon, 2020.",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" style="height: 600px;width:400px">
      
      <img src="${cardImage}" height="300" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);


// Mentorship Card


const mentorshipcards = document.querySelector(".mentorship-cards");
const mentor = [
  {
    title: "Community Of Coders",
    image: "assets/images/experience-page/coc.png",
    time: "06/2020 - 08/2020",
    desp: "<li>It is an open source community where students and mentors can apply.</li><hr /><li>Ample amount of technologies and projects are there and we are given opportunity to work on them according to our interest and knowledge.</li>",
  },
  {
    title: "Story Of Makers",
    image: "assets/images/experience-page/story_of_makers.png",
    time: "03/2020 - 08/2020",
    desp: "<li>Story Of Makers organizes Biyearly Tech fest where creators from all round the world come and display their science projects.</li><hr /><li>It is a great platform to explore new projects and ideas. </li>",
  },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, time, desp}) =>
      (output += `        
      <div class="column mentorshipCard"> 
      <div class="card card2 mentorshipCardCover">
        <img src="${image}" class="card-img-top" alt="..."  width="64" height="300">
        <div class="information">
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p class=""sub-title">${time}</p>
        </div>
        <div class="more-information">
        <ul class="list-group list-group-flush p-0 right-aligned">
          <div class="list-group-item card2 disclaimer">${desp}</div>
        </ul>
        </div>
        </div>
      </div>
      </div>
      `)
  );
  mentorshipcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
