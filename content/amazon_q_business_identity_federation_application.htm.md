+++
title = "Amazon Q Business - Identity Federation Application"
date = "2025-08-22"
draft = false
description = "Amazon Q Business connects with your company's identity system for user management and authentication through AWS Identity and Access Management. This chapter will provide brief knowledge about creating and configuring an Amazon Q Business application using IAM Federation to manage end user access."
image = "/images/php.jpg"
imageBig = "/images/php.jpg"
categories = ["Tutorial"]
authors = ["Cude Admin"]
avatar = "/images/avatar.webp"
+++

# Amazon Q Business - Identity Federation Application

URL: https://www.tutorialspoint.com/amazon-q/amazon_q_business_identity_federation_application.htm

Amazon Q Business connects with your company's identity system for user management and authentication through AWS Identity and Access Management. This chapter will provide brief knowledge about creating and configuring an Amazon Q Business application using IAM Federation to manage end user access.

The following steps show how to integrate Amazon Q Business with Okta:

Before you start to integrate Amazon Q Business with Okta, make sure that you have:

To create an Okta instance follow the steps mentioned below:

Custom app endpoint URL format: [your URL]/saml (e.g.http://localhost:8000/saml)

Generated web experience endpoint URL format: [your URL]/saml (e.g.https://abcdefgh.qbusiness.us-east-1.on.aws/saml)

Custom app endpoint URL format: [your URL]/saml (e.g.http://localhost:8000/saml)

Generated web experience endpoint URL format: [your URL]/saml (e.g.https://abcdefgh.qbusiness.us-east-1.on.aws/saml)

Generated web experience endpoint URL format: Enter a placeholder URL (e.g.http://sampleurl.com) for now, to be updated at the end of the Amazon Q Business application creation process.

To connect Okta to AWS Identity and Access Management, follow the steps mentioned below:

In this steps we are Configuring the trust relationship between AWS IAM and Okta.

To create an application using concole follow the steps mentioned below:

To create an Amazon Q Business retriever using console follow the steps mentioned below:

To create an Amazon Kendra retriever using console follow the steps mentioned below:

Choose a retriever for your Amazon Q Business app, then connect data sources to it. The available data sources depend on the retriever you pick.

If you use an Amazon Q Business retriever, you can choose from the following options:

To manage user acess, follow the steps mentioned below:

To customize an Amazon Q Business web experience you need to follow the steps mentioned below:

You can connect multiple Amazon Q Business custom applications to a single SAML 2.0 or OIDC based identity provider (IdP) application.

To connect multiple Amazon Q Business custom applications to Okta using SAML follow the steps mentioned below:

To connect multiple Amazon Q Business custom applications to Okta using OIDC follow the steps mentioned below:

Complete the steps mentioned below to create an IAM federated applications using APIs

Before you begin setting up for making Sig V4 authenticated API calls, make sure you've done the following:

The following section outlines the steps to set up the Amazon Q Business control plane. You only need to perform these steps once.

Next, create the IAM policy for your web experience. To do so, perform the following steps:

In the policies directory, create and save a new file named permspolicyforfederation.json with the following JSON included:

First, use the IdToken from Okta to call the AssumeRoleWithWebIdentity API to get AWS credentials. To do so, use the following command:

Then, set the following environment variables in your command line environment using the credentials you received as a response from the AssumeRoleWithWebIdentity API call.

Then, make Amazon Q Business API calls using the following command:
