+++
title = "Angular - Binding & it's Types"
date = "2025-08-22"
draft = false
description = "Binding is the process of connecting a target in the template to a template expression or template statement created from model of the component to which the template belongs. When the model of the component changes, then output of the template expression changes and it updates the template output ("
image = "/images/php.jpg"
imageBig = "/images/php.jpg"
categories = ["Tutorial"]
authors = ["Cude Admin"]
avatar = "/images/avatar.webp"
+++

# Angular - Binding & it's Types

URL: https://www.tutorialspoint.com/angular/angular-binding-its-types.htm

Binding is the process of connecting a target in the template to a template expression or template statement created from model of the component to which the template belongs. When the model of the component changes, then output of the template expression changes and it updates the template output (view) as well.

Text interpolation is the simplest form of binding and angular provides many types of binding for different scenarios. The type of binding are as follows −

Text interpolation is the process of connecting model of a components instance to the text portion of components template.

Let us consider a property, name available in the component.

Then, the name can be used in the template using text interpolation as shown below −

The final output of the template is shown below −

Let us learn text interpolation in details in the upcoming chapter.

Attribute binding is the process of connecting model of a components instance to the attribute of a (target) HTML element in the components template

Let us consider a property, name available in the component.

Attribute binding can be written as shown below −

The output of the template is shown below −

Let us learn attribute in details in the upcomming chapter.

Style binding is the process of connecting model of a components instance to the style attributes of a (target) HTML element in the components template

Let us consider a property, myStyle available in the component.

Class binding can be written as shown below −

The output of the template is shown below −

Let us learn style binding in details in the upcomming chapter.

Class binding is the process of connecting model of a components instance to the class attributes of a (target) HTML element in the components template

Let us consider a property, myClass available in the component.

Class binding can be written as shown below −

The output of the template is shown below −

Let us learn class binding concept in details in the upcoming chapter.

Property binding is the process of connecting model of a components instance to the property of a (target) HTML element / other component in the components template. Angular exposes the attributes of HTML element as properties with attribute names converted to CamelCase. This will help to connect all attributes of the HTML element through property binding.

Let us consider a property, name available in the component.

Property binding can be written as shown below −

The output of the template is shown below −

Let us learn property binding concept in details in the upcoming chapter.

Event binding is the process of setting an action (template statements / components method) to the event of a (target) HTML element / (another) component.

Let us consider a method, myAction available in the component.

Event binding can be written as shown below −

Once the submit event is fired, myAction() method will be called and executed.

Let us learn event binding concept in details in the upcoming chapter.

Two way data binding is a combination of property and event binding to sync data between parent and child component.

A sample two-way data binding format is as follows −

Here, data will be passed initially from parent to child component and then, whenever the data gets updated in the child component, the child component will fire an event with updated data and the parent will capture the data through event callback method, dataChange().

Let us learn two-way data binding concept in details in the upcoming chapter.

Binding provides multiple options to connect a component to its template. This enables the developer to create rich frontend application easily. Binding reduces the complexity of frontend logic and enable developer to concentrate on developing more feature in a short period of time.
