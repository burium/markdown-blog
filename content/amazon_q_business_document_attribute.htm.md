+++
title = "Amazon Q Business - Document Attributes"
date = "2025-08-22"
draft = false
description = "In this chapter we are going to understand about what document attributes are, how they work in Amazon Q Business, and what they can help you do for your chat solution. This chapter also lists the document types supported by Amazon Q Business."
image = "/images/php.jpg"
imageBig = "/images/php.jpg"
categories = ["Tutorial"]
authors = ["Cude Admin"]
avatar = "/images/avatar.webp"
+++

# Amazon Q Business - Document Attributes

URL: https://www.tutorialspoint.com/amazon-q/amazon_q_business_document_attribute.htm

In this chapter we are going to understand about what document attributes are, how they work in Amazon Q Business, and what they can help you do for your chat solution. This chapter also lists the document types supported by Amazon Q Business.

Every document has information about itself attached to it, like the title, author, creation date, last update, and type of document.

Amazon Q Business index allows you to connect document attributes to fields. These fields help admins to improve search results from specific sources. End users can also filter and narrow down their search results by using these fields.

Amazon Q Business supports two types of document attributes.

Amazon Q Business hasReserved or default document attributesto create mappings for common document attributes to help you index documents efficiently.

Amazon Q Business offers the following reserved document attributes or index fields that you can map your metadata to:

Custom attributes are used to link unique information in your documents to index fields.

You can create custom attributes based on your own data, and map them to custom index fields to create a more tailored chat experience for end users.

For example, you can create a custom field or attribute called "Department" with the values of "HR", "Sales", and "Manufacturing". Then, you can use these fields or attributes to allow your end users to filter their chat results to documents in the "HR" department, or restrict response generation to specific data stores.

When you map a document attribute to an index field, you can decide how that field will be used during chat. For now, you can configure index fields to do the following:

Document attributesreserved or customcan only be the data types that are shown in the following table. Additionally, document attributes can be used to perform the operations outlined.

Mapping document attributes directly to index fields. Before using the API for filtering in chat, map your document attributes to index fields

After you Map document attributes to index fields using the API. Then, choose which attributes to use for filtering chat responses. UseUpdateIndexAPI to add custom fields.

The following JSON example uses documentAttributeConfigurations to add a field called "Department" to the index.

Mapping data source document attributes to index fields. If you use an Amazon Q Business data source connector, you can map default document attributes to index fields. These attributes help users filter and narrow chat responses.

Data source connectors automatically find default document attributes. You can map these attributes to index fields. For example, map a 'dept' field to a 'Department' index field. Note: You can't change default attributes once they're mapped.

You can also map any Amazon Q Business reserved fields such as_created_at. If your data source has a field namedcreation_date, you can map this field to the equivalent Amazon Q reserved field named _created_at.

You can add custom document attributes and map them to custom index fields. Most data sources allow field mappings, except Amazon S3 and database data sources. These two have special mapping configurations.  The following outlines how Amazon S3 and database data sources configure mappings:

The following example uses Attributes to define three custom fields or attributes and one reserved field.

When setting up your connector, you can map fields in two ways. On the console, you can choose default field mappings or create custom ones, but note that some default fields can't be edited and will appear grayed out. Alternatively, you can use the API to map fields, where you use the CreateDataSource operation to map default attributes and the UpdateIndex operation to create and map custom fields.

When adding a document to your index using the BatchPutDocument API, you can specify attributes, including both reserved and custom ones. You can add multiple fields or attributes in a single API call, with a limit of up to 50 custom fields.
