import React from 'react'
export default function Jewellery() {
    return (
        <div style={{"display": "inline-block"}}>
            <h2>Jewellery</h2>
            <ol class="list-group list-group-numbered">
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">Rings</div>
      Content for list item
    </div>
    <span class="badge text-bg-primary rounded-pill">14</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">Necklace</div>
      Content for list item
    </div>
    <span class="badge text-bg-primary rounded-pill">14</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">Bangles</div>
      Content for list item
    </div>
    <span class="badge text-bg-primary rounded-pill">14</span>
  </li>
</ol>
        </div>
    )
}
