import temporaryGlobals from "../../temporary-globals/temporary-globals";
import { disableBodyScroll } from 'body-scroll-lock';
import {whenTriggerDataChanges} from "../../trigger-popups/watch-trigger-data";

export default function openModal() {

  // store the active element so it can regain focus after modal is closed
  temporaryGlobals.activeElement = document.activeElement;

  // show the modal
  // temporaryGlobals.MODAL_ELEM.classList.add("show");

  // add body class
  // document.body.classList.add(temporaryGlobals.BODY_CLASS_MODAL_OPEN);
  
  $(temporaryGlobals.MODAL_ELEM).modal('show');

  $(temporaryGlobals.MODAL_ELEM).on('shown.bs.modal',function(e){
    // Focus the first element within the modal. Make sure the element is visible and doesnt have focus disabled (tabindex=-1);
    temporaryGlobals.MODAL_ELEM.querySelector(temporaryGlobals.FOCUSABLE_SELECTORS).focus();

    // Trap the tab focus by disable tabbing on all elements outside of your modal.
    // These elements need to be gotten at the time the modal is opened because they may have been added to the page dynamically
    const focusableElements = document.querySelectorAll(temporaryGlobals.FOCUSABLE_SELECTORS);
    const focusableElementsInModal = temporaryGlobals.MODAL_ELEM.querySelectorAll(temporaryGlobals.FOCUSABLE_SELECTORS);
    const focusableElementsInModalArray = Array.from(focusableElementsInModal);
    focusableElements.forEach(el => {
      if (!focusableElementsInModalArray.includes(el)) {
        el.setAttribute('tabindex', '-1');
      }
    });
  });

  // // Trap the screen reader focus as well with aria roles.
  // temporaryGlobals.MODAL_ELEM.removeAttribute('aria-hidden');
  // const topLevelElements = Array.from(document.body.children);
  // topLevelElements.forEach(el => {
  //   if (el !== temporaryGlobals.MODAL_ELEM) {
  //     el.setAttribute('aria-hidden', 'true');
  //   }
  // });

  // disableBodyScroll(temporaryGlobals.MODAL_ELEM);

  temporaryGlobals.isModalOpen = true;
  // manually recompute `isModalOpenable` because temporary globals don't trigger this automatically
  whenTriggerDataChanges();

}