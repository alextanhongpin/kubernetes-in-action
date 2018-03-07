```
Starting local Kubernetes v1.7.0 cluster...
Starting VM...
E0307 22:49:06.931609   38542 start.go:129] Error starting host: Error loading existing host. Please try running [minikube delete], then run [minikube start] again.: Error loading host from store: open /Users/alextanhongpin/.minikube/machines/minikube/config.json: no such file or directory.

 Retrying.
E0307 22:49:06.932055   38542 start.go:135] Error starting host:  Error loading existing host. Please try running [minikube delete], then run [minikube start] again.: Error loading host from store: open /Users/alextanhongpin/.minikube/machines/minikube/config.json: no such file or directory
================================================================================
An error has occurred. Would you like to opt in to sending anonymized crash
information to minikube to help prevent future errors?
To opt out of these messages, run the command:
	minikube config set WantReportErrorPrompt false
================================================================================
Please enter your response [Y/n]:```


Solution:

```bash
$ sudo rm -rf ~/.minikube

$ sudo chown root:wheel $(brew --prefix)/opt/docker-machine-driver-xhyve/bin/docker-machine-driver-xhyve

$ sudo chmod u+s $(brew --prefix)/opt/docker-machine-driver-xhyve/bin/docker-machine-driver-xhyve

$ minikube start --vm-driver=xhyve
```