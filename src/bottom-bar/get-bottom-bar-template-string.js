export default function getBottomBarTemplateString ({headingText, mainButtonText, closeButtonText}) {
  return `<div class="bottom-bar p-3">
  <button type="button" class="close d-block d-md-none pull-right bottom-bar__close" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>                
  <form class="bottom-bar__content form-inline d-flex flex-row justify-content-center" method="POST" action="/">
    <label class="mx-1" for="bottom-bar-email">${headingText}</label>
    <input id="bottom-bar-email" class="form-control mx-1 col-md-3 col-6 email-signup-form-input" type="email" name="EMAIL" value="" placeholder="Your email address" required>
    <button class="btn btn-primary mx-1" type="submit">${mainButtonText}</button>
    <a href='#' class="btn btn-white d-none d-md-block mx-1 bottom-bar__close">${closeButtonText}</a>
    <div style="position: absolute; left: -5000px;" aria-hidden="true">
      <input class="js-validate-not-robot" type="text" tabindex="-1" value="" autocomplete="off">
    </div>
  </form>
</div>`;

}

//
// ORIGINAL STRING 
//
// `<div class="bottom-bar" aria-hidden="true">
//   <form class="bottom-bar__content" method="POST" action="/">
//     <label class="bottom-bar__label-text" for="bottom-bar-email">${headingText}</label>
//     <div class="bottom-bar__bottom">
//       <input id="bottom-bar-email" class="bottom-bar__input email-signup-form-input" type="email" name="EMAIL" value="" placeholder="Your email address" required>
//       <div style="position: absolute; left: -5000px;" aria-hidden="true">
//         <input class="js-validate-not-robot" type="text" tabindex="-1" value="">
//       </div>
//       <button class="bottom-bar__sign-up" type="submit">${mainButtonText}</button>
//     </div>
//   </form>
//   <div class="bottom-bar__close-container">
//     <button class="bottom-bar__close" type="button">
//       <span class="hide-mobile">${closeButtonText}</span>
//       <span class="bottom-bar__close-x-icon hide-desktop"><span></span></span>
//     </button>
//   </div>
// </div>`;
