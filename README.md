# Warp Speed Microservices

Label nodes with proper components, so we can stick pods with specific warp engine to specified ones.
```
kubectl label nodes <node1_ip1> component=graal
kubectl label nodes <node1_ip2> component=c2
kubectl label nodes <node1_ip3> component=native
```

## Frontend (Helm UI)

```
docker build -t <region>.ocir.io/<namespace>/warp/helm-ui ./helm-ui
```
```
docker build -t eu-frankfurt-1.ocir.io/frsxwtjslf35/warp/helm-ui ./helm-ui
```
```
docker buildx build --platform=linux/amd64 --push -t <region>.ocir.io/<namespace>/warp/helm-ui ./helm-ui
```
```
docker buildx build --platform=linux/amd64 --push -t eu-frankfurt-1.ocir.io/frsxwtjslf35/warp/helm-ui ./helm-ui
```
```
docker push <region>.ocir.io/<namespace>/warp/helm-ui
```
```
docker push eu-frankfurt-1.ocir.io/frsxwtjslf35/warp/helm-ui
```
```
kubectl apply -f ./helm-ui/helm-ui.yaml
```

## Backends (Warp Engines)

### C2 JIT

```
docker build -f warp-engine/warp-engine-c2.Dockerfile -t <region>.ocir.io/<namespace>/warp/warp-engine-c2 ./warp-engine
```
```
docker build -f warp-engine/warp-engine-c2.Dockerfile -t eu-frankfurt-1.ocir.io/frsxwtjslf35/warp/warp-engine-c2 ./warp-engine
```
```
docker buildx build -f warp-engine/warp-engine-c2.Dockerfile --platform=linux/amd64 --push -t <region>.ocir.io/<namespace>/warp/warp-engine-c2 ./warp-engine
```
```
docker buildx build -f warp-engine/warp-engine-c2.Dockerfile --platform=linux/amd64 --push -t eu-frankfurt-1.ocir.io/frsxwtjslf35/warp/warp-engine-c2 ./warp-engine
```
```
docker push <region>.ocir.io/<namespace>/warp/warp-engine-c2
```
```
docker push eu-frankfurt-1.ocir.io/frsxwtjslf35/warp/warp-engine-c2
```
```
kubectl apply -f ./warp-engine/warp-engine-c2.yaml
```

### Graal JIT

```
docker build -f warp-engine/warp-engine-graal.Dockerfile -t <region>.ocir.io/<namespace>/warp/warp-engine-graal ./warp-engine
```
```
docker build -f warp-engine/warp-engine-graal.Dockerfile -t eu-frankfurt-1.ocir.io/frsxwtjslf35/warp/warp-engine-graal ./warp-engine
```
```
docker buildx build -f warp-engine/warp-engine-graal.Dockerfile --platform=linux/amd64 --push -t <region>.ocir.io/<namespace>/warp/warp-engine-graal ./warp-engine
```
```
docker buildx build -f warp-engine/warp-engine-graal.Dockerfile --platform=linux/amd64 --push -t eu-frankfurt-1.ocir.io/frsxwtjslf35/warp/warp-engine-graal ./warp-engine
```
```
docker push <region>.ocir.io/<namespace>/warp/warp-engine-graal
```
```
docker push eu-frankfurt-1.ocir.io/frsxwtjslf35/warp/warp-engine-graal
```
```
kubectl apply -f ./warp-engine/warp-engine-graal.yaml
```