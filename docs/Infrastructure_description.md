# Infrastructure description

Project is using 3 different services for deployment:
- AWS RDS
- AWS S3
- AWS Elastic Beanstalk

Storefront frontend is deployed as static web page through S3 service. Storefront Backend is deployed as AWS Elastic Beanstalk environment. Backend is pulling data from AWS RDS - Postgres - database. Whole communication flow between end user and web app is described below:

![Infrastructure diagram](images\infrastructure.png)

## AWS RDS

AWS RDS - Postgres - database contain data tables and data needed by Storefront Backend. Data are filled in by `db-migrate up` command in root directory of StorefrontBackend.

![Deployed AWS RDS](images\database.png)

### Setup

Do following steps:

- Create Postgres Database through AWS RDS service:
  ![AWS RDS sttings](images\rds-setting.png)
- Allow 0.0.0.0/0 for default security group
- Login inside Postgres deployment through psql and create 2 database for dev and test
```
$psql -h <DATABASE-NAME>.us-east-1.rds.amazonaws.com -p 5432 -U postgresdaniel postgres
$CREATE DATABASE store_test;
$CREATE DATABASE store;
```
- Database is prepared for your app deployment


## AWS S3

AWS S3 bucket is used for Storefront Frontent presentation and is configured in Static website hosting mode.

![Deployed S3 bucket](images\s3.png)

### Setup

Do following steps:

- Create new S3 bucket:
 ![AWS S3 settings](images\s3-setting.png)
- Enable CORS configuration:
![AWS S3 cors](images\s3-cors.png)
- Add IAM Policy for S3 bucket:
```
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::udacity-491528036206/*"
        }
    ]
}
```
- Enable S3 `Static website hosting` mode and setup `index.html` as entry html page
![Web hosting enabled for S3 bucket](images\s3-hosting.png)
- Your S3 bucket is prepared for deployment

## AWS Elastic Beanstalk

AWS Elastic Beanstalk is used as infrastructure for Storefront Backend.

![Deployed AWS Elastic Beanstalk](images\beanstalk.png)

### Setup

Before you will start using Circle-CI for CI/CD there is needed following configuration of Elastic Beanstalk:

- Install Elastic Beanstalk CLI
- Move to Storefront backend directory
```
cd StorefrontBackend
```
- Initilize Elastic Beanstalk environment
```
eb init
```
- Create intial Elastic Beanstalk environment
```
eb create --single --keyname dankey --instance-types t3.micro
```
- Open AWS Console, Elastic Beanstalk service and open new environment. Add  environment variables for Storefront Backend(more inside StorefrontBackend/README.md)
![AWS Elastic Beanstalk environment variables](images\beanstalk-variables.png)

- Your AWS Elastic Beanstalk is prepared for deployment.

