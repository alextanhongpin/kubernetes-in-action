# Rolling back deployment

```bash
$ while true; do curl http://$(minikube ip):30675; done

$ kubectl set image deployment kubia nodejs=luksa/kubia:v3
deployment.apps "kubia" image updated

This is v3 running in pod kubia-5c7c7f5948-dsd8x
This is v2 running in pod kubia-5484585b67-b855m
This is v3 running in pod kubia-5c7c7f5948-dsd8x
This is v2 running in pod kubia-5484585b67-76zxg
This is v3 running in pod kubia-5c7c7f5948-d5svd
This is v2 running in pod kubia-5484585b67-76zxg
This is v3 running in pod kubia-5c7c7f5948-dsd8x
Some internal error has occurred! This is pod kubia-5c7c7f5948-dsd8x
This is v3 running in pod kubia-5c7c7f5948-d5svd
This is v2 running in pod kubia-5484585b67-qpd2c
This is v2 running in pod kubia-5484585b67-76zxg
This is v2 running in pod kubia-5484585b67-76zxg
Some internal error has occurred! This is pod kubia-5c7c7f5948-dsd8x
This is v2 running in pod kubia-5484585b67-76zxg
This is v2 running in pod kubia-5484585b67-qpd2c
This is v3 running in pod kubia-5c7c7f5948-d5svd
This is v3 running in pod kubia-5c7c7f5948-d5svd
This is v2 running in pod kubia-5484585b67-76zxg
Some internal error has occurred! This is pod kubia-5c7c7f5948-dsd8x
Some internal error has occurred! This is pod kubia-5c7c7f5948-d5svd

$ kubectl rollout undo deployment kubia
deployment.apps "kubia"

Some internal error has occurred! This is pod kubia-5c7c7f5948-dsd8x
This is v2 running in pod kubia-5484585b67-l7ccj
This is v2 running in pod kubia-5484585b67-qxqsh
This is v2 running in pod kubia-5484585b67-xvz82
Some internal error has occurred! This is pod kubia-5c7c7f5948-dsd8x
Some internal error has occurred! This is pod kubia-5c7c7f5948-dsd8x
Some internal error has occurred! This is pod kubia-5c7c7f5948-dsd8x
This is v2 running in pod kubia-5484585b67-qxqsh
This is v2 running in pod kubia-5484585b67-xvz82
This is v2 running in pod kubia-5484585b67-xvz82
This is v2 running in pod kubia-5484585b67-qxqsh
This is v2 running in pod kubia-5484585b67-xvz82
This is v2 running in pod kubia-5484585b67-l7ccj
This is v2 running in pod kubia-5484585b67-qxqsh
```

## Displaying a Deployment Rollout History


```bash
$ kubectl rollout history deployment kubia
REVISION  CHANGE-CAUSE
1         kubectl patch deployment kubia --patch={"spec": {"minReadySeconds": 10}}
3         kubectl set image deployment kubia nodejs=luksa/kubia:v3
4         kubectl set image deployment kubia nodejs=luksa/kubia:v2
```

## Rollout back to specific deployment version

```bash
$ kubectl rollout undo deployment kubia --to-revision=1
```