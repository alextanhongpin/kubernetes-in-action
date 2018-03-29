# Creating a PersistentVolume

```bash
$ kubectl create -f persistent-volume.yml
persistentvolume "pv0001" created

$ kubectl get pv                     
NAME      CAPACITY   ACCESS MODES   RECLAIM POLICY   STATUS      CLAIM     STORAGECLASS   REASON    AGE
pv0001    5Gi        RWO            Recycle          Available             slow                     15s

$ kubectl describe pv pv0001           
Name:            pv0001
Labels:          <none>
Annotations:     <none>
Finalizers:      []
StorageClass:    slow
Status:          Available
Claim:
Reclaim Policy:  Recycle
Access Modes:    RWO
Capacity:        5Gi
Node Affinity:   <none>
Message:
Source:
    Type:      NFS (an NFS mount that lasts the lifetime of a pod)
    Server:    127.0.0.1
    Path:      /tmp
    ReadOnly:  false
Events:        <none>
```

# 