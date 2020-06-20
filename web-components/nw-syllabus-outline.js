class nwSyllabusOutline extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
    <h2>Course Outline</h2>

    <p>The course is divided into seven content modules.</p>

    <table class="table table-bordered">
    <thead class="thead-dark">
      <tr class="d-flex">
      <th class="col-2 ">Module</th>
      <th class="col-2 ">Weeks</th>
      <th class="col-8 ">Topics</th>
    </tr>
  </thead>
  <tr class="d-flex">
      <td class="col-2 ">1</td>
      <td class="col-2 ">1-3</td>
      <td class="col-8 ">Intro, digital forensics profession and investigations, facilities, data aquisition (Ch1-3)  </td>
    </tr>
    <tr class="d-flex">
      <td class="col-2 ">2</td>
      <td class="col-2 ">4-5</td>
      <td class="col-8 ">Processing scenes, Windows, tools (Ch 4-5)</td>
    </tr>
    <tr class="d-flex">
      <td class="col-2 ">3</td>
      <td class="col-2 ">6-7</td>
      <td class="col-8">Tools, Mac systems, Linux systems (Ch 6-7)</td>
    </tr>
    <tr class="d-flex">
      <td class="col-2">4</td>
      <td class="col-2">8-9</td>
      <td class="col-8"> Recovery, forensics analysis & validation (Ch 8-9)</td>
    </tr>
    <tr class="d-flex">
      <td class="col-2">5</td>
      <td class="col-2">10-11</td>
      <td class="col-8">VM, cloud, network forensics  (Ch 10-11)</td>
    </tr>
    <tr class="d-flex">
      <td class="col-2">6</td>
      <td class="col-2">12-14</td>
      <td class="col-8">Email and mobile forensics (Ch 12-13)</td>
    </tr>
    <tr class="d-flex">
      <td class="col-2">7</td>
      <td class="col-2">15-17</td>
      <td class="col-8">Ethics, review, final submission</td>
    </tr>
  </table>

    <h3>Schedule Subject to Change</h3>

    The schedule is subject to change with instructor notification and
    students will be responsible for abiding by these changes.

    <h3>Schedule Links</h3>

    <ul class="text-left">
      <li class="tap-target-li">
        <a target="_blank" rel="noopener" href="https://www.nwmissouri.edu/academics/calendar.htm">Academic
          Calendar</a>
      </li>
      <li class="tap-target-li">
        <a target="_blank" rel="noopener" href="https://www.nwmissouri.edu/registrar/finals.htm">Final Exams
          Schedule</a>
      </li>
      <li class="tap-target-li">
        <a target="_blank" rel="noopener" href="http://calendar.nwmissouri.edu/">University Events</a>
      </li>
    </ul>
  
    `;
  }
}

window.customElements.define('nw-syllabus-outline', nwSyllabusOutline);
