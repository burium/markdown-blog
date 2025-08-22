+++
title = "Amazon Q Developer - In IDE"
date = "2025-08-22"
draft = false
description = "You can use Amazon Q Developer in IDEs to learn about AWS and get development assistance. It provides guidance and support in areas such as answering AWS development questions, generating and updating code, security scanning, and optimizing code."
image = "/images/php.jpg"
imageBig = "/images/php.jpg"
categories = ["Tutorial"]
authors = ["Cude Admin"]
avatar = "/images/avatar.webp"
+++

# Amazon Q Developer - In IDE

URL: https://www.tutorialspoint.com/amazon-q/amazon_q_developer_in_ide.htm

You can use Amazon Q Developer in IDEs to learn about AWS and get development assistance. It provides guidance and support in areas such as answering AWS development questions, generating and updating code, security scanning, and optimizing code.

The following table describes the IDEs supported by Amazon Q and the availability and limitations of features in each IDE.

To set up Amazon Q Developer in your integrated development environment (IDE), complete the following steps

To get started, download the Amazon Q extension or plugin for your IDE:

To sign in and authenticate, complete the following steps:

Amazon Q is available in Visual Studio Code as an extension, JetBrains as a plugin, and the AWS Toolkit for Visual Studio.

To authenticate Amazon Q Developer in JetBrains IDEs follow the steps mentioned below:

To authenticate Amazon Q Developer in VS Code follow the steps mentioned below:

To authenticate Amazon Q Developer in VS Code follow the steps mentioned below:

You can't use IAM credentials or roles to authenticate with Amazon Q Developer in the IDE. Instead, use credentials from IAM Identity Center or Builder ID.

To get the most out of Amazon Q Developer, subscribe to Pro and use it through the extension in Visual Studio, Visual Studio Code or the plugin in JetBrains.

Start chatting with Amazon Q in your IDE by clicking the icon in JetBrains/VS Code or going to View > Amazon Q chat in Visual Studio. Then, enter your question. Amazon Q uses the current open file as context, including language and file path.

You can enter the following commands in the chat panel to access Amazon Q features, depending on your IDE.

Amazon Q provides real-time code recommendations as you write. It generates suggestions based on your existing code and comments, ranging from single line comments to fully formed functions. Simply start writing code, and Amazon Q will begin making suggestions based on your current and previous inputs.

The Amazon Q Developer Agent upgrades your code language version in place, transforming modules in JetBrains and projects/workspaces in Visual Studio Code.

Make sure that the following prerequisites are met before you begin a Code Transformation job:

To configure your project, use the following information for the IDE you're using.

In JetBrains:To configure your project in JetBrains, you might need to specify the following project and module settings.

IN VS Code:To configure your project in VS Code, your project must contain the following:

Upgrade your code project or module in the following steps:

Get started with the Agent for software development by opening a new or existing project and entering /dev in the Amazon Q chat panel. This opens a new chat tab where you can interact with the Agent to generate new code for your feature.

To work on a task with the Agent for software development in your IDE, complete the following steps.

Amazon Q helps improve code security and quality by scanning your codebase for vulnerabilities and issues. You can initiate a full scan or enable auto scans to detect issues as you code. When Amazon Q finds a problem, it provides a description and recommended fix, and sometimes even applies an automatic fix to update your code files.

The following are the types of security and quality issues Amazon Q detects.

Amazon Q Developer provides support for a wide range of programming languages across its various features and capabilities.

In terms of the quality of the training data, the programming languages with the most support are:

The Infrastructure as Code (IaC) languages with the most support are:

Amazon Q also supports code generation for:

The Amazon Q Developer Agent for code transformation supports upgrading code from Java 8 or Java 11 to Java 17.

Amazon Q security scans supports the following language versions:

Automatic code fixes are available for scans in the following languages and versions:
