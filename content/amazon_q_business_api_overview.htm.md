+++
title = "Amazon Q Business - API Overview"
date = "2025-08-22"
draft = false
description = "The API provides various actions and operations that can be used to interact with Amazon Q Business. The APIs can be effectively used to create applications, manage conversations, and upload documents."
image = "/images/php.jpg"
imageBig = "/images/php.jpg"
categories = ["Tutorial"]
authors = ["Cude Admin"]
avatar = "/images/avatar.webp"
+++

# Amazon Q Business - API Overview

URL: https://www.tutorialspoint.com/amazon-q/amazon_q_business_api_overview.htm

The API provides various actions and operations that can be used to interact with Amazon Q Business. The APIs can be effectively used to create applications, manage conversations, and upload documents.

Amazon Q Business is a chat assistant powered by AI that helps employees work more efficiently. It supports various tasks, such as answering questions, finding information, writing emails, summarizing text, creating document outlines, and generating ideas. By asking questions, users get conversational answers, making their work easier and boosting productivity.

For an overview of the Amazon Q Business APIs, seeOverview of Amazon Q Business API operations.

The Amazon Q Apps is a feature that allows web experience users to build their own generative AI-powered apps. With Amazon Q Apps, users can effortlessly create, share, and customize apps on enterprise data to streamline tasks and boost individual and team productivity.  For example, you can create a tool that only generates content for marketing, which can help your marketing team work more efficiently. Or, you can create a tool that writes customer emails and promotional content in a specific style, tone, and brand voice.

For an overview of the Amazon Q App APIs, seeOverview of Amazon Q Apps API operations.

Amazon Q Business offers a streaming Chat API for delivering chat responses to users in a series of partial results. These responses are transmitted using sequential data packets.

To configure streaming, you can use WebSockets or an AWS SDK. For WebSockets, a secure connection is established to a supported Amazon Q Business endpoint (e.g., wss://qbusiness.us-west-2.api.aws:8443/chat) over port 8443. Ensure that this port is enabled and not blocked by your network configuration.

The following section outlines the steps to set up your WebSocket stream.

First, add the authentication information to the query string.

Second, create the URL for the request.

Use the request URL with your WebSocket library to make the request to Amazon Q Business.

The following is the response from Amazon Q Business. Line breaks have been added for readability.

When an error happens while processing your request, Amazon Q Business sends a special response back to you. This response contains the headers described in the following table; the body of the response contains a descriptive error message.

Amazon Q Business uses a format called event stream encoding for streaming chat.

Event stream encoding allows two-way communication between a client and a server. When you send a message to Amazon Q Business, it's encoded in a special format. The response you get back from Amazon Q Business is also in this same format.

Each streaming request contains one or more data frames. There are two steps to creating a data frame:
