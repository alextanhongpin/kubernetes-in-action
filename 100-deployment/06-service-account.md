# ServiceAccount

## Create 

```bash
$ kubectl create -f service-account.yaml
```

## Get

```bash
$ kubectl get sa call-echo -o yaml
```

Output:

```bash
apiVersion: v1
automountServiceAccountToken: false
kind: ServiceAccount
metadata:
  creationTimestamp: 2018-04-09T07:56:11Z
  name: call-echo
  namespace: default
  resourceVersion: "4430"
  selfLink: /api/v1/namespaces/default/serviceaccounts/call-echo
  uid: 784fa6ad-3bcb-11e8-92ea-0800279629e0
secrets:
- name: call-echo-token-s5pg2
```