---
layout: page
title: Smart Anti-Suffocation Alarm for Vehicles
description: A multi-sensor IoT safety system that detects a trapped occupant, estimates risk, and sends a location-aware alert.
importance: 2
category: embedded-systems
---

<figure class="safety-figure">
  <img src="{{ '/assets/img/projects/vehicle-safety-alarm/anti-suffocation-hero.png' | relative_url }}" alt="Concept illustration of a vehicle cabin safety monitor sending a warning to a caregiver">
  <figcaption>Concept visualization: environmental sensing, presence detection and location-aware notification working as one safety loop.</figcaption>
</figure>

## Overview

Children, pets and people with reduced mobility can be left or trapped in a locked vehicle. In a closed cabin, temperature can rise quickly while air quality deteriorates. This project explores a practical IoT response: detect an occupant, estimate a hazardous condition and notify a caregiver with the vehicle's location.

The prototype was developed by a five-person PBL4 team and documented through requirements interviews, engineering sketches, hardware tests and a connected mobile/web interface.

## System concept

<figure class="safety-figure">
  <img src="{{ '/assets/img/projects/vehicle-safety-alarm/device-mockup.png' | relative_url }}" alt="Concept render of a compact vehicle safety sensor enclosure">
  <figcaption>Portfolio concept render derived from the documented enclosure constraints (target footprint below 12 × 12 × 7 cm).</figcaption>
</figure>

The system combines independent signals rather than relying on temperature alone:

- **SHT41** measures temperature and relative humidity.
- **LD2410C** radar detects human presence without requiring a camera.
- **ESP32** fuses sensor data and runs the alert logic.
- **GY-NEO-6M** provides a location estimate.
- **A7680C/A7670C cellular module** supports 4G/SMS and remote notification.
- A buzzer/LED provides an immediate local warning while the cloud path serves the caregiver.

<figure class="safety-figure">
  <img src="{{ '/assets/img/projects/vehicle-safety-alarm/architecture-sensors.png' | relative_url }}" alt="Sensor and controller architecture diagram">
  <figcaption>Source architecture diagram from the project logbook.</figcaption>
</figure>

## Data and alert pipeline

The device collects temperature, humidity, presence and GPS data, then uploads the event through a Cloudflare Worker gateway to Firebase over HTTPS. The mobile/web interface displays the latest readings, alert state and map position; SMS, app notification and call flows provide escalation paths.

<div class="row">
  <div class="col-sm-6 mt-3 mt-md-0">
    <figure class="safety-figure"><img src="{{ '/assets/img/projects/vehicle-safety-alarm/cloud-data-path.png' | relative_url }}" alt="ESP32 gateway and Firebase data path"><figcaption>Device-to-cloud data path.</figcaption></figure>
  </div>
  <div class="col-sm-6 mt-3 mt-md-0">
    <figure class="safety-figure"><img src="{{ '/assets/img/projects/vehicle-safety-alarm/alert-sequence.png' | relative_url }}" alt="Three-panel visual sequence from monitoring to caregiver alert"><figcaption>Illustrative sequence: monitor → detect risk → notify.</figcaption></figure>
  </div>
</div>

## Hardware prototype

<div class="row">
  <div class="col-sm-6 mt-3 mt-md-0"><figure class="safety-figure"><img src="{{ '/assets/img/projects/vehicle-safety-alarm/prototype-breadboard.png' | relative_url }}" alt="Breadboard prototype with ESP32 and sensors"><figcaption>Early breadboard integration.</figcaption></figure></div>
  <div class="col-sm-6 mt-3 mt-md-0"><figure class="safety-figure"><img src="{{ '/assets/img/projects/vehicle-safety-alarm/prototype-multimeter-test.png' | relative_url }}" alt="Multimeter test on the prototype"><figcaption>Bench verification of the prototype.</figcaption></figure></div>
</div>

Additional component evidence from the logbook:

<div class="row">
  <div class="col-sm-4 mt-3 mt-md-0"><figure class="safety-figure"><img src="{{ '/assets/img/projects/vehicle-safety-alarm/esp32-board.png' | relative_url }}" alt="ESP32 development board"><figcaption>ESP32 controller.</figcaption></figure></div>
  <div class="col-sm-4 mt-3 mt-md-0"><figure class="safety-figure"><img src="{{ '/assets/img/projects/vehicle-safety-alarm/sht41-sensor.png' | relative_url }}" alt="SHT41 temperature and humidity sensor"><figcaption>SHT41 environmental sensor.</figcaption></figure></div>
  <div class="col-sm-4 mt-3 mt-md-0"><figure class="safety-figure"><img src="{{ '/assets/img/projects/vehicle-safety-alarm/li-ion-battery.png' | relative_url }}" alt="Rechargeable Li-ion battery"><figcaption>Portable power option.</figcaption></figure></div>
</div>

## Verification results

The following values are prototype measurements and engineering targets reported in the logbook, not guarantees for a production safety device.

| Test area                |                                                   Result | Interpretation                                               |
| ------------------------ | -------------------------------------------------------: | ------------------------------------------------------------ |
| Occupant detection       |                                         **95% accuracy** | Effective when the occupant is within the tested radar field |
| LD2410C response         |                                          **0.22–0.75 s** | Fast enough for continuous monitoring                        |
| Tested radar range       |                                            **0.5–3.0 m** | Detection degraded beyond ~3.2 m                             |
| SHT41 accuracy           |                                **±0.2 °C**, **±1.8% RH** | Suitable for cabin trend monitoring                          |
| HTTP upload              |                                           **360–520 ms** | Low device-to-gateway transfer delay                         |
| Firebase synchronization |                                                 **≤1 s** | Near-real-time app update                                    |
| Average alert latency    |                                                 **~2 s** | Measured in the integrated prototype test                    |
| GPS displacement error   |                                   **4.8–5.2 m outdoors** | Accuracy worsened indoors/heavy rain (8.4–10.1 m)            |
| Power draw               | **8.89–9.88 W** sunny; **14.9–18.29 W** weak signal/rain | Cellular conditions materially affect power                  |

<div class="row">
  <div class="col-sm-6 mt-3 mt-md-0"><figure class="safety-figure"><img src="{{ '/assets/img/projects/vehicle-safety-alarm/presence-response-graph.png' | relative_url }}" alt="Presence sensor response plot"><figcaption>Sensor response evidence.</figcaption></figure></div>
  <div class="col-sm-6 mt-3 mt-md-0"><figure class="safety-figure"><img src="{{ '/assets/img/projects/vehicle-safety-alarm/mobile-alert-ui.png' | relative_url }}" alt="Mobile alert interface mockup"><figcaption>Alert interface evidence.</figcaption></figure></div>
</div>

## Engineering limits and next steps

- The prototype **does not unlock doors or open windows automatically**; it is an alerting and monitoring system.
- Detection depends on sensor placement, power availability and network coverage; false alarms remain possible.
- GPS performance drops indoors and during heavy rain, so the app should show an uncertainty cue rather than a false sense of precision.
- Next steps are enclosure validation, longer-duration field testing, better power management during weak cellular signal and a safety-reviewed escalation policy.

## References

- National Highway Traffic Safety Administration, _Hot Car Safety_ — [nhtsa.gov/hotcars](https://www.nhtsa.gov/hotcars)
- National Safety Council, _Child heatstroke prevention_ — [nsc.org](https://www.nsc.org/road/safety-topics/child-heatstroke)
- Project source: _22ECE Group 3 PBL4 Industrial Design LogBook_ (team documentation)
