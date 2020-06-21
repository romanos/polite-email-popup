export default function addDebugNoticeHTMLToPage () {
  const debugNoticeHtml = `<div class="debug-emails-forms">
    <div>
      <b>Page views: </b><span data-event-name="pageViews">0</span>
    </div>
    <div>
      <b>Scroll percentage: </b><span data-event-name="highestScrollPercentage">0%</span>
    </div>
    <div>
      <b>Time on site: </b><span data-event-name="activeTimeOnSite">0s</span>
    </div>
    <div>
      <b>Time on page: </b><span data-event-name="activeTimeOnPage">0s</span>
    </div>
    <div>
      <b>Saw modal: </b><span>never</span>
    </div>
    <div>
      <b>Closed modal: </b><span>never</span>
    </div>
    <div>
      <b>Closed bottom bar: </b><span>never</span>
    </div>
    <div>
      <b>Modal is openable: </b><span data-event-name="modalIsOpenable">false</span>
    </div>
    <button class="debug-emails-forms__reset" type="button">Reset</button>
  </div>`;

  document.body.insertAdjacentHTML("beforeend", debugNoticeHtml);
}