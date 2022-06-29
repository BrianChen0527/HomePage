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

window.addEventListener("scroll", vertical_bar_animation);
window.addEventListener("scroll", horizontal_bar_animation);

// To check the scroll position on page load
vertical_bar_animation();
horizontal_bar_animation();


/*
#####################################################################################################################
#####################################################################################################################
############################################# 2 Truths 1 Lie Button animation #######################################
#####################################################################################################################
#####################################################################################################################
*/