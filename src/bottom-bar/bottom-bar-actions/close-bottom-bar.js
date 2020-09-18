import temporaryGlobals from "../../temporary-globals/temporary-globals";
import {persistentGlobals} from "../../persistent-globals/persistent-globals";

export default function closeBottomBar (event, {dontRecordCloseDate} = {}) {

  // This function is used in several ways, need to account for manual call
  if (!!event) event.preventDefault();  
  
  // store date it was closed
  if (!dontRecordCloseDate) {
    persistentGlobals.bottomBarClosedDate = Date.now();
  }

  temporaryGlobals.BOTTOM_BAR_ELEM.classList.remove("show");
  document.body.classList.remove(temporaryGlobals.BODY_CLASS_BOTTOM_BAR_OPEN);
}