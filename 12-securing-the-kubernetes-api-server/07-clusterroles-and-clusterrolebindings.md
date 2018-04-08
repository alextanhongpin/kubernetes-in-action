# ClusterRoles and ClusterRoleBindings


## Get ClusterRoles

```bash
NAME                                                                   AGE
admin                                                                  7d
cluster-admin                                                          7d
cluster-reader                                                         7d
cluster-writer                                                         7d
conduit-controller                                                     7d
conduit-prometheus                                                     7d
edit                                                                   7d
pv-reader                                                              28m
system:aggregate-to-admin                                              7d
system:aggregate-to-edit                                               7d
system:aggregate-to-view                                               7d
system:auth-delegator                                                  7d
system:aws-cloud-provider                                              7d
system:basic-user                                                      7d
system:certificates.k8s.io:certificatesigningrequests:nodeclient       7d
system:certificates.k8s.io:certificatesigningrequests:selfnodeclient   7d
system:controller:attachdetach-controller                              7d
system:controller:certificate-controller                               7d
system:controller:clusterrole-aggregation-controller                   7d
system:controller:cronjob-controller                                   7d
system:controller:daemon-set-controller                                7d
system:controller:deployment-controller                                7d
system:controller:disruption-controller                                7d
system:controller:endpoint-controller                                  7d
system:controller:generic-garbage-collector                            7d
system:controller:horizontal-pod-autoscaler                            7d
system:controller:job-controller                                       7d
system:controller:namespace-controller                                 7d
system:controller:node-controller                                      7d
system:controller:persistent-volume-binder                             7d
system:controller:pod-garbage-collector                                7d
system:controller:replicaset-controller                                7d
system:controller:replication-controller                               7d
system:controller:resourcequota-controller                             7d
system:controller:route-controller                                     7d
system:controller:service-account-controller                           7d
system:controller:service-controller                                   7d
system:controller:statefulset-controller                               7d
system:controller:ttl-controller                                       7d
system:discovery                                                       7d
system:heapster                                                        7d
system:kube-aggregator                                                 7d
system:kube-controller-manager                                         7d
system:kube-dns                                                        7d
system:kube-scheduler                                                  7d
system:node                                                            7d
system:node-bootstrapper                                               7d
system:node-problem-detector                                           7d
system:node-proxier                                                    7d
system:persistent-volume-provisioner                                   7d
view                                                                   7d
```

## Get ClusterRoleBindings

```bash
$ kubectl get clusterrolebindings
NAME                                                   AGE
cluster-admin                                          7d
cluster-read                                           7d
cluster-write                                          7d
conduit-controller                                     7d
conduit-prometheus                                     7d
pv-test                                                20m
system:aws-cloud-provider                              7d
system:basic-user                                      7d
system:controller:attachdetach-controller              7d
system:controller:certificate-controller               7d
system:controller:clusterrole-aggregation-controller   7d
system:controller:cronjob-controller                   7d
system:controller:daemon-set-controller                7d
system:controller:deployment-controller                7d
system:controller:disruption-controller                7d
system:controller:endpoint-controller                  7d
system:controller:generic-garbage-collector            7d
system:controller:horizontal-pod-autoscaler            7d
system:controller:job-controller                       7d
system:controller:namespace-controller                 7d
system:controller:node-controller                      7d
system:controller:persistent-volume-binder             7d
system:controller:pod-garbage-collector                7d
system:controller:replicaset-controller                7d
system:controller:replication-controller               7d
system:controller:resourcequota-controller             7d
system:controller:route-controller                     7d
system:controller:service-account-controller           7d
system:controller:service-controller                   7d
system:controller:statefulset-controller               7d
system:controller:ttl-controller                       7d
system:discovery                                       7d
system:kube-controller-manager                         7d
system:kube-dns                                        7d
system:kube-scheduler                                  7d
system:node                                            7d
system:node-proxier                                    7d
```