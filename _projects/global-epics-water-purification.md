---
layout: page
title: GLOBAL EPICS Water Purification Prototype
description: Community-driven engineering design using the Design Thinking methodology.
img: assets/img/projects/global-epics/cover.jpg
importance: 1
category: engineering-design
---

## Overview

As part of the **GLOBAL EPICS programme**, our WATER-ICE team worked on a community water-security challenge at Duy Vinh Primary School in Quang Nam, Vietnam. I helped facilitate the team through problem identification, stakeholder research, specification development, concept selection, prototyping, testing, and iteration.

The team delivered a deployable prototype designed around local requirements and real-world technical and resource constraints. The project received the **First Prize Award**.

## 1. The EPICS Design Thinking Process

The EPICS design process is an iterative, stakeholder-centred approach to community engineering. Rather than moving through a strictly linear sequence, teams revisit earlier decisions as they learn from users, testing, and implementation. The process moves from project identification and specification development through conceptual and detailed design, delivery, service and maintenance, redesign, and eventual retirement. Stakeholders remain at the centre throughout the project.

{% include figure.liquid loading="eager" path="assets/img/projects/global-epics/epics-design-process.jpg" class="img-fluid rounded z-depth-1" zoomable=true alt="EPICS iterative engineering design process with stakeholders at the centre" %}

_Figure 1. The EPICS engineering design process. Source: [Purdue University EPICS — Engineering Design Process](https://engineering.purdue.edu/EPICS/purdue/documents/engineering-design-process-document-1.pdf)._

## 2. Project Identification

We identified **water security at Duy Vinh Primary School** as the focus of our project. The school's existing water-supply and sanitation arrangements did not consistently provide students and teachers with convenient access to clean drinking water. Flooding could also damage the regional supply network, leaving the school without sufficient water for an extended period.

{% include figure.liquid path="assets/img/projects/global-epics/project-identification.jpg" class="img-fluid rounded z-depth-1" zoomable=true alt="Existing water-supply journey from the Duy Nghia water plant to Duy Vinh Primary School and its users" %}

_Figure 2. The existing water-supply journey and the conditions observed at Duy Vinh Primary School._

To define the problem from the users' perspective, we interviewed stakeholders at the school and in the surrounding community. Their experiences helped us understand the practical barriers to safe water access and translate them into design needs.

### 2.1. Stakeholders

The interviews revealed recurring concerns: limited drinking-water points, long waiting times, exposed or unhygienic containers, hot water stored outdoors, and unreliable supply during floods. Students, teachers, and parents consistently wanted a cleaner, safer, more convenient, and more resilient system.

{% include figure.liquid path="assets/img/projects/global-epics/stakeholder-student-thao-nguyen.jpg" class="img-fluid rounded z-depth-1" zoomable=true alt="Stakeholder interview summary for Thao Nguyen, a student at Duy Vinh Primary School" %}

_Student perspective: waiting one to two hours for a shared container to be refilled and receiving water that had become hot in the sun._

{% include figure.liquid path="assets/img/projects/global-epics/stakeholder-teacher-mrs-thuong.jpg" class="img-fluid rounded z-depth-1" zoomable=true alt="Stakeholder interview summary for Mrs Thuong, a teacher at Duy Vinh Primary School" %}

_Teacher perspective: concerns about hygiene, damaged pipes, and prolonged water outages after floods._

{% include figure.liquid path="assets/img/projects/global-epics/stakeholder-parent-mrs-dao.jpg" class="img-fluid rounded z-depth-1" zoomable=true alt="Stakeholder interview summary for Mrs Dao, a parent in the Duy Vinh community" %}

_Parent perspective: the need for a dependable, safe filtration system and a resilient alternative supply during severe weather._

{% include figure.liquid path="assets/img/projects/global-epics/stakeholder-student-minh-anh.jpg" class="img-fluid rounded z-depth-1" zoomable=true alt="Stakeholder interview summary for Minh Anh, a student at Duy Vinh Primary School" %}

_Student perspective: too few shared containers, inconvenient access, and concerns about the cleanliness of the existing pipework._

{% include figure.liquid path="assets/img/projects/global-epics/stakeholder-student-tuyet-suong.jpg" class="img-fluid rounded z-depth-1" zoomable=true alt="Stakeholder interview summary for Tuyet Suong, a student at Duy Vinh Primary School" %}

_Student perspective: some classrooms had no nearby drinking-water point, while outdoor containers made the water uncomfortably warm._

## 3. Specification Development

We converted the stakeholder findings into measurable requirements and compared four solution concepts against criteria including lifespan, construction cost, water yield, water quality, maintenance, and convenience. This ensured that concept selection was based on community priorities and engineering evidence rather than preference alone.

{% include figure.liquid path="assets/img/projects/global-epics/specification-options.jpg" class="img-fluid rounded z-depth-1" zoomable=true alt="Comparison of four water treatment concepts against project specifications" %}

_Figure 3. Specification research for the four candidate solutions._

We then used a weighted decision matrix to evaluate each concept consistently. The highest-scoring option was **S4: nano-filtration of well and tap water**, with a final weighted score of **310**. Following a structured process was essential because it made the trade-offs visible, connected the final choice to stakeholder needs, and gave the team a clear basis for developing and testing the selected solution.

{% include figure.liquid path="assets/img/projects/global-epics/decision-matrix.jpg" class="img-fluid rounded z-depth-1" zoomable=true alt="Weighted decision matrix comparing four proposed water treatment solutions" %}

_Figure 4. Weighted decision matrix used to select the most suitable solution._

## 4. Conceptual Design

We began by mapping the system's operating logic and the possible paths from each water source to the users. The early concept considered tap, well, and rainwater; after evaluating feasibility and reliability, the detailed design focused on two principal sources: **local tap water for normal operation** and **well water as an emergency backup**.

{% include figure.liquid path="assets/img/projects/global-epics/conceptual-system-flow.png" class="img-fluid rounded z-depth-1" zoomable=true alt="Early flowchart comparing tap, well, and rainwater treatment paths" %}

_Figure 5. Early conceptual flowchart for the multi-source water system._

### Normal operation: local tap water

Under normal conditions, the system uses only local tap water:

1. Water supplied from the Duy Nghia water plant fills an elevated **1,000-litre storage tank** on the school roof.
2. The stored water is divided into three branches: the teachers' toilets, the students' toilets, and the raw-water feed to the ultrafiltration system.
3. After treatment, the filtered water flows into a second, lower **1,000-litre tank** and is distributed to user interfaces on the first and second floors.
4. At the point of use, the design incorporates a Japanese **Cleansui** filtration unit. It operates using water-line pressure and therefore requires no dedicated electrical supply for filtration.

### Flood or power-outage operation: well water

Together, the two storage tanks provide up to **2,000 litres of reserve capacity**. During flooding or a power outage, the system first relies on this stored water. If the reserve is depleted, well water becomes the backup source:

1. Water is drawn from the well using a pulley system.
2. An aeration stage introduces oxygen, promoting the oxidation of dissolved ferrous iron (Fe²⁺) into less-soluble ferric compounds that can precipitate and be removed.
3. The pre-treated water passes through two parallel ultrafiltration modules to increase treatment capacity and provide a more robust flow path.
4. The water then reaches the Cleansui point-of-use filtration interface before distribution.

## 5. Detailed Design

The detailed design translated the selected concept into a building-scale layout, including the roof tanks, filtration stages, pipe routing, and user access points.

### 5.1. Local tap-water supply

{% include figure.liquid path="assets/img/projects/global-epics/detailed-tap-water.jpg" class="img-fluid rounded z-depth-1" zoomable=true alt="Digital model and reference installation for the local tap-water supply" %}

_Figure 6. Roof-level tap-water supply and storage concept._

### 5.2. Tap-water filtration system

{% include figure.liquid path="assets/img/projects/global-epics/detailed-tap-filtration.jpg" class="img-fluid rounded z-depth-1" zoomable=true alt="Detailed pipe routing through the tap-water filtration system" %}

_Figure 7. Proposed filtration layout and the route from the roof tank to the distribution line._

### 5.3. Well-water backup

{% include figure.liquid path="assets/img/projects/global-epics/detailed-well-water.jpg" class="img-fluid rounded z-depth-1" zoomable=true alt="Detailed design for the well-water backup and parallel filtration modules" %}

_Figure 8. Backup well-water path through two parallel filtration modules._

### 5.4. Inside the well-water tank

{% include figure.liquid path="assets/img/projects/global-epics/detailed-well-tank.jpg" class="img-fluid rounded z-depth-1" zoomable=true alt="Interior of the well-water tank showing the mechanical float and aeration system" %}

_Figure 9. Mechanical float and aeration components inside the well-water tank._

### 5.5. User interface

{% include figure.liquid path="assets/img/projects/global-epics/detailed-user-interface-floor.jpg" class="img-fluid rounded z-depth-1" zoomable=true alt="Proposed drinking-water user interfaces on two floors of the school" %}

_Figure 10. User access points integrated into the first- and second-floor distribution network._

{% include figure.liquid path="assets/img/projects/global-epics/detailed-user-interface-point.jpg" class="img-fluid rounded z-depth-1" zoomable=true alt="Close-up concept for a Cleansui point-of-use drinking-water interface" %}

_Figure 11. Point-of-use filtration and dispensing interface._

## 6. Testing and Evaluation

After completing the digital simulation, we built a physical prototype to test the system architecture and visualise the water flow. Blue-coloured water was used during the demonstration to make movement through the tanks, pipes, and treatment stages easier to observe.

<div class="embed-responsive embed-responsive-16by9 mb-3">
  <iframe
    class="embed-responsive-item"
    src="https://drive.google.com/file/d/1eU_bN6Ud9Hq3KPJyoYLwz7zWkBjKNkAo/preview"
    title="GLOBAL EPICS physical water-system prototype demonstration"
    allow="autoplay"
    allowfullscreen
  ></iframe>
</div>

_[Watch the physical-prototype demonstration on Google Drive](https://drive.google.com/file/d/1eU_bN6Ud9Hq3KPJyoYLwz7zWkBjKNkAo/view?usp=sharing)._

We also used a handheld TDS meter during a tap-water filtration demonstration. The recorded values were **39 ppm before treatment** and **80 ppm after treatment**. A team member drank a sample during the presentation as part of the demonstration.

These measurements document what was observed during the prototype test; they should not be interpreted as proof of potable-water safety. TDS describes the concentration of dissolved substances and can help characterise taste and mineral content, but it does not identify microorganisms or individual contaminants. The [World Health Organization's TDS fact sheet](https://www.who.int/publications/m/item/chemical-fact-sheets--total-dissolved-solids) does not propose a health-based guideline value for TDS. A fuller explanation of the measurement is also available in [Understanding TDS in Drinking Water](https://www.bisleri.com/blogs/understanding-tds-and-its-role-in-drinking-water.html). Validating drinking-water safety would require appropriate microbiological and chemical testing against the relevant standards.

<div class="embed-responsive embed-responsive-16by9 mb-3">
  <iframe
    class="embed-responsive-item"
    src="https://drive.google.com/file/d/1JEf3SRKLNXnCu6kTXvcAx1u9EPiOReWP/preview"
    title="GLOBAL EPICS water-quality and TDS demonstration"
    allow="autoplay"
    allowfullscreen
  ></iframe>
</div>

_[Watch the water-quality demonstration on Google Drive](https://drive.google.com/file/d/1JEf3SRKLNXnCu6kTXvcAx1u9EPiOReWP/view?usp=sharing)._

### Outcome

The project combined stakeholder research, systematic concept selection, detailed modelling, prototyping, and teamwork. Our WATER-ICE team received the **First Prize Award** in the EPICS Innovation Showcase, competing alongside Arizona State University and universities from across Vietnam.
