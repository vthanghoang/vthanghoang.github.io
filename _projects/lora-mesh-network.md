---

layout: page
title: LoRaWAN Flood-Water Monitoring
description: A field-oriented LoRa/LoRaWAN platform for urban flood-level sensing, warning, and resilient data delivery.
importance: 2
category: iot
related_publications: true

---

## Project at a glance

This project explores a practical flood-water monitoring system for urban areas in Da Nang. The central design question was not simply “can a LoRa packet be sent?”, but **how can a city receive useful water-level information when roads are flooded, electricity is unreliable, and residents need a warning they can trust?**

The work progressed from LoRa point-to-point experiments to a proposed field architecture with a water-level ruler, a local warning station, LoRa/LoRaWAN telemetry, and a web dashboard. The evidence below separates **measured prototype results** from **system concepts still under development**.

 <div class="row text-center my-4">
   <div class="col-md-3 mb-3"><div class="border rounded p-3 h-100"><div class="h2 mb-0">2 km</div><small class="text-muted">Early LoRa P2P test on Bach Dang Street</small></div></div>
   <div class="col-md-3 mb-3"><div class="border rounded p-3 h-100"><div class="h2 mb-0">10 min</div><small class="text-muted">Target reporting interval in the station concept</small></div></div>
   <div class="col-md-3 mb-3"><div class="border rounded p-3 h-100"><div class="h2 mb-0">AS923</div><small class="text-muted">Configured regional LoRaWAN profile</small></div></div>
   <div class="col-md-3 mb-3"><div class="border rounded p-3 h-100"><div class="h2 mb-0">40–50 m</div><small class="text-muted">Indicative ruler-sensor link in the proposed setup</small></div></div>
 </div>

 ## 1. From an urban problem to an engineering requirement

 The project was framed around urban flooding in Da Nang: people may not know the water depth at the most dangerous point of a road, warnings can be delayed, and the monitoring station may lose grid power during severe weather. The design-thinking notes therefore prioritised an **accurate, local, weather-resistant warning system** before selecting modules or protocols.

 <div class="row align-items-center">
   <div class="col-lg-7 mb-3">
     <figure class="figure w-100 text-center">
       <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/projects/lora-mesh/citx-urban-flooding-page5.jpg' | relative_url }}" alt="CITX system concept linking a warning station, water-level sensor, data logger, gateway, database, web map, and SMS warning.">
       <figcaption class="figure-caption">System-level concept: measure locally, warn locally, and publish the reading for city-scale visibility.</figcaption>
     </figure>
   </div>
   <div class="col-lg-5">
     <ul>
       <li><strong>Citizen need:</strong> a clear and timely warning at the actual flood location.</li>
       <li><strong>Operational need:</strong> continue sensing in harsh weather and during power interruptions.</li>
       <li><strong>Engineering requirement:</strong> send a compact water-level record approximately every 10 minutes.</li>
       <li><strong>Scalability:</strong> support several sensors and a web-facing data service.</li>
     </ul>
   </div>
 </div>

 <figure class="figure w-100 text-center my-3">
   <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/projects/lora-mesh/citx-urban-flooding-page6.jpg' | relative_url }}" alt="Alternative urban flood monitoring architecture with a warning block, water-level measurement block, and data block.">
   <figcaption class="figure-caption">Two complementary architecture variants were compared before selecting the sensing and communication blocks.</figcaption>
 </figure>

 ## 2. Proposed field architecture

 The proposed station combines a water-level ruler with a microcontroller-based data logger. Up to four sensors can be connected through RS-485; a LoRa radio can receive the ruler reading, while a second LoRa/4G path can forward data to the server. A nearby warning speaker can be triggered over LoRa, with SMS as a fallback when the long-range link is unavailable.

 <figure class="figure w-100 text-center my-3">
   <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/projects/lora-mesh/citx-urban-flooding-page7.jpg' | relative_url }}" alt="CITX value proposition showing a flood warning station and a web map for Da Nang.">
   <figcaption class="figure-caption">The intended user experience: a local warning station plus a map that exposes current measurements.</figcaption>
 </figure>

 The field concept is intentionally described as a **proposed architecture**: the early CITX records document the communication experiments and firmware bring-up, while end-to-end city deployment remained a next step.

 ## 3. Hardware and firmware evidence

 ### 3.1 Sensor and enclosure hardware

 <div class="row">
   <div class="col-md-6 mb-3">
     <figure class="figure w-100 text-center">
       <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/projects/lora-mesh/citx-water-level-ruler.jpg' | relative_url }}" alt="Outdoor water-level ruler sensor installed beside a school or roadside location.">
       <figcaption class="figure-caption"><strong>Water-level ruler.</strong> The proposed sensor is a wireless ruler whose state changes with the water level.</figcaption>
     </figure>
   </div>
   <div class="col-md-6 mb-3">
     <figure class="figure w-100 text-center">
       <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/projects/lora-mesh/citx-sensor-pcb.jpg' | relative_url }}" alt="Photograph of the sensor interface PCB inside a protective enclosure.">
       <figcaption class="figure-caption"><strong>Interface electronics.</strong> The photographed board makes the prototype tangible: connectors, protection, and the sensor interface are visible rather than represented only in a block diagram.</figcaption>
     </figure>
   </div>
 </div>

 ### 3.2 LoRa node bring-up and debugging

 The acceptance records show the progression from sample code to a working board-to-board link. The team worked with RAK3172 CANOPUS modules, a UCA board, and later a NUCLEO-L073RZT/SX1272 LoRaWAN development path.

 <div class="row">
   <div class="col-md-4 mb-3"><figure class="figure w-100 text-center"><img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/projects/lora-mesh/citx-rak3172-code.png' | relative_url }}" alt="RAK3172 firmware code configuring LoRa parameters."><figcaption class="figure-caption">RAK3172 parameter setup.</figcaption></figure></div>
   <div class="col-md-4 mb-3"><figure class="figure w-100 text-center"><img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/projects/lora-mesh/citx-cubeide-code.jpg' | relative_url }}" alt="STM32CubeIDE project tree and LoRaWAN firmware source code."><figcaption class="figure-caption">STM32CubeIDE firmware workflow.</figcaption></figure></div>
   <div class="col-md-4 mb-3"><figure class="figure w-100 text-center"><img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/projects/lora-mesh/citx-lora-payload-code.png' | relative_url }}" alt="LoRa payload and radio configuration source code."><figcaption class="figure-caption">Payload and radio configuration.</figcaption></figure></div>
 </div>

 The documented radio configuration was **921 MHz, 125 kHz bandwidth, SF12, coding rate configured in firmware, 22 dBm transmit power, and an 8-symbol preamble**. The later LoRaWAN bring-up used the **AS923 region and ABP activation**. Credentials are deliberately not reproduced here; the portfolio shows the engineering workflow without publishing device keys.

 ## 4. Communication experiments

 ### 4.1 Point-to-point link and RSSI/SNR instrumentation

 Before the LoRaWAN application was complete, the team established a repeatable P2P test and investigated how to expose signal quality. The code and API notes distinguish **packet RSSI**, **packet SNR**, and instantaneous **RSSI**, which are the right observables for diagnosing a link rather than reporting range alone.

 <div class="row">
   <div class="col-md-6 mb-3"><figure class="figure w-100 text-center"><img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/projects/lora-mesh/citx-p2p-link-diagram.png' | relative_url }}" alt="Board-to-board P2P LoRa test diagram showing transmit, receive, and RSSI display paths."><figcaption class="figure-caption">P2P test procedure used to validate the radio path.</figcaption></figure></div>
   <div class="col-md-6 mb-3"><figure class="figure w-100 text-center"><img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/projects/lora-mesh/citx-rssi-api.png' | relative_url }}" alt="Code reference for packet RSSI, packet SNR, and RSSI functions."><figcaption class="figure-caption">Measurement hooks for RSSI and SNR.</figcaption></figure></div>
 </div>

 ### 4.2 Field test on Bach Dang Street

 The first acceptance report records an approximately **2 km P2P test** on Bach Dang Street in Da Nang, with the transmitter below an overpass and the receiver on the opposite sidewalk. The team also recorded a failed/unstable phase and documented the debugging process, which is valuable evidence of real engineering rather than a polished-only demo.

 <div class="row">
   <div class="col-md-6 mb-3"><figure class="figure w-100 text-center"><img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/projects/lora-mesh/citx-bach-dang-map.jpg' | relative_url }}" alt="Map screenshot showing the Bach Dang Street field-test location."><figcaption class="figure-caption">Approximate field-test location.</figcaption></figure></div>
   <div class="col-md-6 mb-3"><figure class="figure w-100 text-center"><img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/projects/lora-mesh/citx-field-test-team.jpg' | relative_url }}" alt="Team members conducting an outdoor LoRa field test."><figcaption class="figure-caption">Team during outdoor measurement and validation.</figcaption></figure></div>
 </div>

 <figure class="figure w-100 text-center my-3"><img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/projects/lora-mesh/citx-rssi-debug-flow.png' | relative_url }}" alt="Debug flow showing a successful receive path and an unsuccessful RSSI display path."><figcaption class="figure-caption">A documented failure mode: packets could be exchanged while RSSI display still failed because of library/interface conflicts.</figcaption></figure>

 ## 5. LoRaWAN bring-up and data-service direction

 The later acceptance report documents firmware configuration and successful STM32CubeIDE flashing/debugging for an AS923 LoRaWAN end node. At that checkpoint, the uplink/downlink application was still being completed, so this portfolio does not claim a fully deployed TTN service. Instead, it presents the reproducible steps that were completed and the remaining integration boundary.

 <div class="row">
   <div class="col-md-6 mb-3"><figure class="figure w-100 text-center"><img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/projects/lora-mesh/citx-firmware-console.jpg' | relative_url }}" alt="Firmware console and serial output during LoRa development."><figcaption class="figure-caption">Serial/firmware debugging during bring-up.</figcaption></figure></div>
   <div class="col-md-6 mb-3"><figure class="figure w-100 text-center"><img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/projects/lora-mesh/citx-dashboard-review-1.jpg' | relative_url }}" alt="Online map and dashboard reviewed during the urban-flooding system discussion."><figcaption class="figure-caption">Dashboard and map workflow discussed for the monitoring service.</figcaption></figure></div>
 </div>

 ## 6. Energy-aware mesh foundation

 The earlier LoRa mesh prototype complements the flood-monitoring direction. It used an AODV-based multi-hop path and demonstrated a **350 m direct link versus 600 m with a relay**. Nodes were designed around a 10-minute duty cycle and an estimated 315-day lifetime from a 3,600 mAh cell.

 <figure class="figure w-100 text-center my-3"><img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/projects/lora-mesh/mesh-architecture.png' | relative_url }}" alt="LoRa mesh architecture showing sensor nodes, relay nodes, gateway, cloud, and monitoring application."><figcaption class="figure-caption">The mesh layer provides a practical fallback when a single direct link is not enough.</figcaption></figure>

 <div class="row">
   <div class="col-md-6 mb-3"><figure class="figure w-100 text-center"><img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/projects/lora-mesh/relay-prototype.jpeg' | relative_url }}" alt="Battery-powered LoRa relay prototype."><figcaption class="figure-caption">Battery-powered relay hardware.</figcaption></figure></div>
   <div class="col-md-6 mb-3"><figure class="figure w-100 text-center"><img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/projects/lora-mesh/field-range-with-relay.png' | relative_url }}" alt="Field range comparison with a LoRa relay."><figcaption class="figure-caption">Relay-assisted range comparison.</figcaption></figure></div>
 </div>

 ## 7. What was measured, and what remains

 **Measured or directly documented:**

 - Approximately 2 km LoRa P2P communication in an urban-street test.
 - A 350 m direct versus 600 m relay-assisted link in the earlier mesh prototype.
 - Radio configuration values and STM32/RAK3172 firmware bring-up steps.
 - A sensor concept supporting up to four inputs, RS-485 communication, and a 10-minute reporting target.

 **Still a next step:**

 - End-to-end water-level uplink/downlink on a production web service.
 - A calibrated water-depth model (the meeting notes mention a cosine-based correction, but do not provide a validated equation).
 - Long-duration deployments across multiple flood-prone locations, with a labelled RSSI/SNR dataset and false-alarm analysis.
 - Outdoor enclosure, battery/solar sizing, and warning-speaker validation under real flood conditions.

 This distinction keeps the project credible: the portfolio shows concrete hardware, code, field testing, and debugging while clearly marking the proposed system-level extensions.

 ## References

 1. RAK3172 CANOPUS firmware and examples: [GitHub repository](https://github.com/NamNamIoT/RAK3172_CANOPUS/tree/main).
 2. RAK3172 standalone quick start: [RAKwireless documentation](https://docs.rakwireless.com/Product-Categories/WisDuo/RAK3172-Module/Quickstart/).
 3. RAK3172 low-level STM32WL development: [RAKwireless documentation](https://docs.rakwireless.com/Product-Categories/WisDuo/RAK3172-Module/Low-Level-Development/).
 4. LoRa radio API reference used for RSSI/SNR investigation: [arduino-LoRa API](https://github.com/sandeepmistry/arduino-LoRa/blob/master/API.md).
 5. LoRaWAN end-node and TTN workflow: [Arduino MKR WAN 1310 tutorial](https://docs.arduino.cc/tutorials/mkr-wan-1310/the-things-network/).
 6. Project records: CITX Urban Flooding proposal; CITX24 acceptance reports (13–26 January 2024 and 2–4 March 2024); CITX design-thinking meeting record (9 March 2024); and the Da Nang urban-flooding research report (14 March 2024).
