+++
title = "Amazon Q Developer - Security"
date = "2025-08-22"
draft = false
description = "Cloud security at AWS is the highest priority and Security is a shared responsibility between AWS and you."
image = "/images/php.jpg"
imageBig = "/images/php.jpg"
categories = ["Tutorial"]
authors = ["Cude Admin"]
avatar = "/images/avatar.webp"
+++

# Amazon Q Developer - Security

URL: https://www.tutorialspoint.com/amazon-q/amazon_q_developer_security.htm

Cloud security at AWS is the highest priority and Security is a shared responsibility between AWS and you.

In this chapter we are going to learn how to configure Amazon Q Developer to meet your security and compliance objectives and also You'll learn to use AWS services to monitor and secure your Amazon Q Business resources.

Secure your AWS account by protecting credentials and setting up individual users with IAM Identity Center or IAM. Following are the way to secure your data:

IAM Identity and Access Management is an AWS service that securely controls access to AWS resources, managing authentication and authorization, at no additional cost.

AWS compliance depends on data sensitivity, company objectives, and laws. AWS provides the following resources to help with compliance:

AWS has a global infrastructure with Regions and Availability Zones. These zones are separate, connected, and redundant, allowing you to build highly available, fault-tolerant, and scalable applications that can automatically switch between zones without downtime.

Amazon Q Business is protected by the AWS global network security procedures. You use AWS published API calls to access Amazon Q Business through the network. Clients must support the following:

Interface endpoints are AWS PrivateLink to access Amazon Q Business APIs privately, without an internet gateway, NAT, VPN, or Direct Connect. No public IP addresses needed.

You can create an interface endpoint for Amazon Q Business using either the Amazon VPC console or the AWS Command Line Interface (AWS CLI).

Create an interface endpoint for Amazon Q Business using the following service name:

A VPC endpoint is a DNS name generated when creating an interface endpoint, in the formatq.us-east-1.amazonaws.com.
