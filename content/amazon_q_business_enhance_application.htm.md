+++
title = "Amazon Q Business - Enhancing an Application"
date = "2025-08-22"
draft = false
description = "Amazon Q Business provides various enhancements in order to enhance Amazon Q Business Application environment after configuring your application environment. These enhancements can improve the overall performance and functionality of your application."
image = "/images/php.jpg"
imageBig = "/images/php.jpg"
categories = ["Tutorial"]
authors = ["Cude Admin"]
avatar = "/images/avatar.webp"
+++

# Amazon Q Business - Enhancing an Application

URL: https://www.tutorialspoint.com/amazon-q/amazon_q_business_enhance_application.htm

Amazon Q Business provides various enhancements in order to enhance Amazon Q Business Application environment after configuring your application environment. These enhancements can improve the overall performance and functionality of your application.

You can customize your Amazon Q Business application environment to fit your organization's specific needs. This means you can control how the chat experience works for your end users. You can configure guardrails or chat controls to achieve this. These controls allow you to decide what kind of chat experience you want to provide to your end users.

The following are key terms you should know to understand guardrails in Amazon Q Business:

Amazon Q Business provides global controls in order to configure settings that apply to conversations in your application environment.

The following are the global features that you can customize:

You can change how Amazon Q Business responds to unknown queries by updating application environment guardrails and adjusting Response settings.

You can customize your application environment's response to specific topics using topic-level controls. You can set up to 2 rules to define how Amazon Q Business responds when a chat message matches a special topic. This allows for fine-grained customization, such as defining global controls or limiting responses to enterprise content.

The following are the topic-level guardrails that you can customize:

To manage Amazon Q Business admin controls and guardrails, you can take the following actions:

You and your users can create custom Amazon Q Apps within your Amazon Q Business environment. These apps use your enterprise data to automate tasks and can be created easily by anyone with a single click. The key concept is that conversations with an Amazon Q Business assistant can be transformed into reusable and shareable apps.

Before using Amazon Q Apps, make sure that you do the following:

You can control whether web experience users can create and run their own Amazon Q Apps. To do this, use the feature settings in the Amazon Q Business console. You can also manage Q Apps in the console, where you can view and remove published apps from your library.

For creating Amazon Q Apps user must completed the following steps:

To update an app state to verified you can use the console; or the UpdateLibraryItem API operation. The following tabs provide a procedure for the console.

To Verify Amazon Q Apps

You can create and configure plugins to enhance your Amazon Q Business application environment. Once set up, these plugins can perform read and write actions, which can help increase end user productivity.

Amazon Q Business supports two types of plugins: built-in plugins and custom plugins.

The Amazon Q Business document enrichment feature gives you control over what documents and attributes are ingested into your index and how they're processed. This feature allows you to create, modify, or delete document attributes and content during ingestion, ensuring your index is tailored to your needs.

You can fine-tune the ranking of chat responses in Amazon Q Business by assigning weights to document attributes using the relevance tuning feature. This involves mapping document attributes to Amazon Q Business index fields and then using these weights to optimize the relevance of chat responses. By doing so, you can boost specific documents in the results, improving the accuracy of chat responses.
