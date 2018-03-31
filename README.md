# kubernetes-in-action
From the book Kubernetes in Action

## Installation

```bash
$ brew install kubectl

# Installing minikube
$ curl -Lo minikube https://storage.googleapis.com/minikube/releases/v0.25.2/minikube-darwin-amd64 && chmod +x minikube && sudo mv minikube /usr/local/bin/
```

## Setting Alias

```bash
$ alias k=kubectl
```

## Setting Autocomplete

```bash
$ 
```

## Chapter 02 - First steps with Docker and Kubernetes



```bash
# Start minikube
$ minikube start

# View dashboard:
$ minikube dashboard

# Stop minikube
$ minikube stop

# Start docker registry
$ eval $(minikube docker-env)
```

### Listing cluster nodes with kubectl

```bash
$ kubectl get nodes
```

Output:

```
NAME       STATUS    ROLES     AGE       VERSION
minikube   Ready     <none>    198d      v1.7.0
```

### Describe the node

```bash
$ kubectl describe node minikube
```

Output:

```
Name:               minikube
Roles:              <none>
Labels:             beta.kubernetes.io/arch=amd64
                    beta.kubernetes.io/os=linux
                    kubernetes.io/hostname=minikube
Annotations:        alpha.kubernetes.io/provided-node-ip=192.168.64.2
                    node.alpha.kubernetes.io/ttl=0
                    volumes.kubernetes.io/controller-managed-attach-detach=true
Taints:             <none>
CreationTimestamp:  Sun, 13 Aug 2017 19:48:25 +0800
Conditions:
  Type             Status  LastHeartbeatTime                 LastTransitionTime                Reason                       Message
  ----             ------  -----------------                 ------------------                ------                       -------
  OutOfDisk        False   Wed, 28 Feb 2018 00:01:47 +0800   Sun, 13 Aug 2017 19:48:25 +0800   KubeletHasSufficientDisk     kubelet has sufficient disk space available
  MemoryPressure   False   Wed, 28 Feb 2018 00:01:47 +0800   Sun, 13 Aug 2017 19:48:25 +0800   KubeletHasSufficientMemory   kubelet has sufficient memory available
  DiskPressure     False   Wed, 28 Feb 2018 00:01:47 +0800   Sun, 13 Aug 2017 19:48:25 +0800   KubeletHasNoDiskPressure     kubelet has no disk pressure
  Ready            True    Wed, 28 Feb 2018 00:01:47 +0800   Sat, 23 Sep 2017 11:54:22 +0800   KubeletReady                 kubelet is posting ready status
Addresses:
  InternalIP:  192.168.64.2
  Hostname:    minikube
Capacity:
 cpu:     2
 memory:  2048516Ki
 pods:    110
Allocatable:
 cpu:     2
 memory:  1946116Ki
 pods:    110
System Info:
 Machine ID:                 6f9b2240d4184628982fb345489d1356
 System UUID:                F583491F-0000-0000-9AC9-4E87AF68500C
 Boot ID:                    4268d80c-434c-4705-854b-957080417230
 Kernel Version:             4.9.13
 OS Image:                   Buildroot 2017.02
 Operating System:           linux
 Architecture:               amd64
 Container Runtime Version:  docker://1.12.6
 Kubelet Version:            v1.7.0
 Kube-Proxy Version:         v1.7.0
ExternalID:                  minikube
Non-terminated Pods:         (7 in total)
  Namespace                  Name                                     CPU Requests  CPU Limits  Memory Requests  Memory Limits
  ---------                  ----                                     ------------  ----------  ---------------  -------------
  kube-system                kube-addon-manager-minikube              5m (0%)       0 (0%)      50Mi (2%)        0 (0%)
  kube-system                kube-dns-910330662-ldgdz                 260m (13%)    0 (0%)      110Mi (5%)       170Mi (8%)
  kube-system                kubernetes-dashboard-3313488171-8fbrg    0 (0%)        0 (0%)      0 (0%)           0 (0%)
  kube-system                kubernetes-dashboard-fsf7q               0 (0%)        0 (0%)      0 (0%)           0 (0%)
  kubeless                   kafka-0                                  0 (0%)        0 (0%)      0 (0%)           0 (0%)
  kubeless                   kubeless-controller-1046320385-gsjp1     0 (0%)        0 (0%)      0 (0%)           0 (0%)
  kubeless                   zoo-0                                    0 (0%)        0 (0%)      0 (0%)           0 (0%)
Allocated resources:
  (Total limits may be over 100 percent, i.e., overcommitted.)
  CPU Requests  CPU Limits  Memory Requests  Memory Limits
  ------------  ----------  ---------------  -------------
  265m (13%)    0 (0%)      160Mi (8%)       170Mi (8%)
Events:
  Type     Reason                   Age   From                  Message
  ----     ------                   ----  ----                  -------
  Normal   Starting                 16m   kubelet, minikube     Starting kubelet.
  Normal   NodeAllocatableEnforced  16m   kubelet, minikube     Updated Node Allocatable limit across pods
  Normal   NodeHasSufficientDisk    16m   kubelet, minikube     Node minikube status is now: NodeHasSufficientDisk
  Normal   NodeHasSufficientMemory  16m   kubelet, minikube     Node minikube status is now: NodeHasSufficientMemory
  Normal   NodeHasNoDiskPressure    16m   kubelet, minikube     Node minikube status is now: NodeHasNoDiskPressure
  Warning  Rebooted                 16m   kubelet, minikube     Node minikube has been rebooted, boot id: 4268d80c-434c-4705-854b-957080417230
  Normal   Starting                 16m   kube-proxy, minikube  Starting kube-proxy.
```

