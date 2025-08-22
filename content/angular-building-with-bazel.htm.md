+++
title = "Angular - Building with Bazel"
date = "2025-08-22"
draft = false
description = "Bazel is an open-source build and test tool developed by Google. You can use it to automate the building and testing of software. The reason to develop Bazel was to create a free and open-source build system that provides both speed and correctness. It uses a human-readable, high-level build languag"
image = "/images/php.jpg"
imageBig = "/images/php.jpg"
categories = ["Tutorial"]
authors = ["Cude Admin"]
avatar = "/images/avatar.webp"
+++

# Angular - Building with Bazel

URL: https://www.tutorialspoint.com/angular/angular-building-with-bazel.htm

Bazelis an open-source build and test tool developed by Google. You can use it to automate the building and testing of software. The reason to develop Bazel was to create a free and open-source build system that provides both speed and correctness. It uses a human-readable, high-level build language.

Angular is a front-end framework that can handle a large scale application, but as the size of your application grows, the build process can slow down significantly. To tackle this, Bazel can be used. Integrating it with Angular can provide several benefits that we are going to explore in this tutorial.

When Bazel is used, it works in the following steps −

Some of the features ofBazelare as follows:

Angular supports building the application using bazel. Let us see how to use it to compile and build Angular applications.

First, install@angular/bazelpackage.

The above command will install the@angular/bazelpackage globally. However, note that the Angular team has shifted some of its focus to support Bazel as part of the official Angular CLI tooling. You may also install this package locally in your project if preferred, but the command above should work fine for most setups.

For existing applications, add@angular/bazelas mentioned below:

This command adds the necessary Bazel configuration to your existing Angular application. It sets up theBUILD.bazelfiles and modifies theangular.jsonfile accordingly.

For new application, use below mentioned command:

To build an application using bazel, use below command:

Here,

leaveBazelFilesOnDiskoption will leave the bazel files created during build process, which we can use to build the application directly using bazel.

To build an application using bazel directly, install@bazel/bazeliskand then, usebazeliskbuild command.
