# Deploying EHDG (locally)

You can deploy EHDG using containers. It's simpler than you think.

## Prerequisites:

[Visual Studio Code](https://code.visualstudio.com/Download), [Docker](https://hub.docker.com/) and finally the [Docker extension](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker) for Visual Studio Code. 

## Visual Studio

Once you have these installed, create a new Visual Studio Code project. Ensure you can see the Docker icon on the left hand sidebar (if you cannot see this, you have not installed the Docker extension and cannot proceed further). You can either press ctrl+shift+p and search for Docker: Pull or go to the terminal at the bottom centre of the screen and type in the following: "docker pull jalaluddin7/fakerapp:v1". This will download the docker image we need for the deployment. Now all that is left for you to do is press ctrl+shift+p, type "Docker: Run" and go through the dialog steps to select the image we want to deploy as a container.  

## Browser

Once you have successfully deployed the image as a container, go to localhost:3000 or in Visual Studio Code right click on the container name jalaluddin7/name and click "Open in Browser". Ta-da! Event Hub Data Generator should be running locally on your machine.

