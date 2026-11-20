---
layout: page
title: Human Skin Spectral Reflectance Modelling
description: Monte Carlo simulation, NIR measurement, and database validation for AI-driven skin diagnostics.
importance: 1
category: research
related_publications: true
---

## Overview

This project investigates light–tissue interaction in human skin using a four-layer Monte Carlo model and near-infrared (NIR) diffuse-reflectance measurements. The objective is to extend a structured optical-skin database that can support AI-driven, non-invasive skin-diagnosis research when clinical data are limited or expensive to collect.

The implementation is documented in a LYDINC capstone report developed under **Project LYDTech2023-DA-02**. The report describes the complete pipeline: optical parameter selection, GPU-accelerated simulation, real-skin measurements, data standardisation, and comparison between simulated and measured spectra.

## System workflow

```text
Skin condition / demographic group
              ↓
Layered optical parameters
              ↓
GPU Monte Carlo simulation (CUDAMCML)
              ↓
Diffuse-reflectance spectrum
              ↘
       NIR-M-R2 measurement ──→ standardisation ──→ similarity evaluation
```

The simulation and measurement branches are kept separate until evaluation. This makes it possible to diagnose whether an error comes from the tissue model, the measurement protocol, or the data-processing stage.

## Data engineering and measurement protocol

The report organises the dataset along four axes:

- **Skin condition:** normal, dry, and ageing skin.
- **Age groups:** 10–29, 30–49, and 50–70 years.
- **Skin tone:** light, moderate, and dark.
- **Measurement area:** cheek, inner forearm, and back of hand.

Diffuse reflectance was collected with the **InnoSpectra NIR-M-R2** module. The measurement setup uses a Spectralon SRS-99 diffuse-reflectance reference, a sapphire window lightly pressed against the skin, and repeated acquisitions that are averaged before standardisation. The measurement module records the NIR band from approximately **900–1700 nm at 4 nm intervals**; the broader modelling objective targets the 400–1700 nm NIR range described in the capstone report.

The core signal transformations are:

$$
A(\\lambda)=\\log_{10}\\left(\\frac{S_{ref}(\\lambda)}{S_{sample}(\\lambda)}\\right),
\\qquad
R_d(\\lambda)=\\frac{S_{sample}(\\lambda)}{S_{ref}(\\lambda)}.
$$

Raw reflectance is then standardised with the instrument-specific scaling factors and grouped by skin condition, age, tone, and measurement area. This produces consistent records for model fitting and later similarity search.

## Four-layer Monte Carlo skin model

The simulated tissue is represented as a stack of:

1. **Stratum corneum (SC)**
2. **Living epidermis / dermis (DER)**
3. **Subcutaneous layer (SUB)**
4. **Fat layer**

Each layer is parameterised by thickness $d$, anisotropy $g$, refractive index $\\eta$, absorption coefficient $\\mu_a$, and scattering coefficient $\\mu_s$. Melanin, water, and fat volume fractions are varied to represent skin tone, dryness, and ageing.

For skin-tone experiments, the report uses melanin-volume ranges of approximately **3–4% (light), 4–5% (moderate), and 6–7% (dark)**. Dry-skin configurations alter water fraction, layer thickness, and refractive index; ageing configurations modify water and fat fractions to represent age-related optical changes.

The GPU implementation is based on **CUDA Monte Carlo for Multi-Layered Media (CUDAMCML)**. GPU execution makes repeated parameter sweeps practical, while **FAISS** is used to accelerate similarity search across the generated spectral database.

## Evaluation and reproducibility

The evaluation compares simulated diffuse-reflectance curves with spectra measured from real human skin. The comparison is performed after matching the same wavelength range, demographic/condition group, and measurement area.

This evaluation design is important because it tests more than visual similarity:

- **Physical consistency:** the simulated curve follows the measured spectral response.
- **Group consistency:** tone, dryness, age, and body area produce distinguishable patterns.
- **Pipeline repeatability:** the same parameters and random-seed policy can regenerate the synthetic records.
- **AI-readiness:** spectra are stored with metadata so they can be used as labelled training data rather than as isolated plots.

The related validation study reported **97% agreement** between the generated database and real measurements under the evaluated conditions {% cite tran2025database ho2025validation %}. The capstone report also notes that broader participant diversity and additional skin conditions are needed before the database can be treated as clinically representative.

## Engineering outputs

- A parameterised four-layer Monte Carlo skin model.
- A GPU-accelerated CUDAMCML simulation workflow.
- A standardised NIR diffuse-reflectance acquisition protocol.
- A structured database indexed by age, tone, condition, and measurement area.
- A real-measurement validation workflow with similarity scoring.
- A FAISS-based retrieval step for efficient nearest-spectrum search.

## Research contribution

My work on this project is connected to the database-generation and real-measurement validation studies published in 2025. The capstone report provides the engineering context for those studies, while the publications document the broader research results and dissemination.

## Recognition

The work received Third Prize at the Faculty Scientific Conference 2025, Second Award at the University Scientific Conference 2025, and a Best Presenter Award at AIMS 2025.

## Source report

Tran Thi Nguyet Ha and Ho Xuan Dat, *A Novel and Efficient Skin Modeling Method Using Monte Carlo Simulation to Extend the Database for Skin Health Diagnosis*, LYDINC capstone report, January 2024, developed under Project LYDTech2023-DA-02. Supervision: Dr. Nguyen Thi Anh Thu and Prof. Jessica Ramella Roman.

The report's figures document the NIR-M-R2 measurement setup, measurement areas, skin-tone/dryness/age parameterisation, and the resulting simulated-versus-measured spectra. They are retained as the technical source for this portfolio summary rather than reproduced as decorative screenshots.
