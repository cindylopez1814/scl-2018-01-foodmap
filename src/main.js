setTimeout(() => {
  firstScreen.style.animation = 'fadeout 1s ease';
  firstScreen.style.display = 'none';
  second.style.animation = 'fadein 1s ease';
}, 2500);



// '<div class="restaurantContainer"><h6>' + place.name + '</h6><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#a' + place.id + '"><i class="fas fa-utensils"></i></button><div id="a' + place.id + '" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">    <div class="modal-dialog modal-dialog-centered" role="document"><div class="modal-content"><div class="modal-header"><h5 class="modal-title" id="exampleModalLongTitle">'+ place.name +'</h5><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div><div class="modal-body"><p>' + place.formatted_address + '</p><p>' + place.photos['0'].html_attributions['0'] + '</p><p>Rating: ' + place.rating + '</p></div></div></div></div></div>';

// <div class="modal">
//   <div class="modal-background"></div>
//   <div class="modal-card">
//     <header class="modal-card-head">
//       <p class="modal-card-title">Modal title</p>
//       <button class="delete" aria-label="close"></button>
//     </header>
//     <section class="modal-card-body">
//       <!-- Content ... -->
//     </section>
//     <footer class="modal-card-foot">
//       <button class="button is-success">Save changes</button>
//       <button class="button">Cancel</button>
//     </footer>
//   </div>
// </div>