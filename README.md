# 官網前端畫面(使用React JS)

## 安裝環境與套件
```
npm install -g create-react-app
create-react-app simurgh-v1

npm install axios
npm install bootstrap
npm start
```

### 說明
* Axios: Call API進行CRUD操作
* Bootstrao: 畫面元件製作，需 import 官方程式
```
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min"; 
```



### Docker
```
# Build the Docker image for the current folder 
# and tag it with `dockerized-react`
docker build . -t dockerized-react01


# Run the image in detached mode 
# and map port 3000 inside the container with 3000 on current host
docker run -p 3000:3000 -d dockerized-react01
```

### Cloud Run
```
gcloud builds submit --tag asia.gcr.io/abstract-arbor-392000/container_web

gcloud run deploy --image asia.gcr.io/abstract-arbor-392000/container_web --platform managed --port=3000
```