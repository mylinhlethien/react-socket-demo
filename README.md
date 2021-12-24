# IBM Voicebot insurance advisor project: frontend application

This application is the frontend and user interface of the [Augmented call center project](https://github.com/My-Linh-Le-Thien/crm-webapp-demo).

---
# Requirements

For development, you will only need Node.js and a node global package, npm, installed in your environment.

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v8.11.3

    $ npm --version
    6.1.0

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g

---
## Local installation

    To deploy and run the app locally

    $ git clone https://github.com/My-Linh-Le-Thien/react-socket-demo
    $ cd react-socket

### Configure app

Line 13 from [Home.js file](src/components/Home.js), set the URL of your backend application. <br/>
If you run your app locally, it is **http://localhost:8080**.<br/>
If you deploy your application on a Kubernetes cluster, it is the URL of the application.

---
## Run app locally

    $ npm start

The application should be running on port 3000.
To try it, you can call your voicebot via your Twilio phone number and the conversation should display in the console.

To run the backend application, please refer to the [voiceagent-api application](https://github.com/My-Linh-Le-Thien/voiceagent-api-demo).

---
## IBM Cloud Kubernetes deployment

Follow these instructions to deploy the applications to a Kubernetes cluster.

## Build Docker Image

1. Find your container registry **namespace** by running `ibmcloud cr namespaces`. If you don't have any, create one using `ibmcloud cr namespace-add <name>`

2. Identify your **Container Registry** by running `ibmcloud cr info` (Ex: registry.ng.bluemix.net)

3. Build and tag (`-t`)the docker image by running the command below replacing REGISTRY and NAMESPACE with he appropriate values.

   ```sh
   docker build -t <REGISTRY>/<NAMESPACE>/react-socket:latest .
   ```
   Example: `docker build -t registry.ng.bluemix.net/mynamespace/react-socket:latest .`

4. Push the docker image to your Container Registry on IBM Cloud

   ```sh
   docker push <REGISTRY>/<NAMESPACE>/react-socket:latest
   ```

5. Verify the image is in the container registry

    $ ibmcloud cr image-list

## Deploy to a Kubernetes cluster

#### Create a Kubernetes cluster

1. [Creating a Kubernetes cluster in IBM Cloud](https://console.bluemix.net/docs/containers/container_index.html#clusters).
2. Follow the instructions in the Access tab to set up your `kubectl` cli.

#### Create the deployment

1. Replace `<REGISTRY>` and `<NAMESPACE>` with the appropriate values in `deployment.yaml`
2. Create a deployment:
  ```shell
  kubectl apply -f deployment.yaml
  ```

### Access the application

Verify **STATUS** of pod is `RUNNING`

```shell
kubectl get pods
```

Verify the logs of the application

```shell
kubectl logs <POD-ID>
```

**Standard (Paid) Cluster:**

1. Identify your LoadBalancer Ingress IP using `kubectl get service voiceagent-api-service`
2. Access your application at t `http://<EXTERNAL-IP>:<NODE-PORT>/`

**Free Cluster:**

1. Identify your Worker Public IP using `ibmcloud cs workers YOUR_CLUSTER_NAME`
2. Identify the Node Port using `kubectl describe service voiceagent-api-service`
3. Access your application at `http://<WORKER-PUBLIC-IP>:<NODE-PORT>/`
