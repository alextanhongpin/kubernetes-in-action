# Roles and RoleBindings

# Creating a role

```bash
$ kubectl create -f service-reader.yaml
role.rbac.authorization.k8s.io "service-reader" created
```

You can also create it from the CLI:

```bash
$ kubectl create role service-reader --verb=get --verb=list --resource=services -n bar
```

## Binding role

```bash
$ kubectl create rolebinding test --role=service-reader --serviceaccount=foo:default -n foo
```

## Verify Role Binding

```bash
$ kubectl get rolebinding test -n foo -o yaml
apiVersion: rbac.authorization.k8s.io/v1
kind: RoleBinding
metadata:
  creationTimestamp: 2018-04-08T14:29:04Z
  name: test
  namespace: foo
  resourceVersion: "5687"
  selfLink: /apis/rbac.authorization.k8s.io/v1/namespaces/foo/rolebindings/test
  uid: 3078d119-3b39-11e8-9d1e-080027dde860
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: Role
  name: service-reader
subjects:
- kind: ServiceAccount
  name: default
  namespace: foo
```

## Call

```bash
# curl localhost:8001/api/v1/namespaces/foo/services
{
  "kind": "ServiceList",
  "apiVersion": "v1",
  "metadata": {
    "selfLink": "/api/v1/namespaces/foo/services",
    "resourceVersion": "5932"
  },
  "items": []
}/
```