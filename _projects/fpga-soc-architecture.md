---
layout: page
title: FPGA-Based AES Encryption Standard
description: Hardware implementation and verification of AES encryption/decryption on an FPGA-based SoC platform.
importance: 1
category: embedded-systems
---

<figure>
  <img src="{{ '/assets/img/projects/fpga-aes/aes-cover.png' | relative_url }}" alt="Advanced Encryption Standard FPGA project cover">
  <figcaption>Advanced Encryption Standard implementation by Group 2.</figcaption>
</figure>

## Overview

This project studies and implements the **Advanced Encryption Standard (AES)** as a hardware accelerator. The design targets a 128-bit data block and compares AES-128, AES-192 and AES-256 in terms of key length and round count. The motivation is to move a security-critical workload from a general-purpose processor into a deterministic FPGA datapath, with a possible application in VeraCrypt password-recovery workflows.

## Project objectives

- Analyse the AES substitution-permutation structure.
- Implement encryption and decryption hardware modules.
- Verify the design through simulation and FPGA programming.
- Compare the FPGA-oriented approach with CPU/GPU execution.

<figure>
  <img src="{{ '/assets/img/projects/fpga-aes/aes-overview.png' | relative_url }}" alt="AES overview with key lengths and round counts">
  <figcaption>AES block size, supported key lengths and round counts.</figcaption>
</figure>

## Encryption and decryption datapath

AES processes each 128-bit block as a 4 × 4 byte state matrix. Encryption starts with AddRoundKey, repeats SubBytes, ShiftRows, MixColumns and AddRoundKey for the intermediate rounds, then omits MixColumns in the final round. Decryption applies the inverse transforms in reverse order.

<figure>
  <img src="{{ '/assets/img/projects/fpga-aes/aes-encryption-decryption-flow.png' | relative_url }}" alt="AES encryption and decryption flow diagrams">
  <figcaption>Encryption and decryption control flow used as the hardware design reference.</figcaption>
</figure>

<div class="row">
  <div class="col-sm-6 mt-3 mt-md-0"><figure><img src="{{ '/assets/img/projects/fpga-aes/aes-state-mapping.png' | relative_url }}" alt="Mapping plaintext bytes to the AES state matrix"><figcaption>Plaintext byte ordering into the AES state.</figcaption></figure></div>
  <div class="col-sm-6 mt-3 mt-md-0"><figure><img src="{{ '/assets/img/projects/fpga-aes/aes-key-mapping.png' | relative_url }}" alt="Mapping the AES key to the key state matrix"><figcaption>Key representation used by the round-key schedule.</figcaption></figure></div>
</div>

## Core transformations

The S-box provides the non-linear byte substitution step. MixColumns then applies the finite-field matrix transform to each state column, creating diffusion across bytes. These operations are natural candidates for parallel combinational logic, while the round controller and key expansion coordinate the sequence.

<div class="row">
  <div class="col-sm-6 mt-3 mt-md-0"><figure><img src="{{ '/assets/img/projects/fpga-aes/aes-sbox.png' | relative_url }}" alt="AES and inverse AES S-box tables"><figcaption>S-box and inverse S-box lookup tables.</figcaption></figure></div>
  <div class="col-sm-6 mt-3 mt-md-0"><figure><img src="{{ '/assets/img/projects/fpga-aes/aes-mix-columns.png' | relative_url }}" alt="AES MixColumns transformation"><figcaption>MixColumns transformation used for diffusion.</figcaption></figure></div>
</div>

## FPGA implementation

The broader FPGA work includes UART integration, a floating-point adder experiment and an AES module implemented and verified with simulation before hardware programming. The AES demo was prepared in Xilinx Vivado 2018.3 for a Zynq-7000 target, while the portfolio also records earlier work on Altera DE2 and Alinx Zynq 7000 platforms.

## Evidence and video

The final evidence page shows the Vivado Hardware Manager programming the generated bitstream to the FPGA. Add the demonstration recording here:

> **Google Drive demo video:** [Paste your Google Drive video link here](PASTE_GOOGLE_DRIVE_VIDEO_LINK_HERE)

<figure>
  <img src="{{ '/assets/img/projects/fpga-aes/aes-results.png' | relative_url }}" alt="Vivado Hardware Manager programming the AES design onto the FPGA">
  <figcaption>Hardware-programming evidence from the project presentation.</figcaption>
</figure>

## References

- NIST, _FIPS 197: Advanced Encryption Standard_ — [csrc.nist.gov/pubs/fips/197](https://csrc.nist.gov/pubs/fips/197/final)
- Daemen, J. and Rijmen, V., _The Design of Rijndael_.
- Group 2, _AES - Advanced Encryption Standard_ project presentation.
