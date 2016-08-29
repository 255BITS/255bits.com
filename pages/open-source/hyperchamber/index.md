---
title: Hyperchamber
date: 2016-07-31
---

Hyperchamber is a python script thats all about random searching hyperparameters.  


```python
import hyperchamber as hc

hc.set('learning_rate', [0.1,0.2])


config = hc.random_config # { 'learning_rate' : 0.1 or 0.2 }
```


## Links

[https://github.com/255BITS/hyperchamber](https://github.com/255BITS/hyperchamber)
