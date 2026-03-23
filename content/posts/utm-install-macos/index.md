---
title: "Install MacOS VM on UTM"
date: 2026-03-10T20:38:00+08:00
draft: false
description: "A hands-on guide to installing a macOS virtual machine on UTM, including setup steps, performance tips, and common troubleshooting notes."
tags: ["VM", "MacOS"]
---

UTM is a virtualization tool based on QEMU. It works well for running Linux, Windows, and macOS on Mac, with solid performance. This post records my full setup process for building a macOS virtual machine.

- Host OS: macOS Sonoma 14.8.3, 16 GB RAM, Apple M2 (8-core CPU, 8-core GPU)
- Virtualization software: UTM 4.7.5

## 1. Create the Virtual Machine

1. Open UTM and click `Create a New Virtual Machine`.
2. Choose `Virtualize`.
3. Choose `macOS`.
4. Click `Download` to fetch the Apple recovery image (or import an existing IPSW/recovery image; [ipsw.me](https://ipsw.me/) is a good source).
> Note: The default downloaded image is usually not newer than your host OS version.  
> For example, if your host is Sonoma, you will generally get a Sonoma recovery image.  
> Also, UTM downloads directly to your system disk, so if storage is limited, download the image first and import it afterwards.
5. Follow the prompts to create the VM, adjusting CPU and memory allocation as needed (see next section for recommendations).

## 2. Recommended Resource Allocation

A stable configuration that works well on my side:

1. CPU Cores：8
2. Memory：8192 MB - 12288 MB
3. Disk：128GB

If your host machine is stronger, you can allocate more CPU and memory, but avoid starving the host.

## 3. Boot and Install

The installation is usually very smooth. After around 10+ minutes, you should reach the macOS setup screen. Complete the onboarding steps and the VM is ready to use.

## 4. Network Configuration

The default `Shared Network (NAT)` mode usually works out of the box.  
If networking fails, set DNS to `8.8.8.8`.

If you need a proxy inside the VM, configure your host proxy first (for example, Clash), enable `Allow LAN access`, and then set the VM proxy to your host's LAN IP and listening port.

## Do not try:

I tried to install macOS 26 on UTM and the installation process was unstable, with random freezes. After managin to complete the installation, the system's display did not work properly, with small color patches everywhere. Using same or lower version than the host OS is recommended for better stability and compatibility.