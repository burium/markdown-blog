+++
title = "Angular - Backward Compatibility"
date = "2025-08-22"
draft = false
description = "Angular framework provides maximum compatibility with previous versions. If Angular Team deprecate a feature in a release, it will wait for 3 more release to completely remove the feature. Angular Team release a major version for every six months. Every version will have active maintenance period of"
image = "/images/php.jpg"
imageBig = "/images/php.jpg"
categories = ["Tutorial"]
authors = ["Cude Admin"]
avatar = "/images/avatar.webp"
+++

# Angular - Backward Compatibility

URL: https://www.tutorialspoint.com/angular/angular-backward-compatibility.htm

Angular framework provides maximum compatibility with previous versions. If Angular Team deprecate a feature in a release, it will wait for 3 more release to completely remove the feature. Angular Team release a major version for every six months. Every version will have active maintenance period of six months and then Long Term Support (LTS) period for another one year. Angular does not introduce breaking changes during these 18 months. If Angular version deprecate a feature in version 5, then it will probably remove it in version 8 or in next releases.

Angular maintains documentation and guides of all version. For example, Angular documentation for version 7 can be checked @ https://v7.angular.io. Angular also provides a detailed upgrade path through https://update.angular.io/ site.

To update Angular application written from previous version, use below command inside the project directory:

Let us see some of the important changes introduced in Angular.

HttpModulemodule and its associatedHttpservice is removed. UseHttpClientservice fromHttpClientModulemodule.

/deep/, >>>and:ng-deepcomponent selectors are removed.

Angular default version of TypeScript is 3.4.

Node version supported by Angular is v10 and later.

@ViewChild()andContentChild()decorator behaviour is changed from dynamic to static.

Lazy loading string syntax in router module is removed and only function based is supported.
