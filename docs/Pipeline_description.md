# Pipeline description

We are using [Circle CI](https://circleci.com/) as CI/CD tool. Circle CI is connected to the Github project and it is triggered after push to the master branch. Circle CI configuration is described in .circleci/config.yml file.
Flowchart below is descibing pipeline steps:

![Flowchart describing pipeline](images\pipeline.png)

What is happening inside pipeline step-by-step: 


1. Code is pushed to the repo and pipeline is triggered
2. Pipeline will preprare environment for deployment:
   - checkout of master branch
   - aws cli is setup
   - eb is setup
   - node is setup
3. Backend will be installed
4. Backend will be deployed inside AWS Elastic Beanstalk
5. Frontend will be installed, built and saved inside ./dist directory
6. ./dist directory will be send inside root folder of S3 bucket


## Pipeline Setup

Do following:

1. Connect you Github repo to Circle CI project

2. Setup evironment variables for Circle CI project:

![Flowchart describing pipeline](images\pipeline-env.png)

2. Pipeline can by used for CI/CD. Successful build in Circle CI will looks like following:

![Flowchart describing pipeline](images/pipeline-last-build.png)