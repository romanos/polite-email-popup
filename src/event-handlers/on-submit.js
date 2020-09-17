import temporaryGlobals from "../temporary-globals/temporary-globals";
import {sendEmailToServer} from "../integrations/server";
import {sendEmailToMailChimp} from "../integrations/mailchimp";
import {sendEmailToConvertKit} from "../integrations/convertkit";
import closeBottomBar from "../bottom-bar/bottom-bar-actions/close-bottom-bar";
import closeModal from "../modal/modal-actions/close-modal";
import {showSuccessMessage} from "../helpers/notifications";

export function onSubmit (event) {
  event.preventDefault();

  if (!!temporaryGlobals.showDebugNotice) console.log("Polite: Submit Started");

  if (event.currentTarget.closest(".bottom-bar")) {
    closeBottomBar();
  } else if (event.currentTarget.closest(".email-modal")) {
    closeModal();
  }

  // SPAM PREVENTION
  if (event.currentTarget.querySelector('.js-validate-not-robot').value !== '') {
    if (!!temporaryGlobals.showDebugNotice) console.log("Polite: SPAM DETECTED!");
    return;
  }

  if (!!temporaryGlobals.showDebugNotice) console.log("Polite: No Spam Detected");

  let emailInputElement = event.currentTarget.querySelector(temporaryGlobals.SELECTORS.BOTTOM_BAR_FORM_INPUT_ELEM_SELECTOR);
  let email = emailInputElement.value;

  if (temporaryGlobals.serverConfig && temporaryGlobals.serverConfig.token && temporaryGlobals.serverConfig.formAction) {
    // MAILCHIMP integration
    sendEmailToServer({
      event, 
      email, 
      token: temporaryGlobals.serverConfig.token, 
      formAction: temporaryGlobals.serverConfig.formAction
    });
  } else if (temporaryGlobals.mailchimpConfig && temporaryGlobals.mailchimpConfig.spamPreventionKey && temporaryGlobals.mailchimpConfig.formAction) {
    // MAILCHIMP integration
    sendEmailToMailChimp({
      event, 
      email, 
      spamPreventionKey: temporaryGlobals.mailchimpConfig.spamPreventionKey, 
      formAction: temporaryGlobals.mailchimpConfig.formAction
    });
  } else if (temporaryGlobals.convertKitConfig && temporaryGlobals.convertKitConfig.formAction) {
    // CONVERTKIT integration
    sendEmailToConvertKit({
      event,
      email,
      formAction: temporaryGlobals.convertKitConfig.formAction
    });
  } else{
    if (temporaryGlobals.showFormSubmissionNotices) {
      showSuccessMessage(temporaryGlobals.successMessage);
    }
    temporaryGlobals.onSubmit({event, email});
  }
}