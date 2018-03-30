# Creating a Deployment

## Create 

```bash
# --record records the command line in the revision history
$ kubectl create -f kubia-deployment-v1.yml --record
deployment.apps "kubia" created
```

## Displaying the status of the deployment rollout

```bash
$ kubectl rollout status deployment kubia
deployment "kubia" successfully rolled out
```

## View the pods

```bash
$ kubectl get po
NAME                     READY     STATUS    RESTARTS   AGE
kubia-776bffb49d-4bt5w   1/1       Running   0          1m
kubia-776bffb49d-7bmrb   1/1       Running   0          1m
kubia-776bffb49d-ncbfb   1/1       Running   0          1m
```

## View ReplicaSets

```bash
$ kubectl get rs
NAME               DESIRED   CURRENT   READY     AGE
kubia-776bffb49d   3         3         3         1m
```

## Updating the deployment

Slowing down deployment to view the rolling update taking effect:

```bash
$ kubectl patch deployment kubia -p '{"spec": {"minReadySeconds": 10}}'
deployment.extensions "kubia" patched
```

Triggering the rolling update:

```bash
# Get IP of svc, at the PORT column
$ kubectl get svc

# Simulate real traffic
$ while true; do curl http://$(minikube ip):30675; done

# Perform rolling update
$ kubectl set image deployment kubia nodejs=luksa/kubia:v2
deployment.apps "kubia" image updated


This is v1 running in pod kubia-776bffb49d-ncbfb
This is v1 running in pod kubia-776bffb49d-4bt5w
This is v1 running in pod kubia-776bffb49d-ncbfb
This is v1 running in pod kubia-776bffb49d-ncbfb
This is v1 running in pod kubia-776bffb49d-ncbfb
This is v1 running in pod kubia-776bffb49d-4bt5w
This is v1 running in pod kubia-776bffb49d-7bmrb
This is v1 running in pod kubia-776bffb49d-ncbfb
This is v1 running in pod kubia-776bffb49d-7bmrb
This is v1 running in pod kubia-776bffb49d-ncbfb
This is v1 running in pod kubia-776bffb49d-ncbfb
This is v1 running in pod kubia-776bffb49d-7bmrb
This is v1 running in pod kubia-776bffb49d-4bt5w
This is v1 running in pod kubia-776bffb49d-4bt5w
This is v1 running in pod kubia-776bffb49d-7bmrb
This is v1 running in pod kubia-776bffb49d-ncbfb
This is v1 running in pod kubia-776bffb49d-4bt5w
This is v1 running in pod kubia-776bffb49d-ncbfb
This is v1 running in pod kubia-776bffb49d-7bmrb
This is v1 running in pod kubia-776bffb49d-4bt5w
This is v1 running in pod kubia-776bffb49d-ncbfb
This is v1 running in pod kubia-776bffb49d-ncbfb
This is v1 running in pod kubia-776bffb49d-ncbfb
This is v1 running in pod kubia-776bffb49d-ncbfb
This is v1 running in pod kubia-776bffb49d-ncbfb
This is v1 running in pod kubia-776bffb49d-4bt5w
This is v1 running in pod kubia-776bffb49d-4bt5w
This is v1 running in pod kubia-776bffb49d-4bt5w
This is v1 running in pod kubia-776bffb49d-7bmrb
This is v1 running in pod kubia-776bffb49d-4bt5w
This is v1 running in pod kubia-776bffb49d-7bmrb
This is v1 running in pod kubia-776bffb49d-7bmrb
This is v1 running in pod kubia-776bffb49d-7bmrb
This is v1 running in pod kubia-776bffb49d-4bt5w
This is v1 running in pod kubia-776bffb49d-4bt5w
This is v1 running in pod kubia-776bffb49d-4bt5w
This is v1 running in pod kubia-776bffb49d-7bmrb
This is v1 running in pod kubia-776bffb49d-ncbfb
This is v1 running in pod kubia-776bffb49d-ncbfb
This is v1 running in pod kubia-776bffb49d-ncbfb
This is v1 running in pod kubia-776bffb49d-4bt5w
This is v1 running in pod kubia-776bffb49d-4bt5w
This is v1 running in pod kubia-776bffb49d-4bt5w
This is v1 running in pod kubia-776bffb49d-ncbfb
This is v1 running in pod kubia-776bffb49d-7bmrb
This is v1 running in pod kubia-776bffb49d-ncbfb
This is v1 running in pod kubia-776bffb49d-7bmrb
This is v1 running in pod kubia-776bffb49d-7bmrb
This is v1 running in pod kubia-776bffb49d-7bmrb
This is v1 running in pod kubia-776bffb49d-4bt5w
This is v1 running in pod kubia-776bffb49d-ncbfb
This is v1 running in pod kubia-776bffb49d-7bmrb
This is v1 running in pod kubia-776bffb49d-ncbfb
This is v1 running in pod kubia-776bffb49d-ncbfb
This is v1 running in pod kubia-776bffb49d-7bmrb
This is v1 running in pod kubia-776bffb49d-4bt5w
This is v1 running in pod kubia-776bffb49d-ncbfb
This is v1 running in pod kubia-776bffb49d-4bt5w
This is v1 running in pod kubia-776bffb49d-4bt5w
This is v1 running in pod kubia-776bffb49d-7bmrb
This is v1 running in pod kubia-776bffb49d-7bmrb
This is v2 running in pod kubia-5484585b67-76zxg
This is v1 running in pod kubia-776bffb49d-7bmrb
This is v1 running in pod kubia-776bffb49d-4bt5w
This is v1 running in pod kubia-776bffb49d-4bt5w
This is v1 running in pod kubia-776bffb49d-ncbfb
This is v1 running in pod kubia-776bffb49d-4bt5w
This is v2 running in pod kubia-5484585b67-76zxg
This is v2 running in pod kubia-5484585b67-76zxg
This is v1 running in pod kubia-776bffb49d-7bmrb
This is v1 running in pod kubia-776bffb49d-7bmrb
This is v1 running in pod kubia-776bffb49d-4bt5w
This is v1 running in pod kubia-776bffb49d-4bt5w
This is v1 running in pod kubia-776bffb49d-7bmrb
This is v1 running in pod kubia-776bffb49d-ncbfb
This is v1 running in pod kubia-776bffb49d-4bt5w
This is v1 running in pod kubia-776bffb49d-4bt5w
This is v2 running in pod kubia-5484585b67-76zxg
This is v1 running in pod kubia-776bffb49d-4bt5w
This is v1 running in pod kubia-776bffb49d-7bmrb
This is v1 running in pod kubia-776bffb49d-4bt5w
This is v2 running in pod kubia-5484585b67-76zxg
This is v2 running in pod kubia-5484585b67-76zxg
This is v1 running in pod kubia-776bffb49d-4bt5w
This is v2 running in pod kubia-5484585b67-qpd2c
This is v2 running in pod kubia-5484585b67-76zxg
This is v1 running in pod kubia-776bffb49d-7bmrb
This is v2 running in pod kubia-5484585b67-76zxg
This is v2 running in pod kubia-5484585b67-qpd2c
This is v1 running in pod kubia-776bffb49d-4bt5w
This is v2 running in pod kubia-5484585b67-76zxg
This is v2 running in pod kubia-5484585b67-76zxg
This is v1 running in pod kubia-776bffb49d-4bt5w
This is v2 running in pod kubia-5484585b67-76zxg
This is v1 running in pod kubia-776bffb49d-7bmrb
This is v1 running in pod kubia-776bffb49d-4bt5w
This is v1 running in pod kubia-776bffb49d-7bmrb
This is v2 running in pod kubia-5484585b67-qpd2c
This is v1 running in pod kubia-776bffb49d-7bmrb
This is v2 running in pod kubia-5484585b67-qpd2c
This is v2 running in pod kubia-5484585b67-76zxg
This is v2 running in pod kubia-5484585b67-b855m
This is v1 running in pod kubia-776bffb49d-7bmrb
This is v2 running in pod kubia-5484585b67-b855m
This is v2 running in pod kubia-5484585b67-76zxg
This is v2 running in pod kubia-5484585b67-b855m
This is v2 running in pod kubia-5484585b67-b855m
This is v2 running in pod kubia-5484585b67-qpd2c
This is v2 running in pod kubia-5484585b67-76zxg
This is v2 running in pod kubia-5484585b67-qpd2c
This is v1 running in pod kubia-776bffb49d-7bmrb
This is v2 running in pod kubia-5484585b67-76zxg
This is v1 running in pod kubia-776bffb49d-7bmrb
This is v2 running in pod kubia-5484585b67-76zxg
This is v1 running in pod kubia-776bffb49d-7bmrb
This is v2 running in pod kubia-5484585b67-b855m
This is v2 running in pod kubia-5484585b67-qpd2c
This is v2 running in pod kubia-5484585b67-b855m
This is v2 running in pod kubia-5484585b67-76zxg
This is v2 running in pod kubia-5484585b67-qpd2c
This is v2 running in pod kubia-5484585b67-b855m
This is v2 running in pod kubia-5484585b67-qpd2c
This is v2 running in pod kubia-5484585b67-b855m
This is v2 running in pod kubia-5484585b67-qpd2c
This is v2 running in pod kubia-5484585b67-b855m
This is v2 running in pod kubia-5484585b67-76zxg
This is v2 running in pod kubia-5484585b67-qpd2c
This is v2 running in pod kubia-5484585b67-76zxg
This is v2 running in pod kubia-5484585b67-b855m
This is v2 running in pod kubia-5484585b67-b855m
This is v2 running in pod kubia-5484585b67-76zxg
This is v2 running in pod kubia-5484585b67-b855m
This is v2 running in pod kubia-5484585b67-76zxg
This is v2 running in pod kubia-5484585b67-qpd2c
This is v2 running in pod kubia-5484585b67-76zxg
This is v2 running in pod kubia-5484585b67-76zxg
This is v2 running in pod kubia-5484585b67-qpd2c
This is v2 running in pod kubia-5484585b67-b855m
This is v2 running in pod kubia-5484585b67-qpd2c
This is v2 running in pod kubia-5484585b67-qpd2c
This is v2 running in pod kubia-5484585b67-76zxg
This is v2 running in pod kubia-5484585b67-b855m
This is v2 running in pod kubia-5484585b67-76zxg
This is v2 running in pod kubia-5484585b67-qpd2c
This is v2 running in pod kubia-5484585b67-b855m
This is v2 running in pod kubia-5484585b67-qpd2c
This is v2 running in pod kubia-5484585b67-b855m
This is v2 running in pod kubia-5484585b67-qpd2c
This is v2 running in pod kubia-5484585b67-qpd2c
This is v2 running in pod kubia-5484585b67-76zxg
This is v2 running in pod kubia-5484585b67-b855m
This is v2 running in pod kubia-5484585b67-b855m
This is v2 running in pod kubia-5484585b67-qpd2c
This is v2 running in pod kubia-5484585b67-b855m
This is v2 running in pod kubia-5484585b67-b855m
This is v2 running in pod kubia-5484585b67-76zxg
This is v2 running in pod kubia-5484585b67-76zxg
This is v2 running in pod kubia-5484585b67-qpd2c
This is v2 running in pod kubia-5484585b67-76zxg
This is v2 running in pod kubia-5484585b67-b855m
This is v2 running in pod kubia-5484585b67-b855m
This is v2 running in pod kubia-5484585b67-b855m
This is v2 running in pod kubia-5484585b67-b855m
This is v2 running in pod kubia-5484585b67-76zxg
This is v2 running in pod kubia-5484585b67-qpd2c
This is v2 running in pod kubia-5484585b67-76zxg
This is v2 running in pod kubia-5484585b67-qpd2c
This is v2 running in pod kubia-5484585b67-qpd2c
This is v2 running in pod kubia-5484585b67-b855m
This is v2 running in pod kubia-5484585b67-b855m
This is v2 running in pod kubia-5484585b67-qpd2c
This is v2 running in pod kubia-5484585b67-76zxg
This is v2 running in pod kubia-5484585b67-b855m
This is v2 running in pod kubia-5484585b67-qpd2c
This is v2 running in pod kubia-5484585b67-b855m
This is v2 running in pod kubia-5484585b67-b855m
This is v2 running in pod kubia-5484585b67-76zxg
This is v2 running in pod kubia-5484585b67-76zxg
This is v2 running in pod kubia-5484585b67-qpd2c
This is v2 running in pod kubia-5484585b67-76zxg
This is v2 running in pod kubia-5484585b67-76zxg
```