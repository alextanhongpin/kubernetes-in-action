# Specifying environment variables

```bash
$ kubectl create -f fortune-pod-env.yml
pod "fortune" created
```

## Preview

```bash
$ kubectl get po fortune
NAME      READY     STATUS    RESTARTS   AGE
fortune   1/1       Running   0          17s
```

## Describe

```bash
$ kubectl describe po fortune
Name:         fortune
Namespace:    default
Node:         minikube/192.168.99.100
Start Time:   Thu, 29 Mar 2018 18:15:18 +0800
Labels:       <none>
Annotations:  <none>
Status:       Running
IP:           172.17.0.4
Containers:
  html-generator:
    Container ID:   docker://c018a3ebe1061b938a9019f28df7a9a7b8d38ae4b709eb3bd25adc81dd6c4693
    Image:          luksa/fortune:env
    Image ID:       docker-pullable://luksa/fortune@sha256:8af10b8eb1b1dcc6512e0061c0722db43f4795aefcde43b524b1c8b302611dde
    Port:           <none>
    Host Port:      <none>
    State:          Running
      Started:      Thu, 29 Mar 2018 18:15:26 +0800
    Ready:          True
    Restart Count:  0
    Environment:
      INTERVAL:  30
    Mounts:
      /var/htdocs from html (rw)
      /var/run/secrets/kubernetes.io/serviceaccount from default-token-2jpm5 (ro)
Conditions:
  Type           Status
  Initialized    True
  Ready          True
  PodScheduled   True
Volumes:
  html:
    Type:    EmptyDir (a temporary directory that shares a pod's lifetime)
    Medium:
  default-token-2jpm5:
    Type:        Secret (a volume populated by a Secret)
    SecretName:  default-token-2jpm5
    Optional:    false
QoS Class:       BestEffort
Node-Selectors:  <none>
Tolerations:     <none>
Events:
  Type    Reason                 Age   From               Message
  ----    ------                 ----  ----               -------
  Normal  Scheduled              33s   default-scheduler  Successfully assigned fortune to minikube
  Normal  SuccessfulMountVolume  33s   kubelet, minikube  MountVolume.SetUp succeeded for volume "html"
  Normal  SuccessfulMountVolume  33s   kubelet, minikube  MountVolume.SetUp succeeded for volume "default-token-2jpm5"
  Normal  Pulling                32s   kubelet, minikube  pulling image "luksa/fortune:env"
  Normal  Pulled                 25s   kubelet, minikube  Successfully pulled image "luksa/fortune:env"
  Normal  Created                25s   kubelet, minikube  Created container
  Normal  Started                25s   kubelet, minikube  Started container
```


## Delete

```bash
$ kubectl delete po fortune
pod "fortune" deleted
```