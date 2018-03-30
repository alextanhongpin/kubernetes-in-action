# Config Map

## Create

```bash
$ kubectl create configmap fortune-config --from-literal=sleep-interval=25
configmap "fortune-config" created
```

## Get

```bash
$ kubectl get cm
NAME             DATA      AGE
fortune-config   1         31s
```

## Get as yaml

```bash
$ kubectl get cm fortune-config -o yaml
apiVersion: v1
data:
  sleep-interval: "25"
kind: ConfigMap
metadata:
  creationTimestamp: 2018-03-29T10:21:44Z
  name: fortune-config
  namespace: default
  resourceVersion: "2708"
  selfLink: /api/v1/namespaces/default/configmaps/fortune-config
  uid: fabf2594-333a-11e8-a276-080027bf92fd
```

## Describe

```bash
$ kubectl describe cm
Name:         fortune-config
Namespace:    default
Labels:       <none>
Annotations:  <none>

Data
====
sleep-interval:
----
25
Events:  <none>
```

## Create from File

```bash
$ kubectl create cm hello --from-file=secret-key=./secrets.txt

# Validate
$ kubectl describe cm hello
Name:         hello
Namespace:    default
Labels:       <none>
Annotations:  <none>

Data
====
secret-key:
----
this is a secret

Events:  <none>
```

## Usage with Container

```bash
$ kubectl create -f fortune-pod-configmap.yml
pod "fortune" created
```

## Options

```bash
$ kubectl create configmap my-config \
  --from-file=foo.json \        # A single file
  --from-file=bar=foobar.conf \ # A file stored under a custom key
  --from-file=config-opts/ \    # A whole directory
  --from-literal=some=thing     # A literal value
```

## envFrom

```yml
spec:
  containers:
  - image: some-image
    envFrom: 
    - prefix: CONFIG_
      configMapRef:
        name: my-config-map
```

## Editing Configmap

```bash
$ kubectl edit configmap fortune-config
```

