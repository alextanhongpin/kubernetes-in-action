# Service Deployment


## Create

```bash
$ kubectl create -f kubia-rolling-update.yml
replicationcontroller "kubia-v1" created
service "kubia" created
```

## Get Service

```bash
$ kubectl get svc kubia
NAME      TYPE           CLUSTER-IP       EXTERNAL-IP   PORT(S)        AGE
kubia     LoadBalancer   10.101.135.127   <pending>     80:32506/TCP   15m
```

## Call Service

In minikube, the external ip will not be created. To ping the service:

```bash
$ kubectl describe svc kubia
...
NodePort:                 <unset>  32506/TCP
...


# Ping the minikube ip with the kubia NodePort IP
$ curl http://$(minikube ip):32506
This is v1 running in pod kubia-v1-6phrf

# To ping continuosly
$ while true; do curl http://$(minikube ip):32506; done
```

## Rolling Update

```bash
$ kubectl rolling-update kubia-v1 kubia-v2 --image=luksa/kubia:v2
Created kubia-v2
Scaling up kubia-v2 from 0 to 3, scaling down kubia-v1 from 3 to 0 (keep 3 pods available, don't exceed 4 pods)
Scaling kubia-v2 up to 1
Scaling kubia-v1 down to 2
Scaling kubia-v2 up to 2
Scaling kubia-v1 down to 1
Scaling kubia-v2 up to 3
Scaling kubia-v1 down to 0
Update succeeded. Deleting kubia-v1
replicationcontroller "kubia-v2" rolling updated to "kubia-v2"
```

Describing the new ReplicationController created by the rolling update:

```bash
$ kubectl describe rc kubia-v2
Name:         kubia-v2
Namespace:    default
Selector:     app=kubia,deployment=613a13e9bd5813156245594e28b8205f
Labels:       app=kubia
Annotations:  <none>
Replicas:     3 current / 3 desired
Pods Status:  3 Running / 0 Waiting / 0 Succeeded / 0 Failed
Pod Template:
  Labels:  app=kubia
           deployment=613a13e9bd5813156245594e28b8205f
  Containers:
   nodejs:
    Image:        luksa/kubia:v2
    Port:         <none>
    Host Port:    <none>
    Environment:  <none>
    Mounts:       <none>
  Volumes:        <none>
Events:
  Type    Reason            Age   From                    Message
  ----    ------            ----  ----                    -------
  Normal  SuccessfulCreate  4m    replication-controller  Created pod: kubia-v2-tzjlb
  Normal  SuccessfulCreate  3m    replication-controller  Created pod: kubia-v2-d2dwt
  Normal  SuccessfulCreate  2m    replication-controller  Created pod: kubia-v2-cwt7s
```