+++
title = "Amazon Q Business - Setup"
date = "2025-08-22"
draft = false
description = "Amazon Q Business is a smart generative AIpowered assistant can be effectively used by setting up its account. To begin using Amazon Q Business for the first time, follow the steps mentioned below."
image = "/images/php.jpg"
imageBig = "/images/php.jpg"
categories = ["Tutorial"]
authors = ["Cude Admin"]
avatar = "/images/avatar.webp"
+++

# Amazon Q Business - Setup

URL: https://www.tutorialspoint.com/amazon-q/amazon_q_business_setup.htm

Amazon Q Businessis a smart generative AIpowered assistant can be effectively used by setting up its account. To begin using Amazon Q Business for the first time, follow the steps mentioned below.

If you do not have an AWS account, complete the following steps to create one.

After Sign Up Secure your main AWS account, add extra security, and create a new user for daily tasks.

You can secure your AWS account root user by following the steps mentioned below:

You can create a user with administrative access by following the steps mentioned below:

Follow the steps mentioned below to easily sign in as the user with administrative access:

Note:If your administrator sent you an email one-time password (OTP) and this is your first time signing in, enter that password. After you're signed in, you must create a new password for future sign-ins.

Note:If you don't get a verification code by email, check with your administrator for details about your verification code.

Note:After you sign in, your AWS access portal session is valid for 8 hours. You are required to sign in again after 8 hours.

You can assign access to additional users by following the steps mentioned below:

Note:After you add this group to your Identity Center directory, you can assign single sign-on access to this group.

An endpoint is a URL that starts a web service and is tied to a specific AWS Region. When using Amazon Q Business, make sure all app components, such as retrievers, indexes, and chat experiences, are created in the same Region.

For regions and endpoints supported by Amazon Q Business, see Service quotas for Amazon Q Business.

When you use Amazon Q Business through the AWS Management Console, it automatically adds the necessary permissions for you.

To use Amazon Q Business with the AWS CLI or SDK as an IAM user, you need to give it the necessary permissions so it can create and manage resources for you.

If you're using a customer managed key, add the following permissions:

If you're using IAM Identity Center, add the following permissions:

To allow Amazon Q to assign user subscriptions, use the following role policy:
