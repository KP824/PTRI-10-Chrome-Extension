document.addEventListener("DOMContentLoaded", () => {
  runAll();

  /*************************END OF  DOM EVENT LOADED*************************** */
});

// MAIN FUNCTION

function runAll() {
  fetch(
    "https://api.unsplash.com/photos/random?client_id=AXa1iFdVkZ78G5MgzdZkrDeKpwBxL9brATOWeln_t0k&query=zen",
    {
      headers: {
        "Accept-Version": "v1",
      },
    }
  )
    .then((response) => response.json())
    .then((responseJSON) => {
      const APIurl = responseJSON.urls.regular;
      document.getElementById(
        "splash"
      ).style.backgroundImage = `url(${APIurl})`; // specify the image path here, adds style inline in HTML
    });

  const index = (function () {
    return Math.floor(Math.random() * 50);
  })();

  fetch(
    "https://api.giphy.com/v1/gifs/search?api_key=jYTCmaM347HcKkb66veNrpuvddhR2TJG&q=yoga&limit=50"
  )
    .then((response) => response.json())
    .then((responseJSON) => {
      const GIFurl = responseJSON.data[index].embed_url;
      document.getElementById("giphy-embed").src = `${GIFurl}`;
    });

  const affirmations = [
    "You got this",
    "You'll figure it out",
    "You're a smart cookie",
    "I believe in you",
    "Sucking at something is the first step towards being good at something",
    "Struggling is part of learning",
    "Everything has cracks - that's how the light gets in",
    "Mistakes don't make you less capable",
    "We are all works in progress",
    "You are a capable human",
    "You know more than you think",
    "10x engineers are a myth",
    "If everything was easy you'd be bored",
    "I admire you for taking this on",
    "You're resourceful and clever",
    "You'll find a way",
    "I know you'll sort it out",
    "Struggling means you're learning",
    "You're doing a great job",
    "It'll feel magical when it's working",
    "I'm rooting for you",
    "Your mind is full of brilliant ideas",
    "You make a difference in the world by simply existing in it",
    "You are learning valuable lessons from yourself every day",
    "You are worthy and deserving of respect",
    "You know more than you knew yesterday",
    "You're an inspiration",
    "Your life is already a miracle of chance waiting for you to shape its destiny",
    "Your life is about to be incredible",
    "Nothing is impossible. The word itself says 'I’m possible!'",
    "Failure is just another way to learn how to do something right",
    "I give myself permission to do what is right for me",
    "You can do it",
    "It is not a sprint, it is a marathon. One step at a time",
    "Success is the progressive realization of a worthy goal",
    "People with goals succeed because they know where they’re going",
    "All you need is the plan, the roadmap, and the courage to press on to your destination",
    "The opposite of courage in our society is not cowardice... it is conformity",
    "Whenever we’re afraid, it’s because we don’t know enough. If we understood enough, we would never be afraid",
    "The past does not equal the future",
    "The path to success is to take massive, determined action",
    "It’s what you practice in private that you will be rewarded for in public",
    "Small progress is still progress",
    "Don't worry if you find flaws in your past creations, it's because you've evolved",
    "Starting is the most difficult step - but you can do it",
    "Don't forget to enjoy the journey",
    "It's not a mistake, it's a learning opportunity",
  ];

  const randomAffIndex = (function () {
    return Math.floor(Math.random() * 47);
  })();

  document.getElementById(
    "positive-quote"
  ).innerText = `${affirmations[randomAffIndex]}`;
}

// const btn1 = document.getElementById('newTabBtn1');

// btn1.addEventListener('click', )

// const btn2 = document.getElementById('newTabBtn2');
// btn2.addEventListener('click', () => {});

// When user starts extension, have to select which offerings they want today
// checkboxes / buttons for each: jokes, koans, exercises
// set interval for occurrences
// submit button
// (non-user, in background) disable any not checked
// Option to reset / stop the extension (clear interval)
// Show start pop-up again, with checkboxes

/* Notes for Jokes
- show in extension pop-up
- programming, foodie, one-liners, self-deprecating
*/
// Create an array and insert 20 random jokes, iterate over array and display curr joke
// STRETCH GOAL: have joke var, call joke API, store returned joke in var, display var; sometime before next occurence, call API again for new joke

/****************** Create Interval Settings ******************/

// const btnDemo = document.getElementById("newTabBtn2"); // how many milliseconds delay to pass to setInterval
// const btn15 = document.getElementById("newTabBtn3");
// const btn30 = document.getElementById("newTabBtn4");
// const btn60 = document.getElementById("newTabBtn5");

// const reset = document.getElementById("newTabBtn6");

// capture all of the abvoe in a function
// run that function once DOM loads
// pass function into setInterval, delay in setInterval will be based on button user clicked
// onclick listener that will run setInterval with 15000ms

// let intervalID;

/* IF WE HAD MORE TIME... HOW WOULD WE IMPROVE EXTENSION?
- Maybe create tutorial with preselected joke/koan/ or exercise to demonstrate functionality
- therapy API integration
- koan/s stories more interactive
*/

/********************  N I C E  B L O C K  ****************** */
/* Start of affirmation API */

// fetch('https://www.affirmations.dev/', {
//   headers: {
//     "Accept": "application/json",
//     "mode": 'no-cors',
//     'Access-Control-Allow-Origin': '*'
//   }
// })
// .then((response) => response.json())
// .then((data) => console.log(data));
// console.log(`We here!`);
