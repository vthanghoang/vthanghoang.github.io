---
layout: page
title: Low-Power LoRa Mesh Network
description: AODV-based multi-hop sensing for reliable, energy-aware rainfall monitoring.
importance: 2
category: iot
related_publications: true
---

## Project at a glance

This project developed a **low-power LoRa mesh network** for rainfall monitoring in locations where Wi-Fi and cellular connectivity are unavailable or unreliable. Rather than relying on a single long LoRa link, the system uses relay nodes and the on-demand AODV routing protocol to create a resilient multi-hop path from sensor to gateway.

The design was presented at **Student Forum 2023** and received the **Best Presentation Award** {% cite tran2023lora %}.

<div class="row text-center my-4">
  <div class="col-md-4 mb-3">
    <div class="border rounded p-3 h-100">
      <div class="h2 mb-0">350 → 600 m</div>
      <small class="text-muted">Measured end-to-end range</small>
    </div>
  </div>
  <div class="col-md-4 mb-3">
    <div class="border rounded p-3 h-100">
      <div class="h2 mb-0">+71%</div>
      <small class="text-muted">Range extension with a relay</small>
    </div>
  </div>
  <div class="col-md-4 mb-3">
    <div class="border rounded p-3 h-100">
      <div class="h2 mb-0">~315 days</div>
      <small class="text-muted">Estimated node lifetime from a 3,600 mAh Li-ion cell</small>
    </div>
  </div>
</div>

## System architecture

<div class="row align-items-center">
  <div class="col-lg-7 mb-3">
    <figure class="figure w-100 text-center">
      <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/projects/lora-mesh/mesh-architecture.png' | relative_url }}" alt="LoRa mesh architecture showing sensor nodes, relays, a gateway, cloud services, and the monitoring application.">
      <figcaption class="figure-caption">Multi-hop path from field sensors to the monitoring application.</figcaption>
    </figure>
  </div>
  <div class="col-lg-5">
    <p>The network separates sensing, relaying, gateway, cloud, and application functions. Sensor nodes collect rainfall data; relay nodes extend coverage; the gateway bridges the mesh to cloud storage and monitoring services.</p>
    <ul>
      <li><strong>Sensor nodes:</strong> terminal rainfall-measurement devices.</li>
      <li><strong>Relay nodes:</strong> intermediate LoRa links that enlarge the usable footprint.</li>
      <li><strong>Gateway:</strong> aggregates mesh traffic and connects upstream services.</li>
      <li><strong>Power model:</strong> designed for hybrid solar and grid energy availability, with low-duty-cycle sensor operation.</li>
    </ul>
  </div>
</div>

## Why AODV routing

The mesh uses **Ad Hoc On-Demand Distance Vector (AODV)** routing. Routes are discovered only when traffic needs to be sent, avoiding the continuous routing-table updates of proactive approaches. This makes the protocol a practical fit for a power-constrained mesh with changing or intermittent links.

<div class="row text-center my-4">
  <div class="col-md-3 mb-3"><div class="border rounded p-3 h-100"><strong>1. Discover</strong><br><small class="text-muted">A source broadcasts a Route Request (RREQ).</small></div></div>
  <div class="col-md-3 mb-3"><div class="border rounded p-3 h-100"><strong>2. Reply</strong><br><small class="text-muted">The destination returns a Route Reply (RREP).</small></div></div>
  <div class="col-md-3 mb-3"><div class="border rounded p-3 h-100"><strong>3. Forward</strong><br><small class="text-muted">Data follows the established multi-hop path.</small></div></div>
  <div class="col-md-3 mb-3"><div class="border rounded p-3 h-100"><strong>4. Recover</strong><br><small class="text-muted">Route maintenance handles broken links.</small></div></div>
</div>

## Energy-aware operation

Nodes are synchronized to a **10-minute cycle**: they sleep for **9 minutes 30 seconds** and wake for a **30-second** communications window. This keeps the radio and microcontroller inactive for most of the deployment time while preserving scheduled data delivery.

<div class="row align-items-center">
  <div class="col-md-5 mb-3">
    <figure class="figure w-100 text-center">
      <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/projects/lora-mesh/power-profile.png' | relative_url }}" alt="Power profile showing sleep, transmit, and receive intervals within the node duty cycle.">
      <figcaption class="figure-caption">The duty cycle concentrates radio activity into a short communication window.</figcaption>
    </figure>
  </div>
  <div class="col-md-7">
    <table class="table table-sm table-bordered">
      <thead><tr><th>Metric</th><th>Measured value</th></tr></thead>
      <tbody>
        <tr><td>Sleep current</td><td>0.42 mA</td></tr>
        <tr><td>Transmit current</td><td>0.65 mA</td></tr>
        <tr><td>Receive current</td><td>0.58 mA</td></tr>
        <tr><td>Average current</td><td>0.428 mA</td></tr>
        <tr><td>Estimated lifetime, 3,600 mAh Li-ion cell</td><td>315 days</td></tr>
      </tbody>
    </table>
    <p class="mb-0"><small class="text-muted">The measurements use an 18-byte payload at 125 kHz bandwidth; the reported cases compare spreading factors 7, 10, and 12.</small></p>
  </div>
</div>

## Prototype hardware

<div class="row">
  <div class="col-md-6 mb-3">
    <figure class="figure w-100 text-center">
      <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/projects/lora-mesh/relay-prototype.jpeg' | relative_url }}" alt="LoRa relay prototype with battery, microcontroller board, radio module, and external antenna.">
      <figcaption class="figure-caption"><strong>Relay prototype.</strong> STM32L031K6 microcontroller, LoRa radio, battery, and external antenna.</figcaption>
    </figure>
  </div>
  <div class="col-md-6 mb-3">
    <figure class="figure w-100 text-center">
      <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/projects/lora-mesh/gateway-prototype.jpeg' | relative_url }}" alt="Gateway prototype in an enclosure with external antennas.">
      <figcaption class="figure-caption"><strong>Gateway prototype.</strong> ARM Cortex-M3-based rainfall station with integrated LoRa connectivity.</figcaption>
    </figure>
  </div>
</div>

## Field validation

The range test compared a direct link with the same deployment supported by an intermediate relay. The relay-assisted mesh maintained data transfer over **600 m**, compared with approximately **350 m** without the mesh path.

<figure class="figure w-100 text-center my-3">
  <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/projects/lora-mesh/field-range-with-relay.png' | relative_url }}" alt="Field test map showing the 600 metre sensor-to-gateway path and the relay placed between the endpoints.">
  <figcaption class="figure-caption">Field test configuration: the relay bridges the sensor-to-gateway path.</figcaption>
</figure>

## Takeaways and next steps

- Demonstrated an AODV LoRa mesh that extends sensing coverage while maintaining reliable packet delivery.
- Validated a low-duty-cycle design suitable for long-lived, battery-powered monitoring nodes.
- Next steps include wider tests in remote terrain, more precise microamp-level current measurements, additional link-range evaluation, and stronger network-security controls.
