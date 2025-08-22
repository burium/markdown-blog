+++
title = "Amazon Q Developer - Customization"
date = "2025-08-22"
draft = false
description = "An Amazon Q customization is a set of elements that allows Amazon Q to provide suggestions based on your company's codebase. You connect a data source with your codebase, and Amazon Q uses this content to offer assistance tailored to your organization's development style."
image = "/images/php.jpg"
imageBig = "/images/php.jpg"
categories = ["Tutorial"]
authors = ["Cude Admin"]
avatar = "/images/avatar.webp"
+++

# Amazon Q Developer - Customization

URL: https://www.tutorialspoint.com/amazon-q/amazon_q_developer_customizations.htm

An Amazon Q customization is a set of elements that allows Amazon Q to provide suggestions based on your company's codebase. You connect a data source with your codebase, and Amazon Q uses this content to offer assistance tailored to your organization's development style.

To use Amazon Q customizations, follow the Amazon Q Developer Pro setup process, including adding users to your profile who need access to customizations.

To use Amazon Q Customizations, your Amazon Q administrator needs access to your codebase, stored on Amazon S3 or through AWS CodeConnections. However, during the standard Amazon Q Developer Pro setup process, your AWS Organizations administrator does not grant access to these services.

Therefore, before you use Amazon Q Customizations, you must add the following permissions to your Amazon Q administrator's role:

The following is the key concepts to keep in mind when preparing your data source for Amazon Q Customizations:

To enable customization in chat, use the following procedure.

To create your customization, follow this procedure:

To connect to your data source through CodeConnections, follow this procedure:

To connect to your data source through Amazon S3, follow this procedure:

You can troubleshoot the following errors in the ways mentioned below:

To delete your customization, follow this procedure:

To evaluate your customizations follow the steps mentioned below:

To optimize your customizations follow the steps mentioned below:

Amazon Q can provide you with log files that will help you understand and troubleshoot issues with your customization.

To set up log delivery, select the Log deliveries tab on the console page for your customization. Follow the instructions in the interface to configure your log deliveries. Then chooseCreate log deliveries.

The prefix of logs delivered to an Amazon S3 bucket will be:AWSLogs/account_id/codeWhispererCustomizationLogs/region/customization_id/year/month/day/hour/

The files will be zipped, with the naming format:account_id_codeWhispererCustomizationLogs_customization_id_date_file_id.log.gz

The following table lists log messages that may help you understand issues with your customization.

The following table will help you understand customization-related messages in the Amazon Q console.

To activate a version of your customization, follow this procedure:

To create a new version of your customization, follow this procedure:

To add users and groups to your Amazon Q customizations, follow the steps mentioned below:

To use customizations with VS Code, follow the steps mentioned below:

To use customizations with JetBrains, follow the steps mentioned below:
