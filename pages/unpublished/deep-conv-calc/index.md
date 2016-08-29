---
title: Deep conv calc
date: 2016-07-31
---

## Deep convolutional networks sizes

The math behind convolutional (and deconvolutional) network design follows a few sets of rules, some of which are mathematical
in nature ([read about that here](#conv_arithmetic), and some of which are rules of thumb.

Besides the inputs and outputs being the correct size, convolutional DNN design seems to follow the following set of rules:

* Increase feature dimensions as you decrease convolution size

This can be thought of compressing the information into a list of features.  So if you start with an 8 x 8 pixel image
and decrease to a 4x4 image, your 4x4 filters will represent a compressed version of the 8x8 image.  It follows that
you can decrease information loss by including multiple 4x4 representations.

* Convolutional size as a multiple of 2

Power of two network sizes are optimized due to this: 

* Filter size of 3

Filter size at 3 is highly optimized thanks to this patch in NVIDIA - TODO.

### A basic convolutional design

We increase dimensionality as we decrease size.  At the very end of the network there is a computation layer, 
often a couple of fully connected layers.

This is how Alexnet is structured.  Images from [2](deep_cnn_feature_evaluation].

### VGGNet


### Inception

Inception works 

### Resnets

### Wide resnet

### Densenet

Deep CNNs can be a pain to work with however, which is where this paper comes in handy:

Calculator CNN


### Future work

DCNN design is still an emerging field.  What works best is still largely unknown and we haven't even really begun to explore deep deconvolution network design.

###Resources:

<a name="conv_arithmetic"></a>Convolutional arithmetic:

 * https://github.com/vdumoulin/conv_arithmetic 
 * https://arxiv.org/abs/1603.07285

 <a name="deep_cnn_feature_evaluation"></a>Feature Evaluation of Deep Convolutional Neural Networks for Object Recognition and Detection

* http://arxiv.org/pdf/1509.07627v1.pdf



## Understanding convolutional equations

Diagram (github link)

## Build your own

## A deep CNN generator - GAN
