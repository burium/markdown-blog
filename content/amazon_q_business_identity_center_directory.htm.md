+++
title = "Amazon Q Business - Identity Center Directory"
date = "2025-08-22"
draft = false
description = "When you first set up IAM Identity Center, it uses its own directory by default. But if your organization uses a different identity provider (like Microsoft Active Directory or Okta), you should connect that to IAM Identity Center instead."
image = "/images/php.jpg"
imageBig = "/images/php.jpg"
categories = ["Tutorial"]
authors = ["Cude Admin"]
avatar = "/images/avatar.webp"
+++

# Amazon Q Business - Identity Center Directory

URL: https://www.tutorialspoint.com/amazon-q/amazon_q_business_identity_center_directory.htm

When you first set up IAM Identity Center, it uses its own directory by default. But if your organization uses a different identity provider (like Microsoft Active Directory or Okta), you should connect that to IAM Identity Center instead.

In this tutorial, you'll use IAM Identity Center's default directory to manage users and groups. You'll set up and test user access, and users will sign in through the AWS access portal. This tutorial is for those new to AWS or already using IAM for user management. In the next steps, you will create the following:

Next, sign in and set a password for the admin user to make sure everything is set up correctly. After that, you can use this admin user to add more users, create permissions, and set up access to apps in IAM Identity Center.

The following mentioned are step by step task to set the user access with the default IAM Identity Center directory.

Firstly, sign in to the AWS Management Console. You can do either of the following for this:

Accomplish the following task to add a user:

This sends an email from Amazon Web Services with setup instructions, so add no-reply@signin.aws and no-reply@login.awsapps.com to your approved senders list to receive it.

Follow the below mentioned steps:

If you Want to make changes, ClickEdit. When everything is correct, clickAdd user. You'll see a message saying the user was added.

Next, you will add administrative permissions for the Admin team group so that Nikki has access to resources.

Accomplish the following task to add administrative permissions:

On theAssign users and groupsbrowser tab, you are still onStep 2: Select permission setsfrom which you started the create permission set workflow.

In thePermissions setsarea, choose theRefreshbutton. TheAdministratorAccesspermission set you created appears in the list. Select the check box for that permission set and then chooseNext.

Wait for the configuration process to finish. You'll be taken back to the AWS accounts page with a notification that your account has been updated.

Next, you'll testNikki'saccess by signing in to the AWS portal with their admin credentials and setting their password. Sign out of the console for now.

Now that Nikki is a user in your organization, they can access allowed resources. Let's verify this by signing in as Nikki and setting up their password. Open the email with password setup instructions sent to Nikki and follow the steps.

You are taken to the New user sign up page where you can setNikki'spassword.

Each permission set has two management methods you can use, eitherRoleorAccess keys.

You're now signed in and on the AWS Console Home page. Check the console to make sure you have the access you need.

Now that you've created an administrative user in IAM Identity Center, you can:

NoteYou can give a user multiple permission sets. To keep things secure, create a permission set with limited access and assign it to your admin user. This way, you can access your AWS account with only the permissions you need.

After users accept the invitation and sign in, they'll only see the AWS accounts, roles, and apps they have access to.

ImportantWe strongly recommend that you enable multi-factor authentication (MFA) for your users. For more information, see Multi-factor authentication for Identity Center users.
