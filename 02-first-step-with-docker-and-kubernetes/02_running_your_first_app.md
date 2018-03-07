# Running your first app on Kubernetes

```bash
$ kubectl run kubia --image=alextanhongpin/kube-node \
  --image-pull-policy=IfNotPresent \ # Pull from local only
  --port=8080 \
  --generator=run/v1
```

Output:

```
replicationcontroller "kubia" created
```

## Listing pods

```bash
$ kubectl get pods
```

Output:

```bash
NAME          READY     STATUS    RESTARTS   AGE
kubia-l181d   1/1       Running   0          1m
```

##  Describe pods

```bash
$ kubectl describe pods kubia-l181d
```

Output:

```
Name:           kubia-l181d
Namespace:      default
Node:           minikube/192.168.99.100
Start Time:     Wed, 07 Mar 2018 23:23:53 +0800
Labels:         run=kubia
Annotations:    kubernetes.io/created-by={"kind":"SerializedReference","apiVersion":"v1","reference":{"kind":"ReplicationController","namespace":"default","name":"kubia","uid":"8b59b4f5-221b-11e8-8cec-08002756a598","...
Status:         Running
IP:             172.17.0.4
Controlled By:  ReplicationController/kubia
Containers:
  kubia:
    Container ID:   docker://d6171440a063d159f713b6c1a8a0cb67ee4759927785365718c3a3ac1feffd10
    Image:          alextanhongpin/kube-node
    Image ID:       docker://sha256:103de7149878de216a4e636f309412045c394ca3d607190875600a35353121b8
    Port:           8080/TCP
    State:          Running
      Started:      Wed, 07 Mar 2018 23:23:53 +0800
    Ready:          True
    Restart Count:  0
    Environment:    <none>
    Mounts:
      /var/run/secrets/kubernetes.io/serviceaccount from default-token-h9wm9 (ro)
Conditions:
  Type           Status
  Initialized    True
  Ready          True
  PodScheduled   True
Volumes:
  default-token-h9wm9:
    Type:        Secret (a volume populated by a Secret)
    SecretName:  default-token-h9wm9
    Optional:    false
QoS Class:       BestEffort
Node-Selectors:  <none>
Tolerations:     <none>
Events:
  Type    Reason                 Age   From               Message
  ----    ------                 ----  ----               -------
  Normal  Scheduled              1m    default-scheduler  Successfully assigned kubia-l181d to minikube
  Normal  SuccessfulMountVolume  1m    kubelet, minikube  MountVolume.SetUp succeeded for volume "default-token-h9wm9"
  Normal  Pulled                 1m    kubelet, minikube  Container image "alextanhongpin/kube-node" already present on machine
  Normal  Created                1m    kubelet, minikube  Created container
  Normal  Started                1m    kubelet, minikube  Started container
```

## Delete pods

```bash
$ kubectl delete pods kubia-l181d
```

## Accessing your web application

```bash
$ kubectl expose rc kubia --type=LoadBalancer --name=kubia-node
```

## Listing services

```bash
$ kubectl get services
```

Output:

```
kube-node    LoadBalancer   10.0.0.201   <pending>     8080:31226/TCP   21s
kubernetes   ClusterIP      10.0.0.1     <none>        443/TCP          10m
```

## Refresh to see the created ip

```bash
$ kubectl get svc
```

Output:

```
Note: If you are using Minikube, you don’t get an external IP address. The external IP address remains in the pending state.
```

## Accessing service through external ip

If you are using Minikube, enter these commands:

```
$ kubectl cluster-info
$ kubectl describe svc kube-node
```

The output displays the IP address of your Minikube node and the NodePort value for your service. Then enter this command to access the Hello World application:

```bash
# Not working
$ curl <minikube-node-ip-address>:<service-node-port>

# Working example
$ curl http://$(minikube ip):31226

# Alternatively (service, not svc)
$ minikube service kube-node
```

Output:

```
You have've hit kubia-l181d%
```