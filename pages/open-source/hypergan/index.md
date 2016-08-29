---
title: HyperGAN
date: 2016-07-31
---

<img src="https://hyperchamber.s3.amazonaws.com/samples/images-1472503244410-fcc6b07b-ec8f-44f6-aa2b-937a6ca755dc"></img>
<img src="https://hyperchamber.s3.amazonaws.com/samples/images-1472511234866-6123711b-229c-436b-a337-19e35bb79457"></img>
<br>
<i>examples of GAN images trained on faces @ 256x256</i>
<hr>


HyperGAN is an open implementation of many different types of GANs (generative adversarial networks).  
It is currently in open alpha as it relies on [Hyperchamber](/open-source/hyperchamber).

GANs are known for being hard to train.  HyperGAN has three unique features:

* Runs on a directory of images
* Searches for a good network configuration (using [Hyperchamber](/open-source/hyperchamber))
* Has many recent advancements

Each GAN trained will learn different aspects of your data.  Many GANs wont work at all.  Some will converge to a few examples and not establish a meaningful feature space.  There are many many ways for a GAN to fail.

[HyperGAN on github](https://github.com/255BITS/HyperGAN)

