+++
title = "Amazon Q Business - Key Concepts"
date = "2025-08-22"
draft = false
description = "Amazon Q Business contains list of key concepts which we are going to cover in this chapter and will understand more terminologies related to Amazon Q Business.
"
image = "/images/php.jpg"
imageBig = "/images/php.jpg"
categories = ["Tutorial"]
authors = ["Cude Admin"]
avatar = "/images/avatar.webp"
+++

# Amazon Q Business - Key Concepts

URL: https://www.tutorialspoint.com/amazon-q/amazon_q_business_key_concepts.htm

Amazon Q Business contains list of key conceptswhich we are going to cover in this chapter and will understand more terminologies related to Amazon Q Business.

Below listed kwy concepts of Amazon Q Business will help you to understand the purpose of Amazon Q Business in depth.

Retrieval Augmented Generation (RAG) is a natural language processing (NLP) technique. Using RAG, generative artificial intelligence (generative AI) generates content based on the specific documents that has been retrieved from a dataset. Amazon Q Business has a built-in RAG system. A RAG model has the following two components:

Large language model is a machine learning model and language based model. It is made by using a huge amount of data and information, and it's trained on a massive collection of documents and texts.

Retriever is a tool that retrieves data related to your need from a large dataset. Amazon Q Business has two types of retrievers 'native index retriever' one that uses its library and 'Amazon Kendra index retriever' that uses a special library called Amazon Kendra.

An index is a collection of documents. Amazon Q Business has its own index which allows users to add ans sync their documents. Amazon Q Business creates index for your document when it creates your Amazon Q Business native retriever.Amazon Q Business provides two types of index: Enterprise and Starter.

Data source is a place from where data comes from. It is the initial place from where data has been originated. A data source can be a database, file, API, etc that holds data, facts, and details and provides access to that data.

Data source connector is a connecting tool that connect your data with Amazon Q Business. It helps to automatically collect and update data, minimizing the need to configuring data manually. Amazon Q Business works with many different connectors, making it easy to use with AI project.

IAM Identity Center allows us to manage user access in our Amazon Q Business Application. IAM Identity Center act as our AWS gateway helps to connect to the identity provider you trust.

Amazon Q Business supports identity federation through AWS Identity and Access Management. Identity Federation helps you to manage users with your enterprise identity provider (IdP) and use AWS Identity and Access Management to authenticate users when they sign in to AWS Identity and Access Management.

Identity Provider stores and manages user identities, making sure they are correct and up-to-date. An identity provider (IdP) is a service that stores, manages, maintains, and verifies user identities for your application environment. Some examples of IdPs are IAM Identity Center, Okta, and Microsoft EntraID (formerly Azure Active Directory).

In Amazon Q Business, a document is like a single piece of information. Specific document formats supported include .csv, .docx, HTML, JSON, .pdf, plaintext, .ppt, .pptx, .rtf, and .xslx.

In Amazon Q Business, Application environment is the main resource that helps you to create your chat solution.  To create application environment, you have two options:  you can use the Amazon Q Business console or Amazon Q Business API actions.

An Amazon Q Business web experience is a chat interface that you build using your Amazon Q Business application. This chat interface allows end users to chat with your organization. You can customize your Amazon Q Business web experience in two ways: Using the Amazon Q Business console and Using the Amazon Q Business API.

Guardrails is a feature of Amazon Q Business that allows you to define global controls and topic-level controls for your application environment. This feature provides control over source that what sources your application environment will use to generate responses from, and also controls what topics it will respond to and how.

Plugins is one of the feature provided by Amazon Q Business that helps you to interact with third-party services such as Jira and Salesforce. The plugins feature in Amazon Q Business allows you to perform specific actions related to a service directly from the web chat experience.

Amazon Q Business allows end users to create their own lightweight, purpose-built Q Apps. It allows the creation of apps as per the user's need and fulfills specific tasks from within their web experience.

Amazon Q Business has quick prompts feature that helps end users to work easily with web experience chat features. This feature allows you to give hints or suggestions to users on how to use the chat in a specific way.

Document attribute of Amazon Q Business is simply details about a document, like its title, type, and when it was created. Amazon Q Business uses those data while processing document. It allows you to customize how the document is used in your application, including chat and data manipulation. You can use pre-defined attributes or create your own custom ones.

Filtering using document attribute is one of the feature provided by Amazon Q Business. It lets you filter chat responses for your end users using document attributes. For example, if you have an attribute that identifies a data source type, you can use it to ensure that chat responses only come from a specific data source.

In Amazon Q Business, you can use document attributes to boost and tune the relevance of chat responses for your end users. This is done by mapping document attributes to fields in your Amazon Q Business index. For example, if you have a document attribute associated document creation or updating date, you use these attributes to boost chat responses from more recently created or updated documents.

Document enrichment is a feature in Amazon Q Business that allows you to modify your document content and attributes. It can be used to perform tasks such as optical character recognition (OCR) and translation, using basic and Lambda functions.

In Amazon Q Business index has fields that helps to organize data, making it easier to find what you need. You can connect these fields to your document attributes when adding documents to an index, or use a data source connector.

User Store is a feature in Amazon Q Business that simplifies user and group management across all data sources connected to your application environment.

To use Amazon Q Business native retriever for your application you must provision data storage capacity for your index.  Amazon Q Business provides two types of index: Enterprise and Starter. Both index types include 20,000 documents or 200 MB of total extracted text and 100 hours of data connector usage by default

Organize your Amazon Q Business apps and data sources by adding tags or labels. These tags help categorize resources in different ways, such as by purpose, owner, or environment. A tag consists of a key and value, which you define.

A hallucination in AI is when an application gives a confident but incorrect answer that isn't supported by its training data. This happens when the response doesn't make sense or goes beyond the provided information. Amazon Q Business helps prevent this by allowing the system to only respond with information from your existing enterprise data.
