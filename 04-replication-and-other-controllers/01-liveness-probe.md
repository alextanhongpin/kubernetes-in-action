## Creating a HTTP-based liveness probe

```bash
$ kubectl create -f kubia-liveness-probe.yaml
```

Output:

```
pod "kubia-liveness" created
```

Validate:

```bash
$ kubectl describe po kubia-liveness
```

Output:

```
...
Containers:
  kubia:
    Container ID:   docker://0f2a9753e5770b0fdc1cb34d382003047320b4b1d05f0e064067e82a3c586735
    Image:          alextanhongpin/kube-node
    Image ID:       docker://sha256:103de7149878de216a4e636f309412045c394ca3d607190875600a35353121b8
    Port:           <none>
    State:          Running
      Started:      Sat, 10 Mar 2018 14:13:18 +0800
    Ready:          True
    Restart Count:  0
    Liveness:       http-get http://:8080/ delay=0s timeout=1s period=10s #success=1 #failure=3
    Environment:    <none>
    Mounts:
      /var/run/secrets/kubernetes.io/serviceaccount from default-token-h9wm9 (ro)
...
```