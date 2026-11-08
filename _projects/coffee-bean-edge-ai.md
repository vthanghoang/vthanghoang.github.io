---
layout: page
title: Edge AI Coffee Bean Sorting
description: A Raspberry Pi computer-vision system for detecting coffee bean quality and defects at the edge.
img: assets/img/projects/coffee-bean-edge-ai/coffee-beans.jpg
importance: 1
category: edge-ai
---

## Overview

For the PBL3 course **Machine Learning for Integrated Systems and Applications**, the DATA team developed a compact computer-vision system for coffee-bean quality inspection. The project addressed a practical problem for coffee shops and small producers: manual sorting is slow and subjective, while defective, mouldy, insect-damaged, or inconsistent beans can affect flavour, customer trust, and the shop's reputation.

The team consisted of Hoang Van Thang (project leader and facilitator), Tran Khanh Hung, and Pham Quang Thanh, under the supervision of Assoc. Prof. Pham Van Tuan. My responsibilities included problem and requirements definition, conceptual design, hardware construction, AI-model deployment, integration, testing, and report development.

{% include figure.liquid loading="eager" path="assets/img/projects/coffee-bean-edge-ai/coffee-beans.jpg" class="img-fluid rounded z-depth-1" zoomable=true alt="Coffee beans in green, light, dark, and red tones" %}

_Figure 1. Coffee-bean quality is influenced by origin, roasting, storage, and visible defects._

## 1. Problem and Stakeholder Research

Interviews with coffee-shop customers, staff, and an owner showed that users wanted a stable and recognisable flavour, clearer quality assurance, and fewer defective beans entering the brewing process. The owner highlighted the need to remove damaged or mouldy beans at the beginning of the workflow, before they affect a cup of coffee or the reputation of the shop.

These findings led to a clear problem statement: **design an affordable and portable device that can identify coffee-bean classes and visible defects quickly enough for practical quality control.**

## 2. Requirements and Constraints

The report defined the following target specifications for a small, deployable system:

- Compact enclosure of approximately **300 × 250 × 80 mm** and a mass of about **500 g**.
- A low-cost build targeting less than approximately **USD 200**.
- At least **95% classification accuracy** as the design goal.
- Average processing time of approximately **1.8 seconds per image**.
- Raspberry Pi 4-based processing, camera input, and a **320 × 240 TFT display** for local feedback.
- A measurement distance of approximately **5–10 cm** and power consumption below **240 mA** at high performance.
- Recyclable enclosure materials and a workflow that can operate without cloud inference.

## 3. System Design

The selected architecture combines a camera, Raspberry Pi 4 edge computer, local inference, and a visual output. The tested workflow uses a Logitech Brio 100 webcam connected through USB; the classification result is rendered locally instead of being sent to a remote server.

{% include figure.liquid path="assets/img/projects/coffee-bean-edge-ai/system-design.png" class="img-fluid rounded z-depth-1" zoomable=true alt="Front-end and back-end system design for the coffee-bean inspection device" %}

_Figure 2. Front-end and back-end product design, from image capture to classification output._

{% include figure.liquid path="assets/img/projects/coffee-bean-edge-ai/software-hardware-architecture.png" class="img-fluid rounded z-depth-1" zoomable=true alt="Software and hardware architecture connecting the webcam, Raspberry Pi, model, and display" %}

_Figure 3. Software and hardware architecture for the edge-inference pipeline._

### Hardware selection

The hardware comparison selected the Raspberry Pi 4 over ESP32-CAM and Arduino Uno because it offers stronger local image-processing capability, camera and display support, Linux compatibility, and a larger software ecosystem. The Pi's GPIO and connector layout were documented before integration.

{% include figure.liquid path="assets/img/projects/coffee-bean-edge-ai/raspberry-pi-pinout.png" class="img-fluid rounded z-depth-1" zoomable=true alt="Raspberry Pi 4 pinout and connector layout" %}

_Figure 4. Raspberry Pi 4 pinout used during hardware integration._

{% include figure.liquid path="assets/img/projects/coffee-bean-edge-ai/raspberry-pi-schematic.png" class="img-fluid rounded z-depth-1" zoomable=true alt="Raspberry Pi connector schematic for the prototype" %}

## 4. Edge AI Model

We selected **MobileNetV2 0.35**, a lightweight convolutional neural network designed for mobile and embedded deployment. Its depthwise-separable convolutions reduce the number of computations compared with a conventional convolutional network, making it suitable for Raspberry Pi inference without a GPU or cloud dependency.

The model was trained and optimised through Edge Impulse, with Google Colab used to inspect metrics such as accuracy, precision, recall, F1 score, loss, and the confusion matrix. The training configuration recorded in the report used 100 epochs, a learning rate of 0.001, data augmentation, and a batch size of 128.

## 5. Dataset and Preprocessing

The dataset contained **1,600 images**, balanced across four classes:

1. Black coffee beans
2. Light-coloured coffee beans
3. Green coffee beans
4. Insect-damaged coffee beans

The report describes an 80/20 split: **1,280 training images** and **320 validation images**, with 320 training and 80 validation samples per class. The preparation pipeline removed blurry or poorly exposed images, excluded foreign objects, removed duplicates, resized inputs to **96 × 96 pixels**, normalised pixel values to the range [0, 1], and used rotation, flipping, zoom, brightness, contrast, and noise augmentation on the training data.

{% include figure.liquid path="assets/img/projects/coffee-bean-edge-ai/data-cleaning-fault.png" class="img-fluid rounded z-depth-1" zoomable=true alt="Examples of unsuitable coffee-bean images containing foreign objects" %}

{% include figure.liquid path="assets/img/projects/coffee-bean-edge-ai/data-cleaning-clean.png" class="img-fluid rounded z-depth-1" zoomable=true alt="Clean coffee-bean image prepared for model training" %}

{% include figure.liquid path="assets/img/projects/coffee-bean-edge-ai/data-augmentation.png" class="img-fluid rounded z-depth-1" zoomable=true alt="Examples of augmentation applied to the coffee-bean dataset" %}

_Figure 5. Cleaning and augmentation reduce noise and help the model generalise beyond a single camera pose._

{% include figure.liquid path="assets/img/projects/coffee-bean-edge-ai/resize-96x96.png" class="img-fluid rounded z-depth-1" zoomable=true alt="Coffee-bean image resized from 224 by 224 to 96 by 96 pixels" %}

_Figure 6. Input resizing for MobileNetV2 0.35._

## 6. Evaluation

The report records **96.9% accuracy** in its requirements and PERT summary. The validation screenshot below reports an **F1 score of 94.8%** and shows class-level results for black, green, insect-damaged, and light beans. These are different metrics, so they are presented separately rather than treated as the same number.

{% include figure.liquid path="assets/img/projects/coffee-bean-edge-ai/model-evaluation.png" class="img-fluid rounded z-depth-1" zoomable=true alt="Validation confusion matrix and F1 score for the coffee-bean classifier" %}

_Figure 7. Validation results shown in the team report, including a 94.8% F1 score._

## 6.1 Model Evaluation and Training Objective

For this four-class, single-label image-classification problem, the main evaluation evidence is accuracy, per-class precision, recall, F1-score, and the confusion matrix. The report states **96.9% accuracy** in its requirements/PERT summary and shows **94.8% validation F1** in the model results. These values should be read as separate reported metrics, not as interchangeable claims.

The model was trained with a classification loss, while the portfolio focuses on the metrics that directly communicate model quality to a reader.

{% include figure.liquid path="assets/img/projects/coffee-bean-edge-ai/precision-recall-curves.png" class="img-fluid rounded z-depth-1" zoomable=true alt="Precision recall curves for coffee bean classes" %}

_Figure 9. Precision–recall curves, interpreted one-vs-rest for each bean class._

Precision is the fraction of predicted positives that are correct, while recall is the fraction of actual positives that are found. For this project, macro-F1, per-class F1, and the confusion matrix are more informative than a single aggregate score because the insect-damaged and light-bean classes are harder to distinguish.

## 7. Data Engineering Pipeline

The data-engineering workflow starts with collecting images from the team and reused sources, then auditing quality, removing duplicates and unsuitable frames, assigning four class labels, resizing to 96 × 96 pixels, normalising values to [0, 1], and augmenting the training split. The dataset contains 1,600 balanced images: 1,280 for training and 320 for validation.

{% include figure.liquid path="assets/img/projects/coffee-bean-edge-ai/data-cleaning-fault.png" class="img-fluid rounded z-depth-1" zoomable=true alt="Faulty dataset images removed during cleaning" %}

_Figure 10. Faulty samples identified during data cleaning._

{% include figure.liquid path="assets/img/projects/coffee-bean-edge-ai/data-cleaning-clean.png" class="img-fluid rounded z-depth-1" zoomable=true alt="Clean coffee bean samples retained for training" %}

_Figure 11. Clean samples retained after the quality audit._

{% include figure.liquid path="assets/img/projects/coffee-bean-edge-ai/labels-black.png" class="img-fluid rounded z-depth-1" zoomable=true alt="Black coffee bean class labels" %}
{% include figure.liquid path="assets/img/projects/coffee-bean-edge-ai/labels-light.png" class="img-fluid rounded z-depth-1" zoomable=true alt="Light coffee bean class labels" %}
{% include figure.liquid path="assets/img/projects/coffee-bean-edge-ai/labels-green.png" class="img-fluid rounded z-depth-1" zoomable=true alt="Green coffee bean class labels" %}
{% include figure.liquid path="assets/img/projects/coffee-bean-edge-ai/labels-insect-damaged.png" class="img-fluid rounded z-depth-1" zoomable=true alt="Insect damaged coffee bean class labels" %}

_Figure 12. Label examples for black, light, green, and insect-damaged beans._

{% include figure.liquid path="assets/img/projects/coffee-bean-edge-ai/resize-96x96.png" class="img-fluid rounded z-depth-1" zoomable=true alt="Image resized to 96 by 96 pixels" %}

_Figure 13. Resizing every input to the MobileNetV2 input resolution._

{% include figure.liquid path="assets/img/projects/coffee-bean-edge-ai/data-augmentation.png" class="img-fluid rounded z-depth-1" zoomable=true alt="Augmentation operations applied to training data" %}

_Figure 14. Rotation, flip, zoom, brightness, contrast, and noise augmentation._

{% include figure.liquid path="assets/img/projects/coffee-bean-edge-ai/dataset-black-self.png" class="img-fluid rounded z-depth-1" zoomable=true alt="Black coffee beans photographed by the team" %}
{% include figure.liquid path="assets/img/projects/coffee-bean-edge-ai/dataset-black-reused.png" class="img-fluid rounded z-depth-1" zoomable=true alt="Reused black coffee bean images" %}

_Figure 15. Black-bean samples from team collection and reused sources._

{% include figure.liquid path="assets/img/projects/coffee-bean-edge-ai/dataset-light-reused.png" class="img-fluid rounded z-depth-1" zoomable=true alt="Light coffee bean samples" %}

_Figure 16. Light-bean samples used to broaden appearance variation._

{% include figure.liquid path="assets/img/projects/coffee-bean-edge-ai/dataset-green-self.png" class="img-fluid rounded z-depth-1" zoomable=true alt="Green coffee beans photographed by the team" %}
{% include figure.liquid path="assets/img/projects/coffee-bean-edge-ai/dataset-green-reused.png" class="img-fluid rounded z-depth-1" zoomable=true alt="Reused green coffee bean images" %}

_Figure 17. Green-bean samples from both collection sources._

{% include figure.liquid path="assets/img/projects/coffee-bean-edge-ai/dataset-insect-self.png" class="img-fluid rounded z-depth-1" zoomable=true alt="Insect damaged coffee beans photographed by the team" %}
{% include figure.liquid path="assets/img/projects/coffee-bean-edge-ai/dataset-insect-reused.png" class="img-fluid rounded z-depth-1" zoomable=true alt="Reused insect damaged coffee bean images" %}

_Figure 18. Insect-damaged samples, the most difficult class in validation._

## 8. Feature Extraction and Model Evaluation

After preprocessing, MobileNetV2 extracts increasingly compact feature maps before the final classifier. Visualising these intermediate tensors makes the edge model easier to explain: early maps preserve local colour and texture, while later maps encode higher-level bean patterns.

{% include figure.liquid path="assets/img/projects/coffee-bean-edge-ai/augmented-sample.png" class="img-fluid rounded z-depth-1" zoomable=true alt="Augmented coffee bean training sample" %}

_Figure 19. Example of an augmented training sample._

{% include figure.liquid path="assets/img/projects/coffee-bean-edge-ai/feature-map-48.png" class="img-fluid rounded z-depth-1" zoomable=true alt="48 by 48 intermediate feature map" %}

_Figure 20. Early 48 × 48 feature map._

{% include figure.liquid path="assets/img/projects/coffee-bean-edge-ai/feature-map-12.png" class="img-fluid rounded z-depth-1" zoomable=true alt="12 by 12 intermediate feature map" %}

_Figure 21. Mid-level 12 × 12 feature map._

{% include figure.liquid path="assets/img/projects/coffee-bean-edge-ai/feature-map-6.png" class="img-fluid rounded z-depth-1" zoomable=true alt="6 by 6 intermediate feature map" %}

_Figure 22. Compact 6 × 6 feature map before classification._

## 9. Prototyping and Delivery

For physical testing, the team built a closed lightbox with a white background and calibrated LED lighting so that the prototype environment would resemble the dataset conditions. The box was used to place and inspect coffee beans from all four classes before delivering the product to a coffee-shop owner for feedback on detection speed and accuracy.

{% include figure.liquid path="assets/img/projects/coffee-bean-edge-ai/prototype-tray.jpg" class="img-fluid rounded z-depth-1" zoomable=true alt="Prototype lightbox containing four coffee-bean classes" %}

_Figure 23. Prototype test box with dark, light, green, and insect-damaged beans._

{% include figure.liquid path="assets/img/projects/coffee-bean-edge-ai/team-prototyping.jpg" class="img-fluid rounded z-depth-1" zoomable=true alt="DATA team members working on the coffee-bean sorting prototype" %}

{% include figure.liquid path="assets/img/projects/coffee-bean-edge-ai/image.png" class="img-fluid rounded z-depth-1" zoomable=true alt="Coffee-bean sorting prototype detail" %}

Teamwork during hardware integration and prototype testing.

## 10. Limitations and Future Work

The delivered prototype was a working proof of concept rather than a finished commercial product. The report identifies three practical limitations: accuracy can drop when beans are not presented in a suitable group or image frame, insect-damaged beans remain difficult to classify reliably, and the enclosure and workflow still need refinement before commercialisation.

Future work should focus on collecting more varied images, improving the insect-damage class, strengthening robustness to lighting and bean placement, reducing inference time, and completing a durable enclosure for real coffee-shop use.

## References

1. DATA Team, “Coffee Bean Defect and Colors Detection,” PBL3 team report, June 2025.
2. M. Sandler et al., “MobileNetV2: Inverted Residuals and Linear Bottlenecks,” [arXiv:1801.04381](https://arxiv.org/abs/1801.04381).
3. A. G. Howard et al., “MobileNets: Efficient Convolutional Neural Networks for Mobile Vision Applications,” [arXiv:1704.04861](https://arxiv.org/abs/1704.04861).
4. M. Tan and Q. V. Le, “EfficientNet: Rethinking Model Scaling for Convolutional Neural Networks,” [arXiv:1905.1191](https://arxiv.org/abs/1905.1191).
5. Edge Impulse, “Image classification end-to-end tutorial,” [official documentation](https://docs.edgeimpulse.com/docs/tutorials/end-to-end-tutorials/image-classification).
6. Raspberry Pi, [official computer documentation](https://www.raspberrypi.com/documentation/computers/raspberry-pi.html).
