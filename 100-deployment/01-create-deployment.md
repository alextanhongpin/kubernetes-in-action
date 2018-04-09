# Kubernetes the easy way

## Create Deployment

```bash
$ kubectl create -f deployment.yaml --record
deployment.apps "echo" created
```

## Verify

Get deployment:

```bash
$ kubectl get deployments echo
NAME      DESIRED   CURRENT   UP-TO-DATE   AVAILABLE   AGE
echo      2         2         2            2           5m
```

Describe deployment:

```bash
$ kubectl describe deployment echo
Name:                   echo
Namespace:              default
CreationTimestamp:      Mon, 09 Apr 2018 14:40:08 +0800
Labels:                 app=echo
Annotations:            deployment.kubernetes.io/revision=1
                        kubernetes.io/change-cause=kubectl create --filename=deployment.yaml --record=true
Selector:               app=echo
Replicas:               2 desired | 2 updated | 2 total | 2 available | 0 unavailable
StrategyType:           RollingUpdate
MinReadySeconds:        0
RollingUpdateStrategy:  25% max unavailable, 25% max surge
Pod Template:
  Labels:  app=echo
  Containers:
   echo:
    Image:        alextanhongpin/echo:latest
    Port:         8080/TCP
    Host Port:    0/TCP
    Environment:  <none>
    Mounts:       <none>
  Volumes:        <none>
Conditions:
  Type           Status  Reason
  ----           ------  ------
  Available      True    MinimumReplicasAvailable
  Progressing    True    NewReplicaSetAvailable
OldReplicaSets:  <none>
NewReplicaSet:   echo-69756699f (2/2 replicas created)
Events:
  Type    Reason             Age   From                   Message
  ----    ------             ----  ----                   -------
  Normal  ScalingReplicaSet  6m    deployment-controller  Scaled up replica set echo-69756699f to 2
```