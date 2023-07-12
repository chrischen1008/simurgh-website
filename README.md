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
* Bootstrap: 畫面元件製作，需 import 官方程式
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


## .env 讀取方法
### .env : 必須REACT_APP開頭，雙引號可Optional
```
REACT_APP_TITLE=How To React
REACT_APP_DESCRIPTION=Using .env file in React js
REACT_APP_BASE_URL=http://localhost:8000/v1/products/items_img/?skip=0&limit=10
```
### js file 讀取 env參數
```process.env.REACT_APP_BASE_URL```
