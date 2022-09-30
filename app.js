// --- Scroll to Change Nav background color --- //
// ========== JS ===============
document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function() {
        if (window.scrollY > 0) {
          document.getElementById('navbar_top').classList.add('bg-dark');
          document.getElementById('navbar_top').classList.remove('bg-transparent');
        } else {
          document.getElementById('navbar_top').classList.add('bg-transparent');
          document.getElementById('navbar_top').classList.remove('bg-dark');
           // remove padding top from body
          //document.body.style.paddingTop = '0';
        } 
    });
  }); 
  // DOMContentLoaded  end



// --- Scroll to Change Nav background color --- //
// ==== jQuery ======
// $(document).ready(function(){
//     $(window).scroll(function(){
//         if($(window).scrollTop() > 0){
//             $(".navbar").addClass("bg-dark");
//             $(".navbar").removeClass("bg-transparent");
//         }
//         else{
//             $(".navbar").addClass("bg-transparent");
//             $(".navbar").removeClass("bg-dark"); 
//         }

//     })
// })