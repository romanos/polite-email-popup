import temporaryGlobals from "../temporary-globals/temporary-globals";
import {showSuccessMessage, showErrorMessage} from "../helpers/notifications";

export function sendEmailToServer ({event, email, token, formAction}) {

  if (!!temporaryGlobals.showDebugNotice) console.log("Polite: Submitting to Server");

  // Add form data to object
  let data = { authenticity_token: token };
  let inputs = event.currentTarget.querySelectorAll('input');
  for (let i = 0; i < inputs.length; i++) {
    data[ inputs[i].name ] = inputs[i].value;
  }

  window.jQuery
    .post({ url: formAction, data: data })
    .done(() => {
      if (temporaryGlobals.showFormSubmissionNotices) 
        showSuccessMessage(temporaryGlobals.successMessage);
      temporaryGlobals.onSubmit({event, email, success: true});
    })
    .fail(() => {
      if (temporaryGlobals.showFormSubmissionNotices) 
        showErrorMessage(temporaryGlobals.failureMessage);
      temporaryGlobals.onSubmit({event, email, success: false});
    });

}
