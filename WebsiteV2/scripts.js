
/*
#####################################################################################################################
#####################################################################################################################
################################################ text fly-in animation ##############################################
#####################################################################################################################
#####################################################################################################################
*/
/* For Index page */
function fly_in_animation(){
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const square = entry.target.querySelector('.header');

      if (entry.isIntersecting) {
        square.classList.add('flyIn');
      return; // if we added the class, exit the function
      }

      // We're not intersecting, so remove the class!
      square.classList.remove('flyIn');
    });
  });

  observer.observe(document.querySelector('.title'));
}

/* For projects page */
function fly_in_animation2(){
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const square = entry.target.querySelector('.header');

      if (entry.isIntersecting) {
        square.classList.add('flyIn2');
      return; // if we added the class, exit the function
      }

      // We're not intersecting, so remove the class!
      square.classList.remove('flyIn2');
    });
  });

  observer.observe(document.querySelector('.projectTitle'));
}
/*
#####################################################################################################################
#####################################################################################################################
################################################ bar-related animation ##############################################
#####################################################################################################################
#####################################################################################################################
*/
function vertical_bar_animation(){
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const square = entry.target.querySelector('.vertical_bar');

      if (entry.isIntersecting) {
        square.classList.add('vertical_expansion');
      return; // if we added the class, exit the function
      }

      // We're not intersecting, so remove the class!
      square.classList.remove('vertical_expansion');
    });
  });

  observer.observe(document.querySelector('.AboutMe'));
  observer.observe(document.querySelector('.Experience'));
}

function horizontal_bar_animation(){
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const square = entry.target.querySelector('.horizontal_bar');

      if (entry.isIntersecting) {
        square.classList.add('horizontal_expansion');
      return; // if we added the class, exit the function
      }

      // We're not intersecting, so remove the class!
      square.classList.remove('horizontal_expansion');
    });
  });

  observer.observe(document.querySelector('.socials'));
}


window.addEventListener("scroll", fly_in_animation);
window.addEventListener("scroll", fly_in_animation2);
window.addEventListener("scroll", vertical_bar_animation);
window.addEventListener("scroll", horizontal_bar_animation);

// To check the scroll position on page load
fly_in_animation();
fly_in_animation2();
vertical_bar_animation();
horizontal_bar_animation();