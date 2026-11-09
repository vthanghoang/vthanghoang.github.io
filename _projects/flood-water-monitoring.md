---

layout: page
title: LoRaWAN Flood-Water Monitoring
description: An IoT sensing platform concept for urban flood-level monitoring and local warning in Da Nang.
importance: 3
category: iot

---

## Project at a glance

This project developed a practical **LoRa/LoRaWAN flood-water monitoring concept for Da Nang**, moving from radio experiments and firmware bring-up toward a field station that can measure water level, trigger a local warning, and publish data to a web service.

The system was presented as **“IoT Flood-Water Measurement System for Urban Areas in Vietnam”** at IEEE ICCITX.O & SHelC 2024. This page separates measured prototype results from system-level design proposals.

 <div class="row text-center my-4">
   <div class="col-md-3 mb-3"><div class="border rounded p-3 h-100"><div class="h2 mb-0">2 km</div><small class="text-muted">Early LoRa P2P test on Bach Dang Street</small></div></div>
   <div class="col-md-3 mb-3"><div class="border rounded p-3 h-100"><div class="h2 mb-0">10 min</div><small class="text-muted">Target station reporting interval</small></div></div>
   <div class="col-md-3 mb-3"><div class="border rounded p-3 h-100"><div class="h2 mb-0">AS923</div><small class="text-muted">Configured LoRaWAN region</small></div></div>
   <div class="col-md-3 mb-3"><div class="border rounded p-3 h-100"><div class="h2 mb-0">4 sensors</div><small class="text-muted">Proposed RS-485 sensor capacity</small></div></div>
 </div>

 ## 1. Problem framing and system concept

 The design-thinking process focused on a concrete urban problem: during heavy rain and flooding, residents may not know the water depth at the most dangerous point of a road, while the monitoring station can lose grid power. The requirement was therefore an **accurate, local, weather-resistant warning system**, not only a long-range radio demonstration.

 <div class="row align-items-center">
   <div class="col-lg-7 mb-3"><figure class="figure w-100 text-center"><img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/projects/flood-water-monitoring/citx-urban-flooding-page5.jpg' | relative_url }}" alt="CITX flood-monitoring architecture connecting warning station, water-level sensor, gateway, database, map and SMS warning."><figcaption class="figure-caption">Proposed architecture: measure locally, warn locally, and publish the reading.</figcaption></figure></div>
   <div class="col-lg-5"><ul><li><strong>Citizen need:</strong> timely warning at the actual flood location.</li><li><strong>Operational need:</strong> continue sensing in harsh weather and power interruptions.</li><li><strong>Engineering target:</strong> transmit a compact water-level record approximately every 10 minutes.</li><li><strong>Scalability:</strong> support multiple sensors and a web-facing service.</li></ul></div>
 </div>

 <figure class="figure w-100 text-center my-3"><img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/projects/flood-water-monitoring/citx-urban-flooding-page6.jpg' | relative_url }}" alt="Alternative flood-monitoring architecture with warning, measurement and data blocks."><figcaption class="figure-caption">Architecture variants compared during the CITX design process.</figcaption></figure>

 ## 2. Field architecture and data path

 The proposed station uses a wireless water-level ruler, a microcontroller data logger, and a communication gateway. Up to four sensors can be connected through RS-485. One LoRa link can receive ruler measurements; another LoRa/4G path can forward readings to a server. A warning speaker can be triggered over LoRa, with SMS as a fallback.

 <figure class="figure w-100 text-center my-3"><img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/projects/flood-water-monitoring/citx-urban-flooding-page7.jpg' | relative_url }}" alt="CITX value proposition showing a flood warning station and Da Nang map."><figcaption class="figure-caption">Intended user experience: local warning plus a map for current measurements.</figcaption></figure>

 ## 3. Hardware evidence

 <div class="row">
   <div class="col-md-6 mb-3"><figure class="figure w-100 text-center"><img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/projects/flood-water-monitoring/citx-water-level-ruler.jpg' | relative_url }}" alt="Outdoor water-level ruler sensor installed beside a road or facility."><figcaption class="figure-caption"><strong>Water-level ruler.</strong> Wireless sensing element proposed for roadside deployment.</figcaption></figure></div>
   <div class="col-md-6 mb-3"><figure class="figure w-100 text-center"><img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/projects/flood-water-monitoring/citx-sensor-pcb.jpg' | relative_url }}" alt="Sensor interface PCB inside a protective enclosure."><figcaption class="figure-caption"><strong>Sensor interface PCB.</strong> Connectors and interface electronics captured from the prototype work.</figcaption></figure></div>
 </div>

 ## 4. Firmware, radio and debugging

 The acceptance records document work with RAK3172 CANOPUS modules, a UCA board, and a NUCLEO-L073RZT/SX1272 LoRaWAN development path. The recorded radio configuration was **921 MHz, 125 kHz bandwidth, SF12, 22 dBm transmit power, and an 8-symbol preamble**. The later LoRaWAN bring-up used **AS923 and ABP**. Device credentials are intentionally omitted from this public portfolio.

 <div class="row">
   <div class="col-md-4 mb-3"><figure class="figure w-100 text-center"><img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/projects/flood-water-monitoring/citx-rak3172-code.png' | relative_url }}" alt="RAK3172 firmware code configuring LoRa parameters."><figcaption class="figure-caption">RAK3172 parameter setup.</figcaption></figure></div>
   <div class="col-md-4 mb-3"><figure class="figure w-100 text-center"><img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/projects/flood-water-monitoring/citx-cubeide-code.jpg' | relative_url }}" alt="STM32CubeIDE project tree and LoRaWAN source code."><figcaption class="figure-caption">STM32CubeIDE workflow.</figcaption></figure></div>
   <div class="col-md-4 mb-3"><figure class="figure w-100 text-center"><img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/projects/flood-water-monitoring/citx-lora-payload-code.png' | relative_url }}" alt="LoRa payload and radio configuration code."><figcaption class="figure-caption">Payload and radio configuration.</figcaption></figure></div>
 </div>

 ## 5. Communication experiments

 The first acceptance report describes a repeatable P2P test, investigation of packet RSSI/SNR, and an approximately **2 km field test on Bach Dang Street**. The team also documented a real failure mode: packet exchange could succeed while RSSI display failed because of a library/interface conflict.

 <div class="row">
   <div class="col-md-6 mb-3"><figure class="figure w-100 text-center"><img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/projects/flood-water-monitoring/citx-p2p-link-diagram.png' | relative_url }}" alt="Board-to-board P2P LoRa test diagram."><figcaption class="figure-caption">P2P radio validation procedure.</figcaption></figure></div>
   <div class="col-md-6 mb-3"><figure class="figure w-100 text-center"><img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/projects/flood-water-monitoring/citx-rssi-api.png' | relative_url }}" alt="Code reference for packet RSSI, packet SNR and RSSI functions."><figcaption class="figure-caption">Signal-quality measurement hooks.</figcaption></figure></div>
 </div>

 <div class="row">
   <div class="col-md-6 mb-3"><figure class="figure w-100 text-center"><img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/projects/flood-water-monitoring/citx-bach-dang-map.jpg' | relative_url }}" alt="Map screenshot showing the Bach Dang Street field-test location."><figcaption class="figure-caption">Approximate field-test location.</figcaption></figure></div>
   <div class="col-md-6 mb-3"><figure class="figure w-100 text-center"><img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/projects/flood-water-monitoring/citx-field-test-team.jpg' | relative_url }}" alt="Team members conducting an outdoor LoRa field test."><figcaption class="figure-caption">Outdoor measurement and validation.</figcaption></figure></div>
 </div>

 <figure class="figure w-100 text-center my-3"><img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/projects/flood-water-monitoring/citx-rssi-debug-flow.png' | relative_url }}" alt="Debug flow showing successful receive and unsuccessful RSSI display paths."><figcaption class="figure-caption">Debugging evidence from the radio integration.</figcaption></figure>

 ## 6. LoRaWAN bring-up and limitations

 The later report documents STM32CubeIDE flashing/debugging and configuration of an AS923 LoRaWAN end node. At that checkpoint, the uplink/downlink application was still being completed; therefore this page does not claim a fully deployed TTN service.

 <div class="row">
   <div class="col-md-6 mb-3"><figure class="figure w-100 text-center"><img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/projects/flood-water-monitoring/citx-firmware-console.jpg' | relative_url }}" alt="Firmware console and serial output during LoRa development."><figcaption class="figure-caption">Serial and firmware debugging.</figcaption></figure></div>
   <div class="col-md-6 mb-3"><figure class="figure w-100 text-center"><img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/projects/flood-water-monitoring/citx-dashboard-review-1.jpg' | relative_url }}" alt="Dashboard and map reviewed for the urban-flooding monitoring service."><figcaption class="figure-caption">Dashboard workflow under discussion.</figcaption></figure></div>
 </div>

 **Next technical steps:** calibrated water-depth conversion, long-duration multi-site deployment, labelled RSSI/SNR data, false-alarm analysis, outdoor power/enclosure validation, and end-to-end web-service integration. The meeting notes mention a cosine-based correction, but no validated equation was provided, so it is not presented here as a finished result.

 ## References

 1. RAK3172 CANOPUS firmware: [GitHub repository](https://github.com/NamNamIoT/RAK3172_CANOPUS/tree/main).
 2. RAK3172 documentation: [Quick start](https://docs.rakwireless.com/Product-Categories/WisDuo/RAK3172-Module/Quickstart/) and [low-level development](https://docs.rakwireless.com/Product-Categories/WisDuo/RAK3172-Module/Low-Level-Development/).
 3. LoRa RSSI/SNR API: [arduino-LoRa reference](https://github.com/sandeepmistry/arduino-LoRa/blob/master/API.md).
 4. LoRaWAN workflow: [Arduino MKR WAN 1310 and TTN tutorial](https://docs.arduino.cc/tutorials/mkr-wan-1310/the-things-network/).
 5. Project records: CITX Urban Flooding proposal, CITX24 acceptance reports, 09/03/2024 design-thinking meeting record, and 14/03/2024 urban-flooding research report.
