+++
title = "Angular - Attribute Binding"
date = "2025-08-22"
draft = false
description = "Attribute binding helps to set the value for the attribute of the HTML element. Angular exposes attributes of the HTML element with a matching property with the attribute name converted into camelCase."
image = "/angular/images/registration-form.jpg"
imageBig = "/angular/images/registration-form.jpg"
categories = ["Tutorial"]
authors = ["Cude Admin"]
avatar = "/images/avatar.webp"
+++

# Angular - Attribute Binding

URL: https://www.tutorialspoint.com/angular/angular-attribute-binding.htm

Attribute binding helps to set the value for the attribute of the HTML element. Angular exposes attributes of the HTML element with a matching property with the attribute name converted into camelCase.

For example, the colspan attribute's corresponding angular property is colSpan. Even though, angular tries to provide all HTML elements attributes as property, it still misses some of the attributes of SVG elements, aria (web accessibility) elements, etc.,

We can use attribute binding where the attributes of a HTML element is not available as property. Also, we can use attribute binding for attributes of all HTML element.

To use attribute binding in your Angular application, use the square brackets around the attribute name. It basically represents the attribute of a HTML element in the template.

The syntax to use attribute binding is as follows −

We can combineattr.string with the actual attribute name of the HTML element to create the angular attribute representation. The value of the attribute is a template variable. While generating the view from the template, angular will set the value of the attribute by processing the template variable.

Let us create a simple registration form to understand attribute binding. Our registration form will have three input field as shown below and a button to submit the registration form.

Step 1:Create a new application,my-appusing angular CLI as shown below −

Step 2:Create a new registration form component,RegisterFormusing angular CLI as shown below −

Step 3:Open the registration form component's template and add user registration form with username, password and confirm password.

Step 4:Open the registration form component's style and style the registration form using CSS as shown below −

Step 5:Include our registration form component in the app template file,app.component.html:

Step 6:Run the application and test the registration form.

Step 7:Next, we will try to set the placeholder text for all input field using attributes binding. Add three member variable in the component to represent the placeholder text for username, password and confirm password input field.

Step 8:Assign the above declared component's member variable to the placeholder attributes of username, password and confirm password input accordingly in the template using [attr.placeholder] attribute as shown below −

Here,

attr.placeholder represents the placeholder attribute of input elements.

Step 9:Let us add ARIA attribute, aria-label to the input field. aria-label is used for accessibility purposes.

Step 10:Next, run the application and check the output.

Step 11:Since, we can set any attribute of the HTML element using attribute binding, let us apply the class, container using attribute binding.

Step 12:Create a new member variable,myContainerClassin the component as shown below −

Step 13:Apply the member variable in the template as shown below −

Step 14:The complete listing of the component is as follows:

Step 15:The complete listing of the component's template is as follows:

Step 16:Next, run the application and check the output.

The table below shows how property binding is different from attribute binding −

Property Binding binds to the properties of DOM elements or directives.

Attribute binding binds to the attributes of an element

It is used to bind properties that can change dynamically, like DOM properties.

It is used when you need to bind to attributes that do not have corresponding properties on the element.

It directly updates the DOM property.

It updates the attribute value, but does not directly affect the DOM property.

Attribute binding enables the developer to set dynamic value for attribute of the any HTML element, even for element, which may be defined in the future.

![Image](/angular/images/registration-form.jpg)
![Image](/angular/images/application-output.jpg)
![Image](/angular/images/register.jpg)
