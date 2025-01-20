+++
title = 'My First Post'
date = 2023-11-22T16:55:24+01:00
draft = false
description = "This is a description"
image = "/images/1s.webp"
imageBig = "/images/1b.webp"
categories = ["general", "travel", "culture"]
authors = ["Lama Dev"]
avatar = "/images/avatar.webp"
+++

Test Content


{{< highlight go "linenos=inline, hl_Lines=3 6-8, style=monokai" >}}
package main

import "fmt"

func main() {
    for i := 0; i < 3; i++ {  // Line 3 (highlighted)
        fmt.Println("Value of i:", i)
    }                           // Line 6-8 (highlighted)
}
{{< /highlight >}}

