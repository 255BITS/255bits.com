---
title: Generating 256x256 faces with a GAN
date: 2016-08-30
---

# The dataset

40k human female faces

# Samples

<img src='https://hyperchamber.s3.amazonaws.com/samples/images-1472507927804-9a4aef6b-d0fc-43ce-9180-9039709d8c0f'/>
<img src='https://hyperchamber.s3.amazonaws.com/samples/images-1472506378548-a5e032fa-5664-446e-be98-d0cc09440563'/>
<img src='https://hyperchamber.s3.amazonaws.com/samples/images-1472509586829-f0796c64-b90b-4993-94d2-c72e470a62d8'/>
<img src='https://hyperchamber.s3.amazonaws.com/samples/images-1472506378264-2031cb8d-e3f0-4d32-b8e6-e097f09f40af'/>
<img src='https://hyperchamber.s3.amazonaws.com/samples/images-1472506377016-742231fe-499f-42c5-8cd6-79766ec22fd1'/>
<img src='https://hyperchamber.s3.amazonaws.com/samples/images-1472511235610-83a8b9f9-dc1d-42f4-9028-3bd14112d197'/>
<img src='https://hyperchamber.s3.amazonaws.com/samples/images-1472512900964-6afd3c20-1a5e-4455-8293-93122701d64d'/>
<img src='https://hyperchamber.s3.amazonaws.com/samples/images-1472512900148-55076712-0d58-4760-a6de-93e1b356b414'/>


# What is this?

None of these people are real.  We've created a person generator at 256x256.

We can now render a theoretically infinite number of unique people!

Note: This network is still converging.

# What is a GAN?

A GAN is technique involving two neural networks, a generator and a discriminator.  They are trained together but can be used independently.  We are focusing on the generator in these results.  Links to relevant papers below.

# More detail

Our generator has learned a mapping
of the manifold upon which infinite samples can be extracted(in theory).  In practice, our manifold has a few holes in it so 
we want to be careful where we select from.

# How?

Training GANs is notoriously difficult.  In order to train at 256 x 256 we utilize:

* [Hyperchamber.io](/products/hyperchamber.io/), a service for training networks with hyperparameter search
* A custom Discriminator and Generator
* A custom Vae(variational encoder), jointly trained
* Custom GAN training technique
* Nvidia Titan X
* ~ 1 week of training


All of our code is open source(careful, it's rough).  Our training data was custom built using dlib to identify
facial landscape points, then rotate and crop at a certain width/height.  In total, this network was trained
on 40k human female faces.

# Links

* Hyperchamber - email me for early access (please title "hyperchamber beta request")
* [hypergan](/open-source/hypergan/) - The network trainer/runner - very alpha
* The configuration for this network is here: https://hyperchamber.255bits.com/ba3051e944601e2d98b601f3347df0b1/40k_overfit_3:1.2/samples/9602b13bb5669064d636f88b144d9067
* The dataset was independently created.  If you need it, email me.

# Thanks to

* GAN paper - https://arxiv.org/abs/1406.2661
* DCGAN paper - https://arxiv.org/abs/1511.06434
* Adversarial inference - https://arxiv.org/abs/1606.00704
* Improved GAN - https://arxiv.org/abs/1606.03498
* Tensorflow - https://www.tensorflow.org/

# Credits

Thanks to the Denver Machine Learning group for ideas and discussion.

We are 2 senior engineers/consultants who are building products with ML, contact us at mikkel@255bits.com for details.

