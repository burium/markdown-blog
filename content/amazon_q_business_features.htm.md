+++
title = "Amazon Q Business - Features"
date = "2025-08-22"
draft = false
description = "Amazon Q Business is most capable generative AIpowered assistant that comes with additional features enhancing user experience and performing tasks like summarization, Q&A, or data analysis."
image = "/images/php.jpg"
imageBig = "/images/php.jpg"
categories = ["Tutorial"]
authors = ["Cude Admin"]
avatar = "/images/avatar.webp"
+++

# Amazon Q Business - Features

URL: https://www.tutorialspoint.com/amazon-q/amazon_q_business_features.htm

Amazon Q Business is most capable generative AIpowered assistant that comes with additional features enhancing user experience and performing tasks like summarization, Q&A, or data analysis.

In addition to enhancements, Amazon Q Business offers the following features:

Amazon Q Business offers a filtering feature that lets you customize and control chat responses using document attributes, such as data source type, when using the API. This feature allows you to specify which data sources to use for generating chat responses, giving you more control over the output.

Additionally, you can also allow end users to restrict the scope of chat responses using attribute filters, enabling them to choose which data sources to use for their chat responses.

Filtering chat responses using metadata has the following key benefits:

Amazon Q Business provides source citations in chat responses when it uses the organization's data sources and knowledge base. This includes in-text citations and a list of all sources used to generate the response.

In-text citations are shown as numbers at the end of a sentence. To view an in-text source citation, choose a citation number. Each citation provides the following attributes:

Sources used to generate the response are provided at the end of the response. Each source listed provides the following attributes:

Users can upload documents to Amazon Q Business web experience, even if they're not in your organization's data sources. They can ask questions and analyze data based on the uploaded documents, but the documents are only available for that conversation and aren't stored.

You can upload up to 5 files at a time. Each file must be 10 MB or smaller. The total content of all files together can't exceed 105,000 characters. Amazon Q Business supports specific document types for upload. If youre uploading Comma Separated Values (CSV) or Microsoft Excel (XLS and XLSX) documents into chat, Amazon Q Business performs best for tables with approximately 4 columns and 10 rows.

Amazon Q Business can provide personalized chat responses to end users by using their information stored in IAM Identity Center. This allows Amazon Q Business to customize responses based on the user's address, job title, and other details. For instance, if a user asks about company holidays, Amazon Q Business will provide region-specific holidays based on their location.

For response personalization to work, you must add Address information and Job related information for users in the IAM Identity Center instance you connect to your Amazon Q Business application.

Any user personalization data in your IAM Identity Center instance will be connected to your Amazon Q Business application environment and responses personalized by default. You can choose to deactivate response personalization at any time using the Admin controls and guardrails feature in Amazon Q Business.

The Amazon Q Business web experience welcome page provides sample prompts to help end users understand the types of questions and tasks they can ask in the web experience. These sample prompts are not enabled by default . However, if you are an AWS Management Console customer, you can enable them when you preview the web experience.
