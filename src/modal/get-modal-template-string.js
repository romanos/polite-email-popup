export default function getModalTemplateString ({imageSrc, headingText, descriptionText, mainButtonText}) {
  return `
<!-- Modal -->
<div class="modal email-modal fade onboarding-modal animated" id="email-modal" tabindex="-1" role="dialog" aria-labelledby="email-modal-title" aria-hidden="true" aria-describedby="email-modal-description">
  <div class="modal-dialog modal-dialog-centered email-modal__top" role="document">
    <div class="modal-content text-center">
      <div class="email-modal__top-content">
        <button aria-label="Close" class="close email-modal__close" data-dismiss="modal" type="button">
          <span class="close-label">No Thanks</span>
          <span class="os-icon os-icon-close"></span>
        </button>
        <div class="onboarding-media">
          <img alt="AlliAI" class="email-modal__top-image" src="//static.alliai.com/logo.png">
        </div>
      </div>
      <div class="onboarding-content with-gradient email-modal__input-container">
        <h4 class="onboarding-title modal-title email-modal__title" id="email-modal-title">${headingText}</h4>
        <div class="onboarding-text email-modal__description" id="email-modal-description">${descriptionText}</div>
        <form class="email-modal__content" method="POST" action="/">
          <div class="form-group text-center">
            <input class="form-control email-modal__input email-signup-form-input" type="email" name="EMAIL" value="" placeholder="Your email address" required>
          </div>
          <div style="position: absolute; left: -5000px;" aria-hidden="true">
            <input class="js-validate-not-robot" type="text" tabindex="-1" value="" autocomplete="off">
            <div style="position: absolute; left: -5000px;" aria-hidden="true">
              <input class="js-validate-not-robot" type="text" tabindex="-1" value="" autocomplete="off">
            </div>
          </div>
          <div class="email-modal__button-container text-center">
            <button class="btn btn-primary email-modal__sign-up" type="submit">${mainButtonText}</button>
            <button type="button" class="btn btn-white email-modal__close" data-dismiss="modal">No Thanks</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
`;
}

/* 

ORIGINAL MODAL MARKUP

<div class="email-modal" role="dialog" aria-labelledby="email-modal-title" aria-describedby="email-modal-description" aria-hidden="true">
  <form class="email-modal__content" method="POST" action="/">
    <div class="email-modal__top">
      ${imageSrc ? `<div class="email-modal__top-media">
        <img class="email-modal__top-image" src="${imageSrc}">
      </div>` : ""}
      <div class="email-modal__top-content">
        <h2 class="email-modal__title" id="email-modal-title">${headingText}</h2>
        <p class="email-modal__description" id="email-modal-description">${descriptionText}</p>
      </div>
    </div>
    <div class="email-modal__input-container">
      <input class="email-modal__input email-signup-form-input" type="email" name="EMAIL" value="" placeholder="Your email address" required>
      <div style="position: absolute; left: -5000px;" aria-hidden="true">
        <input class="js-validate-not-robot" type="text" tabindex="-1" value="">
      </div>
    </div>
    <div class="email-modal__button-container">
      <button class="email-modal__sign-up" type="submit">${mainButtonText}</button>
    </div>
    <button class="email-modal__close" type="button"></button>
  </form>
</div>
*/